import React, { useContext } from 'react'
import UserContext from '../context/UserContext.js';
import data from '../Models/Services/DataService.js';
import Post from "../components/Post.jsx";

export default function Home() {

    const user = useContext(UserContext);

    return (
    <div>
        <header>
            <h1>Forum instantané</h1>
        </header>

        <main>

            <h2>Bienvenue, {user.pseudo} </h2>
            {
                data.map((e) => <Post post= {e}/> )
            }
        </main>

    </div>
    )
}
