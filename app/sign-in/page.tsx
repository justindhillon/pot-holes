"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "../../components/ui/card";
import { Label } from "../../components/ui/label";
import { BackgroundGradient } from "../../components/ui/background-gradient";
import { Button } from "../../components/ui/button";

const AuthenticationPage = () => {
	const [error, setError] = useState<string | null>(null);
	const [isClient, setIsClient] = useState(false);
	const [file, setFile] = useState<File | null>(null);
	const [filePreview, setFilePreview] = useState<string | null>(null);
	const router = useRouter();

	useEffect(() => {
		setIsClient(true);
	}, []);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = event.target.files?.[0] || null;
		setFile(selectedFile);
		if (selectedFile) {
			setFilePreview(URL.createObjectURL(selectedFile));
		}
	};

	const handleUploadComplete = async () => {
		if (!file) {
			setError("No file selected. Please try again.");
			return;
		}

		router.push("/maps");
	};

	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-100">
			<BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 shadow-lg">
				<Card className="w-full max-w-md">
					<CardHeader>
						<CardTitle className="text-center text-2xl font-bold text-gray-700">
							BC Driver's License Authentication
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="mb-4">
							<Label
								htmlFor="driversLicense"
								className="block text-sm font-medium text-gray-700"
							></Label>
							{isClient && (
								<div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-300 rounded-md">
									{filePreview ? (
										<img
											src={filePreview}
											alt="Preview"
											className="max-h-48 object-contain"
										/>
									) : (
										<div className="space-y-1 text-center">
											<svg
												className="mx-auto h-12 w-12 text-gray-400"
												stroke="currentColor"
												fill="none"
												viewBox="0 0 48 48"
												aria-hidden="true"
											>
												<path
													d="M28 8H12a2 2 0 00-2 2v28a2 2 0 002 2h24a2 2 0 002-2V20L28 8z"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
											<div className="flex text-sm text-gray-600">
												<label
													htmlFor="file-upload"
													className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
												>
													<span>Upload a file</span>
													<input
														id="file-upload"
														name="file-upload"
														type="file"
														className="sr-only"
														onChange={handleFileChange}
													/>
												</label>
												<p className="pl-1">or drag and drop</p>
											</div>
											<p className="text-xs text-gray-500">
												PNG, JPG, GIF up to 10MB
											</p>
										</div>
									)}
								</div>
							)}
						</div>
						<Button
							onClick={handleUploadComplete}
							className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md"
						>
							Upload and Authenticate
						</Button>
						{error && <p className="mt-2 text-red-600 text-center">{error}</p>}
					</CardContent>
				</Card>
			</BackgroundGradient>
		</div>
	);
};

export default AuthenticationPage;
