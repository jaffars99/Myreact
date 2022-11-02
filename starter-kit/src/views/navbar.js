import React from "react"
import './nav.css'
import svg from '@src/assets/images/logo/Logo CIRCLE.svg'
import { gsap } from "gsap"
// import logo from './svg/Logo CIRCLE.svg';
const { useLayoutEffect, useRef } = React
// import Products from "./Product";
function App() {
   const app = useRef()
   useLayoutEffect(() => {
     const ctx = gsap.context(() => {
       gsap.fromTo(".navsvg", { x:"-600"}, {x:"0"})
     }, app)
     return () => ctx.revert()
   })
   return (
      <div ref={app}>
      <nav className="nav card">
      <img src={svg} className="navsvg" alt="jaffar"/>
      <ul>
             <li>Home</li>
             <li>Products</li>
             <li>Blogs</li>
             <li>Carrer</li>
             <li>About us</li>
             <li>Contact us</li>
         </ul>
      </nav>
      {/* <img src={logo}  className="navsvg1" alt="jaffar"/> */}
         </div>
   )
 }
 
export default App