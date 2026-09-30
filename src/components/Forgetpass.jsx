import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        setMessage("");
        setError("");

        if (!username.trim()) {
            setError("Please enter your username.");
            return;
        }

        const students = [
            {
                username: "rahul",
                email: "rahul@gmail.com"
            },
            {
                username: "amit",
                email: "amit@gmail.com"
            },
            {
                username: "priya",
                email: "priya@gmail.com"
            }
        ];

        const student = students.find(
            (item) =>
                item.username.toLowerCase() ===
                username.toLowerCase()
        );

        if (student) {

            setMessage(
                `Password reset instructions have been sent to ${student.email}`
            );

        } else {

            setError("Username not found.");

        }
    };


    return (

        <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">

            <div className="w-full max-w-md">

                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">


                    {/* Header */}

                    <div className="bg-slate-900 px-8 py-8 text-center">

                        <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-600 flex items-center justify-center text-3xl">
                            🔐
                        </div>

                        <h1 className="text-2xl font-bold text-white mt-5">
                            Forgot Password?
                        </h1>

                        <p className="text-gray-300 mt-2">
                            Reset your library account password
                        </p>

                    </div>


                    {/* Form */}

                    <div className="p-7 sm:p-8">

                        <h2 className="text-xl font-bold text-gray-800">
                            Reset Password
                        </h2>

                        <p className="text-gray-500 text-sm mt-1 mb-6">
                            Enter your username to receive reset instructions.
                        </p>


                        <form onSubmit={handleSubmit}>

                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Username
                            </label>

                            <div className="relative mb-5">

                                <span className="absolute left-4 top-1/2 -translate-y-1/2">
                                    👤
                                </span>

                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => {
                                        setUsername(e.target.value);
                                        setError("");
                                        setMessage("");
                                    }}
                                    placeholder="Enter your username"
                                    className="w-full pl-11 pr-4 py-3.5 border border-gray-300 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                                />

                            </div>


                            {/* Error */}

                            {error && (

                                <div className="mb-5 px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
                                    {error}
                                </div>

                            )}


                            {/* Success */}

                            {message && (

                                <div className="mb-5 px-4 py-3 rounded-lg bg-green-50 border border-green-200 text-green-600 text-sm">
                                    {message}
                                </div>

                            )}


                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition"
                            >
                                Send Reset Instructions
                            </button>

                        </form>


                        {/* Back to Login */}

                        <button
                            onClick={() => navigate("/")}
                            className="w-full mt-4 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition"
                        >
                            ← Back to Login
                        </button>

                    </div>

                </div>


                <p className="text-center text-sm text-gray-400 mt-5">
                    © 2026 Library Management System
                </p>

            </div>

        </div>
    );
};

export default ForgotPassword;