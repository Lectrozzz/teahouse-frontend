import { InputHTMLAttributes } from "react";

const FormInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
	return (
		<input
			className="bg-white border-2 border-green-700 focus:outline-none focus:border-green-800 rounded-md px-2 py-1 w-full text-lg placeholder-slate-400"
			{...props}
		/>
	);
};

export default FormInput;
