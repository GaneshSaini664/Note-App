import React from 'react'
import { useState } from 'react'

const Form = () => {

    const [title, settitle] = useState('')
    const [detail, setdetail] = useState('')
    const [task, settask] = useState([])

    const submitHandler = (e) => {
        e.preventDefault()

        if(title.trim() == "" || detail.trim() == ""){
            alert("Please Fill The Title And Detail")
            return
        }

        const copyTask = [...task]
        copyTask.push({ title, detail })
        settask(copyTask)

        settitle('')
        setdetail('')
        
    }

    const deleteBtn = (idx) => {
        const copyTask = [...task]
         copyTask.splice(idx,1)

        settask(copyTask)
    }

    

    return (
        <div className='rounded  flex flex-col justify-between h-full'>
            <div className=' py-2 px-3'>
                <form className='flex flex-col gap-1' onSubmit={(e) => {
                    submitHandler(e)
                }}>
                    <label className='font-semibold text-lg text-[#F7F7F0] '>Title:</label>
                    <input className='py-1 px-2 text-sm outline-none bg-[#FFEBE1]
                     rounded'
                        type="text"
                        value={title}
                        onChange={(e) => {
                            settitle(e.target.value)
                        }}
                        placeholder='Enter Your Notes'
                    />

                    <label className='font-semibold text-lg text-[#F7F7F0] '>Detail:</label>
                    <textarea className='h-20 py-2 px-2 text-sm outline-none
                      rounded bg-[#FFEBE1] '
                        type="text"
                        value={detail}
                        onChange={(e) => {
                            setdetail(e.target.value)
                        }}
                        placeholder='Write Details'
                    />

                    <div className=' flex justify-center '>
                        <button className=' w-full  font-semibold py-2 px-5
                        active:scale-90 text-[#F7F7F0] bg-[#FFC2C7]
                        rounded outline-none' 
                        >
                        Add Notes</button>
                    </div>
                </form>
            </div>

            <div className='py-2 px-3 h-[250px]  flex flex-col gap-5 overflow-scroll scrollbar'>

               {task.map(function(elem, idx){
                   return  <div className=' bg-[#FFEBE1] py-2 px-2 h-[120px] flex flex-col gap-2 rounded-2xl shrink-0' key={idx}>
                    <div className='h-[70px]'>
                        <h1 className='font-bold text-xl text-[#0A0708]'>{elem.title}</h1>
                        <p className='text-sm  text-[#444444]'>{elem.detail}</p>
                    </div>
                        <button className=' rounded font-semibold text-lg
                        active:scale-95 bg-[#FFC2C7] text-[#F7F7F0]' 
                        onClick={() => {deleteBtn(idx)}}>Delete</button>
                </div>
               })}

            </div>
        </div>
    )
}

export default Form