import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="border-b-2 border-b-orange-500 py-6">
        <div className="container mx-auto flex justify-between items-center">
            <Link to='/' className='text-3xl font-bold tracking-tight text-orange-500'>
                FoodyPeeps<span className="text-4xl text-black">2</span>
            </Link>
        </div>
    </div>
  );
};
