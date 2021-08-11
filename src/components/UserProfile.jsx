import React, { useState } from 'react';
import { auth, firestore } from '../firebase';

const UserProfile = () => {
  const [displayName, setDisplayName] = useState('');
  var imageInput = null;

  const userRef = () => {
    return firestore.doc(`users/${auth.currentUser.uid}`);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (displayName) {
      userRef().update({ displayName });
    }
  };

  return (
    <section className="UserProfile">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={displayName}
          name={displayName}
          onChange={e => setDisplayName(e.target.value)}
          placeholder="Display Name"
        />
        <input type="file" ref={ref => (imageInput = ref)} />
        <input type="submit" className="update" />
      </form>
    </section>
  );
};

export default UserProfile;
