class BoardList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
            items: [],
            activeBoard_Id: 0 // текущая открытая доска
        };
    }

    changeActive(id){
        this.setState({activeBoard_Id: id});
    }

    componentDidMount() {
        this.Read();
    }

    Create(item){
        fetch("/api/board",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(item)
            })
            .then(response => response.json())
            .then(item => {
                const items = this.state.items;
                items.push(item);
                this.setState({
                    isLoaded: true,
                    items: items
                });
            })
            .catch(err=> {this.setState ({error: err})});
    }

    Read (){
        console.log("Start get data:");
        fetch("/api/board")
            .then(response => response.json())
            .then(data => {
                console.log("getData:");
                console.log(data);
                this.setState({
                    isLoaded: true,
                    items: data
                });
            })
            .catch(err=> {this.setState ({error: err})});
    }

    Update(item) {
        console.log(item);
        fetch("/api/board",
            {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(item)
            })
            .then(response => response.json())
            .then(item => {
                const items = this.state.items;
                items[items.indexOf(el=> el._id == item._id)] = item;
                //items.push(item);
                this.setState({
                    isLoaded: true,
                    items: items
                });
            })
            .catch(err=> {this.setState ({error: err})});
    }

    Delete(item) {
        const items = this.state.items;
        console.log("Delete");
        console.log(item);
        items.splice(items.indexOf(item),1)
        this.setState({
            isLoaded: true,
            items: items
        });
        fetch("/api/board",
            {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(item)
            })
            .then(response => {})
            .then(item => {})
            .catch(err=> {this.setState ({error: err})});

    }

    render(){
        if(this.state.error) return this.renderError(); // Если ошибка - вывожу ее
        if(!this.state.isLoaded) return this.renderLoading(); // Загружаюсь
        return this.renderData();
    }

    // Вывод основного состояния компонента
    renderData(){
        let columnList = (<div>Выберете доску в меню</div>);
        if (this.state.activeBoard_Id != 0)
        {
            columnList = (
                <div><ColumnList
                    board_id={this.state.activeBoard_Id}
                    key={'boardAciveEl_' + this.state.activeBoard_Id} />
                </div>
                );
        }
        return (
            <section className="container">
                <header className="row">
                    {
                        this.state.items.map( board =>
                            <BoardHeaderItem
                                update={this.Update.bind(this)}
                                delete={this.Delete.bind(this)}
                                changeActive = {this.changeActive.bind(this)}
                                key={'boardHeaderEl_' + board._id} item={board}></BoardHeaderItem>
                        )
                    }
                    <BoardHeaderItem create={this.Create.bind(this)} key={"newBoardElement"} item={null}></BoardHeaderItem>
                </header>
                    {columnList}
            </section>
        );
    }

    // Компонент в состоянии загрузки
    renderLoading(){
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only"> </span>
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