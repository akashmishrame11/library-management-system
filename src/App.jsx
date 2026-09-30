import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";

import Dashboard from "./components/Dashboard";
import Books from "./components/Books";
import Students from "./components/Students";
import IssueBook from "./components/IssueBook";
import ReturnBook from "./components/ReturnBook";
import FinePayment from "./components/FinePayment";

import StudentDashboard from "./components/StudentDashboard";
import BrowseBooks from "./components/BrowseBooks";
import MyBooks from "./components/MyBooks";
import MyFine from "./components/MyFine";
import MyProfile from "./components/MyProfile";

function App() {
    return (
        <Router>

            <Routes>

                {/* Login */}
                <Route path="/" element={<Login />} />

                {/* Admin Pages */}
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/books" element={<Books />} />
                <Route path="/students" element={<Students />} />
                <Route path="/issue-book" element={<IssueBook />} />
                <Route path="/return-book" element={<ReturnBook />} />
                <Route path="/fine-payment" element={<FinePayment />} />

                {/* Student Pages */}
                <Route
                    path="/student-dashboard"
                    element={<StudentDashboard />}
                />

                <Route
                    path="/browse-books"
                    element={<BrowseBooks />}
                />

                <Route
                    path="/my-books"
                    element={<MyBooks />}
                />

                <Route
                    path="/my-fine"
                    element={<MyFine />}
                />

                <Route
                    path="/my-profile"
                    element={<MyProfile />}
                />

            </Routes>

        </Router>
    );
}

export default App;