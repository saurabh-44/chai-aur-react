

import Chai from "./chai"


function App() {
  const username = "chai aur code"

  return (
    <>                                // because of jsx we can return only one element but for that we can return multiple element under <></> 
    <Chai/>
    <h1>chai aur react {username}</h1>
    <p>test para</p>
   </>
  )
}

export default App
