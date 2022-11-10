import React from 'react'

const Fight = () => {
    return (
        <>
            <div className='container flex'>
                <h1 className='flex justify-center text-2xl mt-8'>Fight!</h1>
                <div className='flex place-content-around mt-8'>
                    <div className="text-center">
                        <h1>Player 1</h1>
                        <img className='player1_pic' src={imgurl} width="300" />
                    </div>
                    <div className="text-center">
                        <h1>PLAYYER 2</h1>
                        <img className='player2_pic' src={imgurl2} width="300" />
                    </div>
                </div>
                <div className='flex place-content-around mt-8'>
                    <progress className="progress w-56" value="100" max="100"></progress>
                    <progress className="progress w-56" value="100" max="100"></progress>
                </div>
                <div className='flex justify-center'>
                    <button className='btn mt-8 w-40'>Attack!</button>
                </div>
            </div>
        </>
    )
}


export default Fight