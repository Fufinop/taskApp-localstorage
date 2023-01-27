import { useState } from 'react';
import PropTypes from 'prop-types';

function TaskCreator({ createNewTask }) {
	const [newTaskName, setNewtaskName] = useState('');

	const handleSubmit = e => {
		e.preventDefault();

		createNewTask(newTaskName);
		localStorage.setItem('tasks', newTaskName);
		setNewtaskName('');
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Enter a new task'
					value={newTaskName}
					onChange={e => setNewtaskName(e.target.value)}
				/>
				<button>Save Task</button>
			</form>
		</div>
	);
}

TaskCreator.propTypes = {
	createNewTask: PropTypes.func.isRequired,
};

export default TaskCreator;
