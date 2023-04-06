import React from 'react'

const Footer = () => {
  return (
    <div className='container-fluid mt-5'>
        <div className='row'>
            <div className='col'>
                <p>Ecrivez-moi</p>
            </div>
            <div className='col'>
                <li className='list-group'>
                    <a><ul className='list-group-item'>Linkedin</ul></a>
                    <a><ul className='list-group-item'>Twitter</ul></a>
                    <a><ul className='list-group-item'>GitHub</ul></a>
                </li>
            </div>
            <div className='col'>
                <p>Contact me</p>
                <li className='list-group'>
                    <a><ul className='list-group-item'>Email</ul></a>
                    <a><ul className='list-group-item'>Celular</ul></a>
                    <a><ul className='list-group-item'>Ubicacion</ul></a>
                </li>
            </div>
        </div>
        <div className='row'>
            <p>COPYRIGTH ° 2022 ALL RIGHTS RESERVED</p>
        </div>
    </div>
  )
}

export default Footer