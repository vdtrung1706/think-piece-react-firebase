import React, { useState } from 'react';

const AddPost = ({ onCreate = () => {} }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const post = {
      id: Date.now().toString(),
      title,
      content,
      user: {
        uid: '1111',
        displayName: 'Steve Kinney',
        email: 'steve@mailinator.com',
        photoURL: 'http://placekitten.com/g/200/200',
      },
      favorites: 0,
      createdAt: new Date(),
    };
    onCreate(post);
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
