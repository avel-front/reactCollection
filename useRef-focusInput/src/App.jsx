import React, {useRef} from 'react';

const App = () => {
    const inputRef = useRef()

   const focused = () => {
        inputRef.current.focus()
   }

    return (
        <div className="container-md p-4">
            <div className="input-group">
                <input
                    ref={inputRef}
                    type="text"
                    className="form-control"
                    placeholder="Enter your text"
                    aria-describedby="button-addon2"
                />
                    <button
                        onClick={focused}
                        className="btn btn-outline-secondary"
                        type="button"
                        id="button-addon2">
                        Focus
                    </button>
            </div>
        </div>
    );
};

export default App;
