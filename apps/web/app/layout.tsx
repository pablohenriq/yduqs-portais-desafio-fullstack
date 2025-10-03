import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'

const geistSans = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
})

const geistMono = Montserrat({
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
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<AppRouterCacheProvider>{children}</AppRouterCacheProvider>
			</body>
		</html>
	)
}
