import React from 'react'

const Navbar = (handleLogout) => {
  return (
    <>
        <button id='logout' className='logout' onClick={handleLogout}>Logout</button>
        <br /><br />
        <button id='add-defect' className='add-defect'>Add Defect</button>
        <button id='view-defect' className='view-defect'>View Defect</button>
    </>
  )
}

export default Navbar