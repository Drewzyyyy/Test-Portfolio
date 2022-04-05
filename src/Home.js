import BlogList from "./BlogList.js";
import useFetch from "./useFetch.js";

const Home = () => {
	const {
		data: blogs,
		isLoading,
		error,
	} = useFetch("http://localhost:8000/blogs");

	return (
		<div className="Home">
			{error && <div>{error}</div>}
			{isLoading && <div>Loading...</div>}
			{blogs && <BlogList blogs={blogs} title="All Blogs" />}
		</div>
	);
};

export default Home;
