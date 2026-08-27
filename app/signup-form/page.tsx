"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import pryzmaNewLogo from "../../public/Images/pryzmaNewLogo.svg"

export default function SignupForm() {
    const [formData, setFormData] = useState({
        companyName: "",
        contactNumber: "",
        email: "",
        website: "",
        businessType: "",
        otherBusiness: "",
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setErrorMessage("");
    };

    const validateForm = () => {
        if (!formData.companyName.trim()) return "Company Name is required.";
        if (!formData.contactNumber.trim()) return "Contact Number is required.";
        if (!/^\d{10,15}$/.test(formData.contactNumber.replace(/[\s-]/g, ''))) return "Please enter a valid contact number.";
        if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return "Please enter a valid email address.";
        if (!formData.website.trim()) return "Company Website is required.";
        if (!formData.businessType) return "Please select a Business Type.";
        return null;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const validationError = validateForm();
        if (validationError) {
            setErrorMessage(validationError);
            return;
        }

        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                setFormData({ companyName: "", contactNumber: "", email: "", website: "", businessType: "", otherBusiness: "" });
            } else {
                setStatus("error");
                setErrorMessage(data.message || "Failed to submit form.");
            }
        } catch (error) {
            setStatus("error");
            setErrorMessage("Something went wrong. Please try again later.");
        }
    };

    return (
        <div className="flex h-full flex-col px-4 py-3 md:px-8">
            <div className="mx-auto flex w-full max-w-[1200px] flex-1 lg:min-h-0 justify-center">
                {/* <div className="mb-4">
                    <Link
                        href="/"
                        className="inline-block rounded-lg border px-3 py-1.5 text-sm hover:bg-gray-100 transition"
                    >
                        ← Back
                    </Link>
                </div> */}

                <div className="relative my-auto w-full rounded-[2rem] bg-transparent lg:max-h-full lg:rounded-[5.5rem] lg:bg-[#FED410] lg:flex lg:items-stretch lg:gap-6 lg:p-6 lg:overflow-hidden">
                    <div className="hidden lg:flex lg:flex-col lg:justify-center lg:w-[52%] lg:px-6">
                        <h1 className="text-3xl xl:text-5xl font-black text-black leading-tight">
                            Powering Loyalty.
                        </h1>
                        <h1 className="text-3xl xl:text-5xl font-black text-black leading-tight">
                            Driving <span className="text-[#EE5A7A]">Growth.</span>
                        </h1>
                        <p className="mt-4 text-sm xl:text-base text-black/90 max-w-md leading-relaxed">
                            Pryzma is designed for brands that want to scale
                            smarter. From single outlets to multi-location
                            businesses, our platform adapts to your needs—helping
                            you manage, engage, and grow with ease.
                        </p>
                    </div>

                    <div className="lg:flex-1 lg:flex lg:items-stretch lg:max-w-[440px]">
                        <div className="relative w-full rounded-[2rem] bg-white p-5 shadow-lg md:p-7 lg:flex lg:w-full lg:flex-col lg:justify-center lg:p-6 lg:shadow-none">
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <h1 className="text-xl font-bold mb-1 md:text-2xl lg:mb-0.5">
                                        Contact Us For Invite
                                    </h1>

                                    <p className="text-gray-500 text-sm mb-4 lg:mb-2">
                                        Fill in your details and our team will contact you.
                                    </p>
                                </div>

                                <Image
                                    src={pryzmaNewLogo}
                                    alt="Pryzma"
                                    width={90}
                                    height={71}
                                    className="h-auto w-14 shrink-0 md:w-[90px]"
                                />
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5 lg:space-y-3">
                        <div className="space-y-3 lg:space-y-2">
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Company Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    required
                                    className="w-full border rounded-xl px-3 py-2 text-sm focus:border-[2px] focus:outline-none focus:border-[#FF4D6D] lg:py-1.5"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Contact Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                    required
                                    className="w-full border rounded-xl px-3 py-2 text-sm focus:border-[2px] focus:outline-none focus:border-[#FF4D6D] lg:py-1.5"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Organization Mail ID <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full border rounded-xl px-3 py-2 text-sm focus:border-[2px] focus:outline-none focus:border-[#FF4D6D] lg:py-1.5"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Company Website <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleChange}
                                    required
                                    className="w-full border rounded-xl px-3 py-2 text-sm focus:border-[2px] focus:outline-none focus:border-[#FF4D6D] lg:py-1.5"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2 lg:mb-1">
                                What Business <span className="text-red-500">*</span>
                            </label>

                            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 lg:gap-y-1">
                                {["Cafe", "Restaurant", "Hotel"].map((type) => (
                                    <label
                                        key={type}
                                        className="flex items-center gap-2 cursor-pointer text-sm"
                                    >
                                        <input
                                            type="radio"
                                            name="businessType"
                                            value={type}
                                            checked={formData.businessType === type}
                                            onChange={handleChange}
                                            className="w-4 h-4 accent-[#FF4D6D] "
                                        />
                                        <span>{type}</span>
                                    </label>
                                ))}

                                <div className="flex items-center gap-2 text-sm">
                                    <input
                                        type="radio"
                                        name="businessType"
                                        value="Other"
                                        checked={formData.businessType === "Other"}
                                        onChange={handleChange}
                                        className="w-4 h-4 accent-[#FF4D6D]"
                                    />

                                    <span>Other:</span>

                                    <input
                                        type="text"
                                        name="otherBusiness"
                                        value={formData.otherBusiness}
                                        onChange={handleChange}
                                        className="flex-1 border-b border-gray-300 outline-none px-1 py-1 focus:border-b-[2px]  focus:outline-none focus:border-[#FF4D6D] "
                                    />
                                </div>
                            </div>
                        </div>

                        {errorMessage && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 text-sm rounded relative" role="alert">
                                <span className="block sm:inline">{errorMessage}</span>
                            </div>
                        )}

                        {status === "success" && (
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 text-sm rounded relative" role="alert">
                                <span className="block sm:inline">Thank you! Your request has been submitted successfully. We will get in touch with you shortly.</span>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="w-full bg-[#FF4D6D] cursor-pointer text-white py-2.5 lg:py-2 rounded-xl font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition"
                        >
                            {status === "loading" ? "Submitting..." : "Submit Request"}
                        </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}