import { isAddress } from "@ethersproject/address";
import { AddressZero } from "@ethersproject/constants";
import { Contract } from "@ethersproject/contracts";

export const addressShortner = (str) => (str?.length > 8 ? str.slice(0, 6) + "..." + str.slice(-6) : str);

// account is not optional
function getSigner(library, account) {
  return library.getSigner(account).connectUnchecked();
}

// account is optional
function getProviderOrSigner(library , account) {
  return account ? getSigner(library, account) : library;
}

// account is optional
export function getContract(address, ABI, library, account) {
  if (!isAddress(address) || address === AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }

  return new Contract(address, ABI, getProviderOrSigner(library, account));
}
