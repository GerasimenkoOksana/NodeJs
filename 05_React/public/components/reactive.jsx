class Reactive extends  React.Component{

    constructor(props) {
        super(props); // props - неизменные данные для компонента
        console.log("Процес конструирования компонента");
        this.state = {    //state - динамические данные для компонента
            items: []    //создаем пустую коллекцию элемнтов
        };
    }

    add(){
        this.state.items.push(" new element"); //происходят операции
        this.setState({});  //вызывает обновление состояния компонента
    }


    render(){
        console.log("Процес отрисовки компонента");
        let key = 1;
        return (
            <div>
                <h1> Hello Component </h1>
                <CheckInput/>
                <Counter startCount="45"></Counter>
                <ul>
                    {
                       // this.state - динамическое хранилище
                        //items - моя коллекция
                        //map(el => {el}) - аналог foreach перебор элементов
                        this.state.items.map( item =>
                        <li key = {key++}> {item} </li>
                        )
                    }
                </ul>
                {
                    //this - обязятельно если я обьращаюсь к компоненту
                    // имя метода без скобочек
                    //bind(this) - подвязка метода к себу (к компоненту)
                }
                <button onClick={this.add.bind(this)}>add</button>
            </div>
        );
    }



}