// enum Status {
//   Created,
//   Hodl,
//   Staked,
//   Verified,
//   Paused
// }


export const statusMap = (status,isCreator,isHodler) => {
  let res = undefined;
  if(isCreator){
    switch(status){
      case "0": res = {s: "Created", active: false}; break;
      case "1": res = {s: "Sold", active: false}; break;
      case "2": res = {s: "Verify", active: true}; break;
      case "3": res = {s: "Verfied", active: false}; break;
      case "4": res = {s: "Paused", active: false}; break;
      default: console.log("default");break;
    }
  } else if(isHodler) {
    switch(status){
      case "0": res = {s: "Stake", active: true}; break;
      case "1": res = {s: "Stake", active: true}; break;
      case "2": res = {s: "Staked", active: false}; break;
      case "3": res = {s: "Verified", active: false}; break;
      case "4": res = {s: "Paused", active: false}; break;
      default: console.log("default");break;
    }
  } else {
    switch(status){
      case "0": res = {s: "Mint", active: true}; break;
      case "1": res = {s: "Sold", active: false}; break;
      case "2": res = {s: "Sold", active: false}; break;
      case "3": res = {s: "Buy", active: true}; break;
      case "4": res = {s: "Paused", active: false}; break;
      default: console.log("default");break;
    }
  }
  return res;
}