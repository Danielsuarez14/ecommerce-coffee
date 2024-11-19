import { useEffect, useState } from "react";
export function getFeaturedProducts() {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[isFeatured][$eq]=true&populate=*`
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    useEffect(() => {
        (
            async () => {
                try {
                    const res = await fetch(url)
                    const json = await res.json()
                    const formattedData = json.data.map((product: any) => {
                        const { productName, taste, origin, slug, images: rawImage } = product;
                        const image = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${rawImage[0].url}`
                        return { productName, taste, origin, slug, image }
                    })
                    setResult(formattedData)
                    setLoading(false)
                } catch (error: any) {
                    setError(error)
                    setLoading(false)
                }
            })()

    }, [url])
    return {result, loading, error}
}