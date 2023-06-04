import React from 'react'

function CheckBoxItem({item,index}) {
  return (
    <div className='checkbox-item' >
        <input type="checkbox" className='checkbox' id={item+index} />
        <label htmlFor={item+index} className='checkbox-label' >{item}</label>
    </div>
  )
}

export default CheckBoxItem