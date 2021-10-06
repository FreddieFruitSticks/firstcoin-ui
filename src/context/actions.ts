import { Blockchain } from "./reducer"

export enum ActionType {
    BLOCKCHAIN="BLOCKCHAIN"
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