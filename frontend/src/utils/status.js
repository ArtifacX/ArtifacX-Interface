export const statusStringMapping = (status,isHodler,isACM) => {
  let res = {};
  if(isHodler){
    switch(status){
      case '0': res =  {s: "Mint", active: true};break;
      case '1': res =  {s: "Stake", active: true};break;
      case '2': res = {s: "Stake", active: true};break;
      case '3': res = {s: "Staked", active: false};break;
      case '4': res = {s: "Staked", active: false};break;
      default: console.log("Invalid Case");break;
    }
    return res;
  } else if(isACM) {
    switch(status){
      case '0': res =  {s: "Created", active: false};break;
      case '1': res =  {s: "Minted", active: false};break;
      case '2': res =  {s: "Hodl", active: false};break;
      case '3': res =  {s: "Verify", active: true};break;
      case '4': res =  {s: "Paused", active: true};break;
      default: console.log("Invalid Case");break;
    }
    return res;
  } else {
    switch(status){
      case '0': res =  {s: "Mint", active: true};
      case '1': res =  {s: "Minted", active: false};
      case '2': res =  {s: "Hodl", active: false};
      case '3': res =  {s: "Buy", active: true};
      case '4': res =  {s: "Paused", active: false};
      default: console.log("Invalid Case");break;
    }
  }
  return res;
}