class Parent extends React.Component {

    constructor(props) {
        super(props);
        console.log("Parent - constructor")
        this.state = {
            isShowChildren: false,
            isLoaded: false,
            error: null,
            items: []
        };
    }

    componentDidMount() {
        console.log("Parent - componentDidMount")
    }

    componentWillUnmount() {
        console.log("Parent - componentWillUnmount")
    }

    componentDidUpdate() {
        console.log("Parent - componentDidUpdate")
    }

    toggleShowChildren() {
        let old = this.state.isShowChildren;
        this.setState({isShowChildren: !old});
    }

    onChange(element) {
        this.state[element.target.name] = element.target.value;
    }

    render_2var() {
        console.log("Parent - render")
        // 1-вариант - гаписать ввобще свой рендер и возвращать его
        /*if(this.state.error) return this.renderError(); // Если ошибка - вывожу ее
        if(!this.state.isLoaded) return this.renderLoading(); // Загружаюсь
        return this.renderData();*/

        //2 вариант = загрузить в переменную
        let children = "";
        if (this.state.isShowChildren)
            children = <Children></Children>;
        //children.метод  - вызвать в родителе метод children
        return (
            <div>
                <h1>Parent</h1>
                <div className="form-check form-switch">
                    <input className="form-check-input"
                           checked={this.state.isShowChildren}
                           type="checkbox"
                           id="flexSwitchCheckDefault"
                           onChange={this.toggleShowChildren.bind(this)}/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Show children</label>
                </div>
                {children}
            </div>
        )
    }

    /* Простой рендер
     render(){
          console.log("Parent - render")

          return (
              <div>
                  <h1>Parent</h1>
                  <div className="form-check form-switch">
                      <input className="form-check-input"
                             checked={this.state.isShowChildren}
                             type="checkbox"
                             id="flexSwitchCheckDefault"
                             onChange={this.toggleShowChildren.bind(this)}/>
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Show children</label>
                  </div>
                  <Children></Children>
              </div>
          )
      }*/

//3 вариант - выполнение кода прямо в return
    render() {
        console.log("Parent - render")

        return (
            <div>
                <h1>Parent</h1>
                <div className="form-check form-switch">
                    <input className="form-check-input"
                           checked={this.state.isShowChildren}
                           type="checkbox"
                           id="flexSwitchCheckDefault"
                           onChange={this.toggleShowChildren.bind(this)}/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Show children</label>
                </div>
                {
                    this.state.isShowChildren && <Children
                        someVar={"some value"}
                        actionChange={this.toggleShowChildren.bind(this)}
                        isShowChildren={this.state.isShowChildren}></Children>
                }
                {
                    this.state.isShowChildren ? "показать" : "спрятать"
                }

            </div>
        )
    }


    // Вывод основного состояния компонента
    renderData() {
        let key = 1;
        return (
            <div>

            </div>
        );
    }

    // Компонент в состоянии загрузки
    renderLoading() {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }

    // Отображение компонента в состоянии ошибки
    renderError() {
        return (
            <div className="alert alert-danger" role="alert">
                Error: {this.state.error.message}
            </div>
        );
    }


}