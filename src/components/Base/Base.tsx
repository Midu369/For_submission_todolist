import {ReactNode} from "react";
import {Footer} from "@/components/Footer/Footer"
import {Header} from "@/components/Header/Header"

export const Base: React.FC<{children: ReactNode}> = (props) => {
    return(
        <div>
            <Header/>
                {props.children}
            <Footer/> 
        </div>
    )
}