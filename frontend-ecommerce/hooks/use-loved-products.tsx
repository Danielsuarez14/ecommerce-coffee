import {create} from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { toast } from '@/components/ui/use-toast'

interface LovedProductType {
    lovedItems: any[]
    addLovedItem: (product: any) => void
    removeLoveItem: (id: number) => void
}

export const useLovedProducts = create(
    persist<LovedProductType>(
        (set, get) => ({
            lovedItems: [],
            addLovedItem: (data: any) => {
                const currentItems = get().lovedItems
                const existingItem = currentItems.find((item) => item.id === data.id)
                if(existingItem) {
                    return toast({
                        title: 'The product is already in your favorites',
                        variant: 'destructive'
                    })
                }
                set({
                    lovedItems: [... get().lovedItems, data]
                })
                toast({
                    title: 'Product added to list ❤️'
                })
            },
            removeLoveItem: (id: number) => {
                set({
                    lovedItems: [... get().lovedItems.filter((item) => item.id !== id)]
                })
                toast({
                    title: "Product deleted to list 💔"
                })
            },
        }),
        {
            name: 'loved-products-storage',
            storage: createJSONStorage(() => localStorage)
        }
    )
)