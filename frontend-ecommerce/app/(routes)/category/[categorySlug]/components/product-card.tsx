import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import { formatPrice } from "@/lib/formatPrice";

const ProductCard = ({product}: any) => {
    const router = useRouter()
    return(
        <div className="mb-4 mt-6 grid grid-cols-1 gap-4 text-center px-4 sm:grid-cols-3 lg:mb-0">
            <Card className="w-[300px] overflow-hidden">
                <div className="relative h-[290px]">
                    <img src={product.image} alt='Product for developers' className="object-fill w-full h-full transition-transform duration-300 ease-in-out hover:scale-105" />
                    <Badge className="absolute top-2 left-2 bg-primary dark:bg-primary-foreground dark:text-white">
                        {product.taste}
                    </Badge>
                    <Button
                    variant='ghost'
                    size='icon'
                    className="absolute top-2 right-2 bg-white hover:bg-white"
                    >
                        <Heart className="h-5 w-5 text-red-500" />
                    </Button>
                </div>
                <CardContent className="p-4">
                    <h2 className="text-lg font-semibold mb-2">
                        {product.productName}
                    </h2>
                    <p className="text-sm text-gray-600 mb-4">{product.description.substring(0, 100)} ...</p>
                <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">{formatPrice(product.price)}</span>
                    <Button
                    variant='outline'
                    size='icon'
                    onClick={()=> router.push(`/product/${product.slug}`)}
                    >
                        <ShoppingCart className="h-5 w-5"/>
                    </Button>
                </div>
                </CardContent>
            </Card>
        </div>
    )
}
export default ProductCard