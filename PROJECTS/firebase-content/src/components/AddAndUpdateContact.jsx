import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import Model from "./Model"
import {Formik,Form, Field} from "formik"
import {db} from '../config/fifirebase'
import { toast } from "react-toastify";

const AddAndUpdateContact = ({isOpen,onClose,isUpdate, contact}) => {


  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contects");
      await addDoc(contactRef,contact);
      onClose()
      toast.success("Contact Added Successfully")
    } catch (error) {
      console.log(error)
    }
  }

  const updateContact = async (contact,id) => {
    try {
      const contactRef = doc(db, "contects",id);
      await updateDoc(contactRef,contact);
      onClose()
      toast.success("Contact Updated Successfully")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Model isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={isUpdate 
            ? {
              name: contact.name,
              email: contact.email
            }
            :{
            name:"",
            email:"",
          }}
          onSubmit={(values)=>{
            console.log(values)
            isUpdate ? updateContact(values,contact.id) : addContact(values)
            
          }}
        >
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="border h-10" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field name="email" className="border h-10" />
            </div>
            <button  type="submit" className="bg-red-500 rounded-md border self-end px-3 py-1.5">{isUpdate ? "Update" : "Add"} Contact</button>
          </Form>
        </Formik>        
      </Model>


    </div>
  );
};

export default AddAndUpdateContact