import React from "react";
import NpAjax from "./npAjax";

export default class NpDepartment extends React.Component {
    constructor(props) {
        // this.props.activeCity_id   текущий город
        super(props);
        this.state = {
            isLoaded: true,
            isEdit: false,
            error: null,
            items: [],
            activeDep_id: 0 //текущее отделение
        };
    }

    Get(){
        console.log("NPDep start, activeCity_id: " + this.props.activeCity_id)
        NpAjax.Get("Address", "getWarehouses", {"CityRef":this.props.activeCity_id},
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
    ChangeActiveDep(e){
        let val = e.target.value;
        console.log("department_id: " + val);
        this.setState({activeDep_id:val});

    }
    render(){
        if(this.state.error) return this.renderError();
        if(!this.state.isLoaded) return this.renderLoading();
        return this.renderData();
    }

    renderData(){
        return (
            <div className="np">
                <select  className="btn btn-secondary" onChange={this.ChangeActiveDep.bind(this)} value={this.state.activeDep_id}>
                    <option  key="newDep">choose department</option>
                    {
                        this.state.items.map(item =>
                            <option key = {item.Ref} value = {item.Ref}> {item.DescriptionRu}</option>)
                    }
                </select>

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