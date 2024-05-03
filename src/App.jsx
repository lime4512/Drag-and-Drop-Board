import { useEffect, useState } from 'react'
import './App.scss'
import { AddTask } from './components/AddTask/AddTask'
import { ListTask } from './components/ListTask/ListTask'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
function App() {
	const [tasks, setTasks] = useState([])

	useEffect(() => {
		setTasks(JSON.parse(localStorage.getItem('Tasks')))
	}, [])
	return (
		<DndProvider backend={HTML5Backend}>
			<div className='container'>
				<div className='top_content'>
					<h1>Доска задач</h1>
					<AddTask tasks={tasks} setTasks={setTasks} />
				</div>
				<div className='board_content'>
					<ListTask tasks={tasks} setTasks={setTasks} title={'Заметки'} />
				</div>
			</div>
		</DndProvider>
	)
}

export default App
