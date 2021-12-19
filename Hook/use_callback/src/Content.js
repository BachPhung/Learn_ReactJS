import { memo } from "react"
const Content = () => {
    console.log('rendered')
    return (
        <div>
            <h2>Hello everybody</h2>
        </div>
    )
}

export default memo(Content)