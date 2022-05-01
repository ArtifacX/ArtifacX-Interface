import axios from "axios";
import { utils } from "ethers";
import { MARKETX_ADDRESS } from "../constants/addresses";

export const getMetadata = async (artifact) => {
  const tokenURI = await artifact.uri(0);
  console.log(tokenURI);
  const url = "/getMetadata";
  let metadata = undefined;
  try {
    console.log("fetch");
    metadata = await axios.get(url, { params: { tokenURI } });
    console.log("done");

  } catch (e) {
    console.error(e);
  }
  console.log(metadata);
  return metadata.data;
}

export const getContractData = async (artifact) => {
  const uri = await artifact.uri(0);
  let _data = await artifact?.getData();
  let _ledger = await artifact?.getLedger();
  let _id = _data[0].toString();
  let _price = utils.formatEther(_data[1].toString());
  let _status = _data[3].toString();
  const contractData = {
    uri: uri,
    id: _id,
    price: _price,
    status: _status,
    ledger: _ledger,
  }
  return contractData;
}

export const getMarketApproved = async(artifact,account,chainId) => {
  let _approved = await artifact?.isApprovedForAll(account,MARKETX_ADDRESS[chainId]);
  return _approved;
}