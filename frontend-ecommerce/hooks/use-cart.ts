import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { toast } from '@/components/ui/use-toast'

interface CartStore {
    items: any[]
    addItem: (product: any) => void
    removeItem: (product: any) => void
    removeAll: () => void
}

export const useCart = create(
    persist<CartStore>(
        (set, get) => {
            return {
                items: [],
                addItem: (product) => {
                    const currentItems = get().items

                    const existingItem = currentItems.find((p) => p.id === product.id)
                    if (existingItem) {
                        return toast({
                            title: 'Product already in cart',
                            variant: 'destructive'
                        })
                    }

                    set({ items: [...currentItems, product] })
                    toast({
                        title: 'Product added to cart 👍',
                    })
                },
                removeItem: (id: number) => {
                    set({ items: get().items.filter((items) => items.id !== id) })
                    toast({
                        title: 'Product deleted to cart 🗑️'
                    })
                },
                removeAll: () => {
                    set({ items: [] })
                    toast({
                        title: 'Cart cleared 🧹'
                    })
                }
            }
        },
        {
            name: 'cart-storage',
            storage: createJSONStorage(() => localStorage)
        }

    ))