import { FormDescription } from "@/components/ui/form";
import { useFormContext } from "react-hook-form"


export default function imageSection() {
    const { control } = useFormContext();
  return (
    <div className="space-y-2">
        <div>
            <h2 className="text-2xl font-bold">
                Image
            </h2>
            <FormDescription>
                Add an image that will be displayed on your restaurant 
                listing when searched. Note: Adding a new image will 
                overwrite the existing one
            </FormDescription>
        </div>
        <div className=""></div>
    </div>
  );
};
