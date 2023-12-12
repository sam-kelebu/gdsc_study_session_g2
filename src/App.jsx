import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let G2-Members=["Nathan Israel",
  "Natinael Wondimagegnehu ",
  "Olbia Letta ",
  "Temesgen Getye",
  "Osman Hassan Ibrahim ",
   "Rahel Belay",
   "Robel Teshome",
   "Ruth Tadesse Gebretsadik",
   "Ruth Zenabu Yifru",
   "Salahuddin Hafiz ",
   "Salem Habte",
"Natnael wondmagegn",
"Seid Yesuf ",
"solomon sheleme Emana",
"surafel nigusiei " ];
let returnable=G2-Members.map((mem,num)=>{
return (
<p>
{num+1} {mem}    
</p>
)

}

export default App
