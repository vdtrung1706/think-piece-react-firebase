import React, { useState } from 'react';
import { auth, firestore } from '../firebase';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { uid, displayName, email, photoURL } = auth.currentUser || {};

  const handleSubmit = event => {
    event.preventDefault();
    const post = {
      title,
      content,
      user: {
        uid,
        displayName,
        email,
        photoURL,
      },
      stars: 0,
      comments: 0,
      createdAt: new Date(),
    };

    firestore.collection('posts').doc(post.id).set(post);

    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="AddPost">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type="text"
        name="content"
        placeholder="Body"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <input className="create" type="submit" value="Create Post" />
    </form>
  );
};

export default AddPost;
