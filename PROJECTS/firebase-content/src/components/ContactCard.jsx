import React from 'react'
import { IoMdTrash } from 'react-icons/io'
import { RiEditCircleLine } from 'react-icons/ri'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { deleteDoc, doc } from 'firebase/firestore'
import {db} from "../config/fifirebase"
import UseDisclause from '../hooks/UseDisclause'
import AddAndUpdateContact from './AddAndUpdateContact'
import { toast } from 'react-toastify'

const ContactCard = ({contact}) => {

  const {isOpen,onClose,onOpen} = UseDisclause()

    const deleteContect =async (id) => {
    try {
      await deleteDoc(doc(db,"contects",id))
      toast.success("Contact Deleted Successfully")
    } catch (error) {
      console.log(error)
    }

  }

  return (  
    <>          
    <div className="flex items-center p-2 rounded-lg bg-dark-yellow justify-between">
        <div className="flex gap-1">
          <HiOutlineUserCircle className="text-orange-400 text-4xl"/>
          <div className="">
            <h2 className="font-medium  ">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>
        <div className="flex text-3xl">
          <RiEditCircleLine onClick={onOpen} className='cursor-pointer' />
          <IoMdTrash onClick={()=>deleteContect(contact.id)} className="text-orange-600"/>
        </div>
    </div>
    <AddAndUpdateContact contact={contact} isUpdate isOpen={isOpen} onClose={onClose}/>
    </>
  )
}

export default ContactCard