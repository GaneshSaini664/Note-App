import React from 'react'
import Header from './Header'
import Form from './Form'


const Page = () => {
  return (
    <div className='h-[550px] w-[450px] bg-[#FB6B90] rounded-xl pb-5 pt-3 px-3 flex flex-col gap-1'>
        < Header/>
        < Form/>
    </div>
  )
}

export default Page