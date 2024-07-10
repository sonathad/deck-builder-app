export default function NavBar() {
    return (
        <nav className="bg-slate-900 z-30 fixed top-0 right-0 w-screen">
            <ul className="sm:h-14 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-10">
                <li><a href="#" className="font-bold hover:text-slate-400 duration-300">First</a></li>
                <li><a href="#" className="font-bold hover:text-slate-400 duration-300">Second</a></li>
                <li><a href="#" className="font-bold hover:text-slate-400 duration-300">Third</a></li>
                <li><a href="#" className="font-bold hover:text-slate-400 duration-300">Fourth</a></li>
            </ul>
        </nav>
    );
}