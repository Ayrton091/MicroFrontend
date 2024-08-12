import React, { Suspense, lazy } from 'react';

const RelojComponent = lazy(() => import('reloj/RelojComponent'));
const ClimaComponent = lazy(() => import('clima/ClimaComponent'));

function App() {
    return (
        <div>
            <h1>Main Application</h1>
            <Suspense fallback={<div>Loading Reloj...</div>}>
                <RelojComponent />
            </Suspense>
            <Suspense fallback={<div>Loading Clima...</div>}>
                <ClimaComponent />
            </Suspense>
        </div>
    );
}

export default App;
