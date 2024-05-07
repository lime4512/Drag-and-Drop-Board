import { useState } from 'react'
import styles from './addTask.module.scss'
import { v4 as uuidv4 } from 'uuid'
import toast, { Toaster } from 'react-hot-toast'
export const AddTask = ({ tasks, setTasks }) => {
	const [task, setTask] = useState({
		id: '',
		name: '',
		status: 'todo',
	})

	const handleSubmit = e => {
		e.preventDefault()

		if (task.name == 0) {
			return toast.error('Введите данные!!!')
		}

		if (task.name.length <= 3) {
			return toast.error('Более 3 символов')
		}
		if (task.name.length >= 50) {
			return toast.error('Менее 50 символов')
		}
		setTasks(prev => {
			const list = [...prev, task]

			localStorage.setItem('Tasks', JSON.stringify(list))

			setTask({
				id: '',
				name: '',
				status: 'todo',
			})
			toast.success('Заметка добавлена')
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
			<Toaster position='top-right' reverseOrder={false} />
			<div className={styles.container_btn}>
				<button className={styles.add_btn}>
					<span className='material-symbols-outlined'>add</span>Добавить
				</button>
			</div>
		</form>
	)
}
