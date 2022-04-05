import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
	const { id } = useParams();
	const {
		data: blog,
		error,
		isLoading,
	} = useFetch("http://localhost:8000/blogs/" + id);

	const navigate = useNavigate();

	const handleClick = () => {
		fetch("http://localhost:8000/blogs/" + id,{
			method: 'DELETE'
		}).then(() => {
			navigate('/');
		}).catch((err) => {
			console.log(err);
			alert('Deletion failed.')
		})
	}

	return (
		<div className="blog-details">
			{ isLoading && <div>Loading...</div> }
			{ error && <div>{error}</div> }
			{ blog && (
				<article>
					<h2>{blog.title}</h2>
					<p>Written by: {blog.author}</p>
					<div>{blog.body}</div>
					<button onClick={handleClick}>Delete</button>
				</article>
			)}
		</div>
	);
};

export default BlogDetails;
