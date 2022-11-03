import React from "react"
import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"
import { EasePack } from "gsap/EasePack"
import { Timeline } from "gsap/gsap-core"
gsap.registerPlugin(TextPlugin, EasePack)
import './nav.css'
const { useLayoutEffect, useRef } = React
function Effect() {
    const app = useRef()
   useLayoutEffect(() => {
     const ctx = gsap.context(() => {
       const words = ["Stability", "Success", "Peace", "Retention"]
       const boxTL = gsap.timeline()
       const masterTL = gsap.timeline({repeat: -1})
       boxTL.to('.text', {duration: 1, delay: 0.5})
       .from('.text', {duration: 1, onComplete: () => masterTL.play()})
       words.forEach(word => {
           const tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1})
           tl.to('.text', {duration: 1, text: word})
           masterTL.add(tl)
       })

     }, app)
     return () => ctx.revert()
   })
   return (
    <h1 className="h1" ref={app}>
    <span className="hi">1 Click To</span>
    <span className="text"></span>
    </h1> 
   )
 }
export default Effect