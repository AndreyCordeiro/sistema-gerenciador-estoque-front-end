import React from "react";
import './autenticacao.css';

export class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="main">
                <h1 className="label-entrar">Sistema Gerenciador de Estoque</h1>
                <div className="row">
                    <h4 className="label-email">Email</h4>
                    <input type="email" required placeholder="Informe seu Email"/>
                </div>
                <div className="row">
                    <h4 className="label-senha">Senha</h4>
                    <input type="password" required placeholder="Informe sua Senha"/>
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
        );
    }
}