const SERVER_URL = 'http://localhost:4000'
export const getAllBooks = async () => {
	console.log(process.env.API_SERVER)
	const response = await fetch(`${SERVER_URL}/books`)
	if (!response.ok) {
		throw new Error('Something went wrong')
	}

	return response.json()
}

export const removeBook = async (id) => {
	const response = await fetch(`${SERVER_URL}/books/${id}`, {
		method: 'DELETE',
	})

	if (!response.ok) {
		throw new Error(`Error removing book - ${response.json().message}`)
	}
	return true
}
