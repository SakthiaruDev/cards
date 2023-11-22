import { useState } from "react";

const Use=()=>{
    const [signIn,setSignIn]=useState(false)
    const [signOut,setSignOut]=useState(false)
  
  
    function Change(){
      setSignIn(signIn ? false : true);
      setSignOut(signOut ? false : true);
    }

return(
    <div>
        <button onClick={Change}>{signIn? "Sign Out":"Sign In"}</button>
        <p>{signIn?"Great work":"Please Sign in"}</p>
    </div>
)
}
export default Use;