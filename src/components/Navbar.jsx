import { useEffect, useState } from "react";

const Navbar = () => {

    const [admin, setAdmin] = useState({
        name: "Admin",
    });

    useEffect(() => {

        const data = sessionStorage.getItem("user");

        if (data) {
            const user = JSON.parse(data);

            setAdmin({
                name: user.name || "Admin",
            });
        }

    }, []);

    return (
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 lg:px-8 sticky top-0 z-20">

            {/* LEFT */}
            <div className="pl-14 lg:pl-0">

                <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    Dashboard
                </h1>

            </div>


            {/* RIGHT */}
            <div className="flex items-center gap-3 sm:gap-4">

                <div className="hidden sm:block text-right">

                    <p className="text-sm font-medium text-gray-800">
                        {admin.name}
                    </p>

                    <p className="text-xs text-gray-500">
                        Administrator
                    </p>

                </div>


                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold shadow-sm">
                    {admin.name.charAt(0).toUpperCase()}
                </div>

            </div>

        </header>
    );
};

export default Navbar;