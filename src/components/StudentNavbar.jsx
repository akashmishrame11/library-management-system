const StudentNavbar = () => {

    const studentData = sessionStorage.getItem("student");

    const student = studentData
        ? JSON.parse(studentData)
        : {
            name: "Student"
        };


    const toggleMenu = () => {

        window.dispatchEvent(
            new Event("toggle-student-sidebar")
        );

    };


    return (
        <header
            className="
                fixed
                top-0
                right-0
                left-0
                lg:left-64
                h-[72px]
                bg-white
                border-b
                border-gray-200
                z-30
            "
        >

            <div
                className="
                    h-full
                    flex
                    items-center
                    justify-between
                    px-4
                    sm:px-6
                    lg:px-8
                "
            >

                {/* Left */}
                <div className="flex items-center gap-4">

                    <button
                        onClick={toggleMenu}
                        className="
                            lg:hidden
                            w-10
                            h-10
                            rounded-lg
                            border
                            border-gray-200
                            flex
                            items-center
                            justify-center
                            text-xl
                            hover:bg-gray-100
                            transition
                        "
                    >
                        ☰
                    </button>


                    <h1 className="text-xl sm:text-2xl font-semibold text-slate-900">
                        Student Dashboard
                    </h1>

                </div>


                {/* Right */}
                <div className="flex items-center gap-3">

                    <span className="hidden sm:block font-medium text-slate-700">
                        {student.name}
                    </span>

                    <div
                        className="
                            w-10
                            h-10
                            rounded-full
                            bg-blue-600
                            text-white
                            flex
                            items-center
                            justify-center
                            font-bold
                        "
                    >
                        {student.name?.charAt(0).toUpperCase()}
                    </div>

                </div>

            </div>

        </header>
    );
};

export default StudentNavbar;