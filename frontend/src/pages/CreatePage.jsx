import { useState } from "react";
import { useProductStore } from "../store/product";
import Alert from "../components/Alert";

function CreatePage() {

    const [ alertMessage, setAlertMessage ] = useState("")
    const [ showAlert, setShowAlert ] = useState(false);


    const [ newProduct ,setNewProduct ] = useState({
        name: "",
        price: "",
        image: "",
    });

    const { createProduct } = useProductStore();

    const handleCreateProduct = async () => {
        const { success, message } = await createProduct(newProduct)

        if(success === true){
            setShowAlert(true)
            setTimeout(() => {
                setShowAlert(false)
            }, 3000);
            setAlertMessage(message)
            setNewProduct({name:"",price:"",image:""})
        }
    }


    return (
        <div className="create-page mt-10 px-2">
            <div className="container">
                <Alert toDisplayAlert={showAlert} message={alertMessage}/>
                <h2 className=" text-3xl sm:text-4xl lg:text-5xl text-white font-medium text-center mt-4">
                    Create New Product
                </h2>
                <div className="create-form max-w-[700px] mx-auto mt-15 rounded bg-gray-800 p-5 space-y-5">
                    <input
                        className="border-1 border-gray-500 py-2 pl-3 outline-0 text-gray-200 w-full rounded "
                        type="text"
                        placeholder="Product Name"
                        value={newProduct.name}
                        onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                    />
                    <input
                        className="border-1 border-gray-500 py-2 pl-3 pr-2 outline-0 text-gray-200 w-full rounded"
                        type="number"
                        placeholder="Price"
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                    />
                    <input
                        className="border-1 border-gray-500 py-2 pl-3 outline-0 text-gray-200 w-full rounded"
                        type="text"
                        placeholder="Image URL"
                        value={newProduct.image}
                        onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                    />
                    <button
                        className="bg-sky-200 hover:bg-sky-300 transition-hover duration-200 py-2 pl-3 w-full rounded cursor-pointer"
                        onClick={handleCreateProduct}
                    >
                        Add Product
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreatePage;
