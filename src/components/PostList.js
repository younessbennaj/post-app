import React from 'react';

const PostList = ({ posts }) => {
    return (
        <ul className="list-group" style={{ width: '500px' }}>
            {posts.map(post => {
                return (
                    <li key={post.id} className="list-group-item">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{post.title}</h5>
                            <small>{post.id}</small>
                        </div>
                        <p className="mb-1">{post.body}</p>
                        <small>{post.title}</small>
                    </li>
                )
            })}
        </ul>
    );
}

export default PostList;