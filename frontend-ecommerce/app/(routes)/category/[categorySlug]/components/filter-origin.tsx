import { getProductFields } from "@/api/getProductsFields"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { FilterTypes } from "@/types/filters"

type FilterOriginProps = {
    setFilterOrigin: (origin: string) => void
}

const FilterOrigin = (props: FilterOriginProps) => {
    const {setFilterOrigin} = props
    const {result, loading}: FilterTypes = getProductFields()
    return(
        <div className="my-5">
            <p className='mb-3 font-bold'>Origin</p>
            {loading && result === null && <p>Loading origin...</p>}
            <RadioGroup onValueChange={(value) => setFilterOrigin(value)}>
                {result !== null && result.schema.attributes.origin.enum.map((origin: string) => (
                    <div key={origin} className="flex items-center space-x-2">
                        <RadioGroupItem value={origin} id={origin} />
                        <Label htmlFor={origin}>{origin}</Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    )
}
export default FilterOrigin