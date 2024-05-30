import MainContainer from "@/components/MainContainer";

const ItemInfo = () => {
	return (
		<MainContainer header="Drink">
			<div className="grid grid-cols-2 gap-4">
				<div className="flex justify-center w-auto border-2 border-green-800">
					Picture
				</div>
				<div className="flex flex-col w-auto justify-start border-2 border-green-800">
					<div>Header</div>
					<hr />
					<div>Info</div>
				</div>
			</div>
		</MainContainer>
	);
};

export default ItemInfo;
