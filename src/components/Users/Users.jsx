import React from 'react';
import s from './Users.module.css';


const Users = (props) => {

    if(props.usersPage.users.length === 0){
        props.setUsers([
            {
                id: 1, name: 'Valera', ava: 'https://pixelbox.ru/wp-content/uploads/2020/12/avatar-youtube-10.jpg',
                status: 'oke', location: { country: 'Russia', city: 'SPB' }, signed: true
            },
            {
                id: 2, name: 'Sveta', ava: 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg',
                status: 'mazafaka', location: { country: 'Russia', city: 'Sochi' }, signed: true
            },
            {
                id: 3, name: 'Andrey', ava: 'https://placepic.ru/wp-content/uploads/2021/02/image_562610131056464036330.jpg',
                status: 'oke obi', location: { country: 'Finland', city: 'Helsinki' }, signed: true
            },
            {
                id: 4, name: 'Max', ava: 'https://games.mail.ru/hotbox/content_files/gallery/2020/12/11/d49a024e7ade40858a10df3b8976625d.png',
                status: 'no money? no honey!!!', location: { country: 'Russia', city: 'KupchiNormalnoDolbit' }, signed: true
            }
        ])
    }


    let usersElement = props.usersPage.users.map(elm =>
        <div key={elm.id} className={s.users}>
            <div>
                <img className='avaMini' src={elm.ava} />
            </div>
            <div>
                {elm.name}
            </div>
            <div>
                {elm.status}
            </div>
            <div>
                {elm.location.country}
            </div>
            <div>
                {elm.location.city}
            </div>
            <div>
                {elm.signed ? 
                    <button onClick={() => {props.usersUnfollow(elm.id)}}> unfollow  </button> : 
                    <button onClick={() => {props.usersFollow(elm.id)}}> follow </button>}
            </div>
        </div>
    );

    return (
        <div className={s.page}>
            <h3>Users</h3>
            <div>
                {usersElement}
            </div>
        </div>


    );
}

export default Users;