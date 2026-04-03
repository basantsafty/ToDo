import React from 'react'

function Btn({ message, fuctionality }) {
  return (
    <button className='bg-amber-100 hover:bg-amber-600 text-amber-800 font-bold py-2 px-4 border border-amber-400 rounded' type='button' onClick={fuctionality}>
      {message}
    </button>
  )
}

export default Btn