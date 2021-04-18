  import React, {useState} from 'react';
  
  const useSubmit = (callback) => {
    const [input, setInput] = useState("")

    const handleInputChange = (event) => {
      console.log(input + "HERER")
      const newInput = event.target.value
      setInput(newInput)
    }

    return (handleInputChange, input)
  }

  export default useSubmit