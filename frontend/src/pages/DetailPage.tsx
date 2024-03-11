import { useGetRestaurant } from '@/api/RestaurantApi';
import MenuItemDetail from '@/components/MenuItem';
import OrderSummary from '@/components/OrderSummary';
import RestaurnatInfo from '@/components/RestaurantInfo';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card } from '@/components/ui/card';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { MenuItem } from '@/types';


export type CardItem = {
    _id: string;
    name: string;
    price: number;
    quantity: number;
};

export default function DetailPage() {
    const { restaurantId } = useParams();
    const { restaurant, isLoading } = useGetRestaurant(restaurantId);

    const [ cartItems, setCartItems ] = useState<CardItem[]>([]);

    const addToCart = (menuItem: MenuItem) => {
        setCartItems((prevCartItems) => {
            const existingCartItem = prevCartItems.find((cartItem) => cartItem._id === menuItem._id);

            let updatedCartItems;

            if (existingCartItem) {
                updatedCartItems = prevCartItems.map((cartItem) => cartItem._id == menuItem._id 
                ? { ...cartItem, quantity: cartItem.quantity + 1}: cartItem);
            } else {
                updatedCartItems = [
                    ...prevCartItems, {
                        _id: menuItem._id,
                        name: menuItem.name,
                        price: menuItem.price,
                        quantity: 1
                    } 
                ]
            }
            return updatedCartItems;
        });
    };

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
                    <MenuItemDetail menuItem={menuItem} addToCart={()=> addToCart(menuItem)} />
                ))}
            </div>
            <div className="">
                <Card>
                    <OrderSummary restaurant={restaurant} cartItems={cartItems} />
                </Card>
            </div>
        </div>
    </div>
  );
};
