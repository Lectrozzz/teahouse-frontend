type props = {
	text: string;
};

const SubHeader = ({ text }: props) => {
	return (
		<h2 className="text-3xl font-extrabold text-green-800 font">{text}</h2>
	);
};
export default SubHeader;
