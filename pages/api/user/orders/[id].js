import withSession from '/utility/session'
import {client} from "/apollo-client";
import { formatOrder } from "/utility";
import { CUSTOMER_ORDER } from "/GRAPHQL/customer";
import { checkSession } from "/utility/checkSession";

export default withSession(async (req, res) => {
  const userData = await checkSession(req.session.get("user"), req);
  const { orderId } = req.body;

  if (!userData.isLoggedIn) {
    res.json({ status: false });

    return;
  }

  const response = await client.query({
    query: CUSTOMER_ORDER,
    fetchPolicy: "no-cache",
    variables: {
      orderId
    }
  });

  res.json({
    status: true,
    order: formatOrder(response.data.order)
  });
})
