import {Blockchain} from '../context/reducer'

export const fetchBlockchain : () => Promise<Blockchain> = async () => {
    const response = await fetch(`http://localhost:8080/blockchain`);
    if (response.ok){
      return response.json()
    }
    throw new Error("fetch blockchain returns "+response.status)
}