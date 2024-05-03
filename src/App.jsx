import { useEffect, useState } from 'react'
import './App.scss'
import { AddTask } from './components/AddTask/AddTask'

function App() {
	const [tasks, setTasks] = useState([])

	useEffect(() => {
		setTasks(JSON.parse(localStorage.getItem('Tasks')))
	}, [])
	return (
		<div className='container'>
			<div className='top_content'>
				<h1>Доска задач</h1>
				<AddTask tasks={tasks} setTasks={setTasks} />
			</div>
			<div className='board_content'>
				<h3>Заметки</h3>
				{tasks.map(item => (
					<p key={item.id}>{item.name}</p>
				))}
				<h3>В работе</h3>
				<h3>Выполненные</h3>
			</div>
		</div>
	)
}

export default App
