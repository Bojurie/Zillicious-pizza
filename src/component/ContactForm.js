import React, { useState } from 'react';
import './ContactForm.css'

const Contactform = () => {

    const [user, setUser] = useState({

    name: '',
    email: '',
    topic: '',
    message: ''
   })

   const {name, email, topic, message} = user;

   const onChange = e => setUser({...user, [e.target.name]: e.target.value});

   const onSubmit = e => {
     e.prventDefault();
      console.log('Register Submit')     
   }
  return (
    <div className='Contact-form'>
        <div>
            <form onSubmit={onSubmit}>
              <div className='form-group_name'>
                <div className='form-group'>
                  <label htmlFor='fName'>First Name</label>
                  <input type='text' name='fName' placeholder='  First name' value={name} onChange={onChange}/>
                </div>
                <div className='form-group'>
                  <label htmlFor='lName'>Last Name</label>
                  <input type='text' name='lName'  placeholder='  Last Name' value={name} onChange={onChange}/>
                </div>
                
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email Address</label>
                <input type='email' name='email'  placeholder='  Email Address...' value={email} onChange={onChange}/>
              </div>
              <div className='form-group'>
                <label htmlFor='topic'>Subject</label>
                <input type='topic' name='topic'  placeholder='  Subject...' value={topic} onChange={onChange}/>
              </div>
              <div className='form-group'>
                
                <textarea type='message' name='message' value={message} placeholder='Message' onChange={onChange}/>
              </div>
              <p></p><button type='submit' value='Register' className='btn btn-primary btn-lg' >Submit</button>
            </form>
        </div>
    </div>
  );
}

export default Contactform;
