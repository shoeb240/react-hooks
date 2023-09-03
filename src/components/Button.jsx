import React from "react";

function Button({handleInput, children}) {
    console.log(children);
    return (
        <>
            <button onClick={handleInput}>{children}</button>
        </>
    )
}

// Using React.memo to cache this component
export default React.memo(Button);