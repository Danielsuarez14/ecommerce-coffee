'use client'
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import AutoPlay from 'embla-carousel-autoplay'
export const dataCarousel = [
    {
        "id": 1,
        "title": "Shipped in 24/48 hours",
        "description": "As a VIP customer, your orders are shipped within 24/48 hours. Learn more and join now",
        "link": "#!"
    },
    {
        "id": 2,
        "title": "Get up to 25% off on purchases over 20,000 COP",
        "description": "-20% when you spend 10,000 COP or -25% when you spend 20,000 COP. Use code CAFEDEV.",
        "link": "#"
    },
    {
        "id": 3,
        "title": "Free returns and delivery",
        "description": "As a customer, you get free shipping and returns within 30 days on all orders. Learn more and join now",
        "link": "#"
    },
    {
        "id": 4,
        "title": "Shop new arrivals",
        "description": "All new arrivals at 50% discount",
        "link": "#"
    }
]
const CarouselTextBanner = () => {
    const router = useRouter()
    return (
        <div className="bg-gray-100 dark:bg-primary">
            <Carousel
                className=""
                plugins={[
                    AutoPlay({
                        delay: 2500
                    })
                ]}
            >
                <CarouselContent>
                    {dataCarousel.map(({ id, title, link, description }) => (
                        <CarouselItem
                            key={id}
                            onClick={() => router.push(link)}
                            className="cursor-pointer"
                        >
                            <div>
                                <Card className="shadow-none border-none bg-transparent">
                                    <CardContent className="flex flex-col justify-center p-2 item-center text-center">
                                        <p className="sm:text-lg text-wrap dark:text-secondary">
                                            {title}
                                        </p>
                                        <p className="sm:text-xs text-wrap dark:text-secondary">
                                            {description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}
export default CarouselTextBanner