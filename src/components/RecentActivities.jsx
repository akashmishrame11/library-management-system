const RecentActivities = () => {

    const activities = [

        {
            icon: "📚",
            title: 'Rahul issued "Java Programming"',
            description: "Book issued successfully",
            time: "Today",
            iconBg: "bg-blue-50"
        },

        {
            icon: "↩️",
            title: 'Amit returned "Database Management System"',
            description: "Book returned successfully",
            time: "Today",
            iconBg: "bg-green-50"
        },

        {
            icon: "📖",
            title: 'Priya issued "Computer Networks"',
            description: "Book issued successfully",
            time: "Yesterday",
            iconBg: "bg-violet-50"
        },

        {
            icon: "⚠️",
            title: "Rohit has an overdue book",
            description: "Fine may be applicable",
            time: "Overdue",
            iconBg: "bg-red-50"
        }

    ];


    return (

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">


            {/* Header */}

            <div className="px-5 sm:px-6 py-5 border-b border-slate-200 flex items-center justify-between">


                <div>

                    <h2 className="text-lg font-bold text-slate-800">
                        Recent Activities
                    </h2>

                    <p className="text-sm text-slate-400 mt-1">
                        Latest activity from your library
                    </p>

                </div>


                <button
                    className="hidden sm:block text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline transition"
                >
                    View All
                </button>


            </div>


            {/* Activity List */}

            <div>


                {activities.map((activity, index) => (

                    <div
                        key={index}
                        className="group px-5 sm:px-6 py-5 flex items-center gap-4 border-b border-slate-100 last:border-b-0 hover:bg-slate-50 transition-all duration-200"
                    >


                        {/* Icon */}

                        <div
                            className={`
                                w-11
                                h-11
                                rounded-xl
                                ${activity.iconBg}
                                flex
                                items-center
                                justify-center
                                text-lg
                                shrink-0
                                transition-transform
                                duration-200
                                group-hover:scale-110
                            `}
                        >
                            {activity.icon}
                        </div>


                        {/* Details */}

                        <div className="flex-1 min-w-0">

                            <p className="text-sm sm:text-base font-semibold text-slate-700 truncate">
                                {activity.title}
                            </p>

                            <p className="text-xs sm:text-sm text-slate-400 mt-1">
                                {activity.description}
                            </p>

                        </div>


                        {/* Time */}

                        <span
                            className={`
                                shrink-0
                                text-xs
                                font-medium
                                px-3
                                py-1.5
                                rounded-full

                                ${
                                    activity.time === "Overdue"
                                        ? "bg-red-50 text-red-500"
                                        : "bg-slate-100 text-slate-500"
                                }
                            `}
                        >
                            {activity.time}
                        </span>


                    </div>

                ))}


            </div>


        </div>

    );

};

export default RecentActivities;