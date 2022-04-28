import { Web3Provider } from "@ethersproject/providers";

export default function getLibrary(provider){
  const library = new Web3Provider(
    provider,
    typeof provider.chainId === "number"
      ? provider.chainId
      : typeof provider.chainId === "string"
      ? parseInt(provider.chainId)
      : "any"
  );
  library.pollingInterval = 12000;
  return library;
}