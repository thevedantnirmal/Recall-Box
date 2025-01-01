import { useState } from "react"
import { Button } from "./components/ui library/Button"
import { Card } from "./components/ui library/Card"
import { CreatContentModal } from "./components/ui library/CreateContentMpdal"



function App() {
  const [openModel,setOpenModel]=useState(false)

  return (
  <div className="bg-grey-app h-screen ">


  <div className="flex">
  <Card title="Project Ideas " type="tweeter" link="https://twitter.com/SpaceX/status/1874165241044754538"/>
  <Card title="Project Ideas " type="youtube" link="https://www.youtube.com/embed/gpVj6dMbOr8?si=d5wUljEc1cXrMbcK"/>
  <Card title="Project Ideas " type="youtube" link="https://www.youtube.com/watch?v=n6wL0_k2U2U&list=PLdQmYxw9HKW4ONT9IbExn2Rb1F3NM1Y-g&index=15"/></div>

   <Button varient="primary" text="Add" onClick={()=>setOpenModel(true)}/> 
 <CreatContentModal open={openModel} onClose={()=>setOpenModel(false)}/>

  </div>
  )
}

export default App
