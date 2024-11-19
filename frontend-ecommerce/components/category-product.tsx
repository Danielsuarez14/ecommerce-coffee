'use client'
import { getCategories } from "@/api/getCategories";
import Link from "next/link";
const CategoryProduct = () => {
    const { result, loading } = getCategories()
    return (
        <div className="max-w-7xl mx-auto px-4">
            <span className="tracking-tighter text-slate-800 dark:text-white text-[32px] sm:text-[70px]">
                Our Categories
            </span>
            <div className="mb-4 mt-6 grid grid-cols-1 gap-4 text-center sm:grid-cols-3 ">
                {!loading &&
                    result !== null &&
                    result.map((category) => (
                        <Link
                            href={`/category/${category.slug}`}
                            key={category.slug}
                            className='relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg'
                        >
                            <img
                                src={`${category.image}`}
                                alt={category.categoryName}
                                className='max-w-[570px] transition duration-300 ease-in-out rounded-lg hover:scale-110' />
                            <p className="absolute w-full py-2 text-lg font-bold text-center text-white bottom-5 backdrop-blur-lg">
                                {category.categoryName}
                            </p>
                        </Link>
                    ))}
            </div>
        </div>
    )
}
export default CategoryProduct