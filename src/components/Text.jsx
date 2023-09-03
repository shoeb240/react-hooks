import React from "react";

function Text({count, children}) {
    console.log(children);

    return (
        <h3>{children} {count}</h3>
    );
}

// Using React.memo to cache this component
export default React.memo(Text);