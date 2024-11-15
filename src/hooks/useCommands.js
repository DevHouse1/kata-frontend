import { useEffect, useMemo } from "react";
import { apiRoot } from "../contexts/GlobalContext";

const useCommands = (ClientId = 1 , setCommands, setCommandError) => {
  
  const url = useMemo(() => apiRoot + `/api/orders/${ClientId}`, [ClientId]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setCommands(data))
      .catch(err => setCommandError(err));

  // url will change only if client changed effect expected to run only one time
  }, [url, setCommands, setCommandError]);

};

export default useCommands;