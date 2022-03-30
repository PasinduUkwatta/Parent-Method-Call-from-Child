import React from "react";



class ChildComponent extends React.Component{



    render() {

        console.log(this.props)

        return(
            <div>
                <h1>
                    Child
                </h1>
                <button onClick={this.props.buttonClicked}>Submit</button>
            </div>
        )
    }
}

export default ChildComponent