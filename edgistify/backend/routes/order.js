router.post('/place', auth, async (req, res) => {
    const { products, shippingAddress, totalPrice } = req.body;
    try {
      const order = new Order({ user: req.user.id, products, shippingAddress, totalPrice });
      await order.save();
      await Cart.findOneAndDelete({ user: req.user.id });
      res.json(order);
    } catch (err) {
      res.status(500).json({ msg: 'Server error' });
    }
  });
  