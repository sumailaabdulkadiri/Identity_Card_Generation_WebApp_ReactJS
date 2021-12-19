import React, {Component} from 'react';


class Create_ID_Card extends React.Component {
render () {
    return (
<div class="wrapper">
    <div class="title">
      Create Identity Card
    </div>
    <div class="form">
       <div class="inputfield">
          <label>First Name</label>
          <input type="text" class="input"/>
       </div>  
        <div class="inputfield">
          <label>Last Name</label>
          <input type="text" class="input"/>
       </div>  
       <div class="inputfield">
          <label>Student ID</label>
          <input type="text" class="input"/>
       </div>  
      <div class="inputfield">
          <label>Department</label>
          <input type="text" class="input"/>
       </div> 
        <div class="inputfield">
          <label>Program Type</label>
          <div class="custom_select">
            <select>
              <option value="">Select Program Type</option>
              <option value="Bachelors">Bachelors Degree</option>
              <option value="Masters">Masters Degree</option>
              <option value="PHD">PhD</option>
            </select>
          </div>
       </div> 
        <div class="inputfield">
          <label>Email Address</label>
          <input type="text" class="input"/>
       </div> 
      <div class="inputfield">
          <label>Emergency Contact</label>
          <input type="text" class="input"/>
       </div> 
      <div class="inputfield">
          <label>Passport Image</label>
          <input type="file" name="fileToUpload" class="input"/>
       </div> 
      <div class="inputfield terms">
          <label class="check">
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
          <p>Agreed to terms and conditions</p>
       </div> 
      <div class="inputfield">
        <input type="submit" value="Create ID Card" class="btn"/>
      </div>
      <div class="inputfield">
        <input type="submit" value="Download ID Card" class="btn"/>
      </div>
    </div>
</div>	
    );
}
}

export default Home;
