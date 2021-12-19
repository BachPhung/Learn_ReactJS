import { memo } from "react"
const Content = ({onIncrease}) => {
    console.log('rendered')
    return (
        <div>
            <h2>Hello everybody</h2>
            <button onClick={onIncrease}>Click me!</button>
        </div>
    )
}

export default memo(Content)