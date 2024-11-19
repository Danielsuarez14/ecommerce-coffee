import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";


const CartItem = (props: any) => {
    const { product } = props
    const { removeItem } = useCart()
    return (
        <li className="flex py-6 border-b">
            <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${product.images[0].url}`}
                alt={product.productName}
                className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32" />
            <div className="flex justify-between flex-1 px-6">
                <div>
                    <h2 className="text-lg font-bold">
                        {product.productName}
                    </h2>
                    <p className="font-bold">
                        {formatPrice(product.price)}
                    </p>
                </div>
                <div>
                    <button className={cn("rounded-full flex items-center justify-center bg-white dark:bg-black border shadow-md p-1 hover:scale-110 transition")}>
                        <X size={20} onClick={() => removeItem(product.id)} />
                    </button>
                </div>
            </div>
        </li>
    )
}

export default CartItem