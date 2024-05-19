import { useState } from "react";
import { FileIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export function ButtonWithFileUpload() {
	const [selectedFile, setSelectedFile] = useState(null);

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			setSelectedFile(file);
			console.log(file); // For demonstration; remove or replace with appropriate handling
		}
	};

	return (
		<label>
			<input
				type="file"
				accept="image/*"
				onChange={handleFileChange}
				style={{ display: "none" }}
			/>
			<Button as="span" role="button">
				<FileIcon className="mr-2 h-4 w-4" />
				Upload Image
			</Button>
		</label>
	);
}
