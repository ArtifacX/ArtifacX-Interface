import {useActiveWeb3React, useEagerConnect} from "../../hooks/useWeb3";
import React, {useEffect,useState} from "react";
import {useNavigate} from "react-router-dom";
import { useIsWhitelisted } from "../../hooks/useIsWhitelisted";
import { UnsupportedChainIdError } from "@web3-react/core";

export const RouteGuard = ({children}) => {

  const {account,error} = useActiveWeb3React();
  const triedEagerConnect = useEagerConnect();
  const [loadChildren,setLoadChildren] = useState(false);
  const router = useNavigate();

  useEffect(() => {
    if(account){
      console.log("Has Account");
      sessionStorage.setItem("disconnected","false");
      if(error instanceof UnsupportedChainIdError){
        router("/");
      }
    } else {
      if(triedEagerConnect){
        console.log("trying eager connect");
        setLoadChildren(true);
      } else {
        router("/home");
      }
    }
    setLoadChildren(true);
  },[error,account,triedEagerConnect]);

  
  return(
    <div className="w-full h-full flex justify-center" id="routeguard">
      { !loadChildren && <div className="h-full flex items-center justify-center">Redirecting...</div>}
      { loadChildren && <>{children}</>}
    </div>
  )
};