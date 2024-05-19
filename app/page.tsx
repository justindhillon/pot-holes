import Image from "next/image";
import PlusButton from "@/components/ui/plusButton";

export default function Home() {
	return (
		<div className="relative h-screen">
			{/* Background Image */}
			<img
				src="/path/to/your/image.jpg"
				alt="Background"
				className="absolute inset-0 w-full h-full object-cover z-0"
			/>

			{/* Overlay Components */}
			<div className="relative z-10 p-4">
				<h1 className="text-4xl font-bold text-black">Overlay</h1>
				<p className="text-lg text-black mt-2">Overlay content goes here.</p>
				<PlusButton />
			</div>
		</div>
	);
}
