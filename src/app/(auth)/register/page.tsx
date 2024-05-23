"use client";

import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import FormLabel from "@/components/form/FormLabel";
import MainButton from "@/components/form/MainButton";
import MainHeader from "@/components/MainHeader";
import Link from "next/link";

const Register = () => {
	return (
		<div className="flex flex-col items-center w-full">
			<div className="flex mt-8 mb-4">
				<MainHeader text="Register" />
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
						<FormLabel text="Name" />
						<FormInput
							type="text"
							name="name"
							id="name"
							placeholder="Siwapat Kanchana"
						/>
					</div>
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
						<MainButton text="Register" variant="solid" />
					</div>
				</form>
			</FormContainer>
		</div>
	);
};

export default Register;
