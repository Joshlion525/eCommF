import React, { useState } from "react";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
	const [user, setUser] = useState(null); // Replace with actual authentication logic
	const [dropdownOpen, setDropdownOpen] = useState(false);

	return (
		<div className="flex justify-between px-10 py-5 items-center relative">
			<div className="flex gap-10 items-center">
				<h1 className="font-bold text-3xl">SHOP.CO</h1>
				<ul className="flex gap-5">
					<li>
						<a href="#">Shop</a>
					</li>
					<li>
						<a href="#">On Sale</a>
					</li>
					<li>
						<a href="#">New Arrivals</a>
					</li>
					<li>
						<a href="#">Brands</a>
					</li>
				</ul>
				<div className="flex items-center gap-3 bg-gray-200 rounded-full p-3">
					<IoSearchOutline className="text-2xl" />
					<input
						type="text"
						placeholder="Search..."
						className="border-0 outline-0 w-full bg-transparent"
					/>
				</div>
			</div>
			<div className="flex gap-5 items-center relative">
				<IoCartOutline className="text-3xl cursor-pointer" />
				<div className="relative">
					<CgProfile
						className="text-3xl cursor-pointer"
						onClick={() => setDropdownOpen(!dropdownOpen)}
					/>
					{dropdownOpen && (
						<div className="absolute right-0 mt-2 w-48 bg-gray-2 	00 shadow-lg rounded-lg p-3">
							{user ? (
								<div>
									<p className="font-bold">{user.name}</p>
									<p className="text-sm text-gray-600">
										{user.email}
									</p>
								</div>
							) : (
								<div className="text-center">
									<p className="text-sm">
										Please sign up or log in
									</p>
									<div className="mt-2">
										<a
											href="/signup"
											className="text-blue-500 hover:underline block"
										>
											Sign Up
										</a>
										<a
											href="/login"
											className="text-blue-500 hover:underline block"
										>
											Login
										</a>
									</div>
								</div>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
