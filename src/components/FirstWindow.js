import React from 'react'
import PropTypes from "prop-types"
import FirstWindowItems from './FirstWindowItems'
import {connect} from "react-redux"


const FirstWindow = (props) =>{
    const [active, setActive] = React.useState(null);
    return(
        <div className = "window">
            {
                props.data.map((item,i) =>{
                    return <FirstWindowItems
                     item = {item}
                     isActive={active===i}
                     onClick={()=>setActive(i)}
                     key={item.id}></FirstWindowItems>
                })
            }
            
        </div>
    )
}

FirstWindow.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired
}

const mapStateToProps = state => {
    console.log(state);
    return state
}

export default connect(mapStateToProps, null)(FirstWindow);


