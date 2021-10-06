class EntityItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: true,
            isEdit: false,
            error: null,
            item: props.item
        };
    }

    onChange (element){
        const item = this.state.item;
        item[element.target.name] = element.target.value;
        this.setState({item:item})
    }

    componentDidMount() {

    }
    openEditForm(){
        this.oldItem = JSON.stringify(this.state.item);
        if(this.state.item == null) {
            this.state.item = new Object();
            this.state.item.name="";
        }
        this.setState({isEdit: true});
    }

    cancelEditForm(){
        this.setState({
            isEdit:false,
            item:JSON.parse(this.oldItem)});
    }
    saveEditForm(){
        if (this.props.create) {
            this.props.create(this.state.item);
            this.state.item=null;
        }
        else  this.props.update(this.state.item);
        this.setState({
            isEdit:false
        });
        delete this.oldItem;
    }
    delete(){
        this.props.delete(this.props.item);
    }
    render(){
        if(this.state.error) return this.renderError(); // Если ошибка - вывожу ее
        // if(!this.state.isLoaded) return this.renderLoading(); // Загружаюсь
        if(this.state.isEdit) return this.renderForm();
        if(this.state.item == null) return this.renderNewElement();
        return this.renderData();
    }

    renderForm(){
        return (
            <div className="card col-3" key="CreateNewElement">
                <div className="card-body">
                    <input name="_id" type="hidden" value={this.state.item._id}/>
                    <input name="name" type="text" value={this.state.item.name} onChange={this.onChange.bind(this)}/><br/>

                    <input type="button" value="Cancel" onClick={this.cancelEditForm.bind(this)}/>
                    <input type="button" value="Save" onClick={this.saveEditForm.bind(this)}/>
                </div>
            </div>
        )
    }


    // Предложить созать форму
    renderNewElement(){
        return (
            <div className="card col-3" key="CreateNewElement">
                <div className="card-body" onClick={this.openEditForm.bind(this)}>
                    Создать
                </div>
            </div>
        );
    }

    // Вывод основного состояния компонента
    renderData(){
        return (
            <div className="card col-3" key={this.state.item._id}>
                <div className="card-body">
                    {this.state.item.name}
                    <input type="button" value="edit" onClick={this.openEditForm.bind(this)}/>
                    <input type="button" value="de" onClick={this.delete.bind(this)}/>
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