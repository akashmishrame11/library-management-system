import StudentSidebar from "./StudentSidebar";
import StudentNavbar from "./StudentNavbar";

const BrowseBooks = () => {
    return (
        <div className="h-screen overflow-hidden bg-gray-100">

            <StudentSidebar />

            <div className="lg:ml-64 h-screen overflow-y-auto">

                <StudentNavbar />

                <main className="p-6 lg:p-8">

                    <h1 className="text-3xl font-bold text-gray-800">
                        Browse Books
                    </h1>

                    <p className="text-gray-500 mt-1 mb-8">
                        Browse available books in the library
                    </p>

                    <div className="bg-white rounded-xl border border-gray-200 p-6">

                        <input
                            type="text"
                            placeholder="Search books..."
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
                        />

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

                        <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
                            <h2 className="text-xl font-semibold text-gray-800">
                                Java Programming
                            </h2>

                            <p className="text-gray-500 mt-2">
                                Herbert Schildt
                            </p>

                            <span className="inline-block mt-4 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                                Available
                            </span>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
                            <h2 className="text-xl font-semibold text-gray-800">
                                HTML & CSS
                            </h2>

                            <p className="text-gray-500 mt-2">
                                Jon Duckett
                            </p>

                            <span className="inline-block mt-4 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                                Available
                            </span>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
                            <h2 className="text-xl font-semibold text-gray-800">
                                Computer Networks
                            </h2>

                            <p className="text-gray-500 mt-2">
                                Andrew Tanenbaum
                            </p>

                            <span className="inline-block mt-4 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm">
                                Issued
                            </span>
                        </div>

                    </div>

                </main>

            </div>

        </div>
    );
};

export default BrowseBooks;