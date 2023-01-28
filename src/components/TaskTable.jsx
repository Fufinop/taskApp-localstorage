import PropTypes from 'prop-types';
import TaskRow from './TaskRow';

function TaskTable({ tasks, toggleTask, showCompleted = false }) {
	const taskTableRows = doneValue => {
		return tasks
			.filter(task => task.done === doneValue)
			.map(task => (
				<TaskRow key={task.name} task={task} toggleTask={toggleTask} />
			));
	};

	return (
		<table className='mb-4  w-full max-w-full  border-2 border-slate-500  bg-gray-600'>
			<thead>
				<tr>
					<th className='border-b-2 border-slate-500 bg-gray-700'>Tasks</th>
				</tr>
			</thead>
			<tbody>{taskTableRows(showCompleted)}</tbody>
		</table>
	);
}

TaskTable.propTypes = {
	tasks: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			done: PropTypes.bool.isRequired,
		}),
	).isRequired,
	toggleTask: PropTypes.func.isRequired,
	showCompleted: PropTypes.bool,
};

export default TaskTable;
