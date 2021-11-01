import { Blockchain, IBlock, IHostDetails, IStatusMessage, ITransaction } from "./reducer"

export enum ActionType {
    BLOCKCHAIN="BLOCKCHAIN",
    BLOCK="BLOCK",
    HOST_DETAILS="HOST_DETAILS",
    UNCONFIRMED_TX_POOL="UNCONFIRMED_TX_POOL",
    CLEAR_HOSTS="CLEAR_HOSTS",
    STATUS_MESSAGE="STATUS_MESSAGE"
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


export const hostDetailsAction = (payload: IHostDetails) : IAction<IHostDetails> => {
    return {
        type: ActionType.HOST_DETAILS,
        payload: payload
    }
}

export const clearHostDetailsAction = (payload: {}) : IAction<{}> => {
    return {
        type: ActionType.CLEAR_HOSTS,
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

export const statusMessageAction = (payload: IStatusMessage) : IAction<IStatusMessage> => {
    return {
        type: ActionType.STATUS_MESSAGE,
        payload: payload
    }
}