import { useEffect, useState } from "react";

interface CreateEventProps {
    onClose: () => void;
}

export default function CreateEvent(props: CreateEventProps) {
    const handleSubmit = (e: any) => {
        console.log(e.target.value);
        props.onClose();
    }

    return (
        <div className='flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50 absolute'>
          <div className='flex flex-col items-center w-1/4 min-w-fit bg-white text-black text-sm gap-2 p-2'>
            <div className='flex flex-row justify-end w-full'>
              <button onClick={() => props.onClose()}>X</button>
            </div>
            <form onSubmit={() => handleSubmit} className='flex flex-col items-center w-3/4 gap-1 '>
              <div className='w-full'>
              <label className='w-full'>Event*</label>
              <input className='w-full border' type='text' placeholder='event name' required/>
              </div>

              <div className='w-full'>
              <label className='w-full flex felx-col'>Start Date*</label>
              <input className='w-full border' type="datetime-local" placeholder='start date' required/>
              </div>

              <div className='w-full'>
              <label className='w-full'>End Date*</label>
              <input className='w-full border' type="datetime-local" placeholder='end date'/>
              </div>

              <div className='w-full'>
              <label className='w-full'>Location</label>
              <input className='w-full border' type='' placeholder='436 W Pender St, Vancouver, BC V6B 1T5'/>
              </div>

              <div className='w-full'>
              <label className='w-full'>Event Description*
                <textarea className='w-full border' placeholder='description' required/>
              </label>
              </div>

              <div className='w-full'>
              <label className='w-full'>Color</label>
              <input className='w-full border' type="color" placeholder='color (optional)'/>
              </div>

              <input className='border mt-1' type='submit' value='Add'/>
            </form>
          </div>
        </div>
      )
}