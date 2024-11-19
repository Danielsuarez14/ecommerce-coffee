import { FolderCode } from "lucide-react"

const Header = () => {
    return (
        <header className="flex justify-center flex-col max-w-xl mx-auto items-center pt-12">
            <h1 className="font-bold items-center mb-8 mt-4 flex gap-4 animate-blurred-fade-in">
                <span className="flex flex-col text-center gap-3 sm:gap-0">
                    <span className="text-5xl tracking-tighter px-1 bg-clip-text inline-block text-transparent bg-gradient-to-r from-slate-400 to-slate-600 sm:text-6xl ">
                        Coffee to{" "}
                    </span>
                    <span className="tracking-tighter text-slate-800 dark:text-white text-[32px] sm:text-[70px] -mt-4">
                        Developers
                    </span>
                    
                </span>
                <span>
                    <FolderCode size={90} color='#85776E'/>
                </span>
            </h1>
        </header>
    )
}
export default Header