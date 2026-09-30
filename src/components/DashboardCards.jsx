const DashboardCards = () => {

    const cards = [

        {
            title: "Total Books",
            value: "120",
            description: "Available books",
            icon: "📚",
            bg: "bg-blue-50",
            iconBg: "bg-blue-100",
            iconColor: "text-blue-600"
        },

        {
            title: "Total Students",
            value: "50",
            description: "Registered students",
            icon: "👨‍🎓",
            bg: "bg-violet-50",
            iconBg: "bg-violet-100",
            iconColor: "text-violet-600"
        },

        {
            title: "Issued Books",
            value: "35",
            description: "Currently issued",
            icon: "📖",
            bg: "bg-amber-50",
            iconBg: "bg-amber-100",
            iconColor: "text-amber-600"
        },

        {
            title: "Overdue Books",
            value: "5",
            description: "Need attention",
            icon: "⚠️",
            bg: "bg-red-50",
            iconBg: "bg-red-100",
            iconColor: "text-red-600"
        }

    ];


    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">


            {cards.map((card) => (

                <div
                    key={card.title}
                    className={`
                        group
                        relative
                        overflow-hidden
                        bg-white
                        rounded-2xl
                        border
                        border-slate-200
                        p-6
                        shadow-sm
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-xl
                        hover:border-slate-300
                    `}
                >


                    {/* Top Accent */}

                    <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 opacity-0 group-hover:opacity-100 transition"></div>


                    {/* Header */}

                    <div className="flex items-start justify-between">


                        <div>

                            <p className="text-sm font-medium text-slate-500">
                                {card.title}
                            </p>

                            <h2 className="text-3xl font-bold text-slate-800 mt-3">
                                {card.value}
                            </h2>

                        </div>


                        {/* Icon */}

                        <div
                            className={`
                                w-12
                                h-12
                                rounded-2xl
                                ${card.iconBg}
                                flex
                                items-center
                                justify-center
                                text-xl
                                transition-all
                                duration-300
                                group-hover:scale-110
                            `}
                        >
                            {card.icon}
                        </div>


                    </div>


                    {/* Bottom */}

                    <div className="flex items-center gap-2 mt-5">

                        <span className={`text-xs font-semibold ${card.iconColor}`}>
                            ●
                        </span>

                        <p className={`text-sm ${card.iconColor}`}>
                            {card.description}
                        </p>

                    </div>


                </div>

            ))}


        </div>

    );

};

export default DashboardCards;