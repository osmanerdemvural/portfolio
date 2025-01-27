 /* contact.jsx - Osman Erdem Vural - Student ID 301399745 - 23/01/2025 */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
     const ContactForm = () => {
          const [formData, setFormData] = useState({
            name: "",
            email: "",
            message: "",
          });
        
          const [formStatus, setFormStatus] = useState("");
        
          const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
              ...formData,
              [name]: value,
            });
          };
        
          const handleSubmit = (e) => {
            e.preventDefault();
            // Simulate form submission (replace with actual API call)
            console.log("Form submitted:", formData);
            setFormStatus("Your message has been sent!");
            setFormData({ name: "", email: "", message: "" });
          };

     return (
     <>
     <form onSubmit={handleSubmit}>
          <div className="frm">
    <table>
          <tr>
               <td colSpan={2}> 
                    <h2>Contact Me</h2>
               </td>
          </tr>
          <tr>
               <td colSpan={2}>
                    <b>Email:</b> ovural1@my.centennialcollege.ca<br/>
                    <b>GSM:</b> +1 647 274 21 03
               </td>
          </tr>
          <tr>
               <td colSpan={2}>
                    <h3>Contact Form</h3>
               </td>
          </tr>
          <tr>
               <td>
                    
                        
                         <label>Name</label>
                         </td>
                         <td>
                         <input
                         type="text"
                         id="name"
                         name="name"
                         value={formData.name}
                         onChange={handleChange}
                         required
                         />
                         </td>
                    </tr>
                    <tr>
                         <td>
                         <label>Email</label>
                         </td>
                         <td>
                         <input
                         type="email"
                         id="email"
                         name="email"
                         value={formData.email}
                         onChange={handleChange}
                         required
                         />
                         </td>
                    </tr>
                    <tr>
                         <td>
                         <label>Message</label>
                         </td>
                         <td>
                         <textarea
                         id="message"
                         name="message"
                         value={formData.message}
                         onChange={handleChange}
                         className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                         rows="4"
                         required
                         ></textarea>
                         </td>
                    </tr>
                    <tr>
                         <td>

                         </td>
                         <td>
                         <button
                         type="submit"
                         >
                         Send Message
                         </button>
                         
                    

      {formStatus && (<p>{formStatus}</p>)}
               </td>
          </tr>
          <tr>
               <td colSpan={2}>
               <footer>  <hr/>&copy; &nbsp; Copyright Osman Erdem Vural - 301399745 - Web Application Development - Winter 2025 
               <a href="mailto:ovural1@my.centennialcollege.ca"> - @ Click for send an email</a></footer>  
               </td>
          </tr>
     </table>
     </div>
     </form>
     </>
     );
}
export default ContactForm;   