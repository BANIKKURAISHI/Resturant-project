import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="bg-orange-500 ">
            <h1>OOPS !!! There has no content</h1>
            <Link to='/'>Back</Link>
         
        </div>
   
    );
};

export default ErrorPage;