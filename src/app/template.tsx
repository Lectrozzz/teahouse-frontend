import Navbar from "./_components/Navbar";

const Template = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Navbar />
			<div className="flex justify-center">
				<div className="flex flex-col w-11/12 max-w-screen-lg">
					{children}
				</div>
			</div>
		</>
	);
};

export default Template;
