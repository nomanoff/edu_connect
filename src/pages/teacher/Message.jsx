import React, { useState } from 'react';

const SendMessageForm = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedParent, setSelectedParent] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Class:', selectedClass);
    console.log('Parent:', selectedParent);
    console.log('Message:', message);
    alert('Message sent successfully!');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Send Message to Parents</h2>
      <p style={styles.subtitle}>Select a class and a parent to send a message.</p>

      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Select Class:</label>
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          style={styles.select}
          required
        >
          <option value="">-- Select Class --</option>
          <option value="Test">Test</option>
          <option value="Test 2">Test 2</option>
        </select>

        <label style={styles.label}>Select Parent:</label>
        <select
          value={selectedParent}
          onChange={(e) => setSelectedParent(e.target.value)}
          style={styles.select}
          required
        >
          <option value="">-- Select Parent --</option>
          <option value="Test">Test</option>
          <option value="Test 2">Test 2</option>
        </select>

        <label style={styles.label}>Write Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="4"
          style={styles.textarea}
          placeholder="Type your message here..."
          required
        />

        <button type="submit" style={styles.button}>
          📬 Send Message
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '700px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fefefe',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  subtitle: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '5px',
    fontWeight: '600',
  },
  select: {
    marginBottom: '15px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    marginBottom: '15px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    resize: 'vertical',
  },
  button: {
    padding: '12px',
    backgroundColor: '#007bff',
    color: 'white',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default SendMessageForm;
