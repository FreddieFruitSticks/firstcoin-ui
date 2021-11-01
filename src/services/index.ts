import { clearHostDetailsAction, hostDetailsAction, IAction, unconfirmedTxPoolAction } from '../context/actions';
import {Blockchain, IHostDetails, IBlock, ITransaction} from '../context/reducer'

export const fetchBlockchain : () => Promise<Blockchain> = async () => {
    const response = await fetch(`http://localhost:8080/block-chain`);
    if (response.ok){
      return response.json()
    }
    throw new Error("fetch blockchain returns "+response.status)
}

export const mineBlock : () => Promise<IBlock> = async () => {
  const response = await fetch(`http://localhost:8080/create-block`,{
    method: "POST",
    body:JSON.stringify({a: 1, b: 'Textual content'})
  });
  if (response.ok){
    return response.json()
  }
  throw new Error("fetch blockchain returns "+response.status)
}

export const fetchHosts : () => Promise<string[]> = async () => {
  const response = await fetch(`http://localhost:8080/hosts`,{
    method: "GET"  
  });
  if (response.ok){
    return response.json()
  }
  throw new Error("fetch hosts returns "+response.status)
}

export const fetchHostDetails : (host: string) => Promise<IHostDetails> = async (host) => {
  const response = await fetch(`http://${host}/host-details`,{
    method: "GET"
  });
  if (response.ok){
    return response.json()
  }
  throw new Error("fetch host details returns "+response.status)
}

type txPoolObject = { [key: string]: ITransaction };

export const fetchUnconfirmedTxPool : () => Promise<txPoolObject> = async () => {
  const response = await fetch(`http://localhost:8080/txpool`,{
    method: "GET"
  });
  if (response.ok){
    return response.json()
  }
  throw new Error("fetch host details returns "+response.status)
}

export const payAddress : (host: string, to: string, amount: number) => Promise<txPoolObject> = async (host, to, amount) => {
  const response = await fetch(`http://${host}/spend-coin`,{
    method: "POST",
    body: JSON.stringify({address: to, amount: amount})
  });
  
  if (response.ok){
    return response.json()
  }
  
  const resp = await response.json()
  throw new Error(`pay from host ${host} returns ${response.status} ${resp.message}`)
}

export const fetchControlPanel = async (dispatch: React.Dispatch<IAction<any>>) => {
  try{
      dispatch(clearHostDetailsAction({}))
      
      const hosts = await fetchHosts()    
      const a = hosts.forEach(async host => {
          let hostDetails = await fetchHostDetails(host)
          hostDetails.host=host
      
          dispatch(hostDetailsAction({
            ...hostDetails
          }))
      });
      
      const unconfirmedTxPool = await fetchUnconfirmedTxPool()
      dispatch(unconfirmedTxPoolAction({
          pool: Object.values(unconfirmedTxPool)
      }))   
      
  }catch(e){
      console.log(e)
  }
}