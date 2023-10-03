import React from "react";


export function Botones({alerts}) {

    return (<div>
        <button onClick={()=>alert(alerts.m1)}>Modulo 1</button>
        <button onClick={()=>alert(alerts.m2)}>Modulo 2</button>
    </div>);
}

