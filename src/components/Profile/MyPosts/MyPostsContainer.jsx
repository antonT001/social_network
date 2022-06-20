import React from 'react';
import { profileAddPost, profileChangePostElement } from '../../../redux/profileSlice';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

  let changePostElement = (text) => {
    props.store.dispatch(profileChangePostElement(text));
  }


  let addPost = () => {
    props.store.dispatch(profileAddPost());
  }
  return <MyPosts profilePage = {props.store.getState().profilePage}
                  profileAddPost = {addPost}
                  profileChangePostElement = {changePostElement}
  />
}

export default MyPostsContainer;