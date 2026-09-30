import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Students = () => {

    // =========================
    // Students Data
    // =========================

    const [students, setStudents] = useState([
        {
            id: 1,
            name: "Rahul Kumar",
            email: "rahul@gmail.com",
            course: "BCA",
            books: 2
        },
        {
            id: 2,
            name: "Amit Sharma",
            email: "amit@gmail.com",
            course: "BCA",
            books: 1
        },
        {
            id: 3,
            name: "Priya Singh",
            email: "priya@gmail.com",
            course: "BCA",
            books: 3
        }
    ]);


    // =========================
    // Search
    // =========================

    const [search, setSearch] = useState("");


    // =========================
    // Add Student Modal
    // =========================

    const [showForm, setShowForm] = useState(false);


    // =========================
    // New Student
    // =========================

    const [newStudent, setNewStudent] = useState({
        name: "",
        email: "",
        course: ""
    });


    // =========================
    // Edit Student
    // =========================

    const [editStudent, setEditStudent] = useState(null);


    // =========================
    // Input Change - Add
    // =========================

    const handleChange = (e) => {

        setNewStudent({
            ...newStudent,
            [e.target.name]: e.target.value
        });

    };


    // =========================
    // Add Student
    // =========================

    const handleAddStudent = (e) => {

        e.preventDefault();

        if (
            !newStudent.name ||
            !newStudent.email ||
            !newStudent.course
        ) {
            alert("Please fill all fields");
            return;
        }


        const student = {

            id: Date.now(),

            name: newStudent.name,

            email: newStudent.email,

            course: newStudent.course,

            books: 0

        };


        setStudents([
            ...students,
            student
        ]);


        // Form clear
        setNewStudent({
            name: "",
            email: "",
            course: ""
        });


        // Modal close
        setShowForm(false);

    };


    // =========================
    // Delete Student
    // =========================

    const handleDelete = (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this student?"
        );


        if (confirmDelete) {

            setStudents(
                students.filter(
                    (student) => student.id !== id
                )
            );

        }

    };


    // =========================
    // Open Edit Modal
    // =========================

    const handleEdit = (student) => {

        setEditStudent({
            ...student
        });

    };


    // =========================
    // Edit Input Change
    // =========================

    const handleEditChange = (e) => {

        setEditStudent({
            ...editStudent,
            [e.target.name]: e.target.value
        });

    };


    // =========================
    // Update Student
    // =========================

    const handleUpdateStudent = (e) => {

        e.preventDefault();


        if (
            !editStudent.name ||
            !editStudent.email ||
            !editStudent.course
        ) {

            alert("Please fill all fields");

            return;

        }


        setStudents(

            students.map((student) =>

                student.id === editStudent.id

                    ? editStudent

                    : student

            )

        );


        // Close edit modal
        setEditStudent(null);

    };



    const filteredStudents = students.filter((student) =>

        student.name
            .toLowerCase()
            .includes(search.toLowerCase())

        ||

        student.email
            .toLowerCase()
            .includes(search.toLowerCase())

        ||

        student.course
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


                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">


                        <div>

                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">

                                Students

                            </h1>


                            <p className="text-gray-500 mt-1">

                                Manage registered students

                            </p>

                        </div>


                        {/* Add Button */}

                        <button

                            onClick={() => setShowForm(true)}

                            className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto"

                        >

                            + Add Student

                        </button>


                    </div>



                    <div className="bg-white p-4 rounded-xl border border-gray-200 mb-6">


                        <input

                            type="text"

                            value={search}

                            onChange={(e) =>
                                setSearch(e.target.value)
                            }

                            placeholder="Search student..."

                            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"

                        />


                    </div>


    

                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">


                        {/* Mobile Horizontal Scroll */}

                        <div className="overflow-x-auto">


                            <table className="w-full min-w-[700px]">


                                {/* Table Head */}

                                <thead className="bg-gray-50">


                                    <tr>


                                        <th className="text-left px-6 py-4 text-sm text-gray-600">

                                            Student

                                        </th>


                                        <th className="text-left px-6 py-4 text-sm text-gray-600">

                                            Email

                                        </th>


                                        <th className="text-left px-6 py-4 text-sm text-gray-600">

                                            Course

                                        </th>


                                        <th className="text-left px-6 py-4 text-sm text-gray-600">

                                            Books Issued

                                        </th>


                                        <th className="text-left px-6 py-4 text-sm text-gray-600">

                                            Action

                                        </th>


                                    </tr>


                                </thead>


                                {/* Table Body */}

                                <tbody>


                                    {filteredStudents.length > 0 ? (


                                        filteredStudents.map((student) => (


                                            <tr

                                                key={student.id}

                                                className="border-t border-gray-200 hover:bg-gray-50"

                                            >


                                                {/* Student */}

                                                <td className="px-6 py-4 font-medium text-gray-800">

                                                    {student.name}

                                                </td>


                                                {/* Email */}

                                                <td className="px-6 py-4 text-gray-600">

                                                    {student.email}

                                                </td>


                                                {/* Course */}

                                                <td className="px-6 py-4 text-gray-600">

                                                    {student.course}

                                                </td>


                                                {/* Books */}

                                                <td className="px-6 py-4 text-gray-600">

                                                    {student.books}

                                                </td>


                                                {/* Actions */}

                                                <td className="px-6 py-4">


                                                    {/* Edit */}

                                                    <button

                                                        onClick={() =>
                                                            handleEdit(student)
                                                        }

                                                        className="text-blue-600 mr-4 hover:text-blue-800"

                                                    >

                                                        Edit

                                                    </button>


                                                    {/* Delete */}

                                                    <button

                                                        onClick={() =>
                                                            handleDelete(student.id)
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

                                                No students found

                                            </td>


                                        </tr>


                                    )}


                                </tbody>


                            </table>


                        </div>


                    </div>


                    {/* ==================================================
                        ADD STUDENT MODAL
                    ================================================== */}

                    {showForm && (


                        <div className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4">


                            <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6">


                                {/* Modal Header */}

                                <div className="flex items-center justify-between mb-6">


                                    <h2 className="text-2xl font-bold text-gray-800">

                                        Add New Student

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

                                <form onSubmit={handleAddStudent}>


                                    {/* Name */}

                                    <div className="mb-5">


                                        <label className="block text-gray-700 font-medium mb-2">

                                            Student Name

                                        </label>


                                        <input

                                            type="text"

                                            name="name"

                                            value={newStudent.name}

                                            onChange={handleChange}

                                            placeholder="Enter student name"

                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"

                                        />


                                    </div>


                                    {/* Email */}

                                    <div className="mb-5">


                                        <label className="block text-gray-700 font-medium mb-2">

                                            Email

                                        </label>


                                        <input

                                            type="email"

                                            name="email"

                                            value={newStudent.email}

                                            onChange={handleChange}

                                            placeholder="Enter email"

                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"

                                        />


                                    </div>


                                    {/* Course */}

                                    <div className="mb-6">


                                        <label className="block text-gray-700 font-medium mb-2">

                                            Course

                                        </label>


                                        <input

                                            type="text"

                                            name="course"

                                            value={newStudent.course}

                                            onChange={handleChange}

                                            placeholder="Enter course"

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

                                            Add Student

                                        </button>


                                    </div>


                                </form>


                            </div>


                        </div>

                    )}



                    {editStudent && (


                        <div className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4">


                            <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6">


                                {/* Header */}

                                <div className="flex items-center justify-between mb-6">


                                    <h2 className="text-2xl font-bold text-gray-800">

                                        Edit Student

                                    </h2>


                                    <button

                                        onClick={() =>
                                            setEditStudent(null)
                                        }

                                        className="text-gray-500 hover:text-gray-800 text-xl"

                                    >

                                        ✕

                                    </button>


                                </div>


                                {/* Edit Form */}

                                <form onSubmit={handleUpdateStudent}>


                                    {/* Name */}

                                    <div className="mb-5">


                                        <label className="block text-gray-700 font-medium mb-2">

                                            Student Name

                                        </label>


                                        <input

                                            type="text"

                                            name="name"

                                            value={editStudent.name}

                                            onChange={handleEditChange}

                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"

                                        />


                                    </div>


                                    {/* Email */}

                                    <div className="mb-5">


                                        <label className="block text-gray-700 font-medium mb-2">

                                            Email

                                        </label>


                                        <input

                                            type="email"

                                            name="email"

                                            value={editStudent.email}

                                            onChange={handleEditChange}

                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"

                                        />


                                    </div>


                                    {/* Course */}

                                    <div className="mb-6">


                                        <label className="block text-gray-700 font-medium mb-2">

                                            Course

                                        </label>


                                        <input

                                            type="text"

                                            name="course"

                                            value={editStudent.course}

                                            onChange={handleEditChange}

                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"

                                        />


                                    </div>


                                    {/* Buttons */}

                                    <div className="flex gap-3">


                                        <button

                                            type="button"

                                            onClick={() =>
                                                setEditStudent(null)
                                            }

                                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"

                                        >

                                            Cancel

                                        </button>


                                        <button

                                            type="submit"

                                            className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"

                                        >

                                            Update Student

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


export default Students;