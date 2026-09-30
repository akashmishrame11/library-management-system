import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Dashboard = () => {

    const cards = [
        {
            title: "Total Books",
            value: "120",
            description: "Available books",
            icon: "📚",
            bg: "bg-blue-50",
            iconBg: "bg-blue-100",
            text: "text-blue-600",
        },
        {
            title: "Total Students",
            value: "50",
            description: "Registered students",
            icon: "👨‍🎓",
            bg: "bg-purple-50",
            iconBg: "bg-purple-100",
            text: "text-purple-600",
        },
        {
            title: "Issued Books",
            value: "35",
            description: "Currently issued",
            icon: "📖",
            bg: "bg-amber-50",
            iconBg: "bg-amber-100",
            text: "text-amber-600",
        },
        {
            title: "Overdue Books",
            value: "5",
            description: "Need attention",
            icon: "⚠️",
            bg: "bg-red-50",
            iconBg: "bg-red-100",
            text: "text-red-600",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100">

            <Sidebar />

            <div className="lg:ml-64 min-h-screen">

                <Navbar />


                <main className="p-4 sm:p-6 lg:p-8">

                    {/* WELCOME */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

                        <div>

                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                                Welcome back, Admin 👋
                            </h1>

                            <p className="text-gray-500 mt-2">
                                Here's what's happening in your library today.
                            </p>

                        </div>


                        {/* STATUS */}
                        <div className="bg-white border border-gray-200 rounded-xl px-5 py-3 shadow-sm">

                            <p className="text-xs uppercase tracking-wide text-gray-400">
                                System Status
                            </p>

                            <div className="flex items-center gap-2 mt-1">

                                <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>

                                <span className="text-sm font-medium text-gray-700">
                                    Library is running
                                </span>

                            </div>

                        </div>

                    </div>


                    {/* CARDS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

                        {cards.map((card) => (

                            <div
                                key={card.title}
                                className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            >

                                <div className="flex items-start justify-between">

                                    <div>

                                        <p className="text-sm font-medium text-gray-500">
                                            {card.title}
                                        </p>

                                        <h2 className="text-3xl font-bold text-gray-900 mt-3">
                                            {card.value}
                                        </h2>

                                    </div>


                                    <div
                                        className={`w-12 h-12 ${card.iconBg} rounded-xl flex items-center justify-center text-xl`}
                                    >
                                        {card.icon}
                                    </div>

                                </div>


                                <div className="flex items-center gap-2 mt-5">

                                    <span
                                        className={`w-2 h-2 rounded-full ${card.text.replace(
                                            "text-",
                                            "bg-"
                                        )}`}
                                    />

                                    <p className={`text-sm ${card.text}`}>
                                        {card.description}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>


                    {/* LOWER SECTION */}
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">


                        {/* RECENT ACTIVITIES */}
                        <div className="xl:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

                            <div className="p-6 border-b border-gray-200">

                                <h2 className="text-lg font-semibold text-gray-900">
                                    Recent Activities
                                </h2>

                                <p className="text-sm text-gray-500 mt-1">
                                    Latest library activities
                                </p>

                            </div>


                            <div className="divide-y divide-gray-100">

                                <div className="p-5 flex items-center gap-4 hover:bg-gray-50 transition">

                                    <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
                                        📖
                                    </div>

                                    <div className="flex-1">

                                        <p className="font-medium text-gray-800">
                                            Java Programming issued
                                        </p>

                                        <p className="text-sm text-gray-500 mt-1">
                                            Rahul Kumar borrowed a book
                                        </p>

                                    </div>

                                    <span className="text-xs text-gray-400">
                                        Today
                                    </span>

                                </div>


                                <div className="p-5 flex items-center gap-4 hover:bg-gray-50 transition">

                                    <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center">
                                        ↩️
                                    </div>

                                    <div className="flex-1">

                                        <p className="font-medium text-gray-800">
                                            Book returned
                                        </p>

                                        <p className="text-sm text-gray-500 mt-1">
                                            HTML & CSS returned successfully
                                        </p>

                                    </div>

                                    <span className="text-xs text-gray-400">
                                        Today
                                    </span>

                                </div>


                                <div className="p-5 flex items-center gap-4 hover:bg-gray-50 transition">

                                    <div className="w-11 h-11 rounded-xl bg-purple-50 flex items-center justify-center">
                                        👨‍🎓
                                    </div>

                                    <div className="flex-1">

                                        <p className="font-medium text-gray-800">
                                            New student registered
                                        </p>

                                        <p className="text-sm text-gray-500 mt-1">
                                            Priya Singh joined the library
                                        </p>

                                    </div>

                                    <span className="text-xs text-gray-400">
                                        Yesterday
                                    </span>

                                </div>

                            </div>

                        </div>


                        {/* QUICK ACTIONS */}
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

                            <h2 className="text-lg font-semibold text-gray-900">
                                Quick Actions
                            </h2>

                            <p className="text-sm text-gray-500 mt-1 mb-5">
                                Frequently used options
                            </p>


                            <div className="space-y-3">

                                <a
                                    href="/issue-book"
                                    className="flex items-center gap-3 p-4 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 transition"
                                >
                                    <span className="text-xl">
                                        📖
                                    </span>

                                    <span className="font-medium">
                                        Issue a Book
                                    </span>
                                </a>


                                <a
                                    href="/return-book"
                                    className="flex items-center gap-3 p-4 rounded-xl bg-green-50 text-green-700 hover:bg-green-100 transition"
                                >
                                    <span className="text-xl">
                                        ↩️
                                    </span>

                                    <span className="font-medium">
                                        Return a Book
                                    </span>
                                </a>


                                <a
                                    href="/students"
                                    className="flex items-center gap-3 p-4 rounded-xl bg-purple-50 text-purple-700 hover:bg-purple-100 transition"
                                >
                                    <span className="text-xl">
                                        👨‍🎓
                                    </span>

                                    <span className="font-medium">
                                        Manage Students
                                    </span>
                                </a>


                                <a
                                    href="/books"
                                    className="flex items-center gap-3 p-4 rounded-xl bg-amber-50 text-amber-700 hover:bg-amber-100 transition"
                                >
                                    <span className="text-xl">
                                        📚
                                    </span>

                                    <span className="font-medium">
                                        Manage Books
                                    </span>
                                </a>

                            </div>

                        </div>

                    </div>

                </main>

            </div>

        </div>
    );
};

export default Dashboard;