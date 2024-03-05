import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-orange-500 py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <Link to='/' className='text-3xl font-bold tracking-tight text-white'>
                    FoodyPeeps<span className="text-4xl text-black">2</span>
            </Link>
            <span className="text-white font-bold tracking-tight flex gap-4">
                <span>Terms of Service</span>
                <span>Privacy Policy</span>
            </span>

        </div>
    </div>
  );
};
