const Navbar = () => {

    return (

        <header className="fixed lg:static top-0 left-0 right-0 z-30 h-16 lg:h-20 bg-white border-b border-slate-200 shadow-sm">

            <div className="h-full flex items-center justify-between px-4 sm:px-6 lg:px-8 pl-16 lg:pl-8">


                {/* Page Title */}

                <div>

                    <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
                        Dashboard
                    </h2>

                    <p className="hidden sm:block text-xs text-slate-400 mt-0.5">
                        Library Management System
                    </p>

                </div>


                {/* Right Section */}

                <div className="flex items-center gap-3 sm:gap-4">


                    {/* Notification */}

                    <button
                        className="hidden sm:flex w-10 h-10 rounded-xl items-center justify-center text-lg text-slate-500 hover:bg-slate-100 hover:text-blue-600 transition"
                        title="Notifications"
                    >
                        🔔
                    </button>


                    {/* Divider */}

                    <div className="hidden sm:block h-8 w-px bg-slate-200"></div>


                    {/* Admin */}

                    <div className="flex items-center gap-3">

                        <div className="hidden sm:block text-right">

                            <p className="text-sm font-semibold text-slate-700">
                                Admin
                            </p>

                            <p className="text-xs text-slate-400">
                                Administrator
                            </p>

                        </div>


                        <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-md shadow-blue-600/20">
                            A
                        </div>

                    </div>


                </div>


            </div>

        </header>

    );

};

export default Navbar;