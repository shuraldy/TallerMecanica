import React, { Component } from 'react';
import { Link, } from 'react-router-dom';
import Divider from './Divider';

class RegisterModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            password2: '',
            see: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSee = this.handleSee.bind(this);
    }

    handleChange({target}) {
        this.setState({
            [target.name]: target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    
        // Perform registration of user data
    }

    handleSee() {
        this.setState({ see: !this.state.see });
    }


    render() {

        const properties = this.props;

        return (
            <div className="container-fluid">
                <div className="row vertical-center">
                    <div className="col-xs-12 col-md-10 col-lg-7 col-xl-5 mt-5 pt-5 mx-auto">

                        <div className="modal-content p-4">
                            <div className="modal-header">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-10">
                                            <h5 className="title">Regístrate</h5>
                                        </div>
                                        <div className="col-2">
                                            <button className="close" onClick={() => properties.closeModalRegister()} >&times;</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-body">

                                    <div className="row my-3">
                                        <div className="col">
                                            <div className="icon-login vertical-center ml-auto">
                                            <i class="fab fa-google"></i>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="icon-login vertical-center mr-auto">
                                            <i class="fab fa-facebook"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <Divider attr="main-color mb-3"/>

                                <form className="newsletterForm" onSubmit={this.handleSubmit}>
                                    <div className="input-contenedor">
                                        <div className="row">
                                            <div className="col-2">
                                                <i className="fas fa-envelope icon"></i>
                                            </div>
                                            <div className="col">
                                                <input type="email"
                                                    name="email"
                                                    value={this.state.email}
                                                    onChange={this.handleChange}
                                                    placeholder="Correo electrónico"
                                                    autoComplete='off'
                                                    required />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="input-contenedor">
                                        <div className="row">
                                            <div className="col-2">
                                                <i className="fas fa-key icon"></i>
                                            </div>
                                            <div className="col">
                                                <input type={!this.state.see ? "password" : "text"}
                                                    onChange={this.handleChange}
                                                    name="password"
                                                    value={this.state.password}
                                                    placeholder="Contraseña"
                                                    autoComplete='off'
                                                    required />
                                            </div>
                                            <div className="col-2 vertical-center">
                                                <i className="fas fa-eye d-block mx-auto"
                                                    onClick={this.handleSee.bind(this)}
                                                    style={this.state.see ? { color: 'var(--main-color)' } : { color: 'var(--color-0)' }}>
                                                </i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="input-contenedor">
                                        <div className="row">
                                            <div className="col-2">
                                                <i className="fas fa-chevron-right icon"></i>
                                            </div>
                                            <div className="col">
                                                <input type={!this.state.see ? "password" : "text"}
                                                    onChange={this.handleChange}
                                                    name="password2"
                                                    value={this.state.password2}
                                                    placeholder="Confirmar contraseña"
                                                    autoComplete='off'
                                                    required />
                                            </div>
                                        </div>
                                    </div>

                                    <p>¿Ya tienes una cuenta?<Link to="#" onClick={() => properties.openOther()} className="link1" data-toggle="modal"> Inicia Sesión</Link></p>
                                    <input type="submit" value="¡Empecemos!" className="guardarBtn" />

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterModal;
