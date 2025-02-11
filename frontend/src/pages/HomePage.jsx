import { useEffect, useState } from "react";
import { TbMoodCry } from "react-icons/tb";
import { Link } from "react-router-dom";

import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";
import Alert from "../components/Alert";


function HomePage() {
   const { fetchProducts, products, deleteProduct, isLoading } = useProductStore();

   useEffect(() => {
      fetchProducts();
   }, [fetchProducts]);

   const [alertMessage, setAlertMessage] = useState("");
   const [showAlert, setShowAlert] = useState(false);

   const handleDeleteBtn = async (pid) => {
      const { success, message } = await deleteProduct(pid);

      if (success === true) {
         setShowAlert(true);
         setAlertMessage(message);
         setTimeout(() => {
            setShowAlert(false);
         }, 3000);
      }
   };

   const handleUpdateAlert = (message) => {
      setShowAlert(true);
      setAlertMessage(message);
      setTimeout(() => {
         setShowAlert(false);
      }, 3000);
   };

   return (
      <div className="home-page">
         <div className="container">
            <Alert toDisplayAlert={showAlert} message={alertMessage} />
            <h2 className="text-2xl sm:text-3xl font-medium text-center mt-6 mb-10 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
               Current Products 🚀
            </h2>

            <div className="product-card-container px-2 sm:pt-5 pb-5 sm:pb-10 grid grid-cols-[repeat(auto-fit,_300px)] justify-center gap-[20px] gap-y-[30px]">
               {products.map((product) => {
                  return (
                     <ProductCard
                        key={product._id}
                        product={product}
                        onDeleteProduct={(id) => {
                           handleDeleteBtn(id);
                        }}
                        handleUpdateAlert={(message) =>
                           handleUpdateAlert(message)
                        }
                     />
                  );
               })}
            </div>
            
            { isLoading ? <div className="text-4xl text-yellow-400 text-center">Loading...</div> : <></>}


            {products.length === 0 ? (
               <div className="product-not-found h-[50vh] flex flex-col sm:flex-row items-center justify-center">
                  <div className="flex !items-center">
                     <p className="text-gray-400 text-2xl sm:text-3xl">
                        No products found
                     </p>
                     <TbMoodCry className="text-gray-400 ml-2 mt-1 text-2xl sm:text-3xl" />
                  </div>
                  <Link
                     to={"/create"}
                     className="text-2xl sm:text-3xl !text-blue-200 hover:!underline mt-4 sm:mt-0 sm:ml-4"
                  >
                     Create a Product
                  </Link>
               </div>
            ) : (
               <></>
            )}
         </div>
      </div>
   );
}

export default HomePage;
