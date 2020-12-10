import React from 'react'
import squareStyle from "../components/square.module.css"
const Square = () =>
{
    return(
        <div className={squareStyle.square} id="home">
            <p className={squareStyle.headline}>Hello, my name is Pia</p>
            <p className={squareStyle.sub_headline}>I'm a software engineer based in Los Angeles</p>
        </div>
    )
}
export default Square;