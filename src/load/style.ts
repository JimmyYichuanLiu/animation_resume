import {isMobile} from '../scripts/animateResume/untils/untils'

const is_mobile: boolean = isMobile()

export const style1:string = `/**
 * Inspired by http://strml.net/
 * Hello, Everyone
 * My name is Yichuan Liu. I'm an undergraduate student in UC Berkeley
 * Thank you the inspiration from Jack Albaugh
 * This will take you two and a half minutes to go through the whole animation.
 * But trust me, it's really worthy!
 * Now We Start the Project. Let's count 3
 * 2.
 * 1.
 * 1.
 * 0.5.
 * 0.2.
 * Sorry, I am just kidding. Let's start now!\
 */
 
 /* First, I will add the transition effect to all the elements
 * This didn't seem useful. But you will figure out why it's important
 */
* {
  transition: all 1s;
}
/**
 * The black and white looks too boring for this animation
 * Let's add some color to the screen
 */
html {
  background: rgb(63, 82, 99);
  font-size: 10px;
  overflow: auto;
}
/***
 * Hold on...
 */
pre, a {
  color: #ffffff;
}
/**
 * That looks much better now.
 * But the words look too close to the frame
 * Let's move the a little bit right
 * This will create a nice area for us to code in
 */
pre:not(:empty) {
  ${is_mobile ?
  `height:46%;
  width: calc(100% - 2rem);`
  :
  `height: 100%;`}
  font-size: 1.4rem;
  overflow: auto;
  background: rgb(48, 48, 48);
  border: 1px solid #ccc;
  padding: 1rem 1rem 2rem;
  white-space: pre-wrap;
  outline: 0;
}
#style-container {
  height:92%;${is_mobile ? 'width:100%;' : 'width: 49%;transform: translateX(95%);'}
  position: absolute;
  left: 1rem;
  top: 1rem;
}
/**
 * As a professional coder,
 * We want the codes looks more professional
 * Let's add some highlights to the codes
 */
#style-container  { color: #DEDEDE }
.comment       { color: #857F6B; font-style: italic; }
.selector      { color: #D7BA7D; }
.keyword       { color: #569CD6; }
.property      { color: #569CD6; }
.function      { color: #C366A3; }
.punctuation   { color: #FFCF00; }
/**
 * Adding some 3D Animation on this
 */
body {
  perspective: 100rem;
}
#style-container {
  ${is_mobile ? 'transform: rotateX(-10deg);' : 'transform: translateX(98.5%) rotateY(-10deg);'}
  transform-origin: right;
}
/**
 * It looks really cool!
 * it is, right?
 * ....
 * Now, it's my time to show off!
 */
 #resume-container {
  height:92%;${is_mobile?'width:100%;':'width: 49%;'}
  white-space: normal;
 ${is_mobile ?
  ` position: absolute;
  left: 1rem;
  top:50%;`
  : ` position: absolute;
  left: 1rem;
  top: 1rem;
  transform: rotateY(10deg);
  transform-origin: left;`}
}
`

export const style2 = `/**
 * Q: Emm, the resume seems weird.
 * A: It should be more formal.
 * Q: That's correct! I should make it more friendly to HR!
 * A: Now you need to change it into HTML version.
 */
#resume-container{
  font-size: 1.4rem;
}
#resume-container h1{
  display: inline-block;
  border-bottom: 1px solid;
  margin: .5rem 0 1rem;
  font-size: 2.6rem;
}
#resume-container a{
  color: #ffffff;
}
#resume-container ul> li{
  margin-bottom: .3rem;
}
#resume-container ul> li::before{
  content: '•';
  margin-right: .5rem;
  color: '#ffffff';
}
/**
 * Okey, this is almost done.
 *
 * Thank you for spending two and a half minutes watching this.
 *
 * Hope you like it!
 *
 */`
