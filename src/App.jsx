import { useState } from 'react'
import './App.css'


function App() {

  const [formData, setFormData] = useState({name: "",email: "",telephone: ""});

  const handleChange = (event) => {
    const { name } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: event.target.value }));
    console.log(formData, 'this is formdata check')
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    alert(`Name: ${formData.name}, Email: ${formData.email}, Telephone: ${formData.telephone}`
    );
};
    const [activeIndex, setActiveIndex] = useState(0)



    const handleButtonClick = (index) => {
      setActiveIndex(index);
    };

    return (
    <div>
     <div>
        <h1>CV Application</h1>
      </div>
      <div>
        <button onClick = {() => handleButtonClick(0)}>Personal Details:</button>
        <button onClick = {() => handleButtonClick(1)}>Educational Experience:</button>
        <button onClick = {() => handleButtonClick(2)}>Work Experience:</button>
     </div>

      {activeIndex === 0 && (
          <form onSubmit = {handleSubmit}>
            <h3 className = "formZeroInformation">Name:</h3>
            <input
                name = {formData.name} 
                type = "text" 
                label = "name"
                onChange = {handleChange}
            />
           <h3 className='formZeroInformation'>Email:</h3>
            <input 
                name = {formData.email}
                type = "email"
                label = "email"
                onChange={handleChange}
            />
            <h3 className='formZeroInformation'>Phone Number:</h3>
            <input 
                name = {formData.telephone} 
                type = "tel" 
                label = "telephone"
                onChange = {handleChange}
            />
          </form>
        )}
      {activeIndex === 1 && (
          <form>
            <h3 className = "formOneInformation">School Name:</h3>
            <input 
                type = "text" 
                label = "schoolName"
            />
            <h3 className = "formOneInformation">Major:</h3>
            <input 
                type = "text" 
                label = "studyProgram"
            />
            <h3 className='formOneInformation'>Graduation Year:</h3>
            <input 
                type="number" 
                label = "studyDates"
            />
          </form>
        )}
      {activeIndex === 2 && (
          <form>
            <h3 className = "formTwoInformation">Company Name:</h3>
            <input 
                type = "text" 
                label = "schoolName"
            /> 
            <h3 className = "formTwoInformation">Position:</h3>
            <input 
                type = "text" 
                label = "studyProgram"
            />
            <h3 className='formTwoInformation'>Start Date:</h3>
            <input 
                type="date" 
                label = "startDate"
            />
            <h3 className='formTwoInformation'>End Date:</h3>
            <input 
                type="date" 
                label = "endDate"
            />
          </form>
        )}  

        <button onClick={handleSubmit}>preview</button>
   </div>
   ) 
}

//preview button that lets you preview text
//edit button lets you go back to previous state

export default App
