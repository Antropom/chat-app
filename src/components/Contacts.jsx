import React from 'react';
import PropTypes from 'prop-types';

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

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    online: PropTypes.bool
}


export default Contact;