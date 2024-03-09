import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField, FormItem } from "./ui/form";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useEffect } from "react";

const formSchema = z.object({
    searchQuery: z.string({
        required_error: "Restaurant name is required"
    }),
});

export type SearchForm = z.infer<typeof formSchema>;

type Props = {
    onSubmit: (formData: SearchForm) => void;
    placeHolder: string;
    onReset?: () => void;
    searchQuery: string;
};

const SearchBar = ({ onSubmit, onReset, placeHolder, searchQuery}: Props) => {
    const form = useForm<SearchForm>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            searchQuery,
        }
    });

    useEffect(() => {
        form.reset({ searchQuery });
    }, [form, searchQuery]);

    const handleReset = () => {
        form.reset({
            searchQuery: "",
        });
    };

    if (onReset) {
        onReset();
    };

    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} 
            className={`flex justify-between flex-nowrap flex-row border-2 rounded-full p-3 mx-5 ${form.formState.errors.searchQuery && "border-red-500"}`}>
                <div className="flex flex-row items-center">
                    <Search 
                    strokeWidth={2.5} size={30}
                    className="ml-1 text-orange-500 hidden md:block" />
                    <FormField control={form.control} name="searchQuery"
                    render={( {field} ) => (<FormItem>
                        <Input {...field}  
                        className="bg-white border-none shadow-none text-xl focus-visible:ring-0" 
                        placeholder={placeHolder} />
                    </FormItem>
                    )} 
                    />
                </div>
                <div className="flex flex-row gap-1">      
                    <Button onClick={handleReset}
                        type='button' variant="outline"
                        className="rounded-full">Reset</Button>
                    <Button type="submit" className="bg-orange-500 rounded-full">
                        Search
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default SearchBar;