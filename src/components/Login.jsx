import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [role, setRole] = useState("student");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const students = [
        {
            username: "rahul",
            password: "rahul123",
            name: "Rahul Kumar",
            email: "rahul@gmail.com",
            course: "BCA",
        },
        {
            username: "amit",
            password: "amit123",
            name: "Amit Sharma",
            email: "amit@gmail.com",
            course: "BCA",
        },
        {
            username: "priya",
            password: "priya123",
            name: "Priya Singh",
            email: "priya@gmail.com",
            course: "BCA",
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        const enteredUsername = username.trim().toLowerCase();

        setError("");

        // =========================
        // ADMIN LOGIN
        // =========================
        if (role === "admin") {

            if (
                enteredUsername === "admin" &&
                password === "admin123"
            ) {

                sessionStorage.clear();

                sessionStorage.setItem(
                    "user",
                    JSON.stringify({
                        role: "admin",
                        name: "Admin",
                    })
                );

                navigate("/dashboard");

            } else {
                setError("Invalid admin username or password.");
            }

            return;
        }


        // =========================
        // STUDENT LOGIN
        // =========================
        const student = students.find(
            (item) =>
                item.username === enteredUsername &&
                item.password === password
        );

        if (student) {

            sessionStorage.clear();

            sessionStorage.setItem(
                "student",
                JSON.stringify(student)
            );

            sessionStorage.setItem(
                "user",
                JSON.stringify({
                    role: "student",
                    name: student.name,
                })
            );

            navigate("/student-dashboard");

        } else {
            setError("Invalid username or password.");
        }
    };


    // QUICK DEMO LOGIN
    const demoLogin = (student) => {

        setRole("student");
        setUsername(student.username);
        setPassword(student.password);
        setError("");

    };


    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-8">

            <div className="w-full max-w-sm">

                {/* LOGIN CARD */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">


                    {/* ================= HEADER ================= */}
                    <div className="bg-slate-950 text-white text-center px-6 py-5">

                        {/* ICON */}
                        <div className="w-12 h-12 mx-auto bg-blue-600 rounded-xl flex items-center justify-center shadow-md mb-3">

                            <span className="text-2xl">
                                📚
                            </span>

                        </div>


                        <h1 className="text-lg font-bold">
                            Library Management
                        </h1>

                        <p className="text-xs text-gray-300 mt-1">
                            {role === "student"
                                ? "Student Portal"
                                : "Admin Portal"}
                        </p>

                    </div>


                    {/* ================= FORM ================= */}
                    <div className="px-5 py-5">

                        <div className="mb-4">

                            <h2 className="text-lg font-semibold text-gray-900">
                                Welcome Back
                            </h2>

                            <p className="text-xs text-gray-500 mt-1">
                                Login to access your{" "}
                                {role === "student"
                                    ? "student"
                                    : "admin"}{" "}
                                account
                            </p>

                        </div>


                        {/* ================= ROLE TOGGLE ================= */}
                        <div className="flex bg-gray-100 rounded-lg p-1 mb-4">

                            <button
                                type="button"
                                onClick={() => {
                                    setRole("student");
                                    setError("");
                                    setUsername("");
                                    setPassword("");
                                }}
                                className={`w-1/2 py-1.5 text-xs font-medium rounded-md transition ${
                                    role === "student"
                                        ? "bg-white text-blue-600 shadow-sm"
                                        : "text-gray-500 hover:text-gray-700"
                                }`}
                            >
                                Student
                            </button>

                            <button
                                type="button"
                                onClick={() => {
                                    setRole("admin");
                                    setError("");
                                    setUsername("");
                                    setPassword("");
                                }}
                                className={`w-1/2 py-1.5 text-xs font-medium rounded-md transition ${
                                    role === "admin"
                                        ? "bg-white text-blue-600 shadow-sm"
                                        : "text-gray-500 hover:text-gray-700"
                                }`}
                            >
                                Admin
                            </button>

                        </div>


                        <form onSubmit={handleSubmit}>


                            {/* USERNAME */}
                            <div className="mb-3">

                                <label className="block text-[10px] font-medium text-gray-700 mb-1.5">
                                    Username
                                </label>

                                <div className="relative">

                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-700 text-xs">
                                        👤
                                    </span>

                                    <input
                                        type="text"
                                        value={username}
                                        onChange={(e) =>
                                            setUsername(e.target.value)
                                        }
                                        placeholder={
                                            role === "student"
                                                ? "Enter your username"
                                                : "Enter admin username"
                                        }
                                        className="w-full h-9 pl-8 pr-3 text-xs border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                                        required
                                    />

                                </div>

                            </div>


                            {/* PASSWORD */}
                            <div className="mb-3">

                                <label className="block text-[10px] font-medium text-gray-700 mb-1.5">
                                    Password
                                </label>

                                <div className="relative">

                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500 text-xs">
                                        🔒
                                    </span>

                                    <input
                                        type={
                                            showPassword
                                                ? "text"
                                                : "password"
                                        }
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        placeholder="Enter your password"
                                        className="w-full h-9 pl-8 pr-9 text-xs border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                                        required
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(
                                                !showPassword
                                            )
                                        }
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 text-xs"
                                    >
                                        {showPassword ? "🙈" : "👁️"}
                                    </button>

                                </div>

                            </div>


                            {/* ERROR */}
                            {error && (
                                <div className="bg-red-50 border border-red-200 text-red-600 rounded-lg px-3 py-2 mb-3 text-[10px]">
                                    {error}
                                </div>
                            )}


                            {/* LOGIN BUTTON */}
                            <button
                                type="submit"
                                className="w-full h-9 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition shadow-sm hover:shadow-md"
                            >
                                Login
                            </button>

                        </form>


                        {/* ================= DEMO ================= */}
                        <div className="border-t border-gray-200 mt-4 pt-3">

                            <p className="text-[9px] text-gray-400 text-center mb-2">
                                {role === "student"
                                    ? "Demo Student Account"
                                    : "Demo Admin Account"}
                            </p>


                            {role === "student" ? (

                                <>

                                    <div className="flex justify-center gap-2 flex-wrap">

                                        <button
                                            type="button"
                                            onClick={() =>
                                                demoLogin(
                                                    students[0]
                                                )
                                            }
                                            className="px-2.5 py-1 bg-gray-50 border border-gray-200 rounded-md text-[9px] text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition"
                                        >
                                            Rahul
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                demoLogin(
                                                    students[1]
                                                )
                                            }
                                            className="px-2.5 py-1 bg-gray-50 border border-gray-200 rounded-md text-[9px] text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition"
                                        >
                                            Amit
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                demoLogin(
                                                    students[2]
                                                )
                                            }
                                            className="px-2.5 py-1 bg-gray-50 border border-gray-200 rounded-md text-[9px] text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition"
                                        >
                                            Priya
                                        </button>

                                    </div>


                                    <p className="text-[8px] text-center text-gray-400 mt-2">
                                        Click a name to fill login details
                                    </p>

                                </>

                            ) : (

                                <div className="text-center">

                                    <button
                                        type="button"
                                        onClick={() => {
                                            setUsername("admin");
                                            setPassword("admin123");
                                        }}
                                        className="px-3 py-1.5 bg-blue-50 border border-blue-100 text-blue-600 rounded-md text-[9px] hover:bg-blue-100 transition"
                                    >
                                        Admin Demo
                                    </button>

                                    <p className="text-[8px] text-gray-400 mt-2">
                                        Username: admin &nbsp; | &nbsp;
                                        Password: admin123
                                    </p>

                                </div>

                            )}

                        </div>

                    </div>

                </div>


                {/* FOOTER */}
                <p className="text-center text-[9px] text-gray-400 mt-4">
                    © 2026 Library Management System
                </p>

            </div>

        </div>
    );
};

export default Login;