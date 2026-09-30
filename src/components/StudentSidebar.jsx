import { useNavigate, useLocation } from "react-router-dom";

const StudentSidebar = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        {
            name: "Dashboard",
            icon: "🏠",
            path: "/student-dashboard"
        },
        {
            name: "Browse Books",
            icon: "📚",
            path: "/browse-books"
        },
        {
            name: "My Books",
            icon: "📖",
            path: "/my-books"
        },
        {
            name: "My Fine",
            icon: "💰",
            path: "/my-fine"
        },
        {
            name: "My Profile",
            icon: "👤",
            path: "/my-profile"
        }
    ];

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-950 text-white p-5 flex flex-col">

            {/* Logo */}
            <div className="mb-10 px-2">

                <h1 className="text-xl font-bold">
                    Library Management
                </h1>

                <h2 className="text-xl font-bold text-blue-500">
                    Student
                </h2>

                <p className="text-sm text-gray-400 mt-2">
                    Student Panel
                </p>

            </div>


            {/* Menu */}
            <nav className="space-y-2">

                {menuItems.map((item) => {

                    const isActive = location.pathname === item.path;

                    return (
                        <button
                            key={item.path}
                            onClick={() => navigate(item.path)}
                            className={`
                                w-full flex items-center gap-4
                                px-4 py-3 rounded-xl
                                font-medium transition-all duration-200
                                ${
                                    isActive
                                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                                        : "text-gray-300 hover:bg-slate-800 hover:text-white"
                                }
                            `}
                        >

                            <span className="text-xl">
                                {item.icon}
                            </span>

                            <span>
                                {item.name}
                            </span>

                        </button>
                    );
                })}

            </nav>


            {/* Logout */}
            <button
                onClick={() => navigate("/")}
                className="mt-auto w-full flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:bg-red-600 hover:text-white transition-all duration-200"
            >

                <span className="text-xl">
                    🚪
                </span>

                <span className="font-medium">
                    Logout
                </span>

            </button>

        </aside>
    );
};

export default StudentSidebar;