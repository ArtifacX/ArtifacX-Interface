import { injected, walletconnect, walletlink } from "../connectors";

export const SUPPORTED_WALLETS = {

  METAMASK: {
    connector: injected,
    name: "Metamask",
    iconURL: "https://opensea.io/static/images/logos/metamask-alternative.png"
  },
  WALLET_CONNECT: {
    connector: walletconnect,
    name: "WalletConnect",
    iconURL: "https://static.opensea.io/logos/walletconnect-alternative.png",
    mobile: true,
  },
  WALLETLINK_CONNECT: {
    connector: walletlink,
    name: 'Coinbase',
    iconURL: "https://static.opensea.io/logos/walletlink-alternative.png",
  },


}