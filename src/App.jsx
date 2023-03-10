import { useState, useEffect } from 'react';
import TaskCreator from './components/TaskCreator';
import TaskTable from './components/TaskTable';
import VisibilityControl from './components/VisibilityControl';

function App() {
	const [tasksItems, setTasksItems] = useState([]);
	const [showCompleted, setShowCompleted] = useState(false);

	function createNewTask(taskName) {
		if (!tasksItems.find(task => task.name === taskName)) {
			setTasksItems([...tasksItems, { name: taskName, done: false }]);
		}
	}

	const toggleTask = task => {
		setTasksItems(
			tasksItems.map(t => (t.name === task.name ? { ...t, done: !t.done } : t)),
		);
	};

	const clearTasks = () => {
		setTasksItems(tasksItems.filter(task => !task.done));
		setShowCompleted(false);
	};

	useEffect(() => {
		const data = localStorage.getItem('tasks');

		if (data) {
			setTasksItems(JSON.parse(data));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasksItems));
	}, [tasksItems]);

	return (
		<div className='h-screen bg-gray-700 text-white'>
			<div className='container mx-auto px-4 sm:px-4 md:w-1/3 '>
				<TaskCreator createNewTask={createNewTask} />
				<TaskTable tasks={tasksItems} toggleTask={toggleTask} />
				<VisibilityControl
					isChecked={showCompleted}
					setShowCompleted={checked => setShowCompleted(checked)}
					cleanTasks={clearTasks}
				/>
				{showCompleted === true && (
					<TaskTable
						tasks={tasksItems}
						toggleTask={toggleTask}
						showCompleted={showCompleted}
					/>
				)}
			</div>
		</div>
	);
}

export default App;
