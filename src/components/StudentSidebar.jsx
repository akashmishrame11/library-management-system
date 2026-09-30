import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const StudentSidebar = () => {

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {

        const toggleSidebar = () => {
            setIsOpen(prev => !prev);
        };

        window.addEventListener(
            "toggle-student-sidebar",
            toggleSidebar
        );

        return () => {
            window.removeEventListener(
                "toggle-student-sidebar",
                toggleSidebar
            );
        };

    }, []);


    const closeSidebar = () => {
        setIsOpen(false);
    };


    const studentData = sessionStorage.getItem("student");

    const student = studentData
        ? JSON.parse(studentData)
        : null;


    const handleLogout = () => {

        sessionStorage.removeItem("student");

        navigate("/");

    };


    const menuItems = [
        {
            name: "Dashboard",
            path: "/student-dashboard",
            icon: "🏠"
        },
        {
            name: "Browse Books",
            path: "/browse-books",
            icon: "📚"
        },
        {
            name: "My Books",
            path: "/my-books",
            icon: "📖"
        },
        {
            name: "My Fine",
            path: "/my-fine",
            icon: "💰"
        },
        {
            name: "My Profile",
            path: "/my-profile",
            icon: "👤"
        }
    ];


    return (
        <>

            {/* Overlay */}
            {isOpen && (
                <div
                    onClick={closeSidebar}
                    className="
                        fixed
                        inset-0
                        bg-black/50
                        z-40
                        lg:hidden
                    "
                />
            )}


            {/* Sidebar */}
            <aside
                className={`
                    fixed
                    top-0
                    left-0
                    z-50
                    h-screen
                    w-64
                    bg-slate-950
                    text-white
                    flex
                    flex-col
                    transition-transform
                    duration-300

                    ${
                        isOpen
                            ? "translate-x-0"
                            : "-translate-x-full lg:translate-x-0"
                    }
                `}
            >

                {/* Header */}
                <div className="px-6 py-6 border-b border-slate-800">

                    <h1 className="text-xl font-bold">
                        Library Management
                    </h1>

                    <h2 className="text-xl font-bold text-blue-400">
                        Student
                    </h2>

                    <p className="text-sm text-slate-400 mt-2">
                        Student Panel
                    </p>

                </div>


                {/* Menu */}
                <nav className="flex-1 overflow-y-auto px-3 py-5">

                    <div className="space-y-2">

                        {menuItems.map((item) => (

                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={closeSidebar}

                                className={({ isActive }) => `
                                    flex
                                    items-center
                                    gap-4
                                    px-4
                                    py-3
                                    rounded-xl
                                    font-medium
                                    transition-all
                                    duration-200

                                    ${
                                        isActive
                                            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                                            : "text-slate-300 hover:bg-slate-800 hover:text-white"
                                    }
                                `}
                            >

                                <span className="text-xl">
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
                <div className="border-t border-slate-800 p-3">

                    <button
                        onClick={handleLogout}
                        className="
                            w-full
                            flex
                            items-center
                            gap-4
                            px-4
                            py-3
                            rounded-xl
                            text-slate-300
                            hover:bg-red-500/10
                            hover:text-red-400
                            transition
                        "
                    >

                        <span className="text-lg">
                            🚪
                        </span>

                        Logout

                    </button>

                </div>

            </aside>

        </>
    );
};

export default StudentSidebar;