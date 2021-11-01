import { useEffect } from "react"
import { statusMessageAction } from "../context/actions"
import { Context } from "../context/context-provider"
import { StatusLevel } from "../context/reducer"
import './status-message.css'

interface IStatusMessage extends Context{
}

const StatusMessage = ({state, dispatch}: IStatusMessage) => {
    useEffect(() => {
        setTimeout(() => dispatch(statusMessageAction({
            message:"",
            level: StatusLevel.BLANK,
        })), 10000)
    },[state.statusMessage])
    
    return (
        <div>
            <div 
                style={{
                    position: 'fixed',
                    zIndex: 1000
                }} 
                className={`status-message-${state.statusMessage.level} w-8/12 p-10`}
            >
                {state?.statusMessage?.message &&
                    `${state?.statusMessage?.message}`
                }
            </div>
        </div>
    )
}

export default StatusMessage