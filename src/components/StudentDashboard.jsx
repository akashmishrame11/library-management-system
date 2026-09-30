import StudentSidebar from "./StudentSidebar";
import StudentNavbar from "./StudentNavbar";

const StudentDashboard = () => {

    const studentData = sessionStorage.getItem("student");

    const student = studentData
        ? JSON.parse(studentData)
        : null;

    if (!student) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <p className="text-red-500 font-medium">
                    Student data not found. Please login again.
                </p>
            </div>
        );
    }

    return (
        <div className="h-screen overflow-hidden bg-gray-100">

            <StudentSidebar />

            <div className="lg:ml-64 h-screen overflow-y-auto">

                <StudentNavbar />

                <main className="p-6 lg:p-8">

                    {/* Welcome Section */}
                    <div className="mb-8">

                        <h1 className="text-3xl font-bold text-gray-800">
                            Welcome, {student.name} 👋
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Here's an overview of your library account.
                        </p>

                    </div>


                    {/* Dashboard Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


                        {/* Available Books */}
                        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">

                            <p className="text-gray-500">
                                Available Books
                            </p>

                            <h2 className="text-3xl font-bold text-gray-800 mt-3">
                                120
                            </h2>

                            <p className="text-blue-600 text-sm mt-2">
                                Books in library
                            </p>

                        </div>


                        {/* Issued Books */}
                        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">

                            <p className="text-gray-500">
                                My Issued Books
                            </p>

                            <h2 className="text-3xl font-bold text-gray-800 mt-3">
                                2
                            </h2>

                            <p className="text-green-600 text-sm mt-2">
                                Currently borrowed
                            </p>

                        </div>


                        {/* Fine */}
                        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">

                            <p className="text-gray-500">
                                My Fine
                            </p>

                            <h2 className="text-3xl font-bold text-gray-800 mt-3">
                                ₹30
                            </h2>

                            <p className="text-red-500 text-sm mt-2">
                                Pending payment
                            </p>

                        </div>

                    </div>


                    {/* My Issued Books */}
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm mt-8 overflow-hidden">

                        <div className="p-6 border-b border-gray-200">

                            <h2 className="text-xl font-semibold text-gray-800">
                                My Issued Books
                            </h2>

                            <p className="text-gray-500 text-sm mt-1">
                                Books currently issued to you
                            </p>

                        </div>


                        <div className="overflow-x-auto">

                            <table className="w-full min-w-[700px]">

                                <thead className="bg-gray-50">

                                    <tr>

                                        <th className="text-left px-6 py-4 text-sm text-gray-600">
                                            Book
                                        </th>

                                        <th className="text-left px-6 py-4 text-sm text-gray-600">
                                            Issue Date
                                        </th>

                                        <th className="text-left px-6 py-4 text-sm text-gray-600">
                                            Due Date
                                        </th>

                                        <th className="text-left px-6 py-4 text-sm text-gray-600">
                                            Fine
                                        </th>

                                    </tr>

                                </thead>


                                <tbody>

                                    <tr className="border-t border-gray-200 hover:bg-gray-50">

                                        <td className="px-6 py-4 font-medium text-gray-800">
                                            Java Programming
                                        </td>

                                        <td className="px-6 py-4 text-gray-600">
                                            20 Sep 2026
                                        </td>

                                        <td className="px-6 py-4 text-gray-600">
                                            25 Sep 2026
                                        </td>

                                        <td className="px-6 py-4 text-red-500 font-medium">
                                            ₹30
                                        </td>

                                    </tr>


                                    <tr className="border-t border-gray-200 hover:bg-gray-50">

                                        <td className="px-6 py-4 font-medium text-gray-800">
                                            Computer Networks
                                        </td>

                                        <td className="px-6 py-4 text-gray-600">
                                            22 Sep 2026
                                        </td>

                                        <td className="px-6 py-4 text-gray-600">
                                            28 Sep 2026
                                        </td>

                                        <td className="px-6 py-4 text-green-600 font-medium">
                                            ₹0
                                        </td>

                                    </tr>

                                </tbody>

                            </table>

                        </div>

                    </div>

                </main>

            </div>

        </div>
    );
};

export default StudentDashboard;