'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const PageSucess = () => {
    const router = useRouter()

    return (
        <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24 mt-20">
            <div className="flex flex-col-reverse gap-2 sm:flex-row">
                <div className="flex justify-center md:min-w-[400px]">
                    <Image
                        src='/frontend-ecommerce/public/Banner-Cafe.jpg'
                        alt="Success"
                        width={250}
                        height={500}
                        className="rounded-lg object-cover"
                    />
                </div>
                <div>
                    <h1 className="text-3xl">
                        Thank you for your purchase
                    </h1>
                    <p className="my-3">
                        Soon, our team will get to work selecting the freshest beans and preparing your shipment with care and dedication. In the meantime, sit back, relax, and let the anticipation of the delicious aroma of freshly brewed coffee embrace you
                    </p>
                    <p>
                        A good cup of coffee while you develop
                    </p>
                    <p>
                        Enjoy the Coffee!
                    </p>
                    <Button onClick={() => router.push('/')}>
                        Back to the store
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default PageSucess