import ChildComponent from "./ChildComponent";
import ChildFunctionalClass from "./ChildFunctionalClass";

const ParentFunctionalClass =()=>{

    function parentButtonClicked(){
        console.log("Parent functional class method called")
    }

    return(
        <div>
          <h1>Parent Functional Class</h1>
            <ChildFunctionalClass parentButtonClicked={parentButtonClicked}/>
        </div>
    )
}

export default ParentFunctionalClass