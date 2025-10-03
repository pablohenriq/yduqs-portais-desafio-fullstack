import { AppBar, Box, Container, Toolbar } from '@mui/material'

import { EstacioLogo } from '@/components/icons/estacio-logo'

export const Header = () => {
	return (
		<AppBar
			position="static"
			color="inherit"
			elevation={0}
			sx={{
				borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
				boxShadow: '0px 3px 3px 0px rgba(0, 0, 0, 0.1)',
			}}
		>
			<Container maxWidth="xl" disableGutters>
				<Toolbar
					sx={{
						px: { xs: 3, xl: 11 },
						py: { xs: 3, xl: 3.5 },
						minHeight: { xs: 64, xl: 96 },
					}}
				>
					<Box sx={{ flexGrow: 1 }}>
						<EstacioLogo sx={{ height: { xs: '32px', xl: '40px' } }} />
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}
