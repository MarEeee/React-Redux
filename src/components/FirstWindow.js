import React from 'react'
import PropTypes from "prop-types"
import FirstWindowItems from './FirstWindowItems'
import {connect} from "react-redux"


const FirstWindow = ({items}) =>{
    const [active, setActive] = React.useState(null);
    return(
        <div className = "container">
            {
                items.map((item,i) =>{
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

// FirstWindow.propTypes = {
//     data: PropTypes.arrayOf(PropTypes.object).isRequired
// }

const mapStateToProps = state => {
    console.log(state.items.items);
    return {
        items: state.items.items
    }
}

export default connect(mapStateToProps, null)(FirstWindow);


