type props = {
	text: string;
	variant: "solid" | "outline";
	click?: () => void;
};

const MainButton = ({ text, variant, click }: props) => {
	var variantOption;

	if (variant === "solid") {
		variantOption =
			"text-white bg-green-800 hover:text-green-800 hover:bg-white";
	} else {
		variantOption =
			"text-green-800 bg-white hover:text-white hover:bg-green-800";
	}

	return (
		<button
			className={`border-2 border-green-800 px-4 py-2 rounded-xl text-lg font-semibold duration-200 ${variantOption}`}
			onClick={click}
		>
			{text}
		</button>
	);
};

export default MainButton;
