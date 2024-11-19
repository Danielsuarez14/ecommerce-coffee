import { useEffect, useState } from "react";
export function getCategoryProduct(slug: string | string[]) {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?populate=*&filters[category][slug][$eq]=${slug}`
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
                        const {
                            productName,
                            taste,
                            origin,
                            description,
                            slug,
                            price,
                            images: rawImage,
                        } = product
                        const image = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${rawImage[0].url}`
                        return {
                            productName,
                            taste,
                            origin,
                            description,
                            slug,
                            price,
                            image,
                        }
                    })
        setResult(formattedData)
        setLoading(false)
    } catch (error: any) {
        setError(error)
        setLoading(false)
    }
}) ()

    }, [url])
return { result, loading, error }
}