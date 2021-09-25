class CheckInput extends  React.Component {
    constructor(props) {
        super(props);
        console.log("Процес конструирования компонента");
        this.state = {
            isCanSend: false,
            userText: ""
        };
    }

    onChange(element) {

        if (element.target.value.length >2){
            this.setState({isCanSend: true})
        }else {this.setState({isCanSend: false})}
    }
    render (){
        console.log("counter: " + this.state.counter)
        return(
            <div>
                <input type="text" name="userText" onChange={this.onChange.bind(this)}/>
                <div>{this.state.userText}</div>
                <input type="button" disabled={!this.state.isCanSend} value="Send"/>
            </div>
        )
    }

}