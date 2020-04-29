import React from 'react';
import "./Main.css";

const Main = props =>(
<main className= {`${props.shake}`}>
<div className="container">
    {props.children}
</div>
</main>
)

export default Main;