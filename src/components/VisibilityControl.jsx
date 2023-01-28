import PropTypes from 'prop-types';

function VisibilityControl({ setShowCompleted, cleanTasks, isChecked }) {
	const handleDelete = () => {
		if (window.confirm('Are you sure you want to delete all tasks?')) {
			cleanTasks();
		}
	};

	return (
		<div className='flex justify-between p-2 text-center text-white'>
			<div className='relative mb-2 block '>
				<input
					className='absolute mt-1 -ml-6'
					type='checkbox'
					checked={isChecked}
					onChange={e => setShowCompleted(e.target.checked)}
				/>
				<label>Show Tasks Done</label>
			</div>
			<button
				onClick={handleDelete}
				className='inline-block rounded bg-red-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-black shadow-md transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg'
			>
				Clear
			</button>
		</div>
	);
}

VisibilityControl.propTypes = {
	setShowCompleted: PropTypes.func.isRequired,
	cleanTasks: PropTypes.func.isRequired,
	isChecked: PropTypes.bool.isRequired,
};

export default VisibilityControl;
