import { useCreateMyRestaurant, useGetMyRestaurant, useGetMyRestaurantOrders, useupdateMyRestaurant } from "@/api/MyRestaurantApi";
import OrderItemCard from "@/components/OrderItemCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";
import { TabsContent } from "@radix-ui/react-tabs";


export default function ManageRestaurantPage() {
  const { createRestaurant, isLoading: isCreateLoading } = useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();
  const { updateRestaurant, isLoading: isUpdateLoading } = useupdateMyRestaurant();
  const { orders } = useGetMyRestaurantOrders();

  const isEditing =!!restaurant;
  return (
    <Tabs defaultValue="orders">
      <TabsList>
        <TabsTrigger value="orders">Orders</TabsTrigger>
        <TabsTrigger value="manage-restaurant">Manage Restaurant</TabsTrigger>
      </TabsList>
      <TabsContent value="orders" className="space-y-5 bg-gray-50 pg-10 rounded-lg">
        <h2 className="text-2xl font-bold">{orders?.length} active orders</h2>
        {orders?.map((order) => (
          <OrderItemCard order={order} />
        ))}
      </TabsContent>
      <TabsContent value="manage-restaurant">
      <ManageRestaurantForm 
        onSave={isEditing? updateRestaurant : createRestaurant} 
        isLoading={isCreateLoading || isUpdateLoading}
        restaurant={restaurant} />
      </TabsContent>
    </Tabs>
    
  );
};
