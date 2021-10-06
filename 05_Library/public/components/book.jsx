class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: true,
            isEdit: false,
            error: null,
            item: props.item
        }
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
            this.state.item.title="";
            this.state.item.author="";
            this.state.item.description="";
            this.state.item.year=0;
            this.state.item.publisher="";
            this.state.item.cntPages="";
            this.state.item.photo="";
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
        this.setState({isEdit:false });
        delete this.oldItem;
    }

    delete(){
        this.props.delete(this.props.item);
    }

    render(){
        if(this.state.error) return this.renderError();
        if(this.state.item == null) return this.renderNewElement();
        if(this.state.isEdit) return this.renderForm();
        return this.renderData();
    }
    renderNewElement(){
        return (
            <div key="CreateNewElement">
                <input type="button" className="btn btn-secondary"  value="Сreate New Book" onClick={this.openEditForm.bind(this)}/>
            </div>
        );
    }
    renderForm(){
        return (
            <div className="card cardBook" key="CreateNewElement">
                <div className="card-body">
                    <input name="_id" type="hidden" value={this.state.item._id}/>
                    <input name="title" type="text" value={this.state.item.title} onChange={this.onChange.bind(this)}/><br/>
                    <input name="author" type="text" value={this.state.item.author} onChange={this.onChange.bind(this)}/><br/>
                    <input name="description" type="text" value={this.state.item.description} onChange={this.onChange.bind(this)}/><br/>

                    <input type="button" value="Cancel" onClick={this.cancelEditForm.bind(this)}/>
                    <input type="button" value="Save" onClick={this.saveEditForm.bind(this)}/>
                </div>
            </div>
        )
    }

    // Вывод основного состояния компонента
    renderData(){
        return (
            <div className="card cardBook" key={this.state.item._id}>
                <img src="" className="card-img-top" alt="тут будет фото обложки"/>
                    <div className="card-body">
                        <h6 className="card-title">{this.state.author}</h6>
                        <h5 className="card-title">{this.state.title}</h5>
                        <p className="card-text">{this.state.description}</p>
                        <button className="btn btn-primary" name="btnDetails">Details</button>
                        <input type="button" value="edit" onClick={this.openEditForm.bind(this)}/>
                        <input type="button" value="delete" onClick={this.delete.bind(this)} />
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


