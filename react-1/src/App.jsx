import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
// import { createRoot } from "react-dom/client"

// const root = createRoot(document.getElementById("root"))
// const reactElement = <h1>Hello from JSX!</h1>

// console.log(reactElement)

// root.render(
//     reactElement
// )
export default App


// function MyAwesomeNavbar() {
//     return (
//         <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
//             <div className="container-fluid">
//                 <a className="navbar-brand" href="#">MyAwesomeNavbar</a>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>

//                 <div className="collapse navbar-collapse" id="navbarsExample03">
//                     <ul className="navbar-nav me-auto mb-2 mb-sm-0">
//                         <li className="nav-item">
//                             <a className="nav-link active" aria-current="page" href="#">Home</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">Link</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link disabled" aria-disabled="true">Disabled</a>
//                         </li>
//                         <li className="nav-item dropdown">
//                             <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
//                             <ul className="dropdown-menu">
//                                 <li><a className="dropdown-item" href="#">Action</a></li>
//                                 <li><a className="dropdown-item" href="#">Another action</a></li>
//                                 <li><a className="dropdown-item" href="#">Something else here</a></li>
//                             </ul>
//                         </li>
//                     </ul>
//                     <form role="search">
//                         <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
//                     </form>
//                 </div>
//             </div>
//         </nav>
//     )
// }


// function MainContent() {
//     return <h1>React is great!</h1>
// }

// root.render(
//     <div>
//         {/* <MyAwesomeNavbar /> */}
//         <MainContent />
//     </div>
// )
import { createRoot } from 'react-dom/client'

const root = createRoot(document.querySelector("#root"))

// const reactElement1 = <h1>Hello world of React! I am here! </h1>

root.render(

  <>
    
    <h1>Hello There!</h1><h1>I am a big Fan of React!</h1></>
)