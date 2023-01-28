import { useState } from 'react';
import PropTypes from 'prop-types';

function TaskCreator({ createNewTask }) {
	const [newTaskName, setNewtaskName] = useState('');

	const handleSubmit = e => {
		e.preventDefault();

		createNewTask(newTaskName);
		setNewtaskName('');
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className='flex flex-wrap pt-6'>
				<div className='w-3/4'>
					<input
						type='text'
						placeholder='Enter a new task'
						value={newTaskName}
						onChange={e => setNewtaskName(e.target.value)}
						className='mb-1 block w-full appearance-none rounded border border-gray-200 bg-white py-1 px-2 text-base leading-normal text-gray-800'
					/>
				</div>
				<div className='w-1/4'>
					<button className='inline-block w-full rounded bg-gray-800 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md hover:bg-gray-900 hover:shadow-lg'>
						Save Task
					</button>
				</div>
			</form>
		</div>
	);
}

TaskCreator.propTypes = {
	createNewTask: PropTypes.func.isRequired,
};

export default TaskCreator;
