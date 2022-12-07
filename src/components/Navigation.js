import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import zappa from '../assets/zappalogo.png'
import '../style/navigation.css'




const Navigation = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'forside'
        },
        {
            id: 2,
            link: 'menu'
        },
        {
            id: 3,
            link: 'book bord'
        },
        {
            id: 4,
            link: 'om café zappa'
        },
        {
            id: 5,
            link: 'nyheder'
        },
        {
            id: 6,
            link: 'galleri'
        },
    ]
    

  return (
    <div className='nav-container'>
        <div onClick={() => setNav(!nav)} className='burger'>
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>


        {nav && (
            <ul className='ulMobile'>
            {links.map(({id, link}) => (
                    <li key={id} className='li-mobile'>{link}</li>
                ))}
            </ul>

        )}

        
        <div className='logo'>
            <img className='logo-nav' src={zappa} />
        </div>
        <ul className='ul-flex'>

            {links.map(({id, link}) => (
                <li key={id} className='li-container'>{link}</li>
            ))}
            
        </ul>

    </div>
  )
        }

export default Navigation