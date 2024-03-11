import { Order } from "@/types";
import { Separator } from "./ui/separator";

type Props = {
    order: Order;
};

const OrderStatusDetail = ({ order }: Props) => {
    return(
        <div className="space-y-5">
            <div className="flex flex-col">
                <span className="font-bold">Delivering to:</span>
                <span>{order.deliveryDetails.name}</span>
                <span className="italic text-slate-700">{order.deliveryDetails.addressLine1}, {order.deliveryDetails.city}</span>
            </div>
            <div className="flex flex-col">
                <span className="font-bold">Your Order</span>
                <ul>
                    {order.cartItems.map((item) => (
                        <li>
                            {item.name} x {item.quantity}
                        </li>
                    ))}
                </ul>
            </div>
            <Separator />
            <div className="flex flex-col">
                <span className="font-bold">Total</span>
                <span>ksh{order.totalAmount}</span>
            </div>
        </div>
    );

};

export default OrderStatusDetail;