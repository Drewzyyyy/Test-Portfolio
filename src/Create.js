import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('mario');
	const [isSending,setIsSending] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const blog = { title, body, author };

		setIsSending(true);

		fetch('http://localhost:8000/blogs',{
			method: 'POST',
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(blog)
		}).then(() => {
			console.log('New blog added!');
			setIsSending(false);
			navigate('/');
		}).catch(err => {
			console.log(err);
			setIsSending(false);
			alert('Creation failed.')
		});
	}

	return (
		<div className="create">
			<h2>Create new blog</h2>
			<form onSubmit={handleSubmit}>
				<label>Blog Title:</label>
				<input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
				<label>Blog Body:</label>
				<textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
				<label>Blog Author:</label>
				<select required value={author} onChange={(e) => setAuthor(e.target.value)}>
					<option value="mario">mario</option>
					<option value="yoshi">yoshi</option>
				</select>
				<button disabled={isSending} >{ !isSending ? 'Create Blog' : 'Submitting new blog...' }</button>
			</form>
		</div>
	);
};

export default Create;
