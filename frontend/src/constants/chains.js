export const NETWORK_LABELS = {
  1 : "Mainnet",
  4 : "Rinkeby",
  3: "Ropsten",
  5: "Görli",
  42: "Kovan",
  42161: "Arbitrum One",
  421611: "Arbitrum Testnet",
  1337: "Ganache"
};

export const ALL_SUPPORTED_CHAIN_IDS = [1337]

export const SUPPORTED_NETWORKS = ALL_SUPPORTED_CHAIN_IDS.map((id)=>{
  return NETWORK_LABELS[id];
})