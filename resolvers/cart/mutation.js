const AddToCarts = require("../../models/AddToCartModel");
const Product = require("../../models/ProductModel");

const stripe = require("stripe")(
  "sk_test_51LabasSBAnAyyheh89V5X2XUcvdbHgZGuYzKTuW6Q2QsvAykAnnIHeymcTPmaWzlXJv5MtIdNyENRxqXkNQ8mHcr00a5Oqd4Gk"
);

const cartMutations = {
  addToCart: async (parent, args, context, info) => {
    var cartProducts = [];
    const { user_id, cart } = args.cart;

    await AddToCarts.find({ user_id: user_id }).then(async (data) => {
      if (data.length > 0) {
        for (let i = 0; i < cart.length; i++) {
          cartProducts.push({
            product: cart[i].product,
            quantity: cart[i].quantity,
          });
        }
        var cartdata = {
          cart: cartProducts,
        };
        const cartprod = await AddToCarts.findByIdAndUpdate(
          data[0]._id,
          {
            $push: { cart: cartProducts },
          },
          {
            new: true,
          }
        );
        return cartprod;
      } else {
        for (let i = 0; i < cart.length; i++) {
          cartProducts.push({
            product: cart[i].product,
            quantity: cart[i].quantity,
          });
        }
        var cartdata = {
          user_id: user_id,
          cart: cartProducts,
        };

        try {
          const cart = new AddToCarts(cartdata);
          await cart.save();
          return "Product added in cart";
        } catch (error) {
          console.log("error", error);
        }
      }
    });
  },
  deleteCartItem: async (parent, args, context, info) => {
    const { cart_id, product_id } = args;
    AddToCarts.findByIdAndUpdate(
      cart_id,
      { $pull: { [`cart`]: { product: product_id } } },
      { new: true }
    )
      .populate({ path: "cart.product" })
      .then((data) => {
        return data;
      });

    return "Product is removed from Cart";
  },
  updateCartItem: async (parent, args, context, info) => {
    const { cart_id, product_id } = args;
    const { quantity } = args.cart;

    console.log("@@@@@", cart_id, "$$$$$$$", product_id, "carttt", quantity);
  },

  createCheckoutSession: async (parent, args, context, info) => {
    const { cartId } = args.input;

    let session;
    var cartItems = await AddToCarts.findById(cartId);
    var product = cartItems.cart;
    let productId = [];
    var item = [];
    for (let i = 0; i < product.length; i++) {
      productId.push({
        id: product[i].product,
        quantity: product[i].quantity,
      });
    }
    for (let i = 0; i < productId.length; i++) {
      var proId = await Product.findOne({ _id: { $in: [productId[i].id] } });
      item.push({
        price_data: {
          currency: "usd",
          product_data: {
            name: proId.name,
          },
          unit_amount: proId.price * 100,
        },
        quantity: productId[i].quantity,
      });
    }

    try {
      session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: item,
        mode: "payment",
        success_url: `http://localhost:3000/checkout3?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `http://localhost:3000/cancel`,
      });
    } catch (err) {
      console.log("error", err);
    }
    return session.url;
  },

  retrieveCheckoutSession: async (parent, args, context, info) => {
    const { sessionId } = args.input;

    let paymentIntent;
    try {
      paymentIntent = await stripe.checkout.sessions
        .retrieve(sessionId)
        .then((data) => {
          console.log("$$$$$$$$$$$", data);
          return data;
        });
    } catch (err) {
      console.log("error", err.message);
    }
    return paymentIntent;
  },
};

module.exports = cartMutations;
