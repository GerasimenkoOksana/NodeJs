class EntityList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
            items: []
        };
    }

    componentDidMount() {
    fetch("api/entities")
        .then(res => res.json())
        .then(data => {
            console.log("data:");
            console.log(data);
            this.setState({isLoaded:true, items: data})
        })
        .catch(err => { this.setState({error:err})})
    }
    onChange (element){
        this.state[element.target.name] = element.target.value;
    }
    render(){
        if(this.state.error) return this.renderError(); // Если ошибка - вывожу ее
        if(!this.state.isLoaded) return this.renderLoading(); // Загружаюсь
        return this.renderData();
    }

    // Вывод основного состояния компонента
    renderData(){
        let key = 1;
        return (
            <div>
                <div className="container">
                    <div className="row">
                        {
                            this.state.items.map(entity =>
                                <EntityItem item={entity}></EntityItem>
                            )
                        }
                        <EntityItem key = {"newElement"} entity={null}></EntityItem>
                    </div>
                </div>
            </div>
        );
    }

    // Компонент в состоянии загрузки
    renderLoading(){
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }

    // Отображение компонента в состоянии ошибки
    renderError(){
        return (
            <div className="alert alert-danger" role="alert">
                Error: {this.state.error.message}
            </div>
        );
    }


}