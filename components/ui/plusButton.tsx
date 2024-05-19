// app/components/ui/plusButton.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { ButtonWithFileUpload } from "@/components/ui/ButtonWithFileUpload";

const PlusButton = () => {
	const [isClicked, setIsClicked] = useState(false);
	const [isIDDrawerOpen, setIsIDDrawerOpen] = useState(false);

	const handleClick = () => {
		setIsClicked(true);
	};

	const handleReset = () => {
		setIsClicked(false);
		setIsIDDrawerOpen(false);
	};

	const handlePlaceMarker = () => {
		setIsIDDrawerOpen(true);
	};

	return (
		<div className="fixed inset-x-0 bottom-0 p-4">
			{!isClicked ? (
				<Button
					variant="primary"
					size="icon"
					className="bg-black text-white rounded-full w-full flex justify-center items-center"
					onClick={handleClick}
				>
					<Plus className="w-6 h-6" />
				</Button>
			) : (
				<div className="bg-black text-white w-full p-4 rounded-t-lg flex justify-between items-center">
					<Button
						variant="primary"
						className="flex-1 mr-2"
						onClick={handlePlaceMarker}
					>
						Place marker
					</Button>
					<Button
						variant="secondary"
						size="icon"
						className="rounded-full"
						onClick={handleReset}
					>
						<Minus className="w-6 h-6" />
					</Button>
				</div>
			)}

			<Drawer open={isIDDrawerOpen} onOpenChange={setIsIDDrawerOpen}>
				<DrawerTrigger asChild>
					<Button className="hidden">Open</Button>
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<div className="mx-auto">
							<DrawerTitle>BC Driver's License Upload</DrawerTitle>
							<DrawerDescription>
								Please enter a copy of your BC's Driver License.
							</DrawerDescription>
						</div>
					</DrawerHeader>
					<DrawerFooter>
						<div className="mx-auto">
							<ButtonWithFileUpload></ButtonWithFileUpload>
						</div>
						<DrawerClose>
							<Button variant="outline">Cancel</Button>
						</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	);
};

export default PlusButton;
