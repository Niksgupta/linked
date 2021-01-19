import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Left.css"


function Leftside({user}) {

    return (
        <div className ="leftbar">
          <div className ="leftbar-1">
            <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGgcI19mU4f72SdJxV-ztMOjzQaUOYbpMFIA&usqp=CAU" 
            alt="" />
             <Avatar className= "avatar" />
             <h4>{user?.displayName}</h4>
             <h2>{user?.email}</h2>
              </div>  
              <div className ="leftbar-2">
                <div className ="info-1">
                 <p>Who viewed your profile</p>
                 <p className="ptag">2448</p>
                </div>
                <div className ="info-1">
                   <p>Views on your post</p>
                   <p className="ptag">1445</p>
                </div>
              </div>
              <div className="leftbar-bottom">
                  <p>Recent</p>
                   <p className="recent"># webdev</p>
                   <p className="recent"># softwareeengineering</p>
                   <p className="recent"># reactjs</p>
                   <p className="recent"># frontenddevelopmet</p>

              </div>
        </div>

    )
}

export default Leftside
