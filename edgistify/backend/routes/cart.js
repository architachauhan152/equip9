router.post('/add', auth, async (req, res) => {
    const { productId, quantity } = req.body;
    try {
      let cart = await Cart.findOne({ user: req.user.id });
      if (!cart) {
        cart = new Cart({ user: req.user.id, products: [{ productId, quantity }] });
      } else {
        const productIndex = cart.products.findIndex(p => p.productId === productId);
        if (productIndex !== -1) {
          cart.products[productIndex].quantity += quantity;
        } else {
          cart.products.push({ productId, quantity });
        }
      }
      await cart.save();
      res.json(cart);
    } catch (err) {
      res.status(500).json({ msg: 'Server error' });
    }
  });
  