'use client'
import { getFeaturedProducts } from "@/api/getFeaturedProducts"
import Link from "next/link"
import SkeletonSchema from './skeletonSchema';
const FeaturedProducts = () => {
    const { result, loading } = getFeaturedProducts()
    return (
        <div className="max-w-7xl mx-auto px-4">
            <span className="tracking-tighter text-slate-800 dark:text-white text-[32px] sm:text-[70px]">
                Featured Products
            </span>
            <div className="mb-4 mt-6 grid grid-cols-1 gap-4 text-center px.4 sm:grid-cols-3 lg:mb-0 px-4">
            {loading && <SkeletonSchema grid={3}/>}
            {result !== null && result.map((product, index) => (
                    <Link
                        className="grid place-content-center overflow-hidden rounded-lg border corder-gray-200 bg-white hover:bg-gray-100 shadow-md dark:text-black"
                        key={index}
                        href={`/product/${product.slug}`}
                    >
                        <img className="mx-auto aspect-square w-full h-full object-cover rounded-lg" src={product.image} alt={product.productName} />
                        <p className="text-lg mt-6 ml-4 font-semibold text-left text-gray-900">{product.productName}</p>
                        <div className="flex items-center">
                            <p className="px-4 py-1 m-4 border border-[#7bbcea] rounded-lg md:px-4 md:py-2 gap-2 hover:bg-[#d1ecff] md:text-sm">{product.taste}</p>
                            <p className="px-4 py-1 m-4 border border-[#85776e] rounded-lg md:px-4 md:py-2 gap-2 hover:bg-[#d8ccc4] md:text-sm">{product.origin}</p>
                        </div>

                    </Link>
                ))}
            </div>
        </div>
    )
}
export default FeaturedProducts