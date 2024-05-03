import styles from './listTask.module.scss'
import { useDrag } from 'react-dnd'

export const Task = ({ name }) => {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: 'task',
		collect: monitor => ({
			isDragging: !!monitor.isDragging(),
		}),
	}))
	console.log(isDragging)
	return (
		<div className={styles.card_task} ref={drag}>
			- {name}
		</div>
	)
}
