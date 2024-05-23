"use client";

import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import FormLabel from "@/components/form/FormLabel";
import MainButton from "@/components/form/MainButton";
import MainHeader from "@/components/MainHeader";
import Link from "next/link";

const Login = () => {
	return (
		<div className="flex flex-col items-center w-full">
			<div className="flex mt-8 mb-4">
				<MainHeader text="Login" />
			</div>
			<FormContainer>
				<form
					action=""
					onSubmit={(e) => {
						e.preventDefault();
					}}
					className="flex flex-col w-full"
				>
					<div className="mt-4">
						<FormLabel text="Email" />
						<FormInput
							type="text"
							name="email"
							id="email"
							placeholder="user@gmail.com"
						/>
					</div>
					<div className="mt-4">
						<FormLabel text="Password" />
						<FormInput
							type="password"
							name="password"
							id="password"
							placeholder="12345678"
						/>
					</div>
					<div className="flex justify-center mt-4">
						<MainButton text="Login" variant="solid" />
					</div>
					<div className="flex justify-between mt-4">
						<Link
							href="/forgot-password"
							className="text-green-800 text-lg font-semibold"
						>
							Forgot Password
						</Link>
						<Link
							href="/register"
							className="text-green-800 text-lg font-semibold"
						>
							Register
						</Link>
					</div>
				</form>
			</FormContainer>
		</div>
	);
};
export default Login;
