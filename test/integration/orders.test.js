import { expect } from 'chai';
import Patch from '../../dist/index';
const patch = Patch(process.env.SANDBOX_API_KEY);

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
      total_price_cents_usd: 1000
    });
    expect(createOrderResponse.data.price_cents_usd).to.equal('6.66');
    expect(createOrderResponse.data.patch_fee_cents_usd).to.equal('3.33');
  });

  it('supports placing orders in a `draft` state', async function () {
    const estimateResponse = await patch.estimates.createMassEstimate({
      mass_g: 100
    });
    const orderId = estimateResponse.data.order.id;
    expect(estimateResponse.data.order.state).to.equal('draft');

    const placeOrderResponse = await patch.orders.placeOrder(orderId);
    expect(placeOrderResponse.data.state).to.equal('placed');
    expect(placeOrderResponse.data.price_cents_usd).to.equal('1.0');
    expect(placeOrderResponse.data.patch_fee_cents_usd).to.equal('0.0');
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
