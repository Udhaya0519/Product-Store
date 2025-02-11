import { create } from 'zustand'

const API_URL = import.meta.env.VITE_API_URL

export const useProductStore = create((set) => ({   //set is a function by zustand to modify the state of the store
    products: [],
    setProducts: (products) => set({ products }),
    createProduct: async (newProduct) => {

        if(!newProduct.name || !newProduct.price || !newProduct.image ){  //validation for empty values
            return { success:false, message:"Please provide all fields."}
        }

        const res = await fetch(`${API_URL}`,{
            method:"POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(newProduct)
        })
        const data = await res.json()   // .json parses the response body and returns it
        set((state) => ({ product: [...state.products, data.data]})) //in zustand single state can be modified and it automatically merges 
                                                                     // with other states unlike usestate
        return { success:true, message:"Product Added Successfully!"}
    },
    fetchProducts: async () => {
        const res = await fetch(`${API_URL}`)
        const data = await res.json()
        set({ products: data.data}) 
    },
    deleteProduct: async (id) => {
        const res = await fetch(`${API_URL}/${id}`,{
            method: "DELETE"
        })
        const data = await res.json()   //i cannot directly access the success and message so if condition to check then return custom msg
        if(!data.success) return {success:false,message:data.message}
        set((state) => ({products: state.products.filter((product) => product._id !== id)})) //updates the ui without refresh page

        return {success:true, message: data.message}
        
    },
    updateProduct: async (id, updatedProduct) => {
        const res = await fetch(`${API_URL}/${id}`,{
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedProduct)
        })
        const data = await res.json()
        if(!data.success) return {success:false,message:data.message}

        set((state) => ({ products: state.products.map((product) => product._id === id ? data.data : product)})) //for immidiate ui change

        return { success: true, message:"Updated successfully!"}
        
    }
    
}))