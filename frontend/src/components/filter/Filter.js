import React , {useState} from 'react'
import './Filter.scss'
import Select from 'react-select'
import {Button} from '@mui/material';





const options = [
  { value: 'React', label: 'React' },
  { value: 'Express', label: 'Express' },
  { value: 'Node.js', label: 'Node.js' },
  { value: 'Redux', label: 'Redux' },
  { value: 'Software', label: 'Software' },
  { value: 'Hardware', label: 'Hardware' },
  { value: 'Lenovo', label: 'Lenovo' },
  { value: 'Asus', label: 'Asus' },
  { value: 'Angular', label: 'Angular' },
  { value: 'Django', label: 'Django' },
  { value: 'Git', label: 'Git' },
  { value: 'Python', label: 'Python' },
  { value: 'laptop', label: 'laptop' },
  { value: 'frontend', label: 'frontend' },
  { value: 'backend', label: 'backend' },
  { value: 'Web-development', label: 'Web-development' },
  { value: 'Mobile', label: 'Mobile' },
  { value: 'Apple', label: 'Apple' },
  { value: 'Xiomi', label: 'Xiomi' },


  
]


const Filter = () => {

  const [tags, setTags] = useState([])


  function handleTags(data) {
    setTags(data);
  }



  return (
    <div className = "section-filter">
        <div className="row1">
        <Select
          // defaultValue={[options[1], options[2]]}
          placeholder = "Search by Tags"
          isMulti
          name="colors"
          options={options}
          className="basic-multi-select tags"
          classNamePrefix="select"
          value={tags}
          onChange={handleTags}
          maxMenuHeight={85}          
          />

        <Button
          className='search-btn'
          variant="contained"
          // onClick = {searchHandler}
          >
            Search
        </Button>



      </div>

    </div>
  )
}

export default Filter

