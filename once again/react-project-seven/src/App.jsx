
import './App.css'

function App() {

  function handleClick() {
    alert("I am Clicked");
  }

  function handleMouseOver() {
    alert("Para k uper mouse leke aaye ho")
  }

  function handleInputChange(e){
    // document.writeln("text change ho gyi h")
    // console.log("text change ho gyi hai")
    console.log("Value till now: ", e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("form submit kr du kya")
  }

  return (
    <div>

       <button onClick={() => alert("click hua h")}>
        CLick Me
      </button>  */

      {/* <form onSubmit={handleSubmit}>
        <input type="text"  onChange={handleInputChange}/>
        <button type='submit'>Submit</button>
      </form>

       {/* <p onMouseOver={handleMouseOver} style={{border: "2px solid black"}}>
       I am Para 
      </p>


      <button onClick={handleClick} style={{backgroundColor: "red", color: "white"} }>
        Click me
      </button>  */}
    </div>
  )
}

export default App
