import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchClasses, createClass } from "../../utils/redux/classSlice";

const ManageClasses = () => {
  const dispatch = useDispatch();


  const [formData, setFormData] = useState({
    name: "",
    startTime: "",
    endTime: "",
    schedule: 0,
    teacherId: "3fa85f64-5717-4562-b3fc-2c963f66afa6", 
  });

  useEffect(() => {
    dispatch(fetchClasses());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "schedule" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createClass(formData));
  };

  return (
    <div>
      <h2>Manage Classes</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Class Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="startTime"
          placeholder="Start Time"
          value={formData.startTime}
          onChange={handleChange}
        />
        <input
          type="text"
          name="endTime"
          placeholder="End Time"
          value={formData.endTime}
          onChange={handleChange}
        />
        <input
          type="number"
          name="schedule"
          placeholder="Schedule (0-6)"
          value={formData.schedule}
          onChange={handleChange}
        />
        <input
          type="text"
          name="teacherId"
          placeholder="Teacher ID"
          value={formData.teacherId}
          onChange={handleChange}
        />
        <button type="submit">Create Class</button>
      </form>


      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {classes.map((cls) => (
          <li key={cls.id}>{cls.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ManageClasses;
