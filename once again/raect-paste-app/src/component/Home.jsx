import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToPAstes } from '../redux/pasteSlice';


const Home = () => {

  const [titel , setTitel] = useState('');
  const [value , setValue] = useState('');
  const [searchParams , setSearchParams] = useSearchParams();
  const pasteId = searchParams.get('pasteId')
  const dispatch=useDispatch();
  const allPastes = useSelector((state)=>state.paste.pastes);

  useEffect(()=>{
    if(pasteId){
      const paste = allPastes.find((p)=> p._id === pasteId)
      setTitel(paste.titel);
      setValue(paste.value)

    }
  })


  function createPaste(){
    const paste = {
      titel:titel,
      value:value,
      _id:pasteId || Date.now().toString(36),
      createAt:new Date().toISOString(),
    }

    if(pasteId){
      //update
      dispatch(updateToPastes(paste));
    }

    else{
      //create
      dispatch(addToPAstes(paste));
    }

    //after creation or updation
    setTitel('');
    setValue('');
    setSearchParams('');

  }
 
  return (
    <div>

      <div className='flex flex-row gap-7 place-content-between'>
        <input
        className='p-1 rounded-2xl mt-2 w-[66%] pl-4'
        type="text"
        placeholder='enter titel here'
        value={titel}
        onChange={(e) => setTitel(e.target.value)} 
        />


        <button 
        onClick={createPaste}
        className='p-2 rounded-2xl mt-2'>
          {
            pasteId? "Update My Paste" : "Create my paste"
          }
        </button>
      </div>    

      <div className='mt-8'>
        <textarea 
          className='rounded-2xl mt-4 min-w-[500px] p-4'
          value={value}
          placeholder='enter content here'
          onChange={(e)=>setValue(e.target.value)}
          rows={20}
        />
      </div>

    </div>
  )
}

export default Home
