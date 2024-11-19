'use client'
import { getCategoryProduct } from "@/api/getCategoryProducts"
import { useParams } from "next/navigation"
import { ResponseType } from "@/types/response";
import { Separator } from "@radix-ui/react-dropdown-menu";
import FiltersControlCategory from './components/filters-control-category';
import { useState } from "react";
import SkeletonSchema from "@/components/skeletonSchema";
import ProductCard from "./components/product-card";

export default function Page() {
    const params = useParams();
    const { categorySlug } = params;
    const { result, loading }: ResponseType = getCategoryProduct(categorySlug)
    const [filterOrigin, setFilterOrigin] = useState("")
    const filteredProducts =
        result !== null &&
        !loading &&
        (filterOrigin === "" 
            ? result
            : result.filter((product: any) => product.origin === filterOrigin))

    return (
        <div className="max-w-7xl py-4 mx-auto sm:py-16 sm:px-24 mt-12">
            {result !== null && !loading && result.length !== 0 &&
                <h1 className="text-3xl font-medium ">
                    Coffee {categorySlug}
                </h1>
            }
            <Separator />
            <div className="sm:flex sm: justify-between ">
                <FiltersControlCategory setFilterOrigin={setFilterOrigin} />

                <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
                    {loading && <SkeletonSchema grid={3} />}

                    {filteredProducts !== null &&
                        !loading &&
                        filteredProducts.map((product: any) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    
                    {filteredProducts !== null && 
                    !loading &&
                    filteredProducts.length === 0 && (
                        <p>There are not products with this filter</p>
                    )}
                </div>
            </div>
        </div>
    )
}


