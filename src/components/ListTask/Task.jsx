import styles from './listTask.module.scss'

import { useDrag } from 'react-dnd'
export const Task = ({ name, id }) => {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: 'task',
		item: { id: id },
		collect: monitor => ({
			isDragging: !!monitor.isDragging(),
		}),
	}))

	return (
		<div className={styles.card_task} ref={drag}>
			- {name}
		</div>
	)
}
