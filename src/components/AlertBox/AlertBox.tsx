// export type AlertType = 'success' | 'error' | 'warning' | 'info';

import type { AlertBoxProps } from "../../types";

 //export type AlertType = 'success' | 'error' | 'warning' | 'info';

// export interface AlertBoxProps {
//   type: AlertType;
//   message: string;
//   onClose?: () => void;
//   children?: React.ReactNode;
// }

export function AlertBox({type,message,onClose, children}: AlertBoxProps){
    return (
        <div>
            <p>{message}</p>
        </div>
    )

   

}