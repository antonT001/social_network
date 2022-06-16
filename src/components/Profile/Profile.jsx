import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
 

  return (
    <div>
      <div className={s.profileImg}>
        <img src='https://svtechhub.com/images/contactus.jpg' />
      </div>
      <ProfileInfo />
      <MyPosts profilePage={props.profilePage}
        addPost={props.addPost} 
        changePostElement={props.changePostElement}/>
    </div>
  );
}

export default Profile;