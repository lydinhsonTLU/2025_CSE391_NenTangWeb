import React, { useState, useEffect } from "react";

function validate(values) {
  let errors = {};
  if (!values.name.trim()) errors.name = "Name is required";
  if (!values.gender) errors.gender = "Gender is required";
  if (!values.career) errors.career = "Career is required";
  if (!values.email.trim()) errors.email = "Email is required";
  if (!values.address.trim()) errors.address = "Address is required";
  if (!values.phone.trim()) errors.phone = "Phone is required";
  else if (!/^0\d{9}$/.test(values.phone))
    errors.phone = "Phone must start with 0 and be exactly 10 digits";
  return errors;
}

const EmployeeForm = ({ onSubmit, onCancel, employee }) => {
  const [values, setValues] = useState({
    name: "",
    gender: "",
    career: "",
    email: "",
    address: "",
    phone: ""
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (employee) setValues(employee);
    else setValues({
      name: "",
      gender: "",
      career: "",
      email: "",
      address: "",
      phone: ""
    });
  }, [employee]);

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const check = validate(values);
    setErrors(check);

    if (Object.keys(check).length === 0) {

      onSubmit(employee ? { ...employee, ...values } : values);
      //alert(employee ? "Employee updated successfully!" : "Employee added successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form" style={{margin:"10px"}}>
     
      <div className="form-group">
        <label className="form-label" htmlFor="name">Name</label>
        <input id="name" className="form-control" name="name" value={values.name} onChange={handleChange} />
        {errors.name && <div className="error">{errors.name}</div>}
      </div>

      {/* Gender Radio */}
      <div className="form-group">
        <label>Gender</label>
        <div style={{ display: "flex", gap: "1em", alignItems: "center" }}>
          <label>
            <input
              type="radio"
              name="gender"
              value="Nam"
              checked={values.gender === "Nam"}
              onChange={handleChange}
            /> Nam
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Nữ"
              checked={values.gender === "Nữ"}
              onChange={handleChange}
            /> Nữ
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Khác"
              checked={values.gender === "Khác"}
              onChange={handleChange}
            /> Khác
          </label>
        </div>
        {errors.gender && <div className="error">{errors.gender}</div>}
      </div>

      {/* Career Select */}
      <div className="form-group">
        <label>Career</label>
        <select className="form-select" name="career" value={values.career} onChange={handleChange}>
          <option value="" selected disabled>-- Select --</option>
          <option value="IT">IT</option>
          <option value="Kế toán">Kế toán</option>
          <option value="Giáo dục">Giáo dục</option>
        </select>
        {errors.career && <div className="error">{errors.career}</div>}
      </div>
      <div className="form-group">
        <label>Email</label>
        <input className="form-control" name="email" value={values.email} onChange={handleChange} />
        {errors.email && <div className="error">{errors.email}</div>}
      </div>
      <div className="form-group">
        <label>Address</label>
        <textarea className="form-control" name="address" value={values.address} onChange={handleChange} />
        {errors.address && <div className="error">{errors.address}</div>}
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input className="form-control" name="phone" value={values.phone} onChange={handleChange} />
        {errors.phone && <div className="error">{errors.phone}</div>}
      </div>
      
      <div className="form-actions">
        <button type="button" className="btn" onClick={onCancel}>
          Cancel
        </button>

        <button type="submit" className="btn btn-success" >
          {employee ? "Update" : "Add"}
        </button>
        
      </div>
    </form>
  );
};

export default EmployeeForm;