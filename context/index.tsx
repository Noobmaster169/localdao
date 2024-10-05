'use client'

import { wagmiAdapter, projectId } from '@/config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createAppKit } from '@reown/appkit/react' 
import { scrollSepolia } from 'wagmi/chains'
import React, { type ReactNode } from 'react'
import { cookieToInitialState, WagmiProvider, type Config } from 'wagmi'

// Set up queryClient
const queryClient = new QueryClient()

if (!projectId) {
  throw new Error('Project ID is not defined')
}

// Set up metadata
const metadata = {
  name: "appkit-example-scroll",
  description: "AppKit Example - Scroll",
  url: "https://localhost:3000", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/179229932"]
}

// Create the modal
const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [scrollSepolia as any],
  defaultNetwork: scrollSepolia as any,
  metadata: metadata,
  features: {
    analytics: false, // Optional - defaults to your Cloud configuration
  }
})

function ContextProvider({ children, cookies }: { children: ReactNode; cookies: string | null }) {
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies)

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}

export default ContextProvider