import { useState, useContext } from 'react';
import { UserContext }  from './UserContext';  

function FormComponent() {
  const { setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({ name: '', email: '', bio:''});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Bio:
        <textarea name="bio" value={formData.bio} onChange={handleChange} placeholder="Write Your Bio" />
      </label>
      <br />
      <button type="submit">Save Profile</button>
    </form>
  );
}

export default FormComponent;
