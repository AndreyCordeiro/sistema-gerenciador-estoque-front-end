import React from "react";
import './autenticacao.css';

export class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <form>
                <div className="main">
                    <h1 className="label-sistema">Sistema Gerenciador de Estoque</h1>
                    <div className="input-field">
                        <input type="text" id="email" required/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field">
                        <input type="password" id="senha" required/>
                        <label htmlFor="senha">Senha</label>
                    </div>
                    <div className="row">
                        <div className="botao-fazer-login">
                            <button type="submit">
                                <span className="material-symbols-outlined"/>
                                Entrar
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}