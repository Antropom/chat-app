import React from 'react';

// const Contact = () => (
//     <ul>
//         {users.map( user => (
//             <div key={user.name} className="Contact">
//                 <img src={user.avatar} alt="Contact" className="avatar"/>
//                 <div>
//                     <h3 className="name">{user.name}</h3>
//                     <div className="status">
//                         <div className={user.online ? 'status-online' : 'status-offline'}></div>
//                         <p className='status-text'>{user.online ? 'Online' : 'Offline'}</p>
//                     </div>
//                 </div>
//             </div>
//         ))}
//     </ul>
// );

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: props.online,
          };
    }
    render() {
        return (
        <ul>
            <div key={this.props.name} className="Contact">
                <img src={this.props.avatar} alt="Contact" className="avatar"/>
                <div>
                    <h3 className="name">{this.props.name}</h3>
                    <div className="status" onClick={event => {
                        const newOnline = !this.state.online;
                        this.setState({online : newOnline})
                    }}>
                        <div className={this.state.online ? 'status-online' : 'status-offline'}></div>
                        <p className='status-text'>{this.state.online ? 'Online' : 'Offline'}</p>
                    </div>
                </div>
            </div>
        </ul>
        );
    }
}


export default Contacts;
