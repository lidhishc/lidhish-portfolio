import React from 'react'
import HeaderItems from './headerItems'


function header() {
    return (
        <div className='header'>
            <div style={{fontWeight:'bolder',
        marginLeft:'1rem',
        color:'blue',
        fontFamily:'-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
        letterSpacing:'3px'
        }}>
            
            LIDHISH C</div>
           <HeaderItems className="container"/>
        </div>
    )
}

export default header
