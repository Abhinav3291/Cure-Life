 import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
const MessageForm=()=>{

  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [message,setMessage] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/message/send",
        { firstName, lastName, phone, email, message },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      // Log the entire response to see its structure
      console.log(res);
  
      // Check if res.data exists before accessing its properties
      if (res && res.data) {
        toast.success(res.data.message);
      } else {
        toast.error("Unexpected response structure from the server.");
      }
  
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      // Check if error.response is defined
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };
  
  return (
    <div className='container form-component message-form'>
      <h2>Send Us A Message</h2>
      <form onSubmit={handleMessage}>
        <div>
          <input type="text" 
          placeholder="First Name" value={firstName} 
          onChange={(e)=> setFirstName(e.target.value)}/>

          <input type="text" 
          placeholder="Last Name" value={lastName} 
          onChange={(e)=> setLastName(e.target.value)}/>
        </div>
        <div>
        <input type="text" 
          placeholder="Email" value={email} 
          onChange={(e)=> setEmail(e.target.value)}/>

          <input type="number" 
          placeholder="Phone" value={phone} 
          onChange={(e)=> setPhone(e.target.value)}/>
        </div>
        <textarea
          rows={7}
          placeholder="Message"
          value={message}
          onChange={(e)=> setMessage(e.target.value)}>
          </textarea>
          <div style={{justifyContent: "center" , alignItems:"center"
          }}>
            <button type="submit">Send</button>
          </div>
      </form>
    </div>
  )
}

export default MessageForm

