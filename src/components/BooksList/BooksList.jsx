import { useQuery } from 'react-query'
import Loader from 'react-loader-spinner'
import { getAllBooks } from '../../api'
import { Container } from '../Container'
import { Flex, Text } from 'rebass/styled-components'
import { BookItem } from './BookItem'

export const BooksList = () => {
	const { data, error, isLoading, isError } = useQuery('books', getAllBooks)

	if (isLoading) {
		return (
			<Container>
				<Flex py='5' justifyContent='center'>
					<Loader type='ThreeDots' color='#ccc' height={30} />
				</Flex>
			</Container>
		)
	}

	if (isError) {
		return <span>Error: {error.message}</span>
	}

	return (
		<Container>
			<Text ml={3} mt={3} fontSize={6} fontFamily={'fantasy'}>
				BOOKS
			</Text>
			<Flex flexDirection='column' alignItems='center'>
				{data.map(({ id, author, title }) => (
					<BookItem key={id} id={id} author={author} title={title} />
				))}
			</Flex>
		</Container>
	)
}
