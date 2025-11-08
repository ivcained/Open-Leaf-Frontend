import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppNew from './AppNew.tsx';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { config } from './wagmi';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		   <WagmiProvider config={config}>
		   <QueryClientProvider client={queryClient}>
	       <RainbowKitProvider
          modalSize="compact"
         
          showRecentTransactions={true}
          // This ensures RainbowKit modal appears first
          appInfo={{
            appName: 'Your App Name',
            learnMoreUrl: 'https://yourwebsite.com',
          }}
        >
		<AppNew />
		</RainbowKitProvider>
		</QueryClientProvider>
		</WagmiProvider>
	</StrictMode>
);
