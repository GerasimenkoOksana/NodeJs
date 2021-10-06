import React from "react";
import NpAjax from "./npAjax";

export default class NpArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: true,
            isEdit: false,
            error: null,
            items: [],
            activeArea_id: 0 //текущее отделение новой почты
        };
    }

    Get(){
        NpAjax.Get("Address", "getAreas", {},
            function (items){
            this.setState({
                isLoaded: true,
                items: items })
            }.bind(this),
            function (err){
                this.setState({
                    isLoaded: false,
                    error: err })
            }.bind(this)
            )
    }

    componentDidMount() {
        this.Get();
    }

    render(){
        if(this.state.error) return this.renderError();
        if(!this.state.isLoaded) return this.renderLoading();
        return this.renderData();
    }

    renderData(){
        return (
            <ul>
                {
                    this.state.items.map(item =>
                        <                                                                                                                                                                                                                                                                                         li key = {item.Ref}> {item.DescriptionRu}</li>
                    )
                }
            </ul>
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