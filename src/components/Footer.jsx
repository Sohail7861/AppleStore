import React from 'react'

function Footer() {
  return (
    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
       Copyright{' '} &copy; {new Date().getFullYear()}  Apple Inc. All rights reserved.
        
      </div>
  )
}

export default Footer