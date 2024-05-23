type props = {
	children: React.ReactNode;
};

const FormContainer = ({ children }: props) => {
	return (
		<div className="flex bg-white border-4 border-green-800 rounded-2xl px-8 py-4 w-3/4 max-w-[600px]">
			{children}
		</div>
	);
};

export default FormContainer;
