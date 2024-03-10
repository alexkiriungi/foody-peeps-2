import { cuisineList } from "@/config/restaurant_options_config";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Check } from "lucide-react";
import { ChangeEvent } from "react";

type Props = {
    onChange: (cusines: string[]) => void;
    selectedCuisines: string[];
    // isExpanded: boolean;
    // onExpandedClick: () => void;
}

const CuisineFilter = ({ onChange, selectedCuisines: selectedCuisine }: Props) => {

    const handleCuisineReset = () => {
        onChange([]);
    };

    const handleCuisineChange = (event: ChangeEvent<HTMLInputElement>) => {
        const clickedCuisine = event.target.value;
        const isChecked = event.target.checked;

        const newCuisineList = isChecked ? [...selectedCuisine, clickedCuisine] : selectedCuisine.filter((cuisine) => cuisine !== clickedCuisine);
        onChange(newCuisineList)
    }

    return(
        <>
            <div className="flex justify-between items-center px-2">
                <div className="text-md font-semibold mb-2">
                    <div onClick={handleCuisineReset}
                    className="text-sm font-semibold mb-2 underline cursor-pointer text-blue-500"></div>
                </div>
            </div>
            <div className="space-y-2 flex flex-col">
                {cuisineList.map((cuisine) => {
                    const isSelected = selectedCuisine.includes(cuisine);
                    return (
                        <>
                        <div className="flex">
                            <Input id={`cuisine_${cuisine}`} type="checkbox" className="hidden"
                            value={cuisine}
                            checked={isSelected}
                            onChange={handleCuisineChange} />
                        </div>
                        <Label htmlFor={`cuisine_${cuisine}`}
                        className={`flex flex-1 items-center cursor-pointer text-sm rounded-full px-4 py-2 
                        font-semibold ${isSelected ? "border border-green-600 text-green-600" : "border border-slate-300"}`}>
                            {isSelected && <Check size={20} strokeWidth={3} />}
                            {cuisine}
                        </Label>
                        </>
                    )
                })}
            </div>
        </>
    )
};

export default CuisineFilter;