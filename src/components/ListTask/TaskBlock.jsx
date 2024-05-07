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
	let title = 'Заметки'
	let taskList = todos
	let comp = false
	if (status == 'todo') {
		taskList = todos
		title = '📜Заметки'
		comp = false
	}
	if (status == 'progress') {
		taskList = progress
		title = '🔥В Прогресс'
		comp = false
	}
	if (status == 'completed') {
		taskList = completed
		title = '✅Выполненные'
		comp = true
	}
	return (
		<div
			className={`${styles.content} ${isOver ? styles.special_content : ''}`}
			ref={drop}
		>
			<h3 className={styles.title_task}>{title}</h3>
			{taskList.map(item => (
				<Task
					name={item.name}
					key={item.id}
					id={item.id}
					setTasks={setTasks}
					tasks={tasks}
					comp={comp}
				/>
			))}
		</div>
	)
}
