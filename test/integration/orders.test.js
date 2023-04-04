import { expect } from 'chai';
import Patch from '../../dist/index';
const patch = Patch(process.env.SANDBOX_API_KEY);
const biomass_test_project_id = 'pro_test_c3a9feba769fc7a8806377266ca9ff6a';

describe('Orders Integration', function () {
  it('supports create, place, cancel, retrieve and list', async function () {
    const createOrderResponse = await patch.orders.createOrder({
      amount: 100,
      unit: 'g'
    });
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
      total_price: 100,
      currency: 'USD',
      project_id: biomass_test_project_id
    });

    expect(data.price + data.patch_fee).to.eq(100);
  });

  it('supports creating an order with issued_to', async function () {
    const issuedTo = { email: 'issuee@companyc.com', name: 'Bob Dylan' };
    const { data } = await patch.orders.createOrder({
      total_price: 100,
      currency: 'USD',
      issued_to: issuedTo
    });

    expect(data.price + data.patch_fee).to.eq(100);
    expect(data.issued_to.email).to.equal(issuedTo.email);
    expect(data.issued_to.name).to.equal(issuedTo.name);
  });

  it('supports placing orders in a `draft` state', async function () {
    const estimateResponse = await patch.orders.createOrder({
      amount: 100,
      unit: 'g',
      state: 'draft'
    });

    const orderId = estimateResponse.data.id;
    expect(estimateResponse.data.state).to.equal('draft');

    const placeOrderResponse = await patch.orders.placeOrder(orderId);
    expect(placeOrderResponse.data.created_at).to.be.an.instanceOf(Date);
    expect(placeOrderResponse.data.production).to.equal(false);
    expect(placeOrderResponse.data.amount).to.equal(100);
  });

  it('supports placing orders in a `reserved` state with issued_to', async function () {
    const estimateResponse = await patch.estimates.createMassEstimate({
      mass_g: 100,
      create_order: true
    });
    const orderId = estimateResponse.data.order.id;
    expect(estimateResponse.data.order.state).to.equal('reserved');

    const issuedTo = { email: 'issuee@companyc.com', name: 'Bob Dylan' };

    const placeOrderResponse = await patch.orders.placeOrder(orderId, {
      issued_to: issuedTo
    });
    expect(placeOrderResponse.data.created_at).to.be.an.instanceOf(Date);
    expect(placeOrderResponse.data.production).to.equal(false);
    expect(placeOrderResponse.data.amount).to.equal(100);
    expect(placeOrderResponse.data.issued_to.email).to.equal(issuedTo.email);
    expect(placeOrderResponse.data.issued_to.name).to.equal(issuedTo.name);
  });

  it('supports placing orders in a `reserved` state using an estimate', async function () {
    const estimateResponse = await patch.estimates.createMassEstimate({
      mass_g: 100,
      create_order: true
    });
    const orderId = estimateResponse.data.order.id;
    expect(estimateResponse.data.order.state).to.equal('reserved');

    const placeOrderResponse = await patch.orders.placeOrder(orderId);
    expect(placeOrderResponse.data.created_at).to.be.an.instanceOf(Date);
    expect(placeOrderResponse.data.production).to.equal(false);
    expect(placeOrderResponse.data.amount).to.equal(100);
  });

  it('supports cancelling orders in a `reserved` state', async function () {
    const estimateResponse = await patch.estimates.createMassEstimate({
      mass_g: 100,
      create_order: true
    });
    const orderId = estimateResponse.data.order.id;
    expect(estimateResponse.data.order.state).to.equal('reserved');

    const placeOrderResponse = await patch.orders.cancelOrder(orderId);
    expect(placeOrderResponse.data.state).to.equal('cancelled');
  });

  it('supports creating and querying orders by metadata', async function () {
    const createOrderResponse = await patch.orders.createOrder({
      amount: 100,
      unit: 'g',
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
      amount: 100,
      unit: 'g',
      vintage_year: 2022
    });

    expect(createOrderResponse.success).to.equal(true);
  });

  it('supports create orders with vintage start year and vintage end year', async function () {
    const createOrderResponse = await patch.orders.createOrder({
      amount: 100,
      unit: 'g',
      vintage_start_year: 2023,
      vintage_end_year: 2025
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
    expect(createOrderResponse.data.line_items[0].unit).to.equal('g');
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

  it('supports creating an empty draft order and adding/editing line items', async function () {
    const createOrderResponse = await patch.orders.createOrder({
      state: 'draft'
    });

    expect(createOrderResponse.success).to.equal(true);
    expect(createOrderResponse.data.price).to.equal(0);
    expect(createOrderResponse.data.amount).to.equal(0);
    expect(createOrderResponse.data.line_items.length).to.equal(0);

    // Add project to order
    const orderId = createOrderResponse.data.id;

    const createLineItemResponse =
      await patch.orderlineitems.createOrderLineItem(orderId, {
        project_id: biomass_test_project_id
      });

    expect(createLineItemResponse.success).to.equal(true);
    expect(createLineItemResponse.data.amount).to.equal(0);

    // Update amount on line item
    let lineItemId = createLineItemResponse.data.id;
    const updateOrderLineItemResponse =
      await patch.orderlineitems.updateOrderLineItem(orderId, lineItemId, {
        amount: 100000,
        unit: 'g'
      });

    expect(updateOrderLineItemResponse.success).to.equal(true);
    expect(updateOrderLineItemResponse.data.id).to.equal(lineItemId);
    expect(updateOrderLineItemResponse.data.amount).to.equal(100000);
    expect(updateOrderLineItemResponse.data.price).to.be.greaterThan(0);

    // Fetch order and check line item matches
    let retrieveOrderResponse = await patch.orders.retrieveOrder(orderId);
    expect(retrieveOrderResponse.data.id).to.equal(orderId);
    expect(retrieveOrderResponse.data.line_items.length).to.equal(1);
    expect(retrieveOrderResponse.data.line_items[0].id).to.equal(lineItemId);
    expect(retrieveOrderResponse.data.line_items[0].amount).to.equal(100000);

    // Delete line item
    let deleteLineItemResponse = await patch.orderlineitems.deleteOrderLineItem(
      orderId,
      lineItemId
    );
    expect(deleteLineItemResponse.success).to.equal(true);
    expect(deleteLineItemResponse.data).to.equal(lineItemId);

    // Add line item via vintage_start_year and vintage_end_year
    const createOrderLineItemResponse =
      await patch.orderlineitems.createOrderLineItem(orderId, {
        project_id: biomass_test_project_id,
        amount: 200000,
        unit: 'g',
        vintage_start_year: 2023,
        vintage_end_year: 2025
      });

    lineItemId = createOrderLineItemResponse.data.id;
    expect(createOrderLineItemResponse.success).to.equal(true);
    expect(createOrderLineItemResponse.data.id).to.equal(lineItemId);
    expect(createOrderLineItemResponse.data.amount).to.equal(200000);
    expect(createOrderLineItemResponse.data.price).to.be.greaterThan(0);
    expect(createOrderLineItemResponse.data.vintage_start_year).to.equal(2023);
    expect(createOrderLineItemResponse.data.vintage_end_year).to.equal(2025);

    // Fetch order and check line item matches
    retrieveOrderResponse = await patch.orders.retrieveOrder(orderId);
    expect(retrieveOrderResponse.data.id).to.equal(orderId);
    expect(retrieveOrderResponse.data.line_items.length).to.equal(1);
    expect(retrieveOrderResponse.data.line_items[0].id).to.equal(lineItemId);
    expect(retrieveOrderResponse.data.line_items[0].amount).to.equal(200000);
    expect(
      retrieveOrderResponse.data.line_items[0].vintage_start_year
    ).to.equal(2023);
    expect(retrieveOrderResponse.data.line_items[0].vintage_end_year).to.equal(
      2025
    );

    // Delete line item
    deleteLineItemResponse = await patch.orderlineitems.deleteOrderLineItem(
      orderId,
      lineItemId
    );
    expect(deleteLineItemResponse.success).to.equal(true);
    expect(deleteLineItemResponse.data).to.equal(lineItemId);

    // Fetch order and see it has no line items
    retrieveOrderResponse = await patch.orders.retrieveOrder(orderId);
    expect(retrieveOrderResponse.data.id).to.equal(orderId);
    expect(retrieveOrderResponse.data.line_items.length).to.equal(0);

    // Delete order
    const deleteOrderResponse = await patch.orders.deleteOrder(orderId);
    expect(deleteOrderResponse.success).to.equal(true);
    expect(deleteOrderResponse.data).to.equal(orderId);
  });
});
