import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return(
        <div className = 'content'>
        <div className ='profile'>
             <img src ='https://im0-tub-ua.yandex.net/i?id=9eea64fdf7f9751d1115cf39ece4f6b6&n=13'></img>
        </div>
      <div>
        ava + discription
      </div>
      <MyPosts />
      </div>
    );
}

export default Profile;
