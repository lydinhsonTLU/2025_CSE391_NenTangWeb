import React from "react";

const EmployeeTable = ({
  employees,
  onEdit,
  onDelete,

}) => (
  <table className="table">
    <thead>
      <tr>
        
        <th>Name</th>
        <th>Gender</th>
        <th>Career</th>
        <th>Email</th>
        <th>Address</th>
        <th>Phone</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {employees.map(emp => (
        <tr key={emp.id}>
          
          <td>{emp.name}</td>
          <td>{emp.gender}</td>
          <td>{emp.career}</td>
          <td>{emp.email}</td>
          <td>{emp.address}</td>
          <td>{emp.phone}</td>
          <td>
            <button className="icon-btn" onClick={() => onEdit(emp)} title="Edit">
              <span role="img" aria-label="edit">✏️</span>
            </button>
            <button className="icon-btn" onClick={() => onDelete(emp.id)} title="Delete">
              <span role="img" aria-label="delete">🗑️</span>
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default EmployeeTable;