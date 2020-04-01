import React from 'react';
import users from './ContactList'

const Contact = () => (
    <ul>
        {users.map( user => (
            <div key={user.name} className="Contact">
                <img src={user.avatar} alt="Contact" className="avatar"/>
                <div>
                    <h3 className="name">{user.name}</h3>
                    <div className="status">
                        <div className={user.online ? 'status-online' : 'status-offline'}></div>
                        <p className='status-text'>{user.online ? 'Online' : 'Offline'}</p>
                    </div>
                </div>
            </div>
        ))}
    </ul>
);


export default Contact;