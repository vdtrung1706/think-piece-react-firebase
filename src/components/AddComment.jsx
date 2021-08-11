import React, { useState } from 'react';

const AddComment = ({ onCreate }) => {
  const [content, setContent] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onCreate({ content });
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="AddComment">
      <input
        type="text"
        name="content"
        placeholder="Comment"
        value={content}
        onChange={event => setContent(event.target.value)}
      />
      <input className="create" type="submit" value="Create Comment" />
    </form>
  );
};

export default AddComment;
