import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner } from '../helpers';


const styles = {
    width: '200px',
    margin: '20px auto',
};

const Game = () => {
    
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true)
    const winner = calculateWinner(board)


    const handleClick = i => {
	let boardCopy = [...board];        
	// If user clicks an occupied square or game is won return
	if (winner || boardCopy[i]) return;
	// Put an X or an O on the clicked square
	boardCopy[i] = xIsNext ? 'X' : 'O';
	setBoard(boardCopy);
	setXisNext(!xIsNext);
    }
    
    const jumpTo = () => {
        
    }
    
    const renderMoves = () => (
       <button onClick={() => setBoard(Array(9).fill(null))}>Reset Game</button>
    )
    
    return (
	<>
	    <Board squares={board} onClick={handleClick} />
	    <div styles={styles}>
		<p>{winner ? "The winner is: " + winner : "Next player: " + (xIsNext ? "X" : "O")}</p>
		{renderMoves()}
	    </div>
	</>
    )
}

export default Game;
