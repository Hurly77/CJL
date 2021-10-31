import styled from 'styled-components';

const Test = styled.div.attrs((props) => ({ className: '' }))``;
const Contact = () => {
	return (
		<div className='flex items-center justify-center'>
			<div className='w-full h-full p-5 lg:p-10 lg:shadow-lg xl:w-1/2 lg:w-4-5 md:w-5/6 card bg-base-100'>
				<h1 className='card-title text-base-content'>Lets Talk</h1>
				<form className='card-content'>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>name</span>
						</label>
						<input
							type='text'
							placeholder='name'
							className='input input-bordered'
						/>
					</div>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>email</span>
						</label>
						<input
							type='email'
							placeholder='json_borne@email.com'
							className='input input-bordered'
						/>
					</div>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Whats Up</span>
						</label>
						<textarea
							className='h-24 textarea textarea-bordered textarea-success'
							placeholder='Whats Up'></textarea>
					</div>
				</form>
				<button type='submit' className='my-3 btn btn-success'>
					Submit
				</button>
			</div>
		</div>
	);
};

export default Contact;
