import {Blockchain, IHostDetails, IBlock} from '../context/reducer'

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