import { Box, Container, Typography } from '@mui/material'

export const PageHeader = () => {
	return (
		<Box
			sx={{
				bgcolor: 'primary.main',
				py: { xs: 3, xl: 5 },
			}}
		>
			<Container maxWidth="xl" disableGutters>
				<Box
					sx={{
						px: { xs: 3, xl: 11 },
						display: 'flex',
						flexDirection: 'column',
						gap: 1,
					}}
				>
					<Typography
						variant="h1"
						sx={{
							color: 'white',
							fontSize: { xs: '24px', xl: '32px' },
						}}
					>
						Vamos começar, escolha as opções do seu curso
					</Typography>
					<Typography
						variant="body1"
						sx={{
							color: 'white',
						}}
					>
						Use os filtros para saber o preço do seu curso e fazer sua inscrição.
					</Typography>
				</Box>
			</Container>
		</Box>
	)
}
