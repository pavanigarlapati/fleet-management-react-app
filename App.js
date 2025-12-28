import Reeact, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  const [isAuth, setIsAuth] = useState(false);

return (
  <Routes>
  <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
<Route path="*" element={<Navigate to="/login" />} />
  </Routes>
);
}
export default App;
