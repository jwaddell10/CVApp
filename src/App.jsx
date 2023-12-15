import { useState } from 'react'
import './App.css'


function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "", 
    schoolname: "", 
    major: "", 
    graduation: "",
    company: "",
    position: "",
    start: "", 
    end: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target, 'this is evtarg')
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    console.log(formData, 'this is formdata check')
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    alert(`Name: ${formData.name}, Email: ${formData.email}, Telephone: ${formData.telephone}, School: ${formData.schoolname}, major: ${formData.major},
    grad: ${formData.graduation}, company: ${formData.company}, position: ${formData.position}, start: ${formData.start}, end: ${formData.end}`
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
                name = "name" 
                type = "text" 
                label = "name"
                value = {formData.name}
                onChange = {handleChange}
            />
           <h3 className='formZeroInformation'>Email:</h3>
            <input 
                name = "email"
                type = "email"
                label = "email"
                value={formData.email}
                onChange={handleChange}
            />
            <h3 className='formZeroInformation'>Phone Number:</h3>
            <input 
                name = "telephone" 
                type = "tel" 
                label = "telephone"
                value = {formData.telephone}
                onChange = {handleChange}
            />
          </form>
        )}
      {activeIndex === 1 && (
          <form onSubmit = {handleSubmit}>
          <h3 className = "formOneInformation">School Name:</h3>
            <input 
                name = "schoolname"
                type = "text" 
                label = "schoolname"
                value = {formData.schoolname}
                onChange = {handleChange}
            />
            <h3 className = "formOneInformation">Major:</h3>
            <input 
                name = "major"
                type = "text" 
                label = "studyProgram"
                value = {formData.major}
                onChange = {handleChange}
            />
            <h3 className='formOneInformation'>Graduation Year:</h3>
            <input 
                name = "graduation"
                type="number" 
                label = "studyDates"
                value = {formData.graduation}
                onChange = {handleChange}
            />
          </form>
        )}
      {activeIndex === 2 && (
          <form onSubmit = {handleSubmit}>
            <h3 className = "formTwoInformation">Company Name:</h3>
            <input 
                name = "company"
                type = "text" 
                label = "schoolName"
                value = {formData.company}
                onChange = {handleChange}
            /> 
            <h3 className = "formTwoInformation">Position:</h3>
            <input 
                name = "position"
                type = "text" 
                label = "studyProgram"
                value = {formData.position}
                onChange = {handleChange}
            />
            <h3 className='formTwoInformation'>Start Date:</h3>
            <input 
                name = "start"
                type="date" 
                label = "startDate"
                value = {formData.start}
                onChange={handleChange}
            />
            <h3 className='formTwoInformation'>End Date:</h3>
            <input 
                name="end"
                type="date" 
                label = "endDate"
                value={formData.end}
                onChange={handleChange}
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
