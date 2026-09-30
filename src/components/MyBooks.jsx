import StudentSidebar from "./StudentSidebar";
import StudentNavbar from "./StudentNavbar";

const MyBooks = () => {

    const books = [
        {
            id: 1,
            book: "Java Programming",
            issueDate: "20 Sep 2026",
            dueDate: "25 Sep 2026",
            status: "Issued"
        },
        {
            id: 2,
            book: "Database System Concepts",
            issueDate: "15 Sep 2026",
            dueDate: "20 Sep 2026",
            status: "Returned"
        }
    ];

    return (
        <div className="h-screen overflow-hidden bg-gray-100">

            <StudentSidebar />

            <div className="lg:ml-64 h-screen overflow-y-auto">

                <StudentNavbar />

                <main className="p-6 lg:p-8">

                    <h1 className="text-3xl font-bold text-gray-800">
                        My Books
                    </h1>

                    <p className="text-gray-500 mt-1 mb-8">
                        View your issued and returned books
                    </p>

                    <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">

                        <table className="w-full min-w-[700px]">

                            <thead className="bg-gray-50">

                                <tr>
                                    <th className="text-left px-6 py-4">
                                        Book
                                    </th>

                                    <th className="text-left px-6 py-4">
                                        Issue Date
                                    </th>

                                    <th className="text-left px-6 py-4">
                                        Due Date
                                    </th>

                                    <th className="text-left px-6 py-4">
                                        Status
                                    </th>
                                </tr>

                            </thead>

                            <tbody>

                                {books.map((book) => (

                                    <tr
                                        key={book.id}
                                        className="border-t border-gray-200 hover:bg-gray-50"
                                    >

                                        <td className="px-6 py-4 font-medium">
                                            {book.book}
                                        </td>

                                        <td className="px-6 py-4 text-gray-600">
                                            {book.issueDate}
                                        </td>

                                        <td className="px-6 py-4 text-gray-600">
                                            {book.dueDate}
                                        </td>

                                        <td className="px-6 py-4">

                                            <span className={
                                                book.status === "Issued"
                                                    ? "px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm"
                                                    : "px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm"
                                            }>
                                                {book.status}
                                            </span>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </main>

            </div>

        </div>
    );
};

export default MyBooks;