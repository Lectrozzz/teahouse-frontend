type props = {
	item: Drink;
};

const MenuItem = ({ item }: props) => {
	return (
		<div className="flex justify-center bg-gray-200 w-full rounded-lg border-2 hover:border-green-800">
			<div>{item.name}</div>
		</div>
	);
};

export default MenuItem;
