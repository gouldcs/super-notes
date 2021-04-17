  import React, {useState} from 'react';
  
  const useSubmit = (callback) => {
    const [input, setInput] = useState({})

    const handleSubmit = (event) => {
      callback()
    }

    const handleInputChange = (event) => {
      event.persist()
      setInput((input) => ({
        ...input,
        [event.target.name]: [event.target.value],
      }))
    }

    return (handleSubmit, handleInputChange, input)
  }

  export default useSubmit