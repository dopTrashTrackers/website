import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const NewCamera = () => {
    const [place, setPlace] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [downloadUrl, setDownloadUrl] = useState("");
    const { slug } = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        setDownloadUrl("");

        try {
            const formData = new FormData();
            formData.append("postoffice_id", slug);
            formData.append("place", place);

            const response = await axios.post(
                "https://modelapi-pniz.onrender.com/new-file/",
                formData,
                {
                    responseType: "blob",
                }
            );

            const blob = new Blob([response.data], { type: "text/x-python" });
            const url = window.URL.createObjectURL(blob);
            setDownloadUrl(url);
        } catch (err) {
            setError("Failed to generate file.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-8 mb-10 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                Generate Camera Client Script
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-gray-700 font-medium mb-2">
                        Place:
                        <input
                            type="text"
                            value={place}
                            onChange={(e) => setPlace(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </label>
                </div>
                <div className="flex justify-between">
                    <button
                        type="submit"
                        disabled={loading}
                        className={`!py-2 !px-4 rounded-md text-white font-semibold transition-colors ${
                            loading
                                ? "bg-blue-300 cursor-not-allowed"
                                : "bg-blue-600 hover:bg-blue-700"
                        }`}
                    >
                        {loading ? "Generating..." : "Generate Script"}
                    </button>
                    {downloadUrl && (
                        <div className="mt-4 text-center">
                            <a
                                href={downloadUrl}
                                download="client.py"
                                className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
                            >
                                Download client.py
                            </a>
                        </div>
                    )}
                </div>
            </form>
            {error && (
                <div className="mt-4 text-red-600 text-center font-medium">
                    {error}
                </div>
            )}
        </div>
    );
};

export default NewCamera;