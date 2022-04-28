import {useActiveWeb3React, useEagerConnect} from "../../hooks/useWeb3";
import React, {useEffect,useState} from "react";
import {useNavigate} from "react-router-dom";
import { useIsWhitelisted } from "../../hooks/useIsWhitelisted";
import { UnsupportedChainIdError } from "@web3-react/core";

export const RouteGuard = ({children,registeredRedirectTo}) => {

  const {account,error} = useActiveWeb3React();
  const triedEagerConnect = useEagerConnect();
  const {loading,isWhitelisted} = useIsWhitelisted();
  const [loadChildren,setLoadChildren] = useState(false);
  const router = useNavigate();

  useEffect(() => {
    console.log("useEffect");
    if(account){
      console.log("Has Account");
      sessionStorage.setItem("disconnected","false");
      if(error instanceof UnsupportedChainIdError){
        router("/connect-wallet",{replace: true});
      }
      else if(!loading && isWhitelisted){
        console.log("!loading && isWhitelisted");
        if(registeredRedirectTo){
          console.log("registeredRedirectTo");
          router(registeredRedirectTo,{replace: true});
          return;
        }
        setLoadChildren(true);
        return;
      }
      else if(!loading && !isWhitelisted){
        console.log("!loading && !isWhitelisted");
        if(router.pathname!="/signup"){
          console.log("Here");
          router("/home");
          return;
        }
        return;  
      } 
    } else {
      if(triedEagerConnect){
        console.log("trying eager connect");
        if(router.pathname!="/connect-wallet"){
          console.log("pathname!=connect-wallet");
          router("/connect-wallet");
        }
        setLoadChildren(true);
      }
    }
    setLoadChildren(true);
  },[loading,error,account,triedEagerConnect]);

  
  return(
    <div className="w-full h-full flex justify-center" id="routeguard">
      { !loadChildren && <div className="h-full flex items-center justify-center">Redirecting...</div>}
      { loadChildren && <>{children}</>}
    </div>
  )
};