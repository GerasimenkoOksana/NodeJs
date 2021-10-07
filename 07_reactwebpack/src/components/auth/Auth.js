import React from "react";

export default class Auth extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isRegister: false,
            isLogin: false,
            error: null,
            user: {
                name: String,
                email: String,
                password :String,
                phone: String,
                avatar: String,
                roles: []
            }
        };
    }

    renderLoginForm(){
        return (           <div>
            <form className="form-horizontal">
                <fieldset>
                    <div id="legend">
                        <legend className="">Login</legend>
                    </div>

                    <div className="control-group">
                        <label className="control-label" htmlFor="email">E-mail</label>
                        <div className="controls">
                            <input onChange={this.onChange.bind(this)}  type="text" id="email" name="email" placeholder="" className="input-xlarge" />
                            <p className="help-block">Please provide your E-mail</p>
                        </div>
                    </div>

                    <div className="control-group">
                        <label className="control-label" htmlFor="password">Password</label>
                        <div className="controls">
                            <input onChange={this.onChange.bind(this)}  type="password" id="password" name="password" placeholder=""
                                   className="input-xlarge" />
                            <p className="help-block">Password should be at least 4 characters</p>
                        </div>
                    </div>

                    <div className="control-group">
                        <div className="controls">
                            <button className="btn btn-success" type="button" onClick={this.tryLogin.bind(this)}>Login</button>
                            <button className="btn btn-primary" type="button" onClick={this.OpenRegisterForm.bind(this)} >Register</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>);
    }

    OpenRegisterForm() {this.setState({isRegister:true})}
    OpenLoginForm() {this.setState({isRegister:false})}

    onChange(el){
        // тут формируется оперативная реакция системы на ввод пользователя
        const user = this.state.user;
        user[el.target.name]= el.target.value;
        this.setState({user: user});
    }

    tryReg(){
        fetch(
            "http://localhost:3030/api/auth/register",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(this.state.user)
            }
        )
            .then(response => {
                if (response.status !== 200) {
                    console.log(response.status);
                    console.log(response.statusText);
                }
                return response.json();
            })
            .then(json => {
                console.log(json);
            })
            .catch(err => {
                console.log(err);
            })
    }

    tryLogin(){

    }


    renderRegisterForm(){
        return (
            <div>
                <form className="form-horizontal">
                    <fieldset>
                        <div id="legend">
                            <legend className="">Register</legend>
                        </div>
                        <div className="control-group">
                            <label className="control-label" htmlFor="name">Username</label>
                            <div className="controls">
                                <input onChange={this.onChange.bind(this)} type="text" id="name" name="name" placeholder=""  className="input-xlarge" />
                                <p className="help-block">Username can contain any letters or numbers, without
                                    spaces</p>
                            </div>
                        </div>

                        <div className="control-group">
                            <label className="control-label" htmlFor="email">E-mail</label>
                            <div className="controls">
                                <input onChange={this.onChange.bind(this)}  type="text" id="email" name="email" placeholder="" className="input-xlarge" />
                                <p className="help-block">Please provide your E-mail</p>
                            </div>
                        </div>

                        <div className="control-group">
                            <label className="control-label" htmlFor="password">Password</label>
                            <div className="controls">
                                <input onChange={this.onChange.bind(this)}  type="password" id="password" name="password" placeholder=""
                                       className="input-xlarge" />
                                <p className="help-block">Password should be at least 4 characters</p>
                            </div>
                        </div>

                        <div className="control-group">
                            <label className="control-label" htmlFor="password_confirm">Password (Confirm)</label>
                            <div className="controls">
                                <input onChange={this.onChange.bind(this)}  type="password" id="password_confirm" name="password_confirm" placeholder=""
                                       className="input-xlarge" />
                                <p className="help-block">Please confirm password</p>
                            </div>
                        </div>

                        <div className="control-group">
                            <div className="controls">
                                <button className="btn btn-success" type="button" onClick={this.OpenLoginForm.bind(this)}>Login</button>
                                <button className="btn btn-primary" type="button" onClick={this.tryReg.bind(this)}>Register</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }

    renderError(){
        return (<div> Ошибка </div>);
    }

    renderLogout(){
        return (<div> Выход </div>);
    }

    render() {
        if(this.state.error) {return this.renderError();};
        if(this.state.isRegister) {return this.renderRegisterForm();};
        if(this.state.isLogin) {return this.renderLogout();};
        return this.renderLoginForm();
    }
}