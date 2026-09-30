import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const ReturnBook = () => {

    // Issued books localStorage se load hongi
    const [issuedBooks, setIssuedBooks] = useState(
        JSON.parse(localStorage.getItem("issuedBooks")) || []
    );


    // Fine rate
    const [finePerDay, setFinePerDay] = useState(10);


    // =========================
    // Calculate Fine
    // =========================

    const calculateFine = (dueDate) => {

        const today = new Date();
        const due = new Date(dueDate);

        // Agar book late nahi hai
        if (today <= due) {
            return 0;
        }


        // Difference
        const difference = today - due;


        // Difference ko days me convert
        const overdueDays = Math.ceil(
            difference / (1000 * 60 * 60 * 24)
        );


        // Fine
        return overdueDays * finePerDay;
    };


    // =========================
    // Return Book
    // =========================

    const handleReturn = (id) => {

        const book = issuedBooks.find(
            (item) => item.id === id
        );


        const fine = calculateFine(book.dueDate);


        const confirmReturn = window.confirm(
            `Are you sure you want to return "${book.book}"?\n\nFine: ₹${fine}`
        );


        if (!confirmReturn) {
            return;
        }


        // Book ko list se remove karo
        const updatedBooks = issuedBooks.filter(
            (item) => item.id !== id
        );


        // State update
        setIssuedBooks(updatedBooks);


        // localStorage update
        localStorage.setItem(
            "issuedBooks",
            JSON.stringify(updatedBooks)
        );


        alert("Book returned successfully!");

    };


    return (

        <div className="min-h-screen bg-gray-100">


            {/* =========================
                Sidebar
            ========================= */}

            <Sidebar />


            {/* =========================
                Main Content
            ========================= */}

            <div className="lg:ml-64 min-h-screen">


                {/* Navbar */}

                <Navbar />


                <main className="p-4 sm:p-6 lg:p-8 pt-20 lg:pt-8">


                    {/* =========================
                        Heading
                    ========================= */}

                    <div className="mb-8">

                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">

                            Return Book

                        </h1>


                        <p className="text-gray-500 mt-1">

                            Manage issued and returned books

                        </p>

                    </div>


                    {/* =========================
                        Fine Rate
                    ========================= */}

                    <div className="bg-white rounded-xl border border-gray-200 p-5 mb-6">


                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">


                            <div>

                                <h2 className="text-lg font-semibold text-gray-800">

                                    Fine Rate

                                </h2>


                                <p className="text-sm text-gray-500 mt-1">

                                    Select fine charged per overdue day

                                </p>

                            </div>


                            <select

                                value={finePerDay}

                                onChange={(e) =>
                                    setFinePerDay(
                                        Number(e.target.value)
                                    )
                                }

                                className="w-full sm:w-48 px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 bg-white"

                            >

                                <option value={5}>
                                    ₹5 / day
                                </option>

                                <option value={10}>
                                    ₹10 / day
                                </option>

                                <option value={20}>
                                    ₹20 / day
                                </option>

                            </select>


                        </div>


                    </div>


                    {/* =========================
                        Table
                    ========================= */}

                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">


                        {/* Mobile horizontal scroll */}

                        <div className="overflow-x-auto">


                            <table className="w-full min-w-[850px]">


                                {/* Table Header */}

                                <thead className="bg-gray-50">

                                    <tr>


                                        <th className="text-left px-6 py-4 text-sm text-gray-600">

                                            Student

                                        </th>


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


                                        <th className="text-left px-6 py-4 text-sm text-gray-600">

                                            Action

                                        </th>


                                    </tr>

                                </thead>


                                {/* Table Body */}

                                <tbody>


                                    {issuedBooks.length > 0 ? (

                                        issuedBooks.map((item) => (

                                            <tr

                                                key={item.id}

                                                className="border-t border-gray-200 hover:bg-gray-50"

                                            >


                                                {/* Student */}

                                                <td className="px-6 py-4 font-medium text-gray-800">

                                                    {item.student}

                                                </td>


                                                {/* Book */}

                                                <td className="px-6 py-4 text-gray-600">

                                                    {item.book}

                                                </td>


                                                {/* Issue Date */}

                                                <td className="px-6 py-4 text-gray-600">

                                                    {item.issueDate}

                                                </td>


                                                {/* Due Date */}

                                                <td className="px-6 py-4 text-gray-600">

                                                    {item.dueDate}

                                                </td>


                                                {/* Fine */}

                                                <td className="px-6 py-4">


                                                    {calculateFine(item.dueDate) > 0 ? (

                                                        <span className="font-medium text-red-500">

                                                            ₹{calculateFine(item.dueDate)}

                                                        </span>

                                                    ) : (

                                                        <span className="font-medium text-green-600">

                                                            ₹0

                                                        </span>

                                                    )}


                                                </td>


                                                {/* Return Button */}

                                                <td className="px-6 py-4">


                                                    <button

                                                        onClick={() =>
                                                            handleReturn(item.id)
                                                        }

                                                        className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"

                                                    >

                                                        Return

                                                    </button>


                                                </td>


                                            </tr>

                                        ))

                                    ) : (

                                        <tr>

                                            <td

                                                colSpan="6"

                                                className="text-center py-12 text-gray-500"

                                            >

                                                No issued books found

                                            </td>

                                        </tr>

                                    )}


                                </tbody>


                            </table>


                        </div>


                    </div>


                </main>


            </div>


        </div>

    );

};


export default ReturnBook;