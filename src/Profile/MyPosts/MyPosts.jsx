import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Posts/Posts';

const MyPosts = () => {
    return(
      <div>
        <div>
          <textarea></textarea>
          <button className = {s.button}>Add post</button>
          <button className = {s.remove}></button>
        </div>
        <div className = {s.posts}>
          <Posts message = 'What do u think about it ?'/>
          <Posts message = "How are you ?" />
          <Posts />
          <Posts />
          <Posts />
        </div>
      </div>
    );
}

export default MyPosts;
