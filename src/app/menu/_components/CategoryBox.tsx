import SubHeader from "@/components/SubHeader";
import MenuItem from "./MenuItem";

type props = {
	header: string;
	itemList: Drink[];
};

const CategoryBox = ({ header, itemList }: props) => {
	return (
		<div>
			<div className="flex justify-start mb-2">
				<SubHeader text={header} />
			</div>
			<hr className="bg-gray-300 h-[2px] border-0" />
			<div className="grid grid-cols-3 justify-between mt-4 w-full gap-4">
				{itemList.map((drink) => (
					<MenuItem key={drink.id} item={drink} />
				))}
			</div>
		</div>
	);
};

export default CategoryBox;
