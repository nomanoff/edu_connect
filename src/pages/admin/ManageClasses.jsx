import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClassListAsync, selectClass } from "../../utils/redux/classSlice";

const ManageClasses = () => {
  const dispatch = useDispatch();
  const { classes, status, error } = useSelector(selectClass); // TO‘G‘RI STATE NOMLARI

  const [formData, setFormData] = useState({
    name: "",
    startTime: "",
    endTime: "",
    schedule: 0,
    teacherId: "3fa85f64-5717-4562-b3fc-2c963f66afa6", // dummy ID
  });

  useEffect(() => {
    dispatch(getClassListAsync());
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
    dispatch(createClassAsync(formData));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Manage Classes</h2>

      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          name="name"
          placeholder="Class Name"
          value={formData.name}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
        <input
          type="text"
          name="startTime"
          placeholder="Start Time"
          value={formData.startTime}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
        <input
          type="text"
          name="endTime"
          placeholder="End Time"
          value={formData.endTime}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
        <input
          type="number"
          name="schedule"
          placeholder="Schedule (0-6)"
          value={formData.schedule}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
        <input
          type="text"
          name="teacherId"
          placeholder="Teacher ID"
          value={formData.teacherId}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create Class
        </button>
      </form>

      {/* ✅ Error ko‘rsatish */}
      {status === "failed" && error && (
        <p className="text-red-500 mt-2">{error}</p>
      )}

      {/* ✅ Success holati */}
      {status === "succeeded" && (
        <p className="text-green-500 mt-2">Class saved successfully!</p>
      )}


     
    </div>
  );
};

export default ManageClasses;
