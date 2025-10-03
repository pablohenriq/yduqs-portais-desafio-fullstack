'use client'

import { createTheme } from '@mui/material/styles'

const theme = createTheme({
	palette: {
		primary: {
			main: '#144BC8',
			dark: '#001F66',
		},
		secondary: {
			main: '#EE325D',
		},
		text: {
			primary: '#121212',
			secondary: '#3D3D3D',
		},
		background: {
			default: '#FFFFFF',
			paper: '#FFFFFF',
		},
	},
	typography: {
		fontFamily: 'var(--font-inter)',
		h1: {
			fontFamily: 'var(--font-montserrat)',
			fontWeight: 500,
			fontSize: '32px',
			lineHeight: 1.2,
		},
		h2: {
			fontFamily: 'var(--font-montserrat)',
			fontWeight: 500,
			fontSize: '24px',
			lineHeight: 1.2,
		},
		body1: {
			fontSize: '16px',
			lineHeight: 1.5,
		},
		body2: {
			fontSize: '14px',
			lineHeight: 1.35,
		},
		caption: {
			fontSize: '14px',
			lineHeight: 1.33,
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 320,
			md: 768,
			lg: 1024,
			xl: 1366,
		},
	},
})

export default theme
