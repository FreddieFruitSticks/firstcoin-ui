import { Blockchain, IBlock } from "./reducer"

export enum ActionType {
    BLOCKCHAIN="BLOCKCHAIN",
    BLOCK="BLOCK"
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