import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'

import theme from '@/lib/theme'

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
})

const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Yduqs Portais Desafio Fullstack - WEB',
	description: 'Seleção de ofertas',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<body className={`${inter.variable} ${montserrat.variable}`}>
				<AppRouterCacheProvider>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						{children}
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	)
}
