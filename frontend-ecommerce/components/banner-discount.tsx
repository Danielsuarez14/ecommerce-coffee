import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerDiscount = () => {
    return(
        <div className="text-center">
            <h2 className="uppercase font-black text-2xl text-pretty">Get up to 25%</h2>
            <h3 className="mt-3 font-semibold">-20% when spending 10,000COP or -25% when spending 20,000COP. Use the code
            CAFEDEV</h3>
            <div className="max-w-md mx-auto sm:flex justify-center gap-8 mt-5">
                <Link href='/#' className={buttonVariants()}>
                    Buy
                </Link>
                <Link href='/#' className={buttonVariants({variant: 'outline'})}>
                    More information
                </Link>
            </div>
        </div>
    )
}
export default BannerDiscount