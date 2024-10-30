import { Component } from 'react';

function Home({ title }) {
    return (
        <>
            <h1>Willkommen auf {title || 'dieser Profilseite' }</h1>
        </>
    );
}

export default Home