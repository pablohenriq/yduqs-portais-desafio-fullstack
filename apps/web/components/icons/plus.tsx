import type { SvgIconProps } from '@mui/material'
import { SvgIcon } from '@mui/material'

export const PlusIcon = (props: Readonly<SvgIconProps>) => {
	return (
		<SvgIcon {...props} viewBox="0 0 24 24">
			<path d="M4.25 12H19.75M12 4.25V19.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
		</SvgIcon>
	)
}
