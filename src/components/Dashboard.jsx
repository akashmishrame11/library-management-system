import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import DashboardCards from "./DashboardCards";
import RecentActivities from "./RecentActivities";

const Dashboard = () => {

    return (

        <div className="min-h-screen bg-slate-50">


            {/* Sidebar */}

            <Sidebar />


            {/* Main Content */}

            <div className="lg:ml-64 min-h-screen">


                {/* Navbar */}

                <Navbar />


                <main className="p-4 sm:p-6 lg:p-8 pt-20 lg:pt-8">


                    {/* Welcome Section */}

                    <div className="mb-8">

                        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">


                            <div>

                                <div className="flex items-center gap-2 mb-2">

                                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>

                                    <p className="text-xs font-bold tracking-widest text-blue-600 uppercase">
                                        Dashboard Overview
                                    </p>

                                </div>


                                <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">
                                    Welcome back, Admin 👋
                                </h1>


                                <p className="text-slate-500 mt-2">
                                    Here's what's happening in your library today.
                                </p>

                            </div>


                            {/* Quick Info */}

                            <div className="bg-white border border-slate-200 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition">

                                <p className="text-xs text-slate-400 uppercase tracking-wide">
                                    System Status
                                </p>

                                <div className="flex items-center gap-2 mt-2">

                                    <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>

                                    <span className="text-sm font-semibold text-slate-700">
                                        Library is running
                                    </span>

                                </div>

                            </div>


                        </div>

                    </div>


                    {/* Cards */}

                    <DashboardCards />


                    {/* Recent Activities */}

                    <div className="mt-8">

                        <RecentActivities />

                    </div>


                </main>


            </div>


        </div>

    );

};

export default Dashboard;