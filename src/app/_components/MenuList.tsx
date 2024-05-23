"use client";

import Link from "next/link";

type props = {
	text: string;
	route: string;
};

const MenuList = ({ text, route }: props) => {
	return (
		<div className="border-b-4 border-white hover:border-green-800">
			<Link className="flex font-medium text-lg" href={`/${route}`}>
				{text}
			</Link>
		</div>
	);
};

export default MenuList;
