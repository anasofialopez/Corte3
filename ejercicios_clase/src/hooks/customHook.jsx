import { useState } from "react"

const useCounter = ({value})=> {

    const [counter, setCounter] = useState (value)

    const handleAdd = () => {
        setCounter(counter + 1)
    }

    const handleSubstract = () => {
        setCounter(counter - 1)
    }

    const handleReset = () => {
        setCounter(value)
    }
}

