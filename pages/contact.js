import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = (props) => {
	const form = useRef();
	console.log(props.id, props.template, form.current, props.user)
	const sendEmail = async (e) => {
		e.preventDefault();
		emailjs
			.sendForm(props.id, props.template, form.current, props.user)
			.then(
				(result) => {
					console.log(result.text);
					console.log('from sever');
				},
				(error) => {
					console.log('from sever');
					console.log(error.text);
				},
			);
	};

	return (
		<div className='flex items-center justify-center'>
			<div className='w-full h-full p-5 lg:p-10 lg:shadow-lg xl:w-1/2 lg:w-4-5 md:w-5/6 card bg-base-100'>
				<h1 className='card-title text-base-content'>Lets Talk</h1>
				<form ref={form} onSubmit={sendEmail} className='card-content'>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>name</span>
						</label>
						<input
							type='text'
							name='name'
							placeholder='Json Borne'
							className='input input-bordered'
							required
						/>
					</div>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>email</span>
						</label>
						<input
							name='email'
							type='email'
							placeholder='json_borne@email.com'
							className='input input-bordered'
							required
						/>
					</div>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Lets Talk</span>
						</label>
						<textarea
							name='message'
							className='h-24 textarea textarea-bordered textarea-success'
							placeholder='Hi I would like to talk about ....'></textarea>
					</div>
					<input
						type='submit'
						value='Send'
						className='w-full my-3 btn btn-success'
					/>
				</form>
			</div>
		</div>
	);
};

export default Contact;

export const getStaticProps = async () => {
	const id = process.env.YOUR_SERVICE_ID;
	const template = process.env.YOUR_TEMPLATE_ID;
	const user = process.env.YOUR_USER_ID;

	return {
		props: {
			id: id,
			template: template,
			user: user,
		},
	};
};
