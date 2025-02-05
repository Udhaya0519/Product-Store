import mongoose from "mongoose";

    
const productSchema = new mongoose.Schema( //without new also it works i used for readability and indicating new instance of schema
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema); //here mongoose automatically converts Product into products //here creating model
//is creating collection

export default Product;
