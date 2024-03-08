import { useSearchRestaurants } from "@/api/RestaurantApi";
import { useParams } from "react-router-dom"


export default function SearchPage() {
    const { city } = useParams();
    const { results } = useSearchRestaurants(city);
  return (
    <div>SearchPage for {city}</div>
  );
};
