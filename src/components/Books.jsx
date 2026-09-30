import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Books = () => {

    // =========================
    // Books Data
    // =========================

    const [books, setBooks] = useState([
        {
            id: 1,
            title: "Java Programming",
            author: "Herbert Schildt",
            category: "Programming",
            status: "Available"
        },
        {
            id: 2,
            title: "Database System Concepts",
            author: "Korth",
            category: "Database",
            status: "Issued"
        },
        {
            id: 3,
            title: "HTML & CSS",
            author: "Jon Duckett",
            category: "Web Development",
            status: "Available"
        }
    ]);


    // =========================
    // Search
    // =========================

    const [search, setSearch] = useState("");


    // =========================
    // Add Book Modal
    // =========================

    const [showForm, setShowForm] = useState(false);


    // =========================
    // New Book
    // =========================

    const [newBook, setNewBook] = useState({
        title: "",
        author: "",
        category: ""
    });


    // =========================
    // Edit Book
    // =========================

    const [editBook, setEditBook] = useState(null);


    // =========================
    // Add Book Input Change
    // =========================

    const handleChange = (e) => {

        setNewBook({
            ...newBook,
            [e.target.name]: e.target.value
        });

    };


    // =========================
    // Add Book
    // =========================

    const handleAddBook = (e) => {

        e.preventDefault();

        if (
            !newBook.title ||
            !newBook.author ||
            !newBook.category
        ) {
            alert("Please fill all fields");
            return;
        }


        const book = {

            id: Date.now(),

            title: newBook.title,

            author: newBook.author,

            category: newBook.category,

            status: "Available"

        };


        setBooks([
            ...books,
            book
        ]);


        setNewBook({
            title: "",
            author: "",
            category: ""
        });


        setShowForm(false);

    };


    // =========================
    // Delete Book
    // =========================

    const handleDelete = (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this book?"
        );


        if (confirmDelete) {

            setBooks(
                books.filter(
                    (book) => book.id !== id
                )
            );

        }

    };


    // =========================
    // Open Edit Modal
    // =========================

    const handleEdit = (book) => {

        setEditBook({
            ...book
        });

    };


    // =========================
    // Edit Input Change
    // =========================

    const handleEditChange = (e) => {

        setEditBook({
            ...editBook,
            [e.target.name]: e.target.value
        });

    };


    // =========================
    // Update Book
    // =========================

    const handleUpdateBook = (e) => {

        e.preventDefault();


        if (
            !editBook.title ||
            !editBook.author ||
            !editBook.category
        ) {

            alert("Please fill all fields");

            return;

        }


        setBooks(

            books.map((book) =>

                book.id === editBook.id

                    ? editBook

                    : book

            )

        );


        setEditBook(null);

    };


    // =========================
    // Search Filter
    // =========================

    const filteredBooks = books.filter((book) =>

        book.title
            .toLowerCase()
            .includes(search.toLowerCase())

        ||

        book.author
            .toLowerCase()
            .includes(search.toLowerCase())

        ||

        book.category
            .toLowerCase()
            .includes(search.toLowerCase())

    );


    return (

        <div className="min-h-screen bg-gray-100">


            {/* Sidebar */}

            <Sidebar />


            {/* Main Content */}

            <div className="lg:ml-64 min-h-screen">


                {/* Navbar */}

                <Navbar />


                <main className="p-4 sm:p-6 lg:p-8 pt-20 lg:pt-8">


                    {/* =========================
                        Header
                    ========================= */}

                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">


                        <div>

                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">

                                Books

                            </h1>


                            <p className="text-gray-500 mt-1">

                                Manage all library books

                            </p>

                        </div>


                        {/* Add Book */}

                        <button

                            onClick={() => setShowForm(true)}

                            className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto"

                        >

                            + Add New Book

                        </button>


                    </div>


                    {/* =========================
                        Search
                    ========================= */}

                    <div className="bg-white p-4 rounded-xl border border-gray-200 mb-6">


                        <input

                            type="text"

                            value={search}

                            onChange={(e) =>
                                setSearch(e.target.value)
                            }

                            placeholder="Search book, author or category..."

                            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"

                        />

                    </div>


                    {/* =========================
                        Books Table
                    ========================= */}

                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">


                        <div className="overflow-x-auto">


                            <table className="w-full min-w-[800px]">


                                {/* Table Head */}

                                <thead className="bg-gray-50">


                                    <tr>


                                        <th className="text-left px-6 py-4 text-sm text-gray-600">

                                            Book

                                        </th>


                                        <th className="text-left px-6 py-4 text-sm text-gray-600">

                                            Author

                                        </th>


                                        <th className="text-left px-6 py-4 text-sm text-gray-600">

                                            Category

                                        </th>


                                        <th className="text-left px-6 py-4 text-sm text-gray-600">

                                            Status

                                        </th>


                                        <th className="text-left px-6 py-4 text-sm text-gray-600">

                                            Action

                                        </th>


                                    </tr>


                                </thead>


                                {/* Table Body */}

                                <tbody>


                                    {filteredBooks.length > 0 ? (

                                        filteredBooks.map((book) => (

                                            <tr

                                                key={book.id}

                                                className="border-t border-gray-200 hover:bg-gray-50"

                                            >


                                                {/* Book */}

                                                <td className="px-6 py-4 font-medium text-gray-800">

                                                    {book.title}

                                                </td>


                                                {/* Author */}

                                                <td className="px-6 py-4 text-gray-600">

                                                    {book.author}

                                                </td>


                                                {/* Category */}

                                                <td className="px-6 py-4 text-gray-600">

                                                    {book.category}

                                                </td>


                                                {/* Status */}

                                                <td className="px-6 py-4">


                                                    <span

                                                        className={

                                                            book.status === "Available"

                                                                ? "px-3 py-1 rounded-full text-sm bg-green-100 text-green-700"

                                                                : "px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-700"

                                                        }

                                                    >

                                                        {book.status}

                                                    </span>


                                                </td>


                                                {/* Action */}

                                                <td className="px-6 py-4">


                                                    {/* Edit */}

                                                    <button

                                                        onClick={() =>
                                                            handleEdit(book)
                                                        }

                                                        className="text-blue-600 mr-4 hover:text-blue-800"

                                                    >

                                                        Edit

                                                    </button>


                                                    {/* Delete */}

                                                    <button

                                                        onClick={() =>
                                                            handleDelete(book.id)
                                                        }

                                                        className="text-red-500 hover:text-red-700"

                                                    >

                                                        Delete

                                                    </button>


                                                </td>


                                            </tr>

                                        ))

                                    ) : (

                                        <tr>

                                            <td

                                                colSpan="5"

                                                className="text-center py-8 text-gray-500"

                                            >

                                                No books found

                                            </td>

                                        </tr>

                                    )}


                                </tbody>


                            </table>


                        </div>


                    </div>


                    {/* ==================================================
                        ADD BOOK MODAL
                    ================================================== */}

                    {showForm && (

                        <div className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4">


                            <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6">


                                {/* Header */}

                                <div className="flex items-center justify-between mb-6">


                                    <h2 className="text-2xl font-bold text-gray-800">

                                        Add New Book

                                    </h2>


                                    <button

                                        onClick={() =>
                                            setShowForm(false)
                                        }

                                        className="text-gray-500 hover:text-gray-800 text-xl"

                                    >

                                        ✕

                                    </button>


                                </div>


                                {/* Form */}

                                <form onSubmit={handleAddBook}>


                                    {/* Book Title */}

                                    <div className="mb-5">


                                        <label className="block text-gray-700 font-medium mb-2">

                                            Book Title

                                        </label>


                                        <input

                                            type="text"

                                            name="title"

                                            value={newBook.title}

                                            onChange={handleChange}

                                            placeholder="Enter book title"

                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"

                                        />

                                    </div>


                                    {/* Author */}

                                    <div className="mb-5">


                                        <label className="block text-gray-700 font-medium mb-2">

                                            Author

                                        </label>


                                        <input

                                            type="text"

                                            name="author"

                                            value={newBook.author}

                                            onChange={handleChange}

                                            placeholder="Enter author name"

                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"

                                        />

                                    </div>


                                    {/* Category */}

                                    <div className="mb-6">


                                        <label className="block text-gray-700 font-medium mb-2">

                                            Category

                                        </label>


                                        <input

                                            type="text"

                                            name="category"

                                            value={newBook.category}

                                            onChange={handleChange}

                                            placeholder="Enter category"

                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"

                                        />

                                    </div>


                                    {/* Buttons */}

                                    <div className="flex gap-3">


                                        <button

                                            type="button"

                                            onClick={() =>
                                                setShowForm(false)
                                            }

                                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"

                                        >

                                            Cancel

                                        </button>


                                        <button

                                            type="submit"

                                            className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"

                                        >

                                            Add Book

                                        </button>


                                    </div>


                                </form>


                            </div>


                        </div>

                    )}


                    {/* ==================================================
                        EDIT BOOK MODAL
                    ================================================== */}

                    {editBook && (

                        <div className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4">


                            <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6">


                                {/* Header */}

                                <div className="flex items-center justify-between mb-6">


                                    <h2 className="text-2xl font-bold text-gray-800">

                                        Edit Book

                                    </h2>


                                    <button

                                        onClick={() =>
                                            setEditBook(null)
                                        }

                                        className="text-gray-500 hover:text-gray-800 text-xl"

                                    >

                                        ✕

                                    </button>


                                </div>


                                {/* Edit Form */}

                                <form onSubmit={handleUpdateBook}>


                                    {/* Book Title */}

                                    <div className="mb-5">


                                        <label className="block text-gray-700 font-medium mb-2">

                                            Book Title

                                        </label>


                                        <input

                                            type="text"

                                            name="title"

                                            value={editBook.title}

                                            onChange={handleEditChange}

                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"

                                        />

                                    </div>


                                    {/* Author */}

                                    <div className="mb-5">


                                        <label className="block text-gray-700 font-medium mb-2">

                                            Author

                                        </label>


                                        <input

                                            type="text"

                                            name="author"

                                            value={editBook.author}

                                            onChange={handleEditChange}

                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"

                                        />

                                    </div>


                                    {/* Category */}

                                    <div className="mb-6">


                                        <label className="block text-gray-700 font-medium mb-2">

                                            Category

                                        </label>


                                        <input

                                            type="text"

                                            name="category"

                                            value={editBook.category}

                                            onChange={handleEditChange}

                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"

                                        />

                                    </div>


                                    {/* Buttons */}

                                    <div className="flex gap-3">


                                        <button

                                            type="button"

                                            onClick={() =>
                                                setEditBook(null)
                                            }

                                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"

                                        >

                                            Cancel

                                        </button>


                                        <button

                                            type="submit"

                                            className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"

                                        >

                                            Update Book

                                        </button>


                                    </div>


                                </form>


                            </div>


                        </div>

                    )}


                </main>


            </div>


        </div>

    );

};


export default Books;