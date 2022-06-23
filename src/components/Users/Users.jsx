import axios from 'axios';
import React from 'react';
import s from './Users.module.css';
import noPhotosSmallToUsers from '../../assets/images/users.jpeg'

class Users extends React.Component {

    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(respons => {
            this.props.setUsers(respons.data.items)
        })
    }


    render() {
        return (
            <div className={s.page}>
                <h3>Users</h3>
                <div>
                    {this.props.usersPage.users.map(elm =>
                        <div key={elm.id} className={s.users}>
                            <div>
                                <img className='avaMini' src={elm.photos.small === null ? noPhotosSmallToUsers : elm.photos.small} />
                            </div>
                            <div>
                                {elm.name}
                            </div>
                            <div>
                                {elm.status}
                            </div>
                            <div>
                                {"elm.location.country"}
                            </div>
                            <div>
                                {"elm.location.city"}
                            </div>
                            <div>
                                {elm.followed ?
                                    <button onClick={() => { this.props.usersUnfollow(elm.id) }}> unfollow  </button> :
                                    <button onClick={() => { this.props.usersFollow(elm.id) }}> follow </button>}
                            </div>
                        </div>
                    )}
                </div>
            </div>


        )

    }

}

export default Users;