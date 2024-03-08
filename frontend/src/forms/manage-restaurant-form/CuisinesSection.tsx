import { FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { cuisineList } from "@/config/restaurant_options_config";
import { useFormContext } from "react-hook-form"
import CuisineCheckbox from "./CuisineCheckbox";


export default function CuisinesSection() {
    const { control } = useFormContext();
  return (
    <div className="space-y-2">
        <div>
            <h2 className="text-2xl font-bold">Cuisines</h2>
            <FormDescription>
                Select the cuisines that your restaurant serves
            </FormDescription>
        </div>
        <FormField control={control} name="cuisines" 
        render={({ field }) => (
            <FormItem>
                <div className="grid md:grid-cols-5 gap-1">
                    {cuisineList.map((cuisineItem) => (
                        <CuisineCheckbox cuisine={cuisineItem} field={field} />
                    ))}
                </div>
                <FormMessage />
            </FormItem>
        )} />
    </div>
  );
};
