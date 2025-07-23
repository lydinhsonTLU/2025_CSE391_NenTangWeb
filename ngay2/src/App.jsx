import React, { useState } from "react";
import employeesData from "./data";
import EmployeeTable from "./components/EmployeeTable";
import EmployeeForm from "./components/EmployeeForm";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import "./styles.css";
import Card from "./components/Card";

function App() {
  const [employees, setEmployees] = useState(employeesData);  
  

const [showModal, setShowModal] = useState(false);


const [editingEmployee, setEditingEmployee] = useState(null);


const [showSuccess, setShowSuccess] = useState(false);


const [deleteId, setDeleteId] = useState(null);

  

  const handleAddClick = () => {
    setEditingEmployee(null);
    setShowModal(true);
  };

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setDeleteId(id);
    setShowSuccess(true);
  };

  const confirmDelete = () => {
    setEmployees(employees.filter(emp => emp.id !== deleteId));
    
    setShowSuccess(false);
    setDeleteId(null);
  };


  

  const handleFormSubmit = (employee) => {
    if (editingEmployee) {
      // Edit
      setEmployees(employees.map(emp => emp.id === employee.id ? employee : emp));
    } else {
      // Add
      const newId = Math.max(...employees.map(e => e.id), 0) + 1;
      setEmployees([...employees, { ...employee, id: newId }]);
    }
    setShowModal(false);
  };

  const alertDel = () => {
    alert("Vui lòng chọn biển tượng 🗑️ để xóa!");
  }


  return (
    <>
    <div style={{display:"flex", justifyContent:"center"}}>

      {/* SIDEBAR */}
      <Sidebar/>

      <div className="container" style={{ minWidth: "960px", marginTop: "20px" }}>    
        
          <Navbar/>

          <div className="container">
            <div className="card">
              <div className="card-header" style={{backgroundColor: "#435d7d"}}>
                <h2 style={{color:"white"}}>Manage <span className="highlight">Employees</span></h2>
                <div>
                  <button className="btn btn-danger" onClick={alertDel}>Delete</button>

                  <button className="btn btn-success" onClick={handleAddClick}>Add New Employee</button>
                </div>
              </div>
        
            <EmployeeTable 
              employees={employees}
              onEdit={handleEdit}
              onDelete={handleDelete}

            />

              <div className="info-row"><span>Showing <b>{employees.length}</b> out of <b>{employees.length}</b> entries</span></div>

            <Modal show={showModal} >
              <div>
                <h2 style={{marginTop:"20px", marginLeft:"10px"}}>{editingEmployee ? "Edit Employee" : "Add New Employee"}</h2>
                <button className="modal-close" onClick={() => setShowModal(false)}>X</button>
              </div>
              <hr />

              <EmployeeForm
                onSubmit={handleFormSubmit}
                onCancel={()=>setShowModal(false)}
                employee={editingEmployee}
              />
            </Modal>
      
            <Modal show={showSuccess}>
              <div style={{margin:"10px"}}>
                <div style={{marginTop: "20px"}}>
                  <h2>Delete Employee</h2>
                  <hr />
                  <button className="modal-close" onClick={() => setShowSuccess(false)}>X</button>
                </div>
                  <p>Are you sure you want to delete these Records?</p>
                  <p style={{color: "yellowgreen"}}>This action cannot be undone.</p>
                
                  <hr />
                <div style={({ display: "flex", justifyContent: "space-between", marginTop: "1em" })}>
                  <div></div>

                  <div><button className="btn btn-danger" style={{ marginTop: "1em" }} 
                    onClick={() => {
                        confirmDelete(); // Gọi hàm xóa
                        alert("Xóa thành công!"); // Hiển thị thông báo
                    }}>

                    Delete
                  </button></div>
                </div>
              </div>
            </Modal>
          </div>
        </div>

        <Footer/>
      </div>
    </div>
    </>
  );
}

export default App;