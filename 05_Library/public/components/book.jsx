class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: true,
            isEdit: false,
            isDetails: false,
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
openDetailsForm(){
    this.setState({isDetails: true});

}
    cancelDetailsForm(){
        this.setState({isDetails: false});
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
addImage(){

    this.setState({
        isEdit:true})
}


    render(){
        if(this.state.error) return this.renderError();
        if(this.state.item == null) return this.renderNewElement();
        if(this.state.isEdit) return this.renderForm();
        if (this.state.isDetails) return this.renderDetailsForm();
        return this.renderData();
    }
    renderNewElement(){
        return (
            <div key="CreateNewElement">
                <input type="button" className="btn btn-secondary"  value="Сreate New Book" onClick={this.openEditForm.bind(this)}/>
            </div>
        );
    }
    renderDetailsForm(){
        return (
            <div className="card cardBook" key="CreateNewElement">
                <div className="card-body card-text1">
                    <input name="_id" type="hidden" value={this.state.item._id}/>
                    <textarea className="textareaTitle" name="author" type="text" readOnly value={this.state.item.author} onChange={this.onChange.bind(this)}/><br/>
                    <textarea className="textareaTitle" name="title" type="text" readOnly value={this.state.item.title} onChange={this.onChange.bind(this)}/><br/>
                    <textarea className="textareaDes" name="description" type="text" readOnly value={this.state.item.description} onChange={this.onChange.bind(this)}/><br/>
                    <input type="button" value="Cancel" onClick={this.cancelDetailsForm.bind(this)}/>
                </div>
            </div>
        )
    }
    renderForm(){
        return (
            <div className="card cardBook" key="CreateNewElement">
                <div className="card-body card-text1">
                    <input name="_id" type="hidden" value={this.state.item._id}/>
                    <textarea className="textareaTitle" name="author" type="text" placeholder="author" value={this.state.item.author} onChange={this.onChange.bind(this)}/><br/>
                    <textarea className="textareaTitle" name="title" type="text" placeholder="title" value={this.state.item.title} onChange={this.onChange.bind(this)}/><br/>
                    <textarea className="textareaDes" name="description" type="text" placeholder="description" value={this.state.item.description} onChange={this.onChange.bind(this)}/><br/>
                    <input type="file" id="fileData" name="fileData" onClick={this.addImage.bind(this)}/>
                    <input type="button" value="Cancel" onClick={this.cancelEditForm.bind(this)}/>
                    <input type="button" value="Save" onClick={this.saveEditForm.bind(this)}/>
                </div>
            </div>
        )
    }

    // Вывод основного состояния компонента
    renderData(){
        console.log(this.state.item);
        return (
            <div className="card cardBook" key={this.state.item._id}>
                <img src="" className="card-img-top imgBook" alt="тут будет фото обложки"/>
                    <div className="card-body">
                        <h6 className="card-title">{this.state.item.author}</h6>
                        <h5 className="card-title">{this.state.item.title}</h5>

                        <div className="btnBook">
                            <button className="btn btn-primary btnBookItem" name="btnDetails" onClick={this.openDetailsForm.bind(this)}>Details</button>
                            <input className="btn btn-primary btnBookItem" type="button" value="edit" onClick={this.openEditForm.bind(this)}/>
                            <input className="btn btn-primary btnBookItem" type="button" value="delete" onClick={this.delete.bind(this)} />
                        </div>

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


