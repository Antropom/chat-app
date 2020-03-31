import React from 'react';

const Contact = (props) => (
    <div className="Contact">
        <img src={props.image} alt="Contact" className="avatar"/>
        <div>
            <h3 className="name">{props.name}</h3>
            <div className="status">
                <div className={props.online ? 'status-online' : 'status-offline'}></div>
                <p className='status-text'>{props.online ? 'Online' : 'Offline'}</p>
            </div>
        </div>
    </div>
);


export default Contact;