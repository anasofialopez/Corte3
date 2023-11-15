import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'


const FirstApp = ({ value }) => { 

  const  [counter, setCounter] = useState( value )

  const handleAdd = () => {
    console.log('LlmarHandle')
    setCounter( counter + 1)
  }

  const handleSubstract = () => {
    console.log('llamando handleSubstract')
    setCounter(counter - 1)
}

const handleReset = () => {
    console.log('llamando handleReset')
    setCounter(value * 0)
}
  return (
    <>
        <h1>Contador</h1>
        <span> { counter } </span><br></br>
        <button onClick={() => handleAdd() }> +1 </button>
        <button onClick = {()=> handleSubstract()}>-1</button>
        <button onClick = {()=> handleReset()}>Reiniciar</button>
    </>
  )
}

FirstApp.proptypes = {
  value: PropTypes.number.isRequired
}
FirstApp.defaultProps = {
  value: 1
}

export default FirstApp