import React from 'react';
import s from './Navbar.module.css'

/*let f ={
  'nav' : 'Navbar_nav__HkDcO',
  'item' : 'Navbar_item__31Rtc'
} */

let sad = `${s.item} ${s.activ}`

const Navbar = () =>{
    return (
    <nav className = {s.nav}>
    <div className = {`${s.item} ${s.activ}`}>
      <a>Profile</a>
    </div>
    <div className = {s.item}>
      <a>News</a>
    </div>
    <div className = {s.item}>
      <a>Music</a>
    </div>
    <div className = {s.item}>
      <a>Settings</a>
    </div>
    <div className = {s.item}>
     <a> Messages </a>
    </div>
  </nav>);
}

export default Navbar; 