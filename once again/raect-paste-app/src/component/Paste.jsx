import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';



const Paste = () => {

  const pastes = useSelector((state)=>state.paste.pastes);

  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const filterData = pastes.filter(
    (paste)=>paste.titel.toLowerCase().includes(searchTerm.toLowerCase())
  )

  function handleDelete(pasteId){
    dispatch(removeFromPastes(pasteId));
  }

  function handleShare(paste) {
    if (navigator.share) {
      navigator.share({
        title: paste.titel,      // jo bhi title hai
        text: paste.value,       // description ya text
        url: window.location.href // current page ka link (ya koi custom link)
      })
      .then(() => console.log('Shared successfully'))
      .catch((error) => console.log('Error sharing:', error));
    } else {
      alert("Sharing not supported in this browser");
    }
  }



  return (
    <div>
      
      <input type='search'  
        className='flex flex-col min-w-[600px] mt-5'
        placeholder='search here'
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
      />

      <div className='flex flex-col gap-5 mt-5'>
        {
          filterData.length > 0 &&
          filterData.map(
            (paste) => {
              return (
                <div className='border'>
                  <div>
                    {paste.titel}
                  </div>

                  <div>
                    {paste.value}
                  </div >

                  <div className='flex flex-row gap-4 place-content-evenly'>
                    <button>
                      <a href={`/?pasteId=${paste?._id}`}>Edit</a>
                    </button>
                    <button>
                      <a href={`/pastes/${paste?._id}`}>View</a>
                    </button>
                    <button onClick={()=>handleDelete(paste?._id)}>
                      Delete
                    </button>
                    <button onClick={()=>{
                      navigator.clipboard.writeText(paste?.titel)
                      toast.success("copied to clipboard")
                    }}>
                      Copy
                    </button>
                    <button onClick={()=> handleShare(paste)}>
                      Share
                    </button>
                  </div>

                  <div>
                    {paste.createAt}
                  </div>

                </div> 
              )
            }
          )
        }

      </div>
      
    </div>
  )
}

export default Paste
