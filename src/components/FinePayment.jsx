import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const FinePayment = () => {

    // =========================
    // Payment Records
    // =========================

    const [payments, setPayments] = useState([
        {
            id: 1,
            student: "Rahul Kumar",
            book: "Java Programming",
            fine: 30,
            status: "Pending"
        }
    ]);


    // =========================
    // Payment Message
    // =========================

    const [message, setMessage] = useState("");


    // =========================
    // Pay Fine
    // =========================

    const handlePayFine = (id) => {

        const payment = payments.find(
            (item) => item.id === id
        );


        if (!payment) {
            return;
        }


        const confirmPayment = window.confirm(
            `Pay fine of ₹${payment.fine} for ${payment.student}?`
        );


        if (!confirmPayment) {
            return;
        }


        // Payment ko Paid karo
        const updatedPayments = payments.map((item) => {

            if (item.id === id) {

                return {
                    ...item,
                    status: "Paid"
                };

            }

            return item;

        });


        setPayments(updatedPayments);


        // Success message
        setMessage(
            `Payment successful! ₹${payment.fine} paid by ${payment.student}.`
        );


        // Message 5 seconds baad hide
        setTimeout(() => {

            setMessage("");

        }, 5000);

    };


    // =========================
    // Calculations
    // =========================

    const totalFine = payments.reduce(
        (total, item) => total + item.fine,
        0
    );


    const paid = payments
        .filter((item) => item.status === "Paid")
        .reduce(
            (total, item) => total + item.fine,
            0
        );


    const pending = payments
        .filter((item) => item.status === "Pending")
        .reduce(
            (total, item) => total + item.fine,
            0
        );


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
                        Success Message
                    ========================= */}

                    {message && (

                        <div className="mb-6 bg-green-100 border border-green-300 text-green-700 px-5 py-4 rounded-xl">

                            <div className="flex items-center gap-3">

                                <span className="text-xl">
                                    ✓
                                </span>

                                <div>

                                    <p className="font-semibold">
                                        Payment Successful
                                    </p>

                                    <p className="text-sm mt-1">
                                        {message}
                                    </p>

                                </div>

                            </div>

                        </div>

                    )}


                    {/* =========================
                        Heading
                    ========================= */}

                    <div className="mb-8">

                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">

                            Fine & Payment

                        </h1>


                        <p className="text-gray-500 mt-1">

                            Manage library fines and payment records

                        </p>

                    </div>


                    {/* =========================
                        Summary Cards
                    ========================= */}

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">


                        {/* Total Fine */}

                        <div className="bg-white p-6 rounded-xl border border-gray-200">

                            <p className="text-gray-500">

                                Total Fine

                            </p>


                            <h2 className="text-3xl font-bold text-gray-800 mt-2">

                                ₹{totalFine}

                            </h2>

                        </div>


                        {/* Paid */}

                        <div className="bg-white p-6 rounded-xl border border-gray-200">

                            <p className="text-gray-500">

                                Paid

                            </p>


                            <h2 className="text-3xl font-bold text-green-600 mt-2">

                                ₹{paid}

                            </h2>

                        </div>


                        {/* Pending */}

                        <div className="bg-white p-6 rounded-xl border border-gray-200">

                            <p className="text-gray-500">

                                Pending

                            </p>


                            <h2 className="text-3xl font-bold text-red-500 mt-2">

                                ₹{pending}

                            </h2>

                        </div>


                    </div>


                    {/* =========================
                        Payment Table
                    ========================= */}

                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">


                        <div className="overflow-x-auto">


                            <table className="w-full min-w-[750px]">


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
                                            Fine
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

                                    {payments.map((payment) => (

                                        <tr
                                            key={payment.id}
                                            className="border-t border-gray-200 hover:bg-gray-50"
                                        >


                                            {/* Student */}

                                            <td className="px-6 py-4 font-medium text-gray-800">

                                                {payment.student}

                                            </td>


                                            {/* Book */}

                                            <td className="px-6 py-4 text-gray-600">

                                                {payment.book}

                                            </td>


                                            {/* Fine */}

                                            <td className="px-6 py-4 font-medium">

                                                ₹{payment.fine}

                                            </td>


                                            {/* Status */}

                                            <td className="px-6 py-4">

                                                {payment.status === "Pending" ? (

                                                    <span className="px-3 py-1 rounded-full text-sm bg-red-100 text-red-600">

                                                        Pending

                                                    </span>

                                                ) : (

                                                    <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-600">

                                                        Paid

                                                    </span>

                                                )}

                                            </td>


                                            {/* Action */}

                                            <td className="px-6 py-4">

                                                {payment.status === "Pending" ? (

                                                    <button

                                                        onClick={() =>
                                                            handlePayFine(payment.id)
                                                        }

                                                        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"

                                                    >

                                                        Pay Fine

                                                    </button>

                                                ) : (

                                                    <span className="text-green-600 font-medium">

                                                        Payment Completed

                                                    </span>

                                                )}

                                            </td>


                                        </tr>

                                    ))}


                                </tbody>


                            </table>

                        </div>


                    </div>


                </main>


            </div>


        </div>

    );

};


export default FinePayment;