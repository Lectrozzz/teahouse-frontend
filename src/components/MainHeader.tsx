type props = {
	text: string;
};

const MainHeader = ({ text }: props) => {
	return (
		<h1 className="text-5xl font-extrabold text-green-800 font">{text}</h1>
	);
};
export default MainHeader;
