import React, { useState } from 'react';
import { useEffect } from 'react';

export default function Form() {
  const initialValue = { firstName: "", lastName: "", email: "", phone: "" };
  const [formValues, setFormValues] = useState(initialValue);
  const [formError, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
   
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValues);
    const errors = validate(formValues)
    setFormErrors(errors)
    setIsSubmit(true)

    if (Object.keys(errors).length === 0) {
        setSuccessMessage('Registration Successfully');
      }
      
  }
  useEffect(() => {
    setSuccessMessage('');
  }, [formValues]);

  const validate = () => {
    const errors = {}
    if(!formValues.firstName){
        errors.firstName = 'First name is required';
    }
    if(!formValues.lastName){
        errors.lastName = "Last name is required"
    }
    if(!formValues.email){
        errors.email = "email is required"
    }
    if(!formValues.phone){
        errors.phone = "Phone no is required"
    }
    return errors
  }

  return (
    <div className='formFlex'>
      <div className='formdiv'>
      {successMessage && <div className='successMessage'>{successMessage}</div>}
        <form onSubmit={handleSubmit}>

        
            <input
            name='firstName'
            placeholder='First Name'
            type="text"
            value={formValues.firstName}  
            onChange={handleChange}
            />
            {formError.firstName && <p>{formError.firstName}</p>}
            <input
            name='lastName'
            placeholder='Last Name'
            type="text"
            value={formValues.lastName} 
            onChange={handleChange}
            />
            {formError.lastName && <p>{formError.lastName}</p>}
            <input
            name='email'
            placeholder='Email'
            type="text"
            value={formValues.email}
            onChange={handleChange}
            />
            {formError.email && <p>{formError.email}</p>}
            <input
            name='phone'
            placeholder='Phone'
            type="text"
            value={formValues.phone}  
            onChange={handleChange}
            />
            {formError.phone && <p>{formError.phone}</p>}

            <button type='submit' className='registerButton'>Register</button>
        </form>
      </div>
    </div>
  );
}
