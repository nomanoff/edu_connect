// src/pages/ManageClasses.jsx

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createClassAsync, selectClass } from '../../utils/redux/classSlice';

const ManageClasses = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector(selectClass);

  const [formData, setFormData] = useState({
    name: '',
    startTime: '',
    endTime: '',
    schedule: 0,
    teacherId: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'schedule' ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createClassAsync(formData));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Manage Classes</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Class Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Start Time:</label>
          <input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-1">End Time:</label>
          <input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Schedule (number):</label>
          <input
            type="number"
            name="schedule"
            value={formData.schedule}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Teacher ID:</label>
          <input
            type="text"
            name="teacherId"
            value={formData.teacherId}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Saving...' : 'Save Class'}
        </button>
        {status === 'failed' && (
          <p className="text-red-500 mt-2">{error || 'An error occurred'}</p>
        )}
        {status === 'succeeded' && (
          <p className="text-green-500 mt-2">Class created successfully!</p>
        )}
      </form>
    </div>
  );
};

export default ManageClasses;
