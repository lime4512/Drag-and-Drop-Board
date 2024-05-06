import styles from './listTask.module.scss'
import { useDrop } from 'react-dnd'
import { Task } from './Task'

export const TaskBlock = ({
	status,
	todos,
	progress,
	completed,
	setTasks,
	tasks,
}) => {
	const [{ isOver }, drop] = useDrop(() => ({
		accept: 'task',
		drop: item => addItemToSection(item.id),
		collect: monitor => ({
			isOver: !!monitor.isOver(),
		}),
	}))

	const addItemToSection = id => {
		setTasks(prev => {
			const mTas = prev.map(t => {
				if (t.id == id) {
					return { ...t, status: status }
				}
				return t
			})

			return mTas
		})
	}

	let taskList = todos
	if (status == 'todo') {
		taskList = todos
	}
	if (status == 'progress') {
		taskList = progress
	}
	if (status == 'completed') {
		taskList = completed
	}
	return (
		<div className={styles.content} ref={drop}>
			{taskList.map(item => (
				<Task name={item.name} key={item.id} id={item.id} />
			))}
		</div>
	)
}
