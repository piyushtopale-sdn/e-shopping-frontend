import { Link } from "react-router-dom";

function NotFound() {
	return (
		<div>
			<h2>404</h2>
			<h3>Page Not Found!</h3>
			<p>Oops! The page you were looking for doesn&apos;t exist.</p>
			<Link to="/" className="btn">
                    Back to home
			</Link>
		</div>
	);
}
export default NotFound;
