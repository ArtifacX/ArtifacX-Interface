import { InjectedConnector } from '@web3-react/injected-connector'
import { NetworkConnector } from '@web3-react/network-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'

const RPC_URLS = {
  1: process.env.RPC_URL_1,
  4: process.env.RPC_URL_4
}

export const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42, 1337] })

export const network = new NetworkConnector({
  urls: { 1337: 'http://localhost:7545' },
  defaultChainId: 1
})

export const walletconnect = new WalletConnectConnector({
  rpc: RPC_URLS,
  chainId: 1,
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true
})

export const walletlink = new WalletLinkConnector({
  url: RPC_URLS[1],
  appName: 'web3-react example',
  supportedChainIds: [1, 3, 4, 5, 42, 10, 137, 69, 420, 80001]
})

