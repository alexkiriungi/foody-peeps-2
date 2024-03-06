import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
    email: z.string().optional(),
    name: z.string().min(3, 'Name is required'),
    addressLine1: z.string().min(3, 'Address Line 1 is required'),
    city: z.string().min(3, 'City is required'),
    country: z.string().min(3, 'Country is required')
});

type userFormData = z.infer<typeof formSchema>;

type Props = {
    onSave: (userProfileData: userFormData) => void;
    isLoading: boolean;
}

const UserProfileForm = ({ onSave, isLoading}: Props) => {
    const form = useForm<userFormData>({
        resolver: zodResolver(formSchema),
    });

    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSave)} 
            className='space-y-4 bg-gray-50 rounded-lg md:p-10'>
                <div>
                    <h2 className='text-2xl font-bold'>
                        User Profile Form
                    </h2>
                    <FormDescription>
                        view and modify your profile information here
                    </FormDescription>
                </div>
                <FormField control={form.control} name="email" 
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input {...field} disabled className='bg-white' />
                        </FormControl>
                    </FormItem>
                )} />

                <FormField control={form.control} name="name" 
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input {...field} className='bg-white' />
                        </FormControl>
                    </FormItem>
                )} />
            </form>
        </Form>
    )
};

export default UserProfileForm;