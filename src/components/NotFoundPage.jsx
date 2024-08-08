import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
}
 export default NotFound