
import React from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends React.Component{



    buttonClicked=()=>{
        console.log(" parent Button clicked")
    }


    render() {
        return(
            <div>
                <h1>
                    Parent
                </h1>
                <ChildComponent buttonClicked ={this.buttonClicked}/>
            </div>
        )
    }
}

export default ParentComponent