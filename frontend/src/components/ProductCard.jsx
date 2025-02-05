import { FaRegEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { useProductStore } from "../store/product";

function ProductCard({ product, onDeleteProduct, handleUpdateAlert }) {
    const [closePopup, setClosePopup] = useState(true);
    const [updatedProduct, setUpdatedProduct] = useState(product);

    const { updateProduct } = useProductStore();

    const handleUpdateProduct = async () => {
        const { success, message } = await updateProduct(
            product._id,
            updatedProduct
        );

        if (success === true) {
            setClosePopup(true);
            handleUpdateAlert(message);
        }
    };

    return (
        <>
            <div className="product-card bg-gray-700 rounded-xl overflow-hidden transition-transform duration-300 transform hover:-translate-y-2">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-[300px] w-full object-cover object-center"
                />
                <div className="product-details flex flex-col gap-y-1.5 py-3 px-4">
                    <span className="text-xl text-white font-medium">
                        {product.name}
                    </span>
                    <span className="text-xl text-white font-medium">
                        ₹{product.price}
                    </span>
                    <div className="card-btns flex items-center py-2">
                        <button
                            onClick={() => {
                                setClosePopup(false);
                            }}
                            className="edit-btn text-lg bg-green-200 p-2 rounded text-green-950 cursor-pointer"
                        >
                            <FaRegEdit />
                        </button>
                        <button
                            onClick={() => {
                                onDeleteProduct(product._id);
                            }}
                            className="delete-btn text-lg bg-red-300 p-2 rounded text-red-950 ml-3 cursor-pointer"
                        >
                            <FaTrashAlt />
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`${!closePopup ? "flex" : "hidden"} update-popup-wrapper w-screen h-[100dvh] bg-black/60 fixed z-[9999] top-0 left-0 justify-center px-6`}
            >
                <div className="update-popup bg-gray-700 max-w-[450px] h-fit mt-10 mx-auto space-y-5 p-5 rounded-lg relative">
                    <IoClose
                        className="absolute right-2.5 top-2 text-white text-2xl cursor-pointer"
                        onClick={() => {
                            setClosePopup(true);
                        }}
                    />
                    <h4 className="text-2xl text-white mb-6">Update Product</h4>
                    <input
                        className="border-1 border-gray-500 py-2 pl-3 outline-0 text-gray-200 w-full rounded "
                        type="text"
                        placeholder="Product Name"
                        value={updatedProduct.name}
                        onChange={(e) =>
                            setUpdatedProduct({
                                ...updatedProduct,
                                name: e.target.value,
                            })
                        }
                    />
                    <input
                        className="border-1 border-gray-500 py-2 pl-3 pr-2 outline-0 text-gray-200 w-full rounded"
                        type="number"
                        placeholder="Price"
                        value={updatedProduct.price}
                        onChange={(e) =>
                            setUpdatedProduct({
                                ...updatedProduct,
                                price: e.target.value,
                            })
                        }
                    />
                    <input
                        className="border-1 border-gray-500 py-2 pl-3 outline-0 text-gray-200 w-full rounded"
                        type="text"
                        placeholder="Image URL"
                        value={updatedProduct.image}
                        onChange={(e) =>
                            setUpdatedProduct({
                                ...updatedProduct,
                                image: e.target.value,
                            })
                        }
                    />
                    <div className="update-btns mt-3 flex justify-end">
                        <button
                            onClick={handleUpdateProduct}
                            className="bg-sky-200 text-sky-950 py-2 px-5 rounded-lg cursor-pointer"
                        >
                            Update
                        </button>
                        <button
                            className="bg-gray-600 text-white py-2 px-5 rounded-lg ml-3 cursor-pointer"
                            onClick={() => {
                                setClosePopup(true);
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductCard;
