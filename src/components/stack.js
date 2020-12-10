import React from 'react';
import {Link} from 'gatsby'
import stackStyle  from '../components/stack.module.css'

const Stack = (props) =>
{
    return(
        <div className={stackStyle.stack}>
            {props.children}
        </div>
    )
}
export default Stack;