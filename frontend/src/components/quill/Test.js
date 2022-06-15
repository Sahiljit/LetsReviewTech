import React, { useState, Component } from 'react'
import './Editor.scss'
import Select from 'react-select'
import { Button} from '@mui/material';


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]


const Tags = () => {

  const [tags, setTags] = useState([])
  const [selectedOptions, setSelectedOptions] = useState();


  function handleSelect(data) {
    setSelectedOptions(data);
  }

  return (
    <div>
      <Select
        defaultValue={[options[1], options[2]]}
        isMulti
        name="colors"
        options={options}
        className="basic-multi-select custom"
        classNamePrefix="select"
        value={selectedOptions}
        onChange={handleSelect}
        
  />
  <Button onClick = {()=> console.log(selectedOptions)}>
    Click here
  </Button>
    </div>
  )
}

export default Tags