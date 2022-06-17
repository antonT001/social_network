import React from 'react';
import { addPostActionCreator, changePostElementActionCreator } from '../../../redux/profileReducer';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {


  let postsElement = props.profilePage.postsData
    .map(elm => <Post message={elm.message} likesCount={elm.likesCount} />);

  let newPostElement = React.createRef();

  let changePostElement = (e) => {
    //let text = newPostElement.current.value; узнать про ref
    let text = e.target.value;
    props.dispatch(changePostElementActionCreator(text));
  }


  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea 
          placeholder='Enter your message'
            //ref={newPostElement} узнать про ref
            value={props.profilePage.textareaData} 
            onChange={changePostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}> Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElement}
      </div>
    </div>
  )
}

export default MyPosts;