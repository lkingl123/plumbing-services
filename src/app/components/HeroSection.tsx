"use client";

import { useState } from "react";

export default function HeroSection() {
    const [formData, setFormData] = useState({ name: "", email: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Example preparation for backend connection
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("Form submitted successfully");
                // Add any success logic here (e.g., showing a message or redirecting)
            } else {
                console.error("Error submitting form");
            }
        } catch (error) {
            console.error("Error connecting to server:", error);
        }
    };

    return (
        <section className="bg-blue-900 text-white py-16 relative">
            <div className="max-w-4xl mx-auto text-center px-4">
                {/* Main Heading */}
                <h1 className="text-5xl font-extrabold tracking-tight leading-tight">
                    Plumbing Solutions Made Easy
                </h1>

                {/* Subtext */}
                <p className="mt-6 text-lg font-light leading-relaxed">
                    Partner with the team for Plumbing Websites, Plumbing Marketing Tools, and Strategic Consulting.
                    <br />
                    We brand the future of plumbing.
                </p>

                {/* Call-to-Action Form */}
                <div className="mt-8 bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto text-gray-800">
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        {/* Full Name Input */}
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="flex-1 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />

                        {/* Email Input */}
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="flex-1 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition duration-300 text-center"
                        >
                            Request a Demo
                        </button>
                    </form>
                </div>
            </div>

            {/* Features Section */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
                {/* Feature 1 */}
                <div className="bg-blue-800 rounded-lg p-6 shadow-lg text-center">
                    <h3 className="text-lg font-semibold">Logo Design</h3>
                    <p className="mt-3 text-sm">
                        Your practice's success journey begins with branding and quickly becomes a matter of optimizing content and storytelling.
                    </p>
                    <a
                        href="/services-programs/branding"
                        className="mt-4 inline-block text-blue-400 hover:underline text-sm font-medium"
                    >
                        200+ Plumbing Logos ?
                    </a>
                </div>

                {/* Feature 2 */}
                <div className="bg-blue-800 rounded-lg p-6 shadow-lg text-center">
                    <h3 className="text-lg font-semibold">Website Design & Hosting</h3>
                    <p className="mt-3 text-sm">
                        We love to design amazing plumbing websites and build data-driven marketing plans proven to grow practices.
                    </p>
                    <a
                        href="/services-programs/web-design"
                        className="mt-4 inline-block text-blue-400 hover:underline text-sm font-medium"
                    >
                        200+ Plumbing Websites ?
                    </a>
                </div>

                {/* Feature 3 */}
                <div className="bg-blue-800 rounded-lg p-6 shadow-lg text-center">
                    <h3 className="text-lg font-semibold">SEO & Online Advertising</h3>
                    <p className="mt-3 text-sm">
                        Together, we can engage a broader audience and educate your community on the importance of plumbing care.
                    </p>
                    <a
                        href="/services-programs/seo"
                        className="mt-4 inline-block text-blue-400 hover:underline text-sm font-medium"
                    >
                        2x Your Customer Reach ?
                    </a>
                </div>
            </div>
        </section>
    );
}
