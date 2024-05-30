import Link from "next/link";
import { TbMilkshake } from "react-icons/tb";

type props = {
	item: Drink;
};

const MenuItem = ({ item }: props) => {
	return (
		<div className="flex flex-col justify-center bg-gray-100 w-full rounded-lg p-2">
			<div className="flex w-full">
				<TbMilkshake className="flex w-full h-auto stroke-1 stroke-green-800" />
			</div>
			<Link
				className="truncate text-xl font-semibold hover:text-gray-700"
				href={`menu/${item.id}`}
			>
				{item.name}
			</Link>
			<div className="truncate text-gray-500 font-medium">
				{item.teacategory}
			</div>
			<div className="flex w-full justify-end text-lg text-green-800 font-semibold">
				{`${item.price} THB`}
			</div>
		</div>
	);
};

export default MenuItem;
