import './App.css'
import { useForm } from "react-hook-form"

function App() {

// from create krne k liye step 1 likhn acompalsory hota h

 // step 1 :
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data){
    //Api call ko simulate krte h
    await new Promise((res)=>setTimeout(res,5000))
    console.log('submitting the form',data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name:</label>
        <input
        className={errors.firstName ? 'input-error' : "" }
        {...register('firstName', 
        { 
          required: true,
          minLength:{value:3, message:'min lenght atleast 3'}, //required true likhne  se input tag ko fill krna jruri ho jata hai nhi bhroge to error dikha dega
          maxLength:{value:6, message:'max lenght is 6'}
        })} />
        {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
      </div>

      <br />
      <div>
        <label>Middle Name:</label>
        <input
         className={errors.firstName ? 'input-error' : "" }
         {...register('MiddleName',
          {
            minLength:{value:3, message:'min lenght atleast 3'},
          }
         )}   
        />

          {
            errors.MiddleName && <p className='error-msg'>{errors.MiddleName.message}</p>
          }

      </div>

      <br />
      <div>
        <label>Last Name:</label>
        <input
         className={errors.firstName ? 'input-error' : "" }
         {...register('lastName',
          {
            pattern:{
              value:/^[A-Za-z]+$/i,
              message:"Last name is not as par the rules, Please use /^[A-Za-z]+$/i"
            }
          }
        )} />
        {errors.lastName && <p className='error-msg'>{errors.lastName.message}</p>}
      </div>
      <br />
      <input type="submit" disabled={isSubmitting}
      value={isSubmitting ? "Submitting" : "Submit"} />
    </form>
  )
}

export default App
