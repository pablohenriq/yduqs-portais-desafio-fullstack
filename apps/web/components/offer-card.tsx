import { Box, Button, Typography } from '@mui/material'

type OfferCardProps = Readonly<{
	mode: string
	schedule: string
	originalPrice: string
	installments: string
	installmentValue: string
	cashPrice: string
	location: string
	address: string
	isSelected?: boolean
	onAdvanceClick?: () => void
}>

export const OfferCard = ({
	mode,
	schedule,
	originalPrice,
	installments,
	installmentValue,
	cashPrice,
	location,
	address,
	isSelected = false,
	onAdvanceClick,
}: OfferCardProps) => {
	return (
		<Box
			sx={{
				width: { sm: '100%', md: '381px' },
				border: isSelected ? '1px solid' : '1px solid',
				borderColor: isSelected ? 'primary.main' : 'transparent',
				borderRadius: '8px',
				overflow: 'hidden',
			}}
		>
			<Box
				sx={{
					bgcolor: 'primary.dark',
					display: 'flex',
					alignItems: 'center',
					gap: 1,
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
				<Box
					sx={{
						width: '1px',
						height: '16px',
						bgcolor: 'white',
					}}
				/>
				<Typography
					variant="body2"
					sx={{
						color: 'white',
						fontWeight: 500,
						fontSize: '16px',
						lineHeight: 1.35,
					}}
				>
					{schedule}
				</Typography>
			</Box>

			<Box
				sx={{
					bgcolor: 'primary.main',
					px: { xs: 2, xl: 3 },
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
					}}
				>
					<Typography
						sx={{
							color: 'white',
							fontWeight: 500,
							fontSize: '16px',
							lineHeight: 1.15,
							opacity: 0.9,
						}}
					>
						{originalPrice}
					</Typography>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'flex-end',
							gap: 1,
							pt: 0.5,
						}}
					>
						<Typography
							sx={{
								color: 'white',
								fontWeight: 500,
								fontSize: '16px',
								lineHeight: 1.35,
								pb: '2px',
							}}
						>
							{installments}
						</Typography>
						<Typography
							sx={{
								color: 'white',
								fontWeight: 600,
								fontSize: { xs: '36px', xl: '40px' },
								lineHeight: 1.15,
							}}
						>
							{installmentValue}
						</Typography>
					</Box>
					<Typography
						sx={{
							color: 'white',
							fontWeight: 500,
							fontSize: '14px',
							lineHeight: 1.5,
							opacity: 0.9,
						}}
					>
						{cashPrice}
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
					py: { xs: 2, xl: 3 },
					display: 'flex',
					flexDirection: 'column',
					gap: 0.5,
					borderRadius: '0 0 8px 8px',
				}}
			>
				<Typography
					sx={{
						fontWeight: 500,
						fontSize: '14px',
						lineHeight: 1.35,
						color: 'text.primary',
						width: '240px',
						height: '19px',
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						whiteSpace: 'nowrap',
					}}
				>
					{location}
				</Typography>
				<Typography
					sx={{
						fontWeight: 400,
						fontSize: '14px',
						lineHeight: 1.15,
						color: 'text.secondary',
					}}
				>
					{address}
				</Typography>
			</Box>
		</Box>
	)
}
