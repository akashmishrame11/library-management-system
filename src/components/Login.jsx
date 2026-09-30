import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const students = [
        {
            username: "rahul",
            password: "1234",
            name: "Rahul Kumar",
            email: "rahul@gmail.com",
            course: "BCA"
        },
        {
            username: "amit",
            password: "1234",
            name: "Amit Sharma",
            email: "amit@gmail.com",
            course: "BCA"
        },
        {
            username: "priya",
            password: "1234",
            name: "Priya Singh",
            email: "priya@gmail.com",
            course: "BCA"
        }
    ];


    const handleSubmit = (e) => {

        e.preventDefault();

        setError("");

        // ADMIN LOGIN
        if (username === "admin" && password === "admin123") {

            sessionStorage.removeItem("student");

            navigate("/dashboard");

            return;
        }


        // STUDENT LOGIN
        const student = students.find(
            (item) =>
                item.username.toLowerCase() === username.toLowerCase() &&
                item.password === password
        );


        if (student) {

            // Current student save hoga
            sessionStorage.setItem(
                "student",
                JSON.stringify(student)
            );

            navigate("/student-dashboard");

        } else {

            setError("Invalid username or password");

        }
    };


    return (

        <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-8">

            <div className="w-full max-w-md">

                {/* LOGIN CARD */}

                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">


                    {/* TOP SECTION */}

                    <div className="bg-slate-900 px-8 py-8 text-center">

                        <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-600 flex items-center justify-center text-3xl shadow-lg">
                            📚
                        </div>

                        <h1 className="text-2xl sm:text-3xl font-bold text-white mt-5">
                            Library Management
                        </h1>

                        <p className="text-gray-300 mt-2">
                            Student Portal
                        </p>

                    </div>


                    {/* FORM SECTION */}

                    <div className="p-7 sm:p-8">

                        <div className="mb-7">

                            <h2 className="text-2xl font-bold text-gray-800">
                                Welcome Back
                            </h2>

                            <p className="text-gray-500 mt-1">
                                Login to access your student account
                            </p>

                        </div>


                        <form onSubmit={handleSubmit}>


                            {/* USERNAME */}

                            <div className="mb-5">

                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Username
                                </label>

                                <div className="relative">

                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                        👤
                                    </span>

                                    <input
                                        type="text"
                                        value={username}
                                        onChange={(e) => {
                                            setUsername(e.target.value);
                                            setError("");
                                        }}
                                        placeholder="Enter your username"
                                        className="w-full pl-11 pr-4 py-3.5 border border-gray-300 rounded-xl outline-none text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                                    />

                                </div>

                            </div>


                            {/* PASSWORD */}

                            <div className="mb-5">

                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Password
                                </label>

                                <div className="relative">

                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                        🔒
                                    </span>

                                    <input
                                        type={
                                            showPassword
                                                ? "text"
                                                : "password"
                                        }
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                            setError("");
                                        }}
                                        placeholder="Enter your password"
                                        className="w-full pl-11 pr-12 py-3.5 border border-gray-300 rounded-xl outline-none text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                                    />


                                    {/* SHOW PASSWORD */}

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition"
                                    >
                                        {showPassword ? "🙈" : "👁️"}
                                    </button>

                                </div>

                            </div>


                            {/* ERROR */}

                            {error && (

                                <div className="mb-5 px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
                                    {error}
                                </div>

                            )}


                            {/* LOGIN BUTTON */}

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg active:scale-[0.99] transition"
                            >
                                Login
                            </button>

                        </form>


                        {/* DEMO LOGIN */}

                        <div className="mt-7 pt-6 border-t border-gray-200">

                            <p className="text-xs text-gray-400 text-center mb-3">
                                Demo Student Account
                            </p>

                            <div className="flex justify-center gap-2 flex-wrap">

                                <span className="px-3 py-1.5 bg-gray-100 rounded-lg text-xs text-gray-600">
                                    rahul
                                </span>

                                <span className="px-3 py-1.5 bg-gray-100 rounded-lg text-xs text-gray-600">
                                    amit
                                </span>

                                <span className="px-3 py-1.5 bg-gray-100 rounded-lg text-xs text-gray-600">
                                    priya
                                </span>

                                <span className="px-3 py-1.5 bg-blue-50 rounded-lg text-xs text-blue-600">
                                    Password: 1234
                                </span>

                            </div>

                        </div>

                    </div>

                </div>


                {/* FOOTER */}

                <p className="text-center text-sm text-gray-400 mt-5">
                    © 2026 Library Management System
                </p>

            </div>

        </div>
    );
};

export default Login;