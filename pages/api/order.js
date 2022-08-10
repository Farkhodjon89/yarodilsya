import WooCommerceResApi from '@woocommerce/woocommerce-rest-api'

const wc = new WooCommerceResApi({
  url: process.env.WP_URL,
  consumerKey: process.env.CONSUMER_KEY,
  consumerSecret: process.env.CONSUMER_SECRET,
  version: 'wc/v3',
})

export default async function order(req, res) {
  if (req.method === 'POST') {
    const { order } = req.body
    let response
    try {
      response = await wc.post('orders', order)
    } catch (e) {
      res.end(JSON.stringify({ status: false, message: e.message }))
      console.log(e)
      return
    }
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ status: true, order: response.data }))
  } else {
    res.setHeader('Allow', ['POST'])
    res.statusCode = 404
    res.end()
  }
}
