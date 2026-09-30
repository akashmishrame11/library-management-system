import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const menuItems = [
        {
            name: "Dashboard",
            path: "/dashboard",
            icon: "🏠",
        },
        {
            name: "Books",
            path: "/books",
            icon: "📚",
        },
        {
            name: "Students",
            path: "/students",
            icon: "🧑‍🎓",
        },
        {
            name: "Issue Book",
            path: "/issue-book",
            icon: "📖",
        },
        {
            name: "Return Book",
            path: "/return-book",
            icon: "🔄",
        },
        {
            name: "Fine & Payment",
            path: "/fine-payment",
            icon: "💰",
        },
    ];

    return (
        <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-[#0b1225] text-white flex flex-col">

            {/* Logo / Header */}
            <div className="px-6 py-5 border-b border-white/10 shrink-0">
                <h1 className="text-xl font-bold leading-7">
                    Library Management
                    <br />
                    System
                </h1>

                <p className="text-blue-400 text-sm mt-1">
                    Admin Panel
                </p>
            </div>

            {/* Menu */}
            <nav className="flex-1 px-3 py-5 overflow-y-auto sidebar-scroll">

                <div className="space-y-2">

                    {menuItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center gap-4 px-4 py-4 rounded-xl
                                font-medium transition-all duration-200
                                ${
                                    isActive
                                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                                        : "text-gray-200 hover:bg-white/10 hover:text-white"
                                }`
                            }
                        >
                            <span className="text-xl w-7 text-center">
                                {item.icon}
                            </span>

                            <span>
                                {item.name}
                            </span>
                        </NavLink>
                    ))}

                </div>

            </nav>

            {/* Logout */}
            <div className="px-3 py-4 border-t border-white/10 shrink-0">

                <NavLink
                    to="/"
                    className="flex items-center gap-4 px-4 py-4 rounded-xl
                    text-gray-200 font-medium
                    hover:bg-red-500/10 hover:text-red-400
                    transition-all duration-200"
                >
                    <span className="text-xl w-7 text-center">
                        🚪
                    </span>

                    <span>
                        Logout
                    </span>
                </NavLink>

            </div>

        </aside>
    );
};

export default Sidebar;