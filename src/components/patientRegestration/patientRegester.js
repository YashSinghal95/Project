import React from 'react'
import '../regestration.css'
function patientRegester() {
  return (
    <>
    <div class="content">
    <div class="apply_box">
       <form action="">
        <div class="form_container">
          <div class="form_control">
            <label for="name1">First Name*</label>
            <input type="text" id="name1" placeholder="Enter first name...."></input>
          </div>
          <div class="form_control">
            <label for="name2">Last Name*</label>
            <input type="text" id="name2" placeholder="Enter last name...."></input>
          </div>
          <div class="form_control">
            <label for="date">Date of Birth*</label>
            <input type="date" id="date"></input>
          </div>
          <div class="form_control">
            <label for="Phoneno.">Phone Number*</label>
            <input type="number" name="text" id="Address" placeholder="Enter Phone Number...."></input> 
          </div>
          <div class="form_control">
            <label for="Address">Address*</label>
            <input type="Address" id="email" placeholder="Enter address...."></input>
          </div>
          <div class="form_control">
            <label for="Password">Password for Login*</label>
            <input type="number" id="Pin_code" placeholder="Enter Pincode...."></input>
          </div>
        </div>
        <div class="btn">
          <button type="submit">Register</button>
        </div>
       </form>
    </div>
  </div>
    </>
  )
}

export default patientRegester