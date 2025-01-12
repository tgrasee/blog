import Link from "next/link";
import NavLinks from "./nav-links";

export default function Header() {
    return (
        <header className="bg-blue-600 text-white py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                <h1 className="text-2xl font-bold"><Link href="/">My Blog Site</Link></h1>
                <NavLinks />
            </div>
        </header>
    )
}