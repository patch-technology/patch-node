import { expect } from 'chai';
import Patch from '../../dist/index';
const patch = Patch(process.env.SANDBOX_API_KEY);
const biomass_test_project_id = 'pro_test_c3a9feba769fc7a8806377266ca9ff6a';

describe('Orders Integration', function () {
  it('supports create, place, cancel, retrieve and list', async function () {
    const createOrderResponse = await patch.orders.createOrder({ mass_g: 100 });
    const orderId = createOrderResponse.data.id;

    const retrieveOrderResponse = await patch.orders.retrieveOrder(orderId);
    expect(retrieveOrderResponse.data.id).to.equal(orderId);

    const retrieveOrdersResponse = await patch.orders.retrieveOrders({
      page: 1
    });
    expect(retrieveOrdersResponse.data.length).to.be.above(0);
  });

  it('supports creating an order with a project_id', async function () {
    const { data } = await patch.orders.createOrder({
      total_price_cents_usd: 100,
      project_id: biomass_test_project_id
    });

    expect(data.price_cents_usd + data.patch_fee_cents_usd).to.eq(100);
  });

  it('supports creating an order with issuedTo', async function () {
    const issuedTo = { email: 'issuee@companyc.com', name: 'Bob Dylan' };
    const { data } = await patch.orders.createOrder({
      total_price_cents_usd: 100,
      issued_to: issuedTo
    });

    expect(data.price_cents_usd + data.patch_fee_cents_usd).to.eq(100);
    expect(data.issued_to.email).to.equal(issuedTo.email);
    expect(data.issued_to.name).to.equal(issuedTo.name);
  });

  it('supports placing orders in a `draft` state', async function () {
    const estimateResponse = await patch.orders.createOrder({
      mass_g: 100,
      state: 'draft'
    });

    const orderId = estimateResponse.data.id;
    expect(estimateResponse.data.state).to.equal('draft');

    const placeOrderResponse = await patch.orders.placeOrder(orderId);
    expect(placeOrderResponse.data.created_at).to.be.an.instanceOf(Date);
    expect(placeOrderResponse.data.production).to.equal(false);
    expect(placeOrderResponse.data.mass_g).to.equal(100);
  });

  it('supports placing orders in a `draft` state with issuedTo', async function () {
    const estimateResponse = await patch.estimates.createMassEstimate({
      mass_g: 100,
      create_order: true
    });
    const orderId = estimateResponse.data.order.id;
    expect(estimateResponse.data.order.state).to.equal('draft');

    const issuedTo = { email: 'issuee@companyc.com', name: 'Bob Dylan' };

    const placeOrderResponse = await patch.orders.placeOrder(orderId, {
      issued_to: issuedTo
    });
    expect(placeOrderResponse.data.created_at).to.be.an.instanceOf(Date);
    expect(placeOrderResponse.data.production).to.equal(false);
    expect(placeOrderResponse.data.mass_g).to.equal(100);
    expect(placeOrderResponse.data.issued_to.email).to.equal(issuedTo.email);
    expect(placeOrderResponse.data.issued_to.name).to.equal(issuedTo.name);
  });

  it('supports placing orders in a `draft` state using an estimate', async function () {
    const estimateResponse = await patch.estimates.createMassEstimate({
      mass_g: 100,
      create_order: true
    });
    const orderId = estimateResponse.data.order.id;
    expect(estimateResponse.data.order.state).to.equal('draft');

    const placeOrderResponse = await patch.orders.placeOrder(orderId);
    expect(placeOrderResponse.data.created_at).to.be.an.instanceOf(Date);
    expect(placeOrderResponse.data.production).to.equal(false);
    expect(placeOrderResponse.data.mass_g).to.equal(100);
  });

  it('supports cancelling orders in a `draft` state', async function () {
    const estimateResponse = await patch.estimates.createMassEstimate({
      mass_g: 100,
      create_order: true
    });
    const orderId = estimateResponse.data.order.id;
    expect(estimateResponse.data.order.state).to.equal('draft');

    const placeOrderResponse = await patch.orders.cancelOrder(orderId);
    expect(placeOrderResponse.data.state).to.equal('cancelled');
  });

  it('supports creating and querying orders by metadata', async function () {
    const createOrderResponse = await patch.orders.createOrder({
      mass_g: 100,
      metadata: { external_id: 'order-123' }
    });

    const retrieveOrdersResponse = await patch.orders.retrieveOrders({
      page: 1,
      metadata: { external_id: 'order-' }
    });
    expect(retrieveOrdersResponse.data.length).to.be.above(0);

    retrieveOrdersResponse.data.forEach((order) => {
      expect(order.metadata).to.have.all.keys('external_id');
    });
  });

  it('supports create orders with a vintage year', async function () {
    const createOrderResponse = await patch.orders.createOrder({
      mass_g: 100,
      vintage_year: 2022
    });

    expect(createOrderResponse.success).to.equal(true);
  });

  it('supports create orders with an amount and unit', async function () {
    const createOrderResponse = await patch.orders.createOrder({
      amount: 100,
      unit: 'g'
    });

    expect(createOrderResponse.success).to.equal(true);
    expect(createOrderResponse.data.amount).to.equal(100);
    expect(createOrderResponse.data.unit).to.equal('g');
    expect(createOrderResponse.data.inventory[0].unit).to.equal('g');
  });

  it('supports create orders with a total price and currency', async function () {
    const createOrderResponse = await patch.orders.createOrder({
      total_price: 100,
      currency: 'EUR'
    });

    expect(createOrderResponse.success).to.equal(true);
    expect(
      createOrderResponse.data.price + createOrderResponse.data.patch_fee
    ).to.be.within(99, 101);
    expect(createOrderResponse.data.currency).to.equal('EUR');
  });
});
