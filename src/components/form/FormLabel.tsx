type props = {
	text: string;
};

const FormLabel = ({ text }: props) => {
	return <div className="text-green-800 text-xl font-medium">{text}</div>;
};

export default FormLabel;
