import styles from './listTask.module.scss'

import { Task } from './Task'

export const TaskBlock = ({ list }) => {
	return (
		<div className={styles.content}>
			{list.map(item => (
				<Task name={item.name} key={item.id} />
			))}
		</div>
	)
}
