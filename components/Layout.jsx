 /* layout.jsx - Osman Erdem Vural - Student ID 301399745 - 23/01/2025 */
import { Link } from 'react-router-dom';
export default function Layout() {
 return (
 <><table id="layout">
    <tr>
        <td>
        <img  src="img/banner.png"></img>
        </td>
        </tr>
        <tr>
        <td>
        <nav>
 <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/education">Education</Link>| <Link to="/project">Project</Link>| <Link to="/services">Services</Link>| <Link to="/contact">Contact</Link>
 </nav>
        </td>
    </tr>
 </table>
 
 

 

 
</>
 
 );
}
