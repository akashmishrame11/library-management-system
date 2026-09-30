const StudentNavbar = () => {

    const studentData = sessionStorage.getItem("student");

    const student = studentData
        ? JSON.parse(studentData)
        : null;

    return (
        <header className="h-20 bg-white border-b border-gray-200 px-6 lg:px-8 flex items-center justify-between">

            <h2 className="text-2xl font-semibold text-gray-800">
                Student Dashboard
            </h2>

            <div className="flex items-center gap-4">

                <span className="text-gray-700 font-medium">
                    {student ? student.name : "Student"}
                </span>

                <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    {student
                        ? student.name.charAt(0).toUpperCase()
                        : "S"
                    }
                </div>

            </div>

        </header>
    );
};

export default StudentNavbar;