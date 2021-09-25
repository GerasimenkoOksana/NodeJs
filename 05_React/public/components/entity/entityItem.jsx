class EntityItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: true,
            error: null,
            item: props.item
        };
    }

    componentDidMount() {

    }
    onChange (element){
        this.state[element.target.name] = element.target.value;
    }

    renderNewElement(){
        return (
            <div className="card col-3" key={this.state.item._id}>
                <div className="card-body">
                    create new
                </div>
            </div>
        );
    }


    render(){
        if(this.state.error) return this.renderError(); // Если ошибка - вывожу ее
        //if(!this.state.isLoaded) return this.renderLoading(); // Загружаюсь
        if(this.state.item ==null) return this.renderNewElement();   //если элементов нет - предлодить создать
        return this.renderData();
    }

    // Вывод основного состояния компонента
    renderData(){

        return (
            <div className="card col-3" key={this.state.item._id}>
                <div className="card-body">
                    {this.state.item.name}
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