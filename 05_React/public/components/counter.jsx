class Counter extends  React.Component {
    constructor(props) {
        super(props);
        console.log("Процес конструирования компонента");
        this.state = {
            counter: this.props.startCount
        };
    }
add(){
    this.setState({counter: ++this.state.counter});
}
    render (){
        console.log("counter: " + this.state.counter)
        return(
            <div>
                <p> вы нажали {this.state.counter} раз </p>
                <button onClick={this.add.bind(this)}> press </button>
            </div>
        )
    }

}