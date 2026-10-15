const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Tên sản phẩm không được để trống"],
    },
    price: {
      type: Number,
      required: [true, "Giá sản phẩm không được để trống"],
    },
    description: {
      type: String,
    },
    category: {
      type: String,
    },
    stock: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Product", productSchema);
