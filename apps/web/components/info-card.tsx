import { Box, Button, Typography } from '@mui/material'

import { InfoIcon } from '@/components/icons/info'

type InfoCardProps = Readonly<{
	mode: string
	location: string
	address: string
	onAdvanceClick?: () => void
}>

export const InfoCard = ({ mode, location, address, onAdvanceClick }: InfoCardProps) => {
	return (
		<Box
			sx={{
				width: { sm: '100%', md: '381px' },
				border: '1px solid',
				borderColor: 'primary.main',
				borderRadius: '8px',
				overflow: 'hidden',
			}}
		>
			<Box
				sx={{
					bgcolor: 'primary.dark',
					display: 'flex',
					alignItems: 'center',
					px: { xs: 2, xl: 3 },
					py: 1,
				}}
			>
				<Typography
					variant="body2"
					sx={{
						color: 'white',
						fontWeight: 500,
						fontSize: '16px',
						lineHeight: 1.35,
					}}
				>
					{mode}
				</Typography>
			</Box>

			<Box
				sx={{
					bgcolor: 'primary.main',
					px: { xs: 2, xl: 2 },
					py: { xs: 2, xl: 3 },
					display: 'flex',
					flexDirection: 'column',
					gap: 3,
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: 1,
						pb: 1,
					}}
				>
					<InfoIcon sx={{ color: 'white', fontSize: '24px' }} />
					<Typography
						sx={{
							color: 'white',
							fontSize: '14px',
							lineHeight: 1.33,
						}}
					>
						Inscreva-se para saber tudo sobre os valores e garantir a sua vaga!
					</Typography>
				</Box>

				<Button
					variant="contained"
					color="secondary"
					fullWidth
					onClick={onAdvanceClick}
					sx={{
						textTransform: 'none',
						fontWeight: 500,
						fontSize: '16px',
						py: 1.5,
						borderRadius: '8px',
					}}
				>
					Avançar
				</Button>
			</Box>

			<Box
				sx={{
					bgcolor: 'white',
					px: { xs: 2, xl: 3 },
					py: { xs: 2, xl: 2 },
					display: 'flex',
					flexDirection: 'column',
					borderRadius: '0 0 8px 8px',
				}}
			>
				<Typography
					sx={{
						fontWeight: 500,
						fontSize: '14px',
						lineHeight: 1.35,
						color: 'text.primary',
					}}
				>
					{location}
				</Typography>
				<Typography
					sx={{
						fontWeight: 400,
						fontSize: '14px',
						lineHeight: 1.35,
						color: 'text.secondary',
					}}
				>
					{address}
				</Typography>
			</Box>
		</Box>
	)
}
