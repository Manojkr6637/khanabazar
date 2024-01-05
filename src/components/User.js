import { useState} from 'react';
const User = ({ name }) => { 
  const [count] = useState(0);
   const [count2] = useState(1);
  return (
    <div className="user-card">
      <h2>User Profile</h2>
      <p>Count:{count}</p>
      <p>Count2:{ count2}</p>
      <p>Name:{ name}</p>
      <p>Designation:Sofware Developer</p>
    </div>
  );
}
export default User;