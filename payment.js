const stripe = require("stripe")(
  "sk_test_51LabasSBAnAyyheh89V5X2XUcvdbHgZGuYzKTuW6Q2QsvAykAnnIHeymcTPmaWzlXJv5MtIdNyENRxqXkNQ8mHcr00a5Oqd4Gk"
);

const payment = async (req, res) => {
  console.log("%%%%%%%%%%%%%vsfged");
  //   const { totalAmount, quantity, slug } = req.body;
  let session;
  try {
    session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "varun",
            },
            unit_amount: parseInt(100, 10) * 100,
          },
          quantity: 2,
        },
      ],
      mode: "payment",
      success_url: `http://localhost:5000/checkout?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `http://localhost:5000/checkout?session_id={CHECKOUT_SESSION_ID}`,
    });
    res.json({ url: session.url });
    return session;
  } catch (err) {
    // res.status(500).json({ statusCode: 500, message: err.message });
  }
};
module.exports = { payment };
