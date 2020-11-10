import { AppProps } from 'next/app'
import { ThemeProvider } from '@chakra-ui/core'
import { RecoilRoot } from 'recoil'
import '../styles/global.scss'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider>
			<RecoilRoot>
				<Component {...pageProps} />
			</RecoilRoot>
		</ThemeProvider>
	)
}
