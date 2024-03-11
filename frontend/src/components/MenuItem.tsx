import { MenuItem } from "../types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {
    menuItem: MenuItem;
    addToCart: () => void;
};

const MenuItemDetail = ({ menuItem, addToCart }: Props) => {
    return(
        <Card className="cursor-pointer" onClick={addToCart}>
            <CardHeader>
                <CardTitle>{menuItem.name}</CardTitle>
            </CardHeader>
            <CardContent className="font-bold">
                ksh{menuItem.price}
            </CardContent>
        </Card>
    );
};

export default MenuItemDetail;