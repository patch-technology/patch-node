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

  it('supports create orders with a total price', async function () {
    const createOrderResponse = await patch.orders.createOrder({
      total_price_cents_usd: 500,
      project_id: biomass_test_project_id
    });

    expect(parseFloat(createOrderResponse.data.price_cents_usd)).to.be.closeTo(
      455,
      1
    );
    expect(createOrderResponse.data.patch_fee_cents_usd).to.equal('45.0');
    expect(createOrderResponse.data.mass_g).to.equal(455000);
  });

  it('supports placing orders in a `draft` state', async function () {
    const estimateResponse = await patch.estimates.createMassEstimate({
      mass_g: 100
    });
    const orderId = estimateResponse.data.order.id;
    expect(estimateResponse.data.order.state).to.equal('draft');

    const placeOrderResponse = await patch.orders.placeOrder(orderId);
    expect(placeOrderResponse.data.state).to.equal('placed');
    expect(placeOrderResponse.data.production).to.equal(false);
    expect(placeOrderResponse.data.mass_g).to.equal(100);
  });

  it('supports cancelling orders in a `draft` state', async function () {
    const estimateResponse = await patch.estimates.createMassEstimate({
      mass_g: 100
    });
    const orderId = estimateResponse.data.order.id;
    expect(estimateResponse.data.order.state).to.equal('draft');

    const placeOrderResponse = await patch.orders.cancelOrder(orderId);
    expect(placeOrderResponse.data.state).to.equal('cancelled');
  });
});
