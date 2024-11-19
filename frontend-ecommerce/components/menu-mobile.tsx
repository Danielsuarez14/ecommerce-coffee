import {Menu} from 'lucide-react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import Link from 'next/link'  
const MenuMobile = () => {
    return(
        <div>
            <Popover>
                <PopoverTrigger>
                    <Menu/>
                </PopoverTrigger>
                <PopoverContent>
                    <Link href='/categories/coffe-ground' className='block'>
                    Coffee Ground
                    </Link>
                    <Link href='/categories/coffe-bean' className='block'>
                    Coffee Bean
                    </Link>
                    <Link href='/categories/coffe-capsules' className='block'>
                    Coffee Capsules
                    </Link>
                </PopoverContent>
            </Popover>
        </div>
    )
}
export default MenuMobile