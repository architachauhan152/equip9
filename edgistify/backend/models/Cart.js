const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [
    {
      productId: { type: String, required: true },
      quantity: { type: Number, required: true, default: 1 }
    }
  ]
});

module.exports = mongoose.model('Cart', CartSchema);
