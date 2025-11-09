import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { anvil , sepolia} from 'wagmi/chains';

export const config = getDefaultConfig({
	appName: 'RainbowKit demo',
	projectId: '25d6b489560ac586018a768b6790e2b7',
	chains: [anvil, sepolia],
	ssr: true,
});
