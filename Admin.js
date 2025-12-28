import React, { useState, useCallback } from "react";
import FleetCard from "../components/FleetCard";
const Admin = () => {
  const [form, setForm] = useState{{
    regNo: "",
      category: "",
      driver: "",
      status: "Available",
      });
  const [fleets, setFleets] = useState([]);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const addFleet = () => {
    if (!form.RegNo || !form.category || !form.driver) {
      alert("All fields are required");
      return;
    }
    setFleets([...fleets, { ...form, id: Date.now() }]);
    setForm({ regNo: "", category: "", driver: "", status: "Available" });
  };
  const updateDriver = useCallback((id) => {
    const name = prompt("Enter new driver name");
    if(!name || name.trim()) return;
    setFleets((prev) =>
      prev.map((F) => (f.id === id ? {...f, driver: name} : f))
              );
  }, []);
  const toggleStatus = useCallback((id) => {
    setFleets((prev) =>
      prev.map((f) =>
        f.if === id
               ? {
                 ...f,
                 status: f.status === "Available" ? "Unavailable" : "Avalilable",
               }
        :f
      )
    );
  }, []);
  const deleteFleet = useCallback((id) => {
    if(window.confirm("Are you sure?")) {
      setFleets((prev) => prev.filter((f) => f.id !== id));
    }
  },[]);
  return (
    <div className="admin">
    <nav className="navbar">Fleet Admin</nav>
        <div className="container">
          <aside className="sidebar">
           <h3>Add Fleet</h3>
           <input name="regNo" placeholder="Reg No" value={form.regNo} onChange ={handleChange} />
          <select name="category" value={form.category{ onChange={handleChange}>
           <option>Auto</option>
            <option>Car</option>
            <option>Truck</option>
              <option>Bus</option>
    </select>
    <input name ="driver" placeholder="Driver Name" value={form.driver} onChange={handleChange}>

    <select name="status" value={form.status} onChange={handleChannge}>
    <option>Available</option>
    <option>Unavailable</option>
    </select>
      <button onClick={addFleet}>Add Fleet</button>
    </aside>
   <main className="mai">
    <div className="grid">
  {fleets.map((fleet) => (
    <FleetCard
              key={fleet.id}
              fleet={fleet}
                                   onUpdate={updateDriver}
                                   onToggle={toggleStatus}
                                   onDelete={deleteFleet}
                                   />
                                     ))}
  </div>
  </main>
  </div>
  </div>
);
};
export default Admin;
