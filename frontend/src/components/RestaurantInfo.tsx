import { Restaurant } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Dot } from "lucide-react";

type Props = {
    restaurant: Restaurant;
}

const RestaurnatInfo = ({ restaurant }: Props) => {
    return(
        <Card className="border-sla">
            <CardHeader>
                <CardTitle className="text-2xl font-bold tracking-tight">
                    {restaurant.restaurantName}
                </CardTitle>
                <CardDescription className="italic text-slate-700">
                    {restaurant.city}, {restaurant.country}
                </CardDescription>
            </CardHeader>
            <CardContent className="flex">
                {restaurant.cuisines.map((item, index) => (
                    <span className="flex">
                        <span>{item}</span>
                        {index < restaurant.cuisines.length -1 && <Dot />}
                    </span>
                ))}
            </CardContent>
        </Card>
    );
};

export default RestaurnatInfo;