import { useForm , } from "react-hook-form";
import styled from "styled-components";
import "./Home.css"
import {useNavigate} from "react-router-dom"
export function App() {

  const navigate=useNavigate()

  const { 
    register,
    handleSubmit,
    reset,
    watch,
    formState: {errors,isSubmitting}
  } = useForm();

  async function onSubmit(data){
    await new Promise((response)=>setTimeout(response,2000))
    console.log('submitting form',data)
    reset({
      firstName:"hunny",
      category:"",
      aboutYou:""
    })
    navigate('/about')
  }
  

  return (
    <div className="home">
      <form onSubmit={handleSubmit(onSubmit)}     className="form_two">
      
      <div className="form_one">
        <div className="head">
          <img src="fo.svg" alt="" />
          <h2>React Hook Form</h2>
        </div>
        <p>Performant, flexible and extensible with easy-to-use validation.</p>
        <input {...register("firstName")} placeholder="First name" />
        <select {...register("category", { required: true })}>
          <option value="">Select...</option>
          <option value="A">Option A</option>
          <option value="B">Option B</option>
        </select>
        <textarea {...register("aboutYou")} placeholder="About you" />
        
        <input type="submit" disabled={isSubmitting} value={isSubmitting? "Submitting" : "Submit"} />
      </div>

      </form>

    </div>
  );
}

export default App;

