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
    iconURL: "https://storage.opensea.io/static/wallets/walletconnect/walletconnect-alternative.png",
    mobile: true,
  },
  WALLETLINK_CONNECT: {
    connector: walletlink,
    name: 'Coinbase',
    iconURL: "https://storage.opensea.io/static/wallets/walletlink/walletlink-alternative.png",
  },


}