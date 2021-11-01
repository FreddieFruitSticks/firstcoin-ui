import { Blockchain, IBlock, IHostDetails, ITransaction } from "./reducer"

export enum ActionType {
    BLOCKCHAIN="BLOCKCHAIN",
    BLOCK="BLOCK",
    HOST_DETAILS="HOST_DETAILS",
    UNCONFIRMED_TX_POOL="UNCONFIRMED_TX_POOL",
    CLEAR_HOSTS="CLEAR_HOSTS"
}

export interface IAction<T> {
    type: ActionType;
    payload: T
}

export const blockchainAction = (payload: Blockchain) : IAction<Blockchain> => {
    return {
        type: ActionType.BLOCKCHAIN,
        payload: payload
    }
}

export const blockAction = (payload: IBlock) : IAction<IBlock> => {
    return {
        type: ActionType.BLOCK,
        payload: payload
    }
}

interface HostsDetails{
    hostsDetails: IHostDetails[]
}

export const hostDetailsAction = (payload: HostsDetails) : IAction<HostsDetails> => {
    return {
        type: ActionType.HOST_DETAILS,
        payload: payload
    }
}

interface Pool{
    pool: ITransaction[]
}

export const unconfirmedTxPoolAction = (payload: Pool) : IAction<Pool> => {
    return {
        type: ActionType.UNCONFIRMED_TX_POOL,
        payload: payload
    }
}