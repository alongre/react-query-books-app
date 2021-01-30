import { Box, Button } from 'rebass/styled-components'
import { Label, Input } from '@rebass/forms'
import { useForm } from 'react-hooks-form'
import Loader from 'react-loader-spinner'

export const BookForm = ({ defaultValues, onFormSubmit, isLoading }) => {
	const { register, handleSubmit } = useForm({ defaultValues })

	const onSubmit = handleSubmit((data) => {
		onFormSubmit(data)
	})

	return (
		<form onSubmit={onSubmit}>
			<Box sx={{ marginBottom: 3 }}>
				<Label htmlFor='title'>Title</Label>
				<Input ref={register} id='title' name='title' type='text' />
			</Box>

			<Box sx={{ marginBottom: 3 }}>
				<Label htmlFor='author'>Author</Label>
				<Input ref={register} id='author' name='author' type='text' />
			</Box>
			<Button onClick={onSubmit}>{isLoading ? <Loader type='ThreeDots' height={10} color='#fff' /> : 'Submit'}</Button>
		</form>
	)
}
