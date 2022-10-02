import { clearHostDetailsAction, hostDetailsAction, IAction, unconfirmedTxPoolAction } from '../context/actions';
import {Blockchain, IHostDetails, IBlock, ITransaction} from '../context/reducer'

export const fetchBlockchain : () => Promise<Blockchain> = async () => {
    const response = await fetch(`/block-chain`);
    if (response.ok){
      return response.json()
    }
    throw new Error("fetch blockchain returns "+response.status)
}

export const mineBlock : () => Promise<IBlock> = async () => {
  const response = await fetch(`/create-block`,{
    method: "POST",
    body:JSON.stringify({a: 1, b: 'Textual content'})
  });
  if (response.ok){
    return response.json()
  }
  const message = await response.json()
  console.log(message)
  throw new Error("create blockchain returns "+response.status)
}

export const fetchHosts : () => Promise<IHostDetails[]> = async () => {
  const response = await fetch(`/hosts`,{
    method: "POST",
    body: JSON.stringify({})
  });
  if (response.ok){
    return response.json()
  }
  throw new Error("fetch hosts returns "+response.status)
}

type txPoolObject = { [key: string]: ITransaction };

export const fetchUnconfirmedTxPool : () => Promise<txPoolObject> = async () => {
  const response = await fetch(`/txpool`,{
    method: "GET"
  });
  if (response.ok){
    return response.json()
  }
  throw new Error("fetch host details returns "+response.status)
}

//this sends the request to the main node - which passes the request on to the internal network
export const spendCoinRelay : (host: string, to: string, amount: number) => Promise<txPoolObject> = async (host, to, amount) => {
  const response = await fetch(`/spend-coin-relay`,{
    method: "POST",
    body: JSON.stringify({host:host, address: to, amount: amount})
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
      
      const hostDetails = await fetchHosts()    
      const a = hostDetails.forEach(async detail => {
        try{
      
          dispatch(hostDetailsAction({
            ...detail
          }))
          
        }catch(e){
          console.log(e)
        }
      });
      
      const unconfirmedTxPool = await fetchUnconfirmedTxPool()
      dispatch(unconfirmedTxPoolAction({
          pool: Object.values(unconfirmedTxPool)
      }))   
      
  }catch(e){
      console.log(e)
  }
}