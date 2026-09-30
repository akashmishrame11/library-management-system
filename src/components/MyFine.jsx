import StudentSidebar from "./StudentSidebar";
import StudentNavbar from "./StudentNavbar";

const MyFine = () => {

    return (
        <div className="h-screen overflow-hidden bg-gray-100">

            <StudentSidebar />

            <div className="lg:ml-64 h-screen overflow-y-auto">

                <StudentNavbar />

                <main className="p-6 lg:p-8">

                    <h1 className="text-3xl font-bold text-gray-800">
                        My Fine
                    </h1>

                    <p className="text-gray-500 mt-1 mb-8">
                        Check your library fine and payment status
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
                            <p className="text-gray-500">
                                Total Fine
                            </p>

                            <h2 className="text-3xl font-bold mt-2">
                                ₹30
                            </h2>
                        </div>

                        <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
                            <p className="text-gray-500">
                                Paid
                            </p>

                            <h2 className="text-3xl font-bold text-green-600 mt-2">
                                ₹0
                            </h2>
                        </div>

                        <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
                            <p className="text-gray-500">
                                Pending
                            </p>

                            <h2 className="text-3xl font-bold text-red-500 mt-2">
                                ₹30
                            </h2>
                        </div>

                    </div>

                </main>

            </div>

        </div>
    );
};

export default MyFine;