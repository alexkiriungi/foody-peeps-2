import { Link } from "react-router-dom";

type Props = {
    total: number;
    city: string;
}

const SearchResultInfo = ({ total, city}: Props) => {
    return(
        <div className="text-xl font-bold flex flex-col gap-3 justify-between
        lg:items-center lg:flex-row">
            <span>
                {total} {total > 1 ? "restaurants": "restaurant"} found in {city}
                <Link to='/' className="text-sm font-semibold ml-1 underline cursor-pointer text-blue-500">
                    Change location
                </Link>
            </span>
            insert dropdown
        </div>
    )
};

export default SearchResultInfo;