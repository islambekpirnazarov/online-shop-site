import React from 'react'

const Container = ({children}) => {
  return (
    <div className='w-[92%] sm:w-[90%] md:w-[85%] max-w-[1440px] mx-auto'>
        {children}
    </div>
  )
}

export default Container