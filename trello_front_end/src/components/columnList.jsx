import React from "react";
import ColumnItem from "./columnItem";
export default class ColumnList extends React.Component {

    constructor(props) {
        super(props);
        //this.props.board_id .. номер доски
        this.state = {
            isLoaded: false,
            error: null,
            items: [],
        };
    }


    componentDidMount() {
        this.Read();
    }

    Create(item){
        item.board_id = this.props.board_id;
        fetch("http://localhost:3030/api/column",
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
        fetch("http://localhost:3030/api/column/" + this.props.board_id) // Читать только колонки с открытой доски
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
        item.board_id = this.props.board_id;
        fetch("http://localhost:3030/api/column",
            {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(item)
            })
            .then(response => response.json())
            .then(item => {
                const items = this.state.items;
                items[items.indexOf(el=> el._id === item._id)] = item;
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
        fetch("http://localhost:3030/api/column",
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
        return (
            <div>
                {
                    this.state.items.map( column =>
                        <ColumnItem
                            update={this.Update.bind(this)}
                            delete={this.Delete.bind(this)}
                            key={'columnItemEl_' + column._id} item={column}></ColumnItem>
                    )
                }
                <ColumnItem create={this.Create.bind(this)} key={"newColumnElement"} item={null}></ColumnItem>
            </div>
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