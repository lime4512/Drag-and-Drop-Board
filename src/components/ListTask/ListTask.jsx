import { useEffect, useState } from 'react'
import styles from './listTask.module.scss'
import { TaskBlock } from './TaskBlock'

export const ListTask = ({ tasks, setTasks }) => {
	const [todos, setTodos] = useState([])
	const [progress, setProgress] = useState([])
	const [completed, setCompleted] = useState([])

	useEffect(() => {
		const fTodos = tasks.filter(item => item.status == 'todo')
		const fProgress = tasks.filter(item => item.status == 'progress')
		const fCompleted = tasks.filter(item => item.status == 'completed')

		setTodos(fTodos)
		setProgress(fProgress)
		setCompleted(fCompleted)
	}, [tasks])

	const statuses = ['todo', 'progress', 'completed']
	return (
		<div className={styles.container}>
			{statuses.map(status => (
				<TaskBlock
					key={Math.random()}
					status={status}
					todos={todos}
					progress={progress}
					completed={completed}
					tasks={tasks}
					setTasks={setTasks}
				/>
			))}
		</div>
	)
}
