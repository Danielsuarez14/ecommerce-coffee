import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

const LovedItemProduct = (props: any) => {
    const { product } = props
    const router = useRouter()
    const { removeLoveItem } = useLovedProducts()
    const { addItem } = useCart()

    return (
        <li className="flex py-6 border-b">
            <img
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${product.images[0].url}`}
                alt={product.productName}
                className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32"
            />
            <div className="flex justify-between flex-1 p-6">
                <div>
                    <h2 className="text-lg font-bold">{product.productName}</h2>
                    <p className="font-bold">{formatPrice(product.price)}</p>
                    <Button className="mt-5 rounded-full"
                    onClick={() => {}}>
                        Add to Cart
                    </Button>
                </div>
                <div>
                    <button className={cn(
                        "rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition"
                    )}>
                        <X size={20} onClick={() => removeLoveItem(product.id)}/>
                    </button>
                </div>
            </div>
        </li>
    )
}

export default LovedItemProduct