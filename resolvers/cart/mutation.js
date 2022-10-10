const AddToCarts = require("../../models/AddToCartModel");

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

    // let cartData = await AddToCarts.findById(cart_id);
    // let cart1 = cartData.cart.map(async (pro) => {
    //   console.log("pororororr", pro._id);
    //   console.log("cartData", cartData.cart);
    //   await AddToCarts.findByIdAndUpdate(
    //     cartData.cart,
    //     {
    //       $push: { product: product_id, quantity: quantity },
    //     },
    //     {
    //       new: true,
    //     }
    //   ).then((data) => {
    //     console.log("************", data);
    //   });
    // });
    // { $push: { [`cart`]: { product: product_id, quantity: quantity } } },
    // { new: true }

    // console.log("cartDatacartData", cartData);
    // .populate({ path: "cart.product" })
    // .then((data) => {
    //   console.log("return data@@@@@@@", data);
    // });

    // return "Product is removed from Cart";
  },
};

module.exports = cartMutations;
