import React, { useEffect } from 'react';
import PostList from './PostList';
import { connect } from "react-redux";

import { fetchData } from '../actions';

const App = ({ fetchData, posts }) => {

    useEffect(() => {
        fetchData();
        console.log(posts);
    }, [])

    return (
        <div>
            <PostList posts={posts} />
        </div>
    );
}

const mapStateToProps = ({ posts }) => {
    return { posts };
}

export default connect(mapStateToProps, { fetchData })(App);