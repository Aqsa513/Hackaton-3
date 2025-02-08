"use client";

import Image from "next/image";
import { Product } from "../../../types/products";
import React,{useEffect, useState} from "react";
import { client } from "@/sanity/lib/client";
import { allproducts, four } from "@/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { addToCart } from "../actions/action";
import swal from "sweetalert2"
import Link from "next/link";

const Best = () => {

  const [product,setProduct] = useState<Product[]>([])

useEffect(() => {
  async function fetchproduct(){
    const fetchedProduct :Product[] = await client.fetch(four)
    setProduct(fetchedProduct)
  }
  fetchproduct()
},[]);

const handleAddToCart = (e: React.MouseEvent,product: Product) =>{
  e.preventDefault()
  swal.fire({
    position : "top-right",
    icon: "success",
    title: `${product.productName} added to cart`,
    showConfirmButton: false,
    timer: 1000
  })

  addToCart(product)
  
  
}
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center"> Our Latest Products  </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {product.map((product) =>(
        <div key={product._id}
        className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
        >
          <Link href={`/product/ ${product?.slug?.current}`}>
           {product.image && (
            <Image 
            src={urlFor(product.image).url()}
            alt="image"
            width={200}
            height={200}
            className="w-full h-48 object-cover rounded-md"
            />
           )}
           <h1 className="text-lg font-semibold mt-4">
             {product.productName}
             </h1>
            <p className="text-gray-500 mt-2">
              {product.price ? `$${product.price}`:"price not available"}
              </p>
              <button
              className="bg-gradient-to-tr from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg 
              hover:scale-110 transition-transform duration-200 ease-in-out
              "
              onClick={(e)=> handleAddToCart(e,product)}
              >
                Add to Cart
              </button>
              </Link>
        </div>
      

      ))}
    </div>
    </div>
  )
}

export default Best
