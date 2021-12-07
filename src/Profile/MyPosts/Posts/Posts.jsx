import React from 'react';
import s from './Posts.module.css';

const Posts = (props) =>{

    return(
        <div className = {s.item}>
            <img src = 'https://im0-tub-ua.yandex.net/i?id=dfdf9eb297a7c454b3ddf2d78bf171a3&n=13'></img>
            {props.message}
            <div>
            <span>Like</span>
            </div>
        </div>
    )
}

export default Posts;