import React, { Suspense } from 'react';


function Ejercicio18() {
  // Importamos como lazy el Counter del ejercicio 3
  const Counter = React.lazy(() => import('./RedditPosts'))

      return (
        <>
          <Suspense fallback={<div>Loading...</div>}>
            <Counter />
          </Suspense>
        </>
      )
} 

export default Ejercicio18;