"use client"
import { useRouter } from "next/navigation";
import { BaggageClaim, Heart, ShoppingCart, User } from "lucide-react";
import MenuList from "./menu-list";
import MenuMobile from './menu-mobile';
import ToogleTheme from './toogle-theme';
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";

const Navbar = () => {
    const router = useRouter()
    const cart = useCart()
    const { lovedItems } = useLovedProducts()
    return (
        <nav className="fixed top-0 left-0 w-full bg-white dark:bg-dark-fondo shadow-sm z-50">
            <div className="flex item-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
                <h1 className="text-3xl" onClick={() => router.push('/')}>
                    Coffee
                    <span className="font-bold">Dev</span>
                </h1>
                <div className="items-center justify-between hidden sm:flex">
                    <MenuList />
                </div>
                <div className="flex items-center justify-between gap-6 sm:gap-7">
                    {cart.items.length === 0 ? (
                        <ShoppingCart
                            strokeWidth='1'
                            className='cursor-pointer'
                            onClick={() => router.push('/cart')}
                        />
                    ) : (
                        <div className="flex gap-1" onClick={() => router.push('/cart')}>
                            <BaggageClaim strokeWidth='1' className="cursor-pointer" />
                            <span>{cart.items.length}</span>
                        </div>
                    )}

                    <Heart
                        strokeWidth='1'
                        className={`cursor-pointer
                            ${lovedItems.length > 0 && "fill-black dark:fill-white"}`
                        }
                        onClick={() => router.push("/loved-products")}
                    />
                    <User
                        strokeWidth='1'
                        className='cursor-pointer'
                        onClick={() => router.push('/cart')}
                    />
                    <ToogleTheme />
                </div>
                <div className="flex gap-2 sm:hidden">

                    <MenuMobile />
                </div>
            </div>
        </nav>
    );
}

export default Navbar
