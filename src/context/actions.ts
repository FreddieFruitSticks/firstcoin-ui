import { Blockchain, IBlock, IHostDetails } from "./reducer"

export enum ActionType {
    BLOCKCHAIN="BLOCKCHAIN",
    BLOCK="BLOCK",
    HOST_DETAILS="HOST_DETAILS"
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