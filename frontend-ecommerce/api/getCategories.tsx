import { useEffect, useState } from "react";
export function getCategories() {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories?populate=*`
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    useEffect(() => {
        (
            async () => {
                try {
                    const res = await fetch(url)
                    const json = await res.json()
                    const formattedData = json.data.map((category) => {
                        const { categoryName, slug, mainImage: rawImage } = category;
                        const image = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${rawImage.url}`
                        return { categoryName, slug, image }
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