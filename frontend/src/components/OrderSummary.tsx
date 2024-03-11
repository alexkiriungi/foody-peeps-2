import { CardItem } from "@/pages/DetailPage";
import { Restaurant } from "@/types";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

type Props = {
    restaurant: Restaurant;
    cartItems: CardItem[];
};

const OrderSummary = ({ restaurant, cartItems }: Props) =>{

    const getTotalCost = () => {
        const totalInKsh = cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);
        const totalwithDelivery = totalInKsh + restaurant.deliveryPrice;

        return totalwithDelivery;
    };


    return(
        <>
            <CardHeader>
                <CardTitle className="text-2xl font-bold tracking-tight flex justify-between">
                    <span>Your Order</span>
                    <span>ksh{getTotalCost()}</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-5">
                {cartItems.map((item) => (
                    <div className="flex justify-between">
                        <span>
                            <Badge variant="outline" className="mr-2">
                                {item.quantity}
                            </Badge>
                            {item.name}
                        </span>
                        <span className="flex items-center gap-1">
                            ksh{item.price * item.quantity}
                        </span>
                    </div>
                ))}
                <Separator />
                <div className="flex justify-between">
                    <span>Delivery</span>
                    <span>ksh{restaurant.deliveryPrice}</span>
                </div>
                <Separator />
            </CardContent>
        </>
    )
};

export default OrderSummary;