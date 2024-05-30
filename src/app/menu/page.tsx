import CategoryBox from "./_components/CategoryBox";
import { getDrinkList } from "@/data/DrinkList";
import MainContainer from "@/components/MainContainer";

const Menu = () => {
	const DrinkList = getDrinkList();
	return (
		<MainContainer header="Menu">
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
		</MainContainer>
	);
};

export default Menu;
