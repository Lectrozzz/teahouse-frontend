import MainHeader from "@/components/MainHeader";
import CategoryBox from "./_components/CategoryBox";
import { getDrinkList } from "@/data/DrinkList";

const Menu = () => {
	const DrinkList = getDrinkList();
	return (
		<div className="flex flex-col items-center w-full">
			<div className="flex mt-8 mb-4">
				<MainHeader text="Menu" />
			</div>
			<div className="flex flex-col justify-center w-full bg-white px-6 py-4">
				<div className="mt-4">
					<CategoryBox
						header="Fresh Milk Tea"
						itemList={DrinkList.filter(
							(drink) => drink.series === "Fresh Milk Tea"
						)}
					/>
				</div>
				<div className="mt-4">
					<CategoryBox
						header="Fresh Fruit Tea"
						itemList={DrinkList.filter(
							(drink) => drink.series === "Fresh Fruit Tea"
						)}
					/>
				</div>
			</div>
		</div>
	);
};

export default Menu;
