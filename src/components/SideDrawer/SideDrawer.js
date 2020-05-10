import React from 'react';
import './SideDrawer.css';


const sideDrawer = props => { 
let drawerClasses = 'side-drawer';
if(props.show) {
    drawerClasses = 'side-drawer open';
}

    return (
<nav className={drawerClasses}>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">Rooms</a></li>
        <li><a href="/">Setting</a></li>
        <li><a href="/">Add a user</a></li>
    </ul>
</nav>
    );
};


export default sideDrawer;