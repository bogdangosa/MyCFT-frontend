import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Redirect({to}) {
    const navigate = useNavigate();

    useEffect(()=>{
        navigate(to);
    },[])


  return (
    <main id="redirect">
      
    </main>
  )
}

export default Redirect

