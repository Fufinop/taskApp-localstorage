import PropTypes from 'prop-types';

function TaskRow({ task, toggleTask }) {
	return (
		<tr>
			<td className='flex justify-between border-b-2 border-slate-500'>
				{task.name}
				<input
					type='checkbox'
					checked={task.done}
					onChange={() => toggleTask(task)}
				/>
			</td>
		</tr>
	);
}

TaskRow.propTypes = {
	task: PropTypes.shape({
		name: PropTypes.string.isRequired,
		done: PropTypes.bool.isRequired,
	}).isRequired,
	toggleTask: PropTypes.func.isRequired,
};

export default TaskRow;
