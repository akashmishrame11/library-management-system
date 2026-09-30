import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const IssueBook = () => {

    const [student, setStudent] = useState("");
    const [book, setBook] = useState("");
    const [issueDate, setIssueDate] = useState("");
    const [dueDate, setDueDate] = useState("");


    const handleIssueBook = (e) => {

        e.preventDefault();

        // Check all fields
        if (!student || !book || !issueDate || !dueDate) {

            alert("Please fill all fields");

            return;
        }


        // Existing issued books
        const existingBooks =
            JSON.parse(localStorage.getItem("issuedBooks")) || [];


        // New issued book
        const newBook = {

            id: Date.now(),

            student: student,

            book: book,

            issueDate: issueDate,

            dueDate: dueDate,

            fine: 0

        };


        // Add new book
        const updatedBooks = [
            ...existingBooks,
            newBook
        ];


        // Save in localStorage
        localStorage.setItem(
            "issuedBooks",
            JSON.stringify(updatedBooks)
        );


        alert("Book issued successfully!");


        // Clear form
        setStudent("");
        setBook("");
        setIssueDate("");
        setDueDate("");

    };


    return (

        <div className="min-h-screen bg-gray-100">

            {/* Sidebar */}

            <Sidebar />


            {/* Main Content */}

            <div className="lg:ml-64 min-h-screen">

                <Navbar />


                <main className="p-4 sm:p-6 lg:p-8 pt-20 lg:pt-8">


                    {/* Heading */}

                    <div className="mb-8">

                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">

                            Issue Book

                        </h1>


                        <p className="text-gray-500 mt-1">

                            Issue a book to a student

                        </p>

                    </div>


                    {/* Form */}

                    <form
                        onSubmit={handleIssueBook}
                        className="max-w-2xl bg-white rounded-xl border border-gray-200 p-6 sm:p-8"
                    >


                        {/* Student */}

                        <div className="mb-6">

                            <label className="block text-gray-700 font-medium mb-2">

                                Select Student

                            </label>


                            <select

                                value={student}

                                onChange={(e) =>
                                    setStudent(e.target.value)
                                }

                                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"

                            >

                                <option value="">
                                    Select Student
                                </option>

                                <option value="Rahul Kumar">
                                    Rahul Kumar
                                </option>

                                <option value="Amit Sharma">
                                    Amit Sharma
                                </option>

                                <option value="Priya Singh">
                                    Priya Singh
                                </option>

                            </select>

                        </div>


                        {/* Book */}

                        <div className="mb-6">

                            <label className="block text-gray-700 font-medium mb-2">

                                Select Book

                            </label>


                            <select

                                value={book}

                                onChange={(e) =>
                                    setBook(e.target.value)
                                }

                                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"

                            >

                                <option value="">
                                    Select Book
                                </option>

                                <option value="Java Programming">
                                    Java Programming
                                </option>

                                <option value="HTML & CSS">
                                    HTML & CSS
                                </option>

                                <option value="Computer Networks">
                                    Computer Networks
                                </option>

                                <option value="Database System Concepts">
                                    Database System Concepts
                                </option>

                            </select>

                        </div>


                        {/* Issue Date */}

                        <div className="mb-6">

                            <label className="block text-gray-700 font-medium mb-2">

                                Issue Date

                            </label>


                            <input

                                type="date"

                                value={issueDate}

                                onChange={(e) =>
                                    setIssueDate(e.target.value)
                                }

                                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"

                            />

                        </div>


                        {/* Due Date */}

                        <div className="mb-6">

                            <label className="block text-gray-700 font-medium mb-2">

                                Due Date

                            </label>


                            <input

                                type="date"

                                value={dueDate}

                                onChange={(e) =>
                                    setDueDate(e.target.value)
                                }

                                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"

                            />

                        </div>


                        {/* Button */}

                        <button

                            type="submit"

                            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"

                        >

                            Issue Book

                        </button>


                    </form>


                </main>

            </div>

        </div>

    );

};

export default IssueBook;