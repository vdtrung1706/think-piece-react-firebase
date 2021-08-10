import React from 'react';
import moment from 'moment';

const Post = ({
  id,
  title,
  content,
  user,
  createdAt,
  stars,
  comments,
  onDelete,
}) => {
  return (
    <article className="Post">
      <div className="Post--content">
        <h3>{title}</h3>
        <h3>{content}</h3>
      </div>
      <div className="Post--meta">
        <div>
          <p>
            <span role="img" aria-label="star">
              ⭐️
            </span>
            {stars}
          </p>
          <p>
            <span role="img" aria-label="comments">
              🙊
            </span>
            {comments}
          </p>
          <p>Posted by {user.displayName}</p>
          <p>{moment(createdAt).calendar()}</p>
        </div>
        <div>
          <button className="star">Star</button>
          <button className="Delete" onClick={() => onDelete(id)}>
            Delete
          </button>
        </div>
      </div>
    </article>
  );
};

Post.defaultProps = {
  title: 'An Hot Take',
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur expedita ipsa odio soluta optio minus repudiandae fuga incidunt corrupti, maiores nulla dolorem nam nihil nobis, rerum possimus nesciunt iure deserunt.',
  user: {
    id: '123',
    displayName: 'Jon Snow',
    email: 'snow@gmail.com',
    photoURL: 'https://www.fillmurray.com/300/300',
  },
  createAt: new Date(),
  stars: 0,
  comments: 0,
};

export default Post;
