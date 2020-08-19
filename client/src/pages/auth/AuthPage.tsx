import React, {useEffect, useState} from "react";
import './authPage.scss'
import {useHttp} from "../../services/http.service";
import {useMessage} from "../../services/message.service";
import {useApiAuth} from "../../services/auth/api.service";
import {MaterialService} from "../../services/material.service";
import { useHistory } from "react-router-dom";
import {AuthorizationForm} from "../../container/Authorization/AuthorizationForm";

export const AuthPage = (props: any) => {
    const message = useMessage()
    const history = useHistory();
    // const {loading, error, request, clearError} = useHttp()
    const {loginUser} = useApiAuth()
    const [form, setForm] = useState({
        email: 'val@gmail.com', password: '1q2w3e4r'
    })
    const {login = false, register= false} = props

    const changeHandler = (event: { target: { name: any; value: any; }; }) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    // useEffect(() => {
    //     if (error) {
    //         message(error)
    //         clearError()
    //     }
    // }, [error, message, clearError])
    //
    const loginHandler = () => {

        //Вернуть промис чтобы сдлеать рдирект или какие либо действия
        loginUser(form).then(
            () => {
                MaterialService.toastMaterial('Авторизация успешна')
                console.log('Успех')
                history.push("/")
            }
        ).catch(
            () => {
                MaterialService.toastMaterial('Авторизация не удалась')
                console.log('Провал')
            }
        ).finally(
            () => {
                console.log('Закончил')
            }
        )
    }

    return(
        // <div>
        //     <AuthorizationForm form={login ? 'login' : 'signUp'}></AuthorizationForm>
        // </div>
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Тесты</h1>
                <div className="card blue darken-1 card__auth">
                    <div className="card-content white-text card__auth-content">
                        <span className="card-title">Авторизация</span>
                        <div>
                            <div className="input-field">
                                <input
                                    placeholder="Введите E-mail"
                                    id="email"
                                    name="email"
                                    type="text"
                                    value={form.email}
                                    className="validate yellow-input"
                                    onChange={changeHandler}
                                />
                                    <label htmlFor="first_name">E-mail</label>
                            </div>

                            <div className="input-field">
                                <input
                                    placeholder="Введите пароль"
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={form.password}
                                    className="validate yellow-input"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="first_name">Пароль</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action card__auth-action">
                        <button
                            className="btn yellow darken-4 card__auth-action-login"
                            onClick={loginHandler}
                            // disabled={loading}
                        >Войти</button>
                        <button
                            // disabled={loading}
                            className="btn grey lighten-1 darken-4 card__auth-register"
                        >Регистрация</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
