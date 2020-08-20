import { expect } from 'chai'
import Patch from '../../dist/index'
const patch = Patch(process.env.SANDBOX_API_KEY)

describe('Orders Integration', function () {
  it('supports create, place, cancel, retrieve and list', async function () {
    const createOrderResponse = await patch.orders.createOrder({ mass_g: 100 })
    const orderId = createOrderResponse.data.id

    const retrieveOrderResponse = await patch.orders.retrieveOrder(orderId)
    expect(retrieveOrderResponse.data.id).to.equal(orderId)

    const retrieveOrdersResponse = await patch.orders.retrieveOrders({
      page: 1
    })
    expect(retrieveOrdersResponse.data.length).to.be.above(0)
  })

  it('supports create with a specific project', async function () {
    const { data } = await patch.projects.retrieveProjects()
    const projectId = data[0].id

    const createOrderResponse = await patch.orders.createOrder({
      mass_g: 100,
      project_id: projectId
    })

    expect(createOrderResponse.success).to.equal(true)
    expect(createOrderResponse.data.id).not.to.be.empty
  })

  it('supports create with metadata', async function () {
    const metadata = { user: 'john doe' }

    const createOrderResponse = await patch.orders.createOrder({
      mass_g: 100,
      metadata: metadata
    })

    expect(createOrderResponse.success).to.equal(true)
    expect(createOrderResponse.data.id).not.to.be.empty
    expect(createOrderResponse.data.metadata).to.eq({ user: 'john doe' })
  })

  it('supports placing orders in a `draft` state', async function () {
    const estimateResponse = await patch.estimates.createMassEstimate({
      mass_g: 100
    })
    const orderId = estimateResponse.data.order.id
    expect(estimateResponse.data.order.state).to.equal('draft')

    const placeOrderResponse = await patch.orders.placeOrder(orderId)
    expect(placeOrderResponse.data.state).to.equal('placed')
  })

  it('supports cancelling orders in a `draft` state', async function () {
    const estimateResponse = await patch.estimates.createMassEstimate({
      mass_g: 100
    })
    const orderId = estimateResponse.data.order.id
    expect(estimateResponse.data.order.state).to.equal('draft')

    const placeOrderResponse = await patch.orders.cancelOrder(orderId)
    expect(placeOrderResponse.data.state).to.equal('cancelled')
  })
})
