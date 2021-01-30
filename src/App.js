import { Switch, Route } from 'react-router-dom'
import { BooksList } from './components/BooksList'
import { CreateBook } from './components/CreateBook'
import { UpdateBook } from './components/UpdateBook'
import { NavBar } from './components/NavBar'

function App() {
	return (
		<>
			<NavBar />
			<Switch>
				<Route path='/update-book:id'>
					<UpdateBook />
				</Route>
				<Route path='/create-book'>
					<CreateBook />
				</Route>
				<Route path='/'>
					<BooksList />
				</Route>
			</Switch>
		</>
	)
}

export default App
