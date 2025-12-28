import React from "react";
const FleetCard =({ fleet, onUpdate,onToggle, onDelete}) => {
  return (
    <div className="card">
    <img src="https://via.placeholder.com/150" alt ="vehicle" />
    <p><b>Reg:</b> {fleet.regNo}</p>
     <p><b>Category:</b> {fleet.Category}</p>
     <p><b>Driver:</b> {fleet.driver}</p>
      <p><b>Staus:</b> {fleet.status}</p>

  <button onClick={() => onUpdate(fleet.id)}>Update Driver</button>
  <button onClick={() => onToggle(fleet.id)}>Change Status</button>
  <button onClick={() => onDelete(fleet.id)}>Delete</button>
  </div>
);
};
expport default React.memo(FleetCard);
