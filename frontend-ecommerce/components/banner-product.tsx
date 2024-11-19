import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerProduct = () => {
    return (
        <>
            <div className="mt-4 text-center ">
                <p>Unique experience for developers</p>
                <h4 className="mt-2 text-5xl font-extrabold uppercase">CoffeeDev</h4>
                <p className="my-2 text-lg">Awaken your senses. The best coffee for developers</p>
                <Link href='#' className={buttonVariants()}>
                    Buy
                </Link>
            </div>
            <div className="h-[350px] lg:h-[600px] bg-[url('/Banner-Cafe.jpg')] bg-center mt-5"/>
        </>
    )
}
export default BannerProduct