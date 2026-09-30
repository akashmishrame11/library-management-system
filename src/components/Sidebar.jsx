import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

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
            icon: "👨‍🎓",
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
        <aside
            className="
                fixed left-0 top-0 z-50
                h-screen w-64
                bg-slate-950 text-white
                flex flex-col
                shadow-xl
            "
        >

            {/* Logo */}
            <div className="px-6 py-6 border-b border-slate-800 shrink-0">

                <h1 className="text-xl font-bold leading-7">
                    Library Management
                    <br />
                    <span className="text-blue-400">System</span>
                </h1>

                <p className="text-xs text-slate-400 mt-2">
                    Library Admin Panel
                </p>

            </div>


            {/* Scrollable Menu */}
            <nav
                className="
                    flex-1
                    min-h-0
                    overflow-y-auto
                    px-4 py-5
                    space-y-2

                    scrollbar-thin
                    scrollbar-thumb-slate-700
                    scrollbar-track-transparent
                "
            >

                {menuItems.map((item) => {

                    const isActive = location.pathname === item.path;

                    return (
                        <button
                            key={item.path}
                            onClick={() => navigate(item.path)}
                            className={`
                                w-full
                                flex items-center gap-3
                                px-4 py-3
                                rounded-xl
                                text-left
                                transition-all duration-200

                                ${
                                    isActive
                                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                                        : "text-slate-300 hover:bg-slate-800 hover:text-white hover:translate-x-1"
                                }
                            `}
                        >

                            <span className="text-lg">
                                {item.icon}
                            </span>

                            <span className="font-medium">
                                {item.name}
                            </span>

                        </button>
                    );
                })}

            </nav>


            {/* Logout */}
            <div className="px-4 py-4 border-t border-slate-800 shrink-0">

                <button
                    onClick={() => navigate("/")}
                    className="
                        w-full
                        flex items-center gap-3
                        px-4 py-3
                        rounded-xl
                        text-slate-300
                        hover:bg-red-500/15
                        hover:text-red-400
                        transition-all duration-200
                    "
                >

                    <span className="text-lg">
                        🚪
                    </span>

                    <span className="font-medium">
                        Logout
                    </span>

                </button>

            </div>

        </aside>
    );
};

export default Sidebar;