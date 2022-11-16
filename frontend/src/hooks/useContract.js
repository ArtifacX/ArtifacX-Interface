import { useMemo } from "react";
import { getContract } from "../utils";
import { useActiveWeb3React } from "./useWeb3";
import { CERTIFICATION_REGISTRY_ADDRESS, MARKETX_ADDRESS, ARTIFACTORY_ADDRESS } from "../constants/addresses";
import CERTIFICATION_REGISTRY_ABI from "../abis/CertificationRegistry.json";
import MARKETX_ABI from "../abis/MarketX.json";
import ARTIFACTORY_ABI from "../abis/ArtiFactory.json";
import ARTIFACT_ABI from "../abis/Artifact.json"


// returns null on errors
export function useContract(addressOrAddressMap, ABI, withSignerIfPossible = true) {
  const { library, account, chainId } = useActiveWeb3React();

  return useMemo(() => {
    if (!addressOrAddressMap || !ABI || !library || !chainId) return null;
    let address;
    if (typeof addressOrAddressMap === "string") address = addressOrAddressMap;
    else address = addressOrAddressMap[chainId];
    if (!address) return null;

    try {
      return getContract(address, ABI, library, withSignerIfPossible && account ? account : undefined);
    } catch (error) {
      console.error("Failed to get contract", error);
      return null;
    }
  }, [addressOrAddressMap, ABI, library, chainId, withSignerIfPossible, account]);
}

export function useCertificationRegistry(withSignerIfPossible) {
  return useContract(CERTIFICATION_REGISTRY_ADDRESS, CERTIFICATION_REGISTRY_ABI.abi, withSignerIfPossible);
}

export function useMarketX(withSignerIfPossible) {
  return useContract(MARKETX_ADDRESS, MARKETX_ABI.abi, withSignerIfPossible);
}

export function useArtifactory(withSignerIfPossible) {
  console.log(ARTIFACTORY_ADDRESS[1337]);
  return useContract(ARTIFACTORY_ADDRESS, ARTIFACTORY_ABI.abi, withSignerIfPossible);
}

export function useArtifact(ARTIFACT_ADDRESS, withSignerIfPossible) {
  return useContract(ARTIFACT_ADDRESS, ARTIFACT_ABI.abi, withSignerIfPossible);
}