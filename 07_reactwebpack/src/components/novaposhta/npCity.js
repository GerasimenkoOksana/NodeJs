import React from "react";
import NpAjax from "./npAjax";
import NpDepartment from "./npDepartament";

export default class NpCity extends React.Component {
    constructor(props) {
        // this.props.activeArea_id   текущая область
        super(props);
        this.state = {
            isLoaded: true,
            isEdit: false,
            error: null,
            items: [],
            activeCity_id: 0 //текущий город
        };
    }

    Get(){
        NpAjax.Get("Address", "getCities", {},
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
    ChangeActiveCity(e){
        let val = e.target.value;
        console.log("city_id: " + val);
        this.setState({activeCity_id:val});

    }
    render(){
        if(this.state.error) return this.renderError();
        if(!this.state.isLoaded) return this.renderLoading();
        return this.renderData();
    }

    renderData(){
        let showDep = this.state.activeCity_id !==0 && this.state.activeCity_id !== "0";
        return (
            <div className="np">
            <select  className="btn btn-secondary" onChange={this.ChangeActiveCity.bind(this)} value={this.state.activeCity_id}>
                <option  key="newCity">choose city</option>
                {
                    this.state.items.map(item => {
                        if (item.Area === this.props.activeArea_id) return  <option key = {item.Ref} value = {item.Ref}> {item.DescriptionRu}</option>
                    })
                }
            </select>
            { showDep && <NpDepartment activeCity_id={this.state.activeCity_id}/>}
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