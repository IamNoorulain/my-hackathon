'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { useCounter } from '../../contexts/CartCounter'
import toast from 'react-hot-toast'
import { Star, StarHalf, Minus, Plus, Facebook, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

interface SanityImage {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
  alt?: string;
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

interface Product {
  _id: string;
  name: string;
  image: SanityImage;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  badge?: {
    text: string;
    color: string;
  };
}

export default function ProductDetails() {
  const [product, setProduct] = useState<Product | null>(null)
  const [selectedSize, setSelectedSize] = useState('L')
  const [selectedColor, setSelectedColor] = useState('purple')
  const [quantity, setQuantity] = useState(1)
  const { id } = useParams()
  const { addToCart, getCartCount } = useCounter()

  useEffect(() => {
    const fetchProduct = async () => {
      const query = `*[_type == "product" && _id == $id][0]`
      const fetchedProduct = await client.fetch(query, { id })
      setProduct(fetchedProduct)
    }
    fetchProduct()
  }, [id])

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product._id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        image: urlFor(product.image).url()  
      })
      getCartCount()
      toast.success(`${quantity} ${product.name}${quantity > 1 ? 's' : ''} added to cart`, {
        style: {
          background: 'purple',
          color: '#fff',
        },
      })
    }
  }

  const handleQuantityChange = (action: 'increase' | 'decrease') => {
    if (action === 'increase') {
      setQuantity(prev => prev + 1)
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1)
    }
  }

  if (!product) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  return (
    <div className="w-[90%] sm:w-[85%] max-w-7xl mx-auto px-4 py-8 sm:py-12">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left Side - Product Image */}
        <div className="lg:w-[40%] max-h-[31rem] bg-[#FFF9F3] rounded-lg p-3 sm:p-6 flex items-start justify-center">
          <div className="relative w-full max-w-md aspect-square">
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div className="lg:w-1/2">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4 sm:mb-6">{product.name}</h1>
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium mb-4 sm:mb-6">$. {product.price.toLocaleString()}.00</p>
          
          {/* Rating */}
          <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            <div className="flex items-center text-yellow-400">
              <Star className="fill-current w-4 h-4 sm:w-5 sm:h-5" />
              <Star className="fill-current w-4 h-4 sm:w-5 sm:h-5" />
              <Star className="fill-current w-4 h-4 sm:w-5 sm:h-5" />
              <Star className="fill-current w-4 h-4 sm:w-5 sm:h-5" />
              <StarHalf className="fill-current w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <span className="text-gray-600 text-sm sm:text-base">5 Customer Review</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
            {product.description}
          </p>

          {/* Size Selection */}
          <div className="flex flex-col items-center w-full max-w-md mx-auto">
      {/* Size Selection */}
      <div className="w-full mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg mb-2 sm:mb-3 text-center">Size</h3>
        <div className="flex justify-center gap-2 sm:gap-4">
          {["S","M","L", "XL"].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-lg transition-colors text-sm sm:text-base
                ${
                  selectedSize === size
                    ? "bg-purple-700 text-white"
                    : "bg-[#F9F1E7] hover:bg-purple-500 hover:text-white"
                }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color Selection */}
      <div className="w-full mb-6 sm:mb-8">
        <h3 className="text-base sm:text-lg mb-2 sm:mb-3 text-center">Color</h3>
        <div className="flex justify-center gap-4 sm:gap-6">
          {[
            { name: "black", class: "bg-black" },
            { name: "brown", class: "bg-[#B88E2F]" },
            { name: "gray", class: "bg-gray" },
          ].map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${color.class} transition-transform
                ${selectedColor === color.name ? "scale-125 ring-2 ring-offset-2 ring-purple-600" : ""}
              `}
            />
          ))}
        </div>
      </div>
    </div>

          {/* Quantity and Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 sm:mb-8 w-full">
      <div className="flex items-center justify-center border rounded-lg">
        <button
          onClick={() => handleQuantityChange("decrease")}
          className="px-3 sm:px-4 py-2 hover:bg-gray-100 flex items-center justify-center"
        >
          <Minus size={16} className="sm:w-5 sm:h-5" />
        </button>
        <span className="px-4 sm:px-6 py-2 text-sm sm:text-base min-w-[3rem] text-center">{quantity}</span>
        <button
          onClick={() => handleQuantityChange("increase")}
          className="px-3 sm:px-4 py-2 hover:bg-gray-100 flex items-center justify-center"
        >
          <Plus size={16} className="sm:w-5 sm:h-5" />
        </button>            </div>
            <button 
              onClick={handleAddToCart}
              className="px-6 sm:px-8 py-2 bg-white border-2 border-purple-700 text-black hover:bg-purple-600 hover:text-white  transition-colors rounded-lg text-sm sm:text-base"
            >
              Add To Cart
            </button>
          </div>

          {/* Product Meta */}
          <div className="border-t pt-4 sm:pt-6 space-y-2 sm:space-y-4 text-gray-600 text-sm sm:text-base">
            <div className="flex gap-4 sm:gap-8">
              <span className="w-20 sm:w-24">SKU</span>
              <span>: SS001</span>
            </div>
            <div className="flex gap-4 sm:gap-8">
              <span className="w-20 sm:w-24">Category</span>
              <span>: {product.category}</span>
            </div>
            <div className="flex gap-4 sm:gap-8">
              <span className="w-20 sm:w-24">Tags</span>
              <span>: Sofa, Chair, Home, Shop</span>
            </div>
            <div className="flex gap-4 sm:gap-8">
              <span className="w-20 sm:w-24">Share</span>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-purple-700">
                  <Facebook size={16} className="sm:w-5 sm:h-5" />
                </Link>
                <Link href="#" className="hover:text-purple-700">
                  <Linkedin size={16} className="sm:w-5 sm:h-5" />
                </Link>
                <Link href="#" className="hover:text-purple-700">
                  <Twitter size={16} className="sm:w-5 sm:h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

