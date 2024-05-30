import MainHeader from "./MainHeader";

type props = {
	header: string;
	children: React.ReactNode;
};

const MainContainer = ({ header, children }: props) => {
	return (
		<div className="flex flex-col items-center w-full">
			<div className="flex mt-8 mb-4">
				<MainHeader text={header} />
			</div>
			<div className="flex flex-col justify-center w-full bg-white px-6 py-4 rounded-md">
				{children}
			</div>
		</div>
	);
};

export default MainContainer;
