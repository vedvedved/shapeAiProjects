import React from 'react'; 

class ClassComponent extends React.Component{
    constructor (props) {
        super (props);
        this.state={
            count : 0,
            link : 2,
        };
    }

    componentDidMount(){
        console.log("Component Mounted");
    }

    componentDidUpdate(){
        console.log("Component did update");
    }

    render(){
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button 
                     onClick = {() =>
                         this.setState({
                             count: this.state.count + 1,
                         })
                    }
                >
                    +1
                </button>
            </div>
        ); 
    }

}

export default ClassComponent;