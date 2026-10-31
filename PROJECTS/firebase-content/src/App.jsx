import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import {IoMdTrash} from "react-icons/io"
import { RiEditCircleLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { collection,getDocs, onSnapshot } from "firebase/firestore";
import {db} from "./config/fifirebase"
import ContactCard from "./components/ContactCard";
import Model from "./components/Model";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import UseDisclause from "./hooks/UseDisclause";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
 
const [contacts, setContacts] = useState()
const {isOpen,onClose,onOpen} = UseDisclause()

useEffect(()=>{
  const getContacts = async () => {
    try {
      const contactRef = collection(db,"contects")
      onSnapshot(contactRef,(snapshot) => {
      const contactsList = snapshot.docs.map((doc)=>{
        return {
          id: doc.id,
          ...doc.data()
        }
      })
      setContacts(contactsList)
      console.log(contactsList);
      return contactsList
      })


    } catch (error) {
      console.log(error)
    }
  }

  getContacts();
}, [])

  const filterContects = (e) => {
    const value = e.target.value

    const contactRef = collection(db,"contects")
      onSnapshot(contactRef,(snapshot) => {
      const contactsList = snapshot.docs.map((doc)=>{
        return {
          id: doc.id,
          ...doc.data()
        }
      })

      const filteredContact = contactsList.filter(contact => contact.name.toLowerCase().includes(value.toLowerCase()))

      setContacts(filteredContact)
      return filteredContact
    })

  }

  return (
    <>
      <div className="max-w-[370px] mx-auto">
        <Navbar/>

        <div className="flex gap-2">
            <div className="flex relative items-center  flex-grow">
              <FiSearch className="ml-1 text-3xl text-white absolute "/>
              <input onChange={filterContects} type="text" className="bg-transparent border-white border rounded-md h-10 flex-grow text-white pl-9" />
            </div>
            <div>
              <AiFillPlusCircle onClick={onOpen} className="text-5xl cursor-pointer text-white"/>
            </div>
        </div>

        <div className="mt-4 flex flex-col gap-3">
          {
            contacts?.map((contact)=>(
              <ContactCard key={contact.id} contact={contact}/>
            ))
          }
        </div>

      </div>
      <AddAndUpdateContact  isOpen={isOpen} onClose={onClose}/>
      <ToastContainer position="bottom-center" />

    </>
  );
}

export default App;
