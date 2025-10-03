import { Box, Button, Drawer, IconButton, Typography } from '@mui/material'

import { CloseIcon } from '@/components/icons/close'
import { InfoIcon } from '@/components/icons/info'
import { PlusIcon } from '@/components/icons/plus'

type EnrollmentDrawerProps = Readonly<{
	open: boolean
	onClose: () => void
}>

export const EnrollmentDrawer = ({ open, onClose }: EnrollmentDrawerProps) => {
	return (
		<Drawer
			anchor="right"
			open={open}
			onClose={onClose}
			sx={{
				'& .MuiDrawer-paper': {
					width: { xs: '320px', xl: '600px' },
					boxShadow:
						'0px 6px 30px 5px rgba(0, 0, 0, 0.12), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 8px 10px -5px rgba(0, 0, 0, 0.2)',
				},
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					height: '100%',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						px: { xs: 2, xl: 2 },
						pr: { xs: 1, xl: 2 },
						py: { xs: 2, xl: 3 },
						borderBottom: '1px solid #E0E0E0',
					}}
				>
					<Typography
						variant="h2"
						sx={{
							fontSize: { xs: '24px', xl: '32px' },
							lineHeight: 1.2,
							fontWeight: 500,
							fontFamily: 'var(--font-montserrat)',
							color: 'text.primary',
						}}
					>
						Mais detalhes
					</Typography>
					<IconButton
						onClick={onClose}
						sx={{
							bgcolor: 'white',
							borderRadius: '96px',
							p: { xs: 1, xl: 1.5 },
							'&:hover': {
								bgcolor: '#F5F5F5',
							},
						}}
					>
						<CloseIcon sx={{ fontSize: '24px', color: 'text.primary' }} />
					</IconButton>
				</Box>

				<Box
					sx={{
						flex: 1,
						overflowY: 'auto',
					}}
				>
					<Box
						sx={{
							bgcolor: 'primary.main',
							borderBottom: '1px solid #E0E0E0',
							px: { xs: 2, xl: 3 },
							py: { xs: 2, xl: 3 },
							pt: { xs: 2, xl: 5 },
							pb: { xs: 2, xl: 3 },
						}}
					>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								gap: 1,
							}}
						>
							<InfoIcon sx={{ color: 'white' }} />
							<Typography
								sx={{
									color: 'white',
									fontSize: { xs: '14px', xl: '16px' },
									lineHeight: 1.33,
								}}
							>
								Inscreva-se para saber tudo sobre os valores e garantir a sua vaga!
							</Typography>
						</Box>
					</Box>

					<Box
						sx={{
							px: { xs: 2, xl: 3 },
							py: { xs: 3, xl: 4 },
							display: 'flex',
							flexDirection: 'column',
							gap: 2,
						}}
					>
						<Box
							sx={{
								border: '1px solid #E0E0E0',
								borderRadius: '8px',
								px: { xs: 2, xl: 3 },
								py: { xs: 2, xl: 3 },
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							<Typography
								sx={{
									fontSize: '16px',
									fontWeight: 500,
									lineHeight: 1.15,
									color: 'text.primary',
								}}
							>
								Sobre a Bolsa Incentivo
							</Typography>
							<PlusIcon sx={{ fontSize: '24px', color: 'text.primary' }} />
						</Box>

						<Box
							sx={{
								border: '1px solid #E0E0E0',
								borderRadius: '8px',
								px: { xs: 2, xl: 3 },
								py: { xs: 2, xl: 3 },
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							<Typography
								sx={{
									fontSize: '16px',
									fontWeight: 500,
									lineHeight: 1.15,
									color: 'text.primary',
								}}
							>
								Resumo das suas escolhas
							</Typography>
							<PlusIcon sx={{ fontSize: '24px', color: 'text.primary' }} />
						</Box>
					</Box>
				</Box>

				<Box
					sx={{
						px: { xs: 2, xl: 3 },
						py: { xs: 2, xl: 3 },
						borderTop: '1px solid rgba(0, 0, 0, 0.12)',
						boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.12)',
					}}
				>
					<Button
						variant="contained"
						color="secondary"
						fullWidth
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
			</Box>
		</Drawer>
	)
}
