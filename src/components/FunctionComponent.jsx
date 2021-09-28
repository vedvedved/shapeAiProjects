import React from 'react';

function FunctionComponent(){
    const [counter, setCounter] = React.useState(0);
    
    return(
        <div>
                <h1>{counter}</h1>
                <button onClick ={() => setCounter(counter + 1)}>
                    +1
                </button>
            </div>
    );
}

export default FunctionComponent;
