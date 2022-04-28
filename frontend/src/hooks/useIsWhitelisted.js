import { useEffect, useState } from "react";
import { useCertificationRegistry } from "./useContract";
import { useActiveWeb3React } from "./useWeb3";


export function useIsWhitelisted() {
  
  const { account } = useActiveWeb3React();
  const contract = useCertificationRegistry();
  const [loading,setLoading] = useState(true);
  const [isWhitelisted, setIsWhitelisted] = useState(undefined);

  useEffect(() => {
    setLoading(true);
    setIsWhitelisted(undefined);

    if(account){
      contract?.isWhitelisted(account).then((response) => {
        if (response) {
          console.log("WHITELISTED ADDRESS");
          setIsWhitelisted(true);
        }
        else {
          console.log("NOT WHITELISTED ADDRESS");
          setIsWhitelisted(false);
        }
          setLoading(false);
      });
    } else {
      setLoading(false);
    }
  },[account,contract]);

  return {loading,isWhitelisted};
}