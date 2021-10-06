class EntityList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
            items: []
        };
    }

    onChange (element){
        this.state[element.target.name] = element.target.value;
    }

    componentDidMount() {
       this.Read();
    }
    Create(item){
        console.log(item);
        fetch("api/entities",
        {
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(item => {
                const items = this.state.items;
                items.push(item);
                this.setState({isLoaded: true, items: items});
            })
            .catch(err => console.log(err))

    }
    Read(){
        console.log("Start get data:");
        fetch("/api/entities")
            .then(response => response.json())
            .then(data => {
                console.log("getData:");
                console.log(data);
                this.setState({
                    isLoaded: true,
                    items: data
                });
            })
            .catch(err=> {this.setState({error: err})});
    }
    Update(item){
        console.log(item);
        fetch("api/entities",
            {
                method:"PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(item)
            })
            .then(res => res.json())
            .then(item => {
                const items = this.state.items;
                items[items.indexOf(el => el._id==items._id)] =item;
                this.setState({isLoaded: true, items: items});
            })
            .catch(err => console.log(err))
    }
    Delete(item){
        const items = this.state.items;
        items.splice(items.indexOf(el => el._id == item._id), 1);
        this.setState({isLoaded:true, items: items});
        fetch("api/entities",
            {
                method:"DELETE",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(item)
            })
        .then(res => {})
        .catch(err => console.log(err))
    }

    render(){
        if(this.state.error) return this.renderError(); // Если ошибка - вывожу ее
        if(!this.state.isLoaded) return this.renderLoading(); // Загружаюсь
        return this.renderData();
    }

    // Вывод основного состояния компонента
    renderData(){
        return (
            <div className="container">
                <div className="row">
                    {
                        this.state.items.map( entity =>
                            <EntityItem update={this.Update.bind(this)} delete={this.Delete.bind(this)}  key={entity._id} item={entity}></EntityItem>
                        )
                    }
                    <EntityItem create={this.Create.bind(this)} key={"newElement"} item={null}></EntityItem>
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