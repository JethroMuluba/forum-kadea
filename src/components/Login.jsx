import React, { useState } from 'react'

export default function Login({onLoginSubmit}) {

    const [pseudoInput, setPseudoInpute] = useState("");

    return (
    <>

        <header>
            <h1>Login</h1>
        </header>

        <main>

            <label>Pseudo : </label>

            <input type="text" 
                value={pseudoInput} 
                onChange={
                    (e) => setPseudoInpute(e.target.value)
                }/>

            <div>
                <button onClick={(() => onLoginSubmit (pseudoInput))}>
                    ACCEDER
                </button>
            </div>

        </main>

    </>
    )
}
