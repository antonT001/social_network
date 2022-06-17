import React from 'react';
import { addPostActionCreator, changePostElementActionCreator } from '../../state';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {


  let postsElement = props.profilePage.postsData
    .map(elm => <Post message={elm.message} likesCount={elm.likesCount} />);

  let newPostElement = React.createRef();

  let changePostElement = () => {
    let text = newPostElement.current.value;
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
            ref={newPostElement} 
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