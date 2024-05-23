import Link from "next/link";
import MenuList from "./MenuList";

const Navbar = () => {
	return (
		<>
			<div className="flex justify-center py-3 bg-white">
				<nav className="flex justify-between items-center w-10/12 max-w-screen-xl">
					<Link
						className="flex text-4xl text-green-800 font-semibold"
						href="/"
					>
						TeaHouse
					</Link>
					<div className="flex gap-8">
						<MenuList text={"Menu"} route={"menu"} />
						<MenuList text={"My Order"} route={"my-order"} />
						<MenuList text={"Rewards"} route={"my-reward"} />
						<MenuList text={"Login"} route={"login"} />
					</div>
				</nav>
			</div>
			<hr className="bg-gray-400 h-[2px] border-0" />
		</>
	);
};

export default Navbar;
