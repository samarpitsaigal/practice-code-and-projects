import React from 'react'
import styles from "./Contact.module.css"
import Button from '../Button/Button'
import { MdMessage } from "react-icons/md"; 
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";



const ContactForm = () => {

  const onSubmit = (event)=> {
    event.preventDefault();
    console.log("name",event.target[0].value)
    console.log("name",event.target[1].value)
    console.log("name",event.target[2].value) 
  }


  return <section className={styles.container}>
    <div className={styles.contact_form}>
      <div className={styles.top_btn}>
        <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
        <Button text="VIA Call" icon={<FaPhoneAlt fontSize="24px" />} />
      </div>
      <Button isOutLine={true} text="VIA EMAIL FORM" icon={<HiMail fontSize="24px" />} />

      <form onClick={onSubmit}>
        <div className={styles.form_control}>
          <label htmlFor="name">Name</label>
          <input type="text" name='name' />
        </div>
        <div className={styles.form_control}>
          <label htmlFor="email">Email</label>
          <input type="email" name='email' />
        </div>
        <div className={styles.form_control}>
          <label htmlFor="text">Text</label>
          <textarea name='text' rows={8} />
        </div>
        
        <div style={{display: "flex",justifyContent: "end"}}>
          <Button text="SUBMIT BUTTON" />
        </div>
      </form>


    </div>


    <div className={styles.contact_image}>
      <img src="/images/Service 24_7-pana 1.svg" alt="" />
    </div>

  </section>
}

export default ContactForm
