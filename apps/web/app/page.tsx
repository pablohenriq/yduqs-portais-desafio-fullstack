'use client'

import { useState } from 'react'

import { Box, Container, ThemeProvider, Typography } from '@mui/material'

import { EnrollmentDrawer } from '@/components/enrollment-drawer'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { InfoCard } from '@/components/info-card'
import { InstallmentDrawer } from '@/components/instalment-drawer'
import { OfferCard } from '@/components/offer-card'
import { PageHeader } from '@/components/page-header'
import theme from '@/lib/theme'

export default function Home() {
	const [installmentDrawerOpen, setInstallmentDrawerOpen] = useState(false)
	const [enrollmentDrawerOpen, setEnrollmentDrawerOpen] = useState(false)

	return (
		<ThemeProvider theme={theme}>
			<Box
				sx={{
					minHeight: '100vh',
					display: 'flex',
					flexDirection: 'column',
					bgcolor: 'background.default',
				}}
			>
				<Header />
				<PageHeader />

				<Container maxWidth="xl" disableGutters>
					<Box
						sx={{
							px: { xs: 3, xl: 11 },
							py: { xs: 4, xl: 4 },
							pb: { xs: 3, xl: 2 },
						}}
					>
						<Typography
							sx={{
								fontSize: '14px',
								lineHeight: 1.33,
								color: 'text.primary',
							}}
						>
							2 opções encontradas
						</Typography>
					</Box>

					<Box
						sx={{
							px: { xs: 3, xl: 11 },
							pb: { xs: 3, xl: 7 },
							display: 'flex',
							alignItems: 'start',
							flexDirection: { xs: 'column', xl: 'row' },
							gap: 3,
						}}
					>
						<OfferCard
							mode="Presencial"
							schedule="Manhã"
							originalPrice="De R$ 4.752,00 por até"
							installments="18x"
							installmentValue="R$ 169,95"
							cashPrice="à vista R$ 2.613,60"
							location="CAMPINAS - VILA INDUSTRIAL"
							address="RUA DR. SALES DE OLIVEIRA, Nº 1661 - VILA INDUSTRIAL - CAMP..."
							isSelected
							onAdvanceClick={() => setInstallmentDrawerOpen(true)}
						/>

						<InfoCard
							mode="Digital (EaD)"
							location="BARRA DA TIJUCA - TOM JOB..."
							address="AV. DAS AMÉRICAS, 4.200, BLOCO 11 - BARRA DA TIJUCA..."
							onAdvanceClick={() => setEnrollmentDrawerOpen(true)}
						/>
					</Box>
				</Container>

				<Box sx={{ mt: 'auto' }}>
					<Footer />
				</Box>

				<InstallmentDrawer open={installmentDrawerOpen} onClose={() => setInstallmentDrawerOpen(false)} />

				<EnrollmentDrawer open={enrollmentDrawerOpen} onClose={() => setEnrollmentDrawerOpen(false)} />
			</Box>
		</ThemeProvider>
	)
}
