import StudentSidebar from "./StudentSidebar";
import StudentNavbar from "./StudentNavbar";

const MyProfile = () => {

    const studentData = sessionStorage.getItem("student");

    const student = studentData
        ? JSON.parse(studentData)
        : null;

    if (!student) {

        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">

                <div className="bg-white p-8 rounded-xl shadow text-center">

                    <h2 className="text-xl font-bold text-gray-800">
                        Student data not found
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Please login again.
                    </p>

                </div>

            </div>
        );
    }

    return (

        <div className="h-screen overflow-hidden bg-gray-100">

            <StudentSidebar />

            <div className="lg:ml-64 h-screen overflow-y-auto">

                <StudentNavbar />

                <main className="p-6 lg:p-8">

                    <h1 className="text-3xl font-bold text-gray-800">
                        My Profile
                    </h1>

                    <p className="text-gray-500 mt-1 mb-8">
                        View your profile information
                    </p>


                    <div className="max-w-2xl bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

                        {/* Profile Header */}

                        <div className="flex items-center gap-4 mb-8">

                            <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">

                                {student.name.charAt(0).toUpperCase()}

                            </div>

                            <div>

                                <h2 className="text-xl font-semibold text-gray-800">
                                    {student.name}
                                </h2>

                                <p className="text-gray-500">
                                    {student.course} Student
                                </p>

                            </div>

                        </div>


                        {/* Name */}

                        <div className="border-b border-gray-200 pb-4 mb-4">

                            <p className="text-sm text-gray-500">
                                Name
                            </p>

                            <p className="font-medium text-gray-800 mt-1">
                                {student.name}
                            </p>

                        </div>


                        {/* Email */}

                        <div className="border-b border-gray-200 pb-4 mb-4">

                            <p className="text-sm text-gray-500">
                                Email
                            </p>

                            <p className="font-medium text-gray-800 mt-1">
                                {student.email}
                            </p>

                        </div>


                        {/* Course */}

                        <div>

                            <p className="text-sm text-gray-500">
                                Course
                            </p>

                            <p className="font-medium text-gray-800 mt-1">
                                {student.course}
                            </p>

                        </div>

                    </div>

                </main>

            </div>

        </div>
    );
};

export default MyProfile;