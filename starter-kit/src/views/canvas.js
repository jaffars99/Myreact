import React from "react";
import './nav.css';
import { gsap } from "gsap";
const { useLayoutEffect, useRef } = React;
// import Products from "./Product";
function Canvas() {
   const app = useRef();
   useLayoutEffect(() => {
     let ctx = gsap.context(() => {
        var canvas = {
            element: document.getElementById('canvas'),
            width: 1250.00,
            height: 550,
            initialize: function () {
              this.element.style.width = this.width + 'px';
              this.element.style.height = this.height + 'px';
              document.body.appendChild(this.element);
            }
          };
          var Ball = {
            create: function (color, dx, dy) {
              var newBall = Object.create(this);
              newBall.dx = dx;
              newBall.dy = dy;
              newBall.width = 250;
              newBall.height = 250;
              newBall.element = document.createElement('div');
              newBall.element.style.backgroundColor = color;
              newBall.element.style.width = newBall.width + 'px';
              newBall.element.style.height = newBall.height + 'px';
              newBall.element.className += ' ball';
              newBall.width = parseInt(newBall.element.style.width);
              newBall.height = parseInt(newBall.element.style.height);
              canvas.element.appendChild(newBall.element);
              return newBall;
            },
            increaseSize: function (x, y) {
              this.element.width = x + 'px';
              this.element.height = y + 'px';
          
            },
            moveTo: function (x, y) {
              this.element.style.left = x + 'px';
              this.element.style.top = y + 'px';
          
              if (x < canvas.width - 200) {
                this.element.style.width = 200 + 'px';
                this.element.style.height = 200 + 'px';
              }
              if (y < canvas.height - 200) {
                this.element.style.width = 300 + 'px';
                this.element.style.height = 300 + 'px';
          
              }
            },
            changeDirectionIfNecessary: function (x, y) {//intersection part & direction change 
              if (x < 0 || x > canvas.width - this.width) {
                this.dx = -this.dx;
          
              }
              if (y < 0 || y > canvas.height - this.height) {
                this.dy = -this.dy;
          
              }
            },
            draw: function (x, y) {
              this.moveTo(x, y);
              var ball = this;
              setTimeout(function () {
                ball.changeDirectionIfNecessary(x, y)
                ball.draw(x + ball.dx, y + ball.dy);
              },);
            }
          };
          canvas.initialize();
          var ball1 = Ball.create("#f6a624", 1.3, 1.3);//speed
          var ball2 = Ball.create("#2fc3ce", 1.3, 1.3);//speed
          ball1.draw(10, 20);//starting co-ordinate
          ball2.draw(400, 100);//starting co-ordinate
     }, app);
     
     return () => ctx.revert();
   });
   return (
      <div ref={app} className="canvas">
         </div>
   );
 }
 
export default Canvas;