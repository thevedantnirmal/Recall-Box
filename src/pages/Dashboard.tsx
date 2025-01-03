import { useState } from "react"
import { Button } from "../components/ui library/Button"
import { Card } from "../components/ui library/Card"
import { CreatContentModal } from "../components/ui library/CreateContentMpdal"
import { ShareIcon } from "../components/icons/ShareIcon"
import { Sidebar } from "../components/ui library/Sidebar"
import { useFetchContent } from "../components/hooks/useFetchContent"



function Dashboard() {
  const [openModel,setOpenModel]=useState(false);
  const content=useFetchContent();
  console.log(content.data)

  return (
  <div className="bg-grey-app h-screen ">
    <Sidebar/>
    <div className="flex justify-end pr-6 pt-6 gap-2" >
      <Button varient="secondary" text="Share Brain" startIcon=<ShareIcon size="md"/>/>
      <Button varient="primary" text="Add Content" startIcon={<ShareIcon size="md"/>} onClick={()=>setOpenModel(true)}/>
    </div>


  <div className="flex ml-64 pl-2 flex-wrap">
  {/* <Card title="Project Ideas " type="tweeter" link="https://twitter.com/SpaceX/status/1874165241044754538"/>
  <Card title="Project Ideas " type="youtube" link="https://www.youtube.com/embed/gpVj6dMbOr8?si=d5wUljEc1cXrMbcK"/> */}
  {content?.Object?.data?.data?.map((curr,index)=>(
    <Card title={curr.title} link={curr.link} key={index} type={curr.type}/>
  ))
     
  }
  </div>

   <Button varient="primary" text="Add" /> 
 <CreatContentModal open={openModel} onClose={()=>setOpenModel(false)}/>

  </div>
  )
}

export default Dashboard
