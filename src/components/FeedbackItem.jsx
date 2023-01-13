import PropTypes from 'prop-types'
import {FaTimes} from "react-icons/fa"

import Card from "./shared/Card";

function FeedbackItem({item}) {
    const handleClick= ()=>{
        
    }

  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button className='close'>
          <FaTimes color='purple'/>
        </button>
        <div className="text-display">{item.text}</div>
        <button onClick={handleClick}>Click</button>
    </Card>
  )
}

FeedbackItem.propTypes = {
    item:PropTypes.object.isRequired
}


export default FeedbackItem