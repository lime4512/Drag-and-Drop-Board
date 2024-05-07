import styles from './listTask.module.scss'
import toast from 'react-hot-toast'
import { useDrag } from 'react-dnd'
export const Task = ({ name, id, tasks, setTasks, comp }) => {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: 'task',
		item: { id: id },
		collect: monitor => ({
			isDragging: !!monitor.isDragging(),
		}),
	}))

	const handelRemove = id => {
		const fTasks = tasks.filter(t => t.id !== id)
		setTasks(fTasks)
		localStorage.setItem('Tasks', JSON.stringify(fTasks))
		toast.error('Заметка удалена')
	}

	return (
		<div
			className={`${styles.card_task} ${isDragging ? styles.special : ''}`}
			ref={drag}
		>
			<p className={comp ? styles.name_sh : ''}>{name}</p>
			<button onClick={() => handelRemove(id)} className={styles.task_btn}>
				<span className='material-symbols-outlined'>delete_forever</span>
			</button>
		</div>
	)
}
