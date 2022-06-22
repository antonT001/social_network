import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElement = props.profilePage.postsData
    .map(elm => <Post key={elm.id} message={elm.message} likesCount={elm.likesCount} />);

  //let newPostElement = React.createRef(); узнать про ref

  let changePostElement = (e) => {
    //let text = newPostElement.current.value; узнать про ref
    let text = e.target.value;
    props.profileChangePostElement(text);
  }


  let addPost = () => {
    props.profileAddPost();
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