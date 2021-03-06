class ApiPrivatExchange extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
            items: []
        };
    }


    componentDidMount() { //
        fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
            .then(res => {return res.json()})
            .then(data => {
                this.setState({
                    isLoaded: true,
                    items: data
                })
            })
            .catch(err => {
                this.setState({error: err})
            })
    }


    render(){
        console.log("Render");
        if(this.state.error) return this.renderError(); // Если ошибка - вывожу ее
        if(!this.state.isLoaded) return this.renderLoading(); // Загружаюсь
        return this.renderData();
    }
//{"ccy":"USD","base_ccy":"UAH","buy":"26.45000","sale":"26.85000"}
    // Вывод основного состояния компонента
    renderData(){
        let key = 1;
        return (
            <table>
                {
                    this.state.items.map(
                        row => (
                            <tr key = {key++}>
                                <td>
                                    {row.ccy}
                                </td>
                                <td>
                                    {row.base_ccy}
                                </td>
                                <td>
                                    {row.buy}
                                </td>
                                <td>
                                    {row.sale}
                                </td>
                            </tr>
                        )
                    )
                }
            </table>
        );
    }

    // Компонент в состоянии загрузки
    renderLoading(){
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
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