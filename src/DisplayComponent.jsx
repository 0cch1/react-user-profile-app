import { useContext } from 'react';
import { UserContext } from './UserContext';  // Import UserContext curly braces

// Example usage:
function DisplayComponent() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>Profile Information</h2>
      {user ? (
        <>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Bio: {user.bio}</p>
        </>
      ) : (
        <p>No profile information available</p>
      )}
    </div>
  );
}

export default DisplayComponent;
