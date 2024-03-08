import { useCreateMyRestaurant, useGetMyRestaurant, useupdateMyRestaurant } from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";


export default function ManageRestaurantPage() {
  const { createRestaurant, isLoading: isCreateLoading } = useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();
  const { updateRestaurant, isLoading: isUpdateLoading } = useupdateMyRestaurant();

  const isEditing =!!restaurant;
  return (
    <ManageRestaurantForm 
    onSave={isEditing? updateRestaurant : createRestaurant} 
    isLoading={isCreateLoading || isUpdateLoading}
    restaurant={restaurant} />
  );
};
