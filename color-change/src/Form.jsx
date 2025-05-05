import { useState } from "react"

const Form = ({updateColor}) => {
    const [newColor, setNewColor]=useState('')
    const handleChange = (event) => {
        setNewColor(event.target.value)
    }
    const handleSubmit = (event)=> {
    event.preventDefault()
    updateColor(newColor)
    }
console.log(newColor)

  return (
    <form style={
        {
            display: 'flex',
            flexDirection: 'column',

    }
}
     onSubmit={handleSubmit}>
        <input style={{width='100px', height:'100px'}} onChange={handleChange} type="color" />
        <button type="submit">применить цвет</button>
    </form>
  )
}

export default Form