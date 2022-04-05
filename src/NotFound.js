import { Link } from "react-router-dom";

const NotFound = () => {
	return <div className="not-found">
		<h2>Sorry</h2>
		<p>The page you are trying to access does not exist.</p>
		<Link to="/">Back to Home</Link>
	</div>;
};

export default NotFound;
