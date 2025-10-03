import type { SvgIconProps } from '@mui/material'
import { SvgIcon } from '@mui/material'

export const CloseIcon = (props: Readonly<SvgIconProps>) => {
	return (
		<SvgIcon {...props} viewBox="0 0 24 24">
			<path
				d="M5.25 5.25L18.75 18.75M18.75 5.25L5.25 18.75"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				fill="none"
			/>
		</SvgIcon>
	)
}
