import React from 'react';

const Contact = () => {
    const image = 'https://randomuser.me/api/portraits/women/96.jpg'
    const name = 'Ethel Hayes'
    const online = true;
    const stat = online ? 'status-online' : 'status-offline';

    return (
        <div className="Contact">
            <img src={image} alt="Contact" className="avatar"/>
            <div>
                <h3 className="name">{name}</h3>
                <div className="status">
                    <div className={stat}></div>
                    <p className='status-text'>{online ? 'Online' : 'Offline'}</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;