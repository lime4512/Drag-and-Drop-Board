import { useState } from 'react'
import styles from './addTask.module.scss'
import { v4 as uuidv4 } from 'uuid'

export const AddTask = ({ tasks, setTasks }) => {
	const [task, setTask] = useState({
		id: '',
		name: '',
		status: 'todo',
	})

	const handleSubmit = e => {
		e.preventDefault()

		setTasks(prev => {
			const list = [...prev, task]

			localStorage.setItem('Tasks', JSON.stringify(list))
			return list
		})
	}

	return (
		<form className={styles.content} onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Ввод твоих задач'
				value={task.name}
				className={styles.add_input}
				onChange={e => setTask({ ...task, id: uuidv4(), name: e.target.value })}
			/>
			<div className={styles.container_btn}>
				<button className={styles.add_btn}>
					<span className='material-symbols-outlined'>add</span>Добавить
				</button>
			</div>
		</form>
	)
}
