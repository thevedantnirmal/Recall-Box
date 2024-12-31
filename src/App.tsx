import { PlusIcon } from "./components/icons/PlusIcon"
import { ShareIcon } from "./components/icons/ShareIcon"
import { Button } from "./components/ui library/Button"


function App() {

  return (
  <>
    <Button startIcon={<ShareIcon size="md"/>} varient="primary" size="lg"  text="Share Brainn" onClick={()=>{}}/>
    <Button startIcon={<PlusIcon size="md"/>} varient="secondary" size="lg"  text="Add Content" onClick={()=>{}}/>
    <Button startIcon={<ShareIcon size="sm"/>} varient="primary" size="sm"  text="Share Brainn" onClick={()=>{}}/>
    <Button startIcon={<PlusIcon size="sm"/>} varient="secondary" size="md"  text="Add Content" onClick={()=>{}}/>


  </>
  )
}

export default App
