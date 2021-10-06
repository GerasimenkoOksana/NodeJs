import React from "react";
import NpAjax from "./npAjax";
import NpCity from "./npCity";

export default class NpArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: true,
            isEdit: false,
            error: null,
            items: [],
            activeArea_id: 0 //текущая область
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
 ChangeActiveArea(e){

        let val = e.target.value;
        console.log("area_id: " + val);
        this.setState({activeArea_id:val});
 }
    render(){
        if(this.state.error) return this.renderError();
        if(!this.state.isLoaded) return this.renderLoading();
        return this.renderData();
    }

    renderData(){
        let showCity = this.state.activeArea_id !==0 && this.state.activeArea_id !== "0";
        return (
            <div className="np">
                <select  className="btn btn-secondary np" onChange={this.ChangeActiveArea.bind(this)} value={this.state.activeArea_id}>
                    <option  key="newArea" value="0">choose area</option>
                    {
                        this.state.items.map(item =>
                            <option key = {item.Ref} value = {item.Ref}> {item.DescriptionRu}</option>
                        )
                    }
                </select>

                { showCity && <NpCity activeArea_id={this.state.activeArea_id}/>}
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