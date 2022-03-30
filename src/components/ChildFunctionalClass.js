const ChildFunctionalClass =(props)=>{
    return(
        <div>
            <h1>Child Functional Class</h1>

            <button onClick={props.parentButtonClicked} >Child Button</button>
        </div>
    )
}

export default ChildFunctionalClass