import { Box, Container, Typography } from '@mui/material'

import { EstacioLogo } from '@/components/icons/estacio-logo'
import { PhoneIcon } from '@/components/icons/phone'
import { WhatsappIcon } from '@/components/icons/whatsapp'

export const Footer = () => {
	return (
		<Box
			sx={{
				bgcolor: 'primary.dark',
				py: { xs: 2, xl: 3 },
			}}
		>
			<Container maxWidth="xl" disableGutters>
				<Box
					sx={{
						px: { xs: 3, xl: 11 },
						display: 'flex',
						flexDirection: { xs: 'column', xl: 'row' },
						justifyContent: 'space-between',
						alignItems: { xs: 'flex-start', xl: 'center' },
						gap: { xs: 2, xl: 0 },
					}}
				>
					<EstacioLogo inverted sx={{ height: { xs: '32px', xl: '40px' } }} />

					<Box
						sx={{
							display: 'flex',
							flexDirection: { xs: 'column', xl: 'row' },
							gap: { xs: 2, xl: 7 },
						}}
					>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								gap: 1.5,
							}}
						>
							<Box
								sx={{
									bgcolor: 'white',
									borderRadius: '64px',
									p: 1,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<PhoneIcon sx={{ fontSize: '24px', color: 'text.secondary' }} />
							</Box>
							<Typography
								sx={{
									color: 'white',
									fontWeight: 600,
									fontSize: '16px',
									lineHeight: 1.5,
								}}
							>
								0800 771 5055
							</Typography>
						</Box>

						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								gap: 1.5,
							}}
						>
							<Box
								sx={{
									bgcolor: '#3BCE57',
									borderRadius: '64px',
									p: 1,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<WhatsappIcon sx={{ fontSize: '24px', color: 'white' }} />
							</Box>
							<Typography
								sx={{
									color: 'white',
									fontWeight: 600,
									fontSize: '16px',
									lineHeight: 1.5,
								}}
							>
								Precisa de ajuda?
							</Typography>
						</Box>
					</Box>
				</Box>
			</Container>
		</Box>
	)
}
