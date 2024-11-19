'use client'
import { useLovedProducts } from "@/hooks/use-loved-products";
import LovedItemProduct from "./components/love-item-product";

export default function Page() {
    const { lovedItems } = useLovedProducts()
    return (
        <div className="max-w-4xl py-4 mx-auto sm:py-32 sm:px-24 lg:min-h-[80vh] mt-20">
            <h1 className="text-2xl">
                List of loved products
            </h1>
            <div>
                {
                    lovedItems.length === 0 && (
                        <p className="text-center">
                            There is not loved products
                        </p>
                    )
                }
                <ul>
                    {lovedItems.map((item) => (
                            <LovedItemProduct key={item.id} product={item} />
                    ))
                    }
                </ul>
            </div>
        </div>
    )
}
