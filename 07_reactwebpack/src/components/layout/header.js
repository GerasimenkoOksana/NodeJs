import React from "react";
import {Link} from "react-router-dom";


export  default  class Header extends React.Component{
    render(){
        return(
            <nav>
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/np">Nova Poshta</Link></li>

                    {/*неправильный подход при наличии компонентов
                    <li> <a href ="/np">Nova Poshta перегрузка страницы</a></li>*/ }
                </ul>
            </nav>
        )
    }
}
