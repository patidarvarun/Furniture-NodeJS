const Wallet = require("../../models/WalletModel");
var mongoose = require("mongoose");

const stripe = require("stripe")(
  "sk_test_51LabasSBAnAyyheh89V5X2XUcvdbHgZGuYzKTuW6Q2QsvAykAnnIHeymcTPmaWzlXJv5MtIdNyENRxqXkNQ8mHcr00a5Oqd4Gk"
);

const walletMutations = {
  addMoneyToWallet: async (parent, args, context, info) => {
    const { amount, cardNumber, exp_month, exp_year, cvv } = args.addMoney;
    let paymentIntent;
    let paymentMethod;
    console.log(
      "^^^^^^^^^^6666666",
      amount,
      cardNumber,
      exp_month,
      exp_year,
      cvv
    );
    // var cartItems = await AddToCarts.findById(cartId);
    // var product = cartItems.cart;
    // let productId = [];
    // var item = [];
    // for (let i = 0; i < product.length; i++) {
    //   productId.push({
    //     id: product[i].product,
    //     quantity: product[i].quantity,
    //   });
    // }
    // for (let i = 0; i < productId.length; i++) {
    //   var proId = await Product.findOne({ _id: { $in: [productId[i].id] } });
    //   item.push({
    //     price_data: {
    //       currency: "usd",
    //       product_data: {
    //         name: proId.name,
    //       },
    //       unit_amount: proId.price * 100,
    //     },
    //     quantity: productId[i].quantity,
    //   });
    // }

    try {
      paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: "usd",
        payment_method_types: ["card"],
      });
    } catch (err) {
      console.log("error", err);
    }
    paymentMethod = await stripe.paymentIntents.update(paymentIntent.id, {
      //   metadata: { order_id: "6735" },
      charges: {
        object: "list",
        data: [
          {
            billing_details: {
              address: {
                city: null,
                country: null,
                line1: null,
                line2: null,
                postal_code: null,
                state: null,
              },
              email: null,
              name: null,
              phone: null,
            },
            payment_method_details: {
              card: {
                brand: "",
                checks: {
                  address_line1_check: null,
                  address_postal_code_check: null,
                  cvc_check: null,
                },
                country: "US",
                exp_month: exp_month,
                exp_year: exp_year,
                fingerprint: "",
                funding: "",
                installments: null,
                last4: cardNumber,
                mandate: null,
                moto: null,
                network: "",
                three_d_secure: null,
                wallet: null,
              },
              type: "card",
            },
          },
        ],
      },
    });

    console.log("@@@@@@@@@@@@@", paymentMethod);
    // return paymentIntent.client_secret;
  },

  //   retrieveCheckoutSession: async (parent, args, context, info) => {
  //     const { sessionId } = args.input;

  //     let paymentIntent;
  //     try {
  //       paymentIntent = await stripe.checkout.sessions
  //         .retrieve(sessionId)
  //         .then((data) => {
  //           console.log("$$$$$$$$$$$", data);
  //           return data;
  //         });
  //     } catch (err) {
  //       console.log("error", err.message);
  //     }
  //     return paymentIntent;
  //   },
};

module.exports = walletMutations;
