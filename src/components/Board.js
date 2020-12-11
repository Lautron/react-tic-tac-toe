import React from 'react'
import Square from './Square'

function Board({ squares, onClick}){
    return (
    <div>
        <div className="board-row">
            <Square value="1" onClick={() => onClick("Dummy value")}/>
            <Square value="2" onClick={() => onClick("Dummy value")}/>
            <Square value="3" onClick={() => onClick("Dummy value")}/>
        </div>
        <div className="board-row">
            <Square value="4" onClick={() => onClick("Dummy value")}/>
            <Square value="5" onClick={() => onClick("Dummy value")}/>
            <Square value="6" onClick={() => onClick("Dummy value")}/>
        </div>
        <div className="board-row">
            <Square value="7" onClick={() => onClick("Dummy value")}/>
            <Square value="8" onClick={() => onClick("Dummy value")}/>
            <Square value="9" onClick={() => onClick("Dummy value")}/>
        </div>
    </div>
    )
}

export default Board