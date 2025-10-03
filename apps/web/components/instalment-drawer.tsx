import { useState } from 'react'

import { Box, Button, Drawer, IconButton, Radio, Typography } from '@mui/material'

import { CloseIcon } from '@/components/icons/close'
import { PlusIcon } from '@/components/icons/plus'

type InstallmentDrawerProps = Readonly<{
	open: boolean
	onClose: () => void
}>

type InstallmentOption = Readonly<{
	installments: string
	value: string
	total: string
}>

const installmentOptions: InstallmentOption[] = [
	{ installments: '1x R$ 2.613,6', value: '1', total: 'R$ 2.613,60' },
	{ installments: '3x R$ 900,90', value: '3', total: 'R$ 2.702,70' },
	{ installments: '6x R$ 465,30', value: '6', total: 'R$ 2.791,80' },
	{ installments: '9x R$ 320,10', value: '9', total: 'R$ 2.880,90' },
	{ installments: '12x R$ 247,5', value: '12', total: 'R$ 2.946,00' },
	{ installments: '15x R$ 200,97', value: '15', total: 'R$ 3.014,55' },
	{ installments: '18x R$ 169,95', value: '18', total: 'R$ 3.059,10' },
]

export const InstallmentDrawer = ({ open, onClose }: InstallmentDrawerProps) => {
	const [selectedInstallment, setSelectedInstallment] = useState('18')

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
						pl: { xs: 2, xl: 4 },
						pr: { xs: 1, xl: 2 },
						py: 3,
						borderBottom: '1px solid #E0E0E0',
						gap: 1,
					}}
				>
					<Box sx={{ pt: 1, flex: 1 }}>
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
					</Box>
					<IconButton
						onClick={onClose}
						sx={{
							bgcolor: 'white',
							borderRadius: '96px',
							p: 1.5,
							height: '48px',
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
							px: { xs: 2, xl: 4 },
							pt: { xs: 2, xl: 3 },
							pb: { xs: 2, xl: 2 },
						}}
					>
						<Typography
							sx={{
								fontSize: '16px',
								fontWeight: 500,
								lineHeight: 1.35,
								mb: { xs: 2, xl: 2 },
								color: 'text.primary',
							}}
						>
							Qual dessas opções de parcelas você prefere?
						</Typography>

						<Box
							sx={{
								border: '1px solid',
								borderColor: 'primary.main',
								borderRadius: '8px',
								overflow: 'hidden',
								bgcolor: 'white',
							}}
						>
							<Box sx={{ display: 'flex' }}>
								<Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
									<Box
										sx={{
											bgcolor: 'primary.main',
											px: 2,
											py: 1,
											borderColor: 'primary.main',
										}}
									>
										<Typography
											sx={{
												color: 'white',
												fontSize: '16px',
												lineHeight: 1.71,
											}}
										>
											Parcelas
										</Typography>
									</Box>

									{installmentOptions.map((option, index) => (
										<Box
											key={option.value}
											sx={{
												display: 'flex',
												alignItems: 'center',
												gap: 1,
												pl: 2,
												py: 2,
												borderTop: index === 0 ? '1px solid' : 'none',
												borderBottom: index < installmentOptions.length - 1 ? '1px solid' : 'none',
												borderColor: 'primary.main',
												cursor: 'pointer',
											}}
											onClick={() => setSelectedInstallment(option.value)}
										>
											<Radio
												checked={selectedInstallment === option.value}
												sx={{
													p: 0,
													'& .MuiSvgIcon-root': {
														fontSize: '24px',
													},
												}}
											/>
											<Typography
												sx={{
													fontSize: '14px',
													fontWeight: 500,
													lineHeight: 1.17,
													color: 'text.primary',
												}}
											>
												{option.installments}
											</Typography>
										</Box>
									))}
								</Box>

								<Box
									sx={{
										display: 'flex',
										flexDirection: 'column',
									}}
								>
									<Box
										sx={{
											bgcolor: 'primary.main',
											px: 2,
											py: 1,
										}}
									>
										<Typography
											sx={{
												color: 'white',
												fontSize: '16px',
												lineHeight: 1.71,
											}}
										>
											Total
										</Typography>
									</Box>

									{installmentOptions.map((option, index) => (
										<Box
											key={option.value}
											sx={{
												px: 2,
												py: 2,
												borderTop: index === 0 ? '1px solid' : 'none',
												borderBottom: index < installmentOptions.length - 1 ? '1px solid' : 'none',
												borderColor: 'primary.main',
											}}
										>
											<Typography
												sx={{
													fontSize: '14px',
													lineHeight: 1.71,
													color: 'text.primary',
													opacity: 0.72,
													whiteSpace: 'nowrap',
												}}
											>
												{option.total}
											</Typography>
										</Box>
									))}
								</Box>
							</Box>
						</Box>
					</Box>

					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: 2,
							px: { xs: 2, xl: 4 },
							py: { xs: 2, xl: 4 },
						}}
					>
						<Box
							sx={{
								border: '1px solid #E0E0E0',
								borderRadius: '8px',
								px: 3,
								py: 3,
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
								px: 3,
								py: 3,
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
						px: { xs: 2, xl: 4 },
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
