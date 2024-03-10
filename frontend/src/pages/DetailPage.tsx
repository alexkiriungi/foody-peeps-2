import { useGetRestaurant } from '@/api/RestaurantApi';
import MenuItemDetail from '@/components/MenuItem';
import RestaurnatInfo from '@/components/RestaurantInfo';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useParams } from 'react-router-dom'

export default function DetailPage() {
    const { restaurantId } = useParams();
    const { restaurant, isLoading } = useGetRestaurant(restaurantId);

    if (isLoading || !restaurant) {
        return <span className='font-bold text-2xl'>Loading...</span>
    }
  return (
    <div className='flex flex-col gap-10'>
        <AspectRatio ratio={16 / 5}>
            <img 
                className='rounded-md object-cover h-full w-full brightness-105'
                src={restaurant.imageUrl} />
        </AspectRatio>
        <div className="grid md:grid-cols-[4fr_2fr] gap-5 md:px-32">
            <div className="flex flex-col gap-4">
                <RestaurnatInfo restaurant={restaurant} />
                <span className='text-2xl font-bold tracking-tight'>Menu</span>
                {restaurant.menuItems.map((menuItem) => (
                    <MenuItemDetail menuItem={menuItem} />
                ))}
            </div>
        </div>
    </div>
  );
};
