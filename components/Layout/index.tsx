import { ReactNode } from "react";
import Components from "../index"

type Props = {
    children: ReactNode
}

export const Content = ({ children }: Props) => {
    return (
        <>
            <div className="min-h-screen ">
                <main>{children}</main>
                <Components.Footer.Content />
            </div>
        </>
    )
}

export default Content
