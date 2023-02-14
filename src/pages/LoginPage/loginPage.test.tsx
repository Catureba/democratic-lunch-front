import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginPage from '.';
import '@testing-library/jest-dom/extend-expect';
import { AxiosResponse } from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';

describe("Página de Login", () =>{
    test('Deve exibir o formulário de login',()=>{
        render(
            <Router>
                <LoginPage/>
            </Router>
        );  
        
        const textEmail = screen.getByPlaceholderText('Email');
        const textPassword = screen.getByPlaceholderText('Senha');

        expect(textEmail).toBeInTheDocument();
        expect(textPassword).toBeInTheDocument();

    });
    test('Deve exibir o botão de login',()=>{
        render(
            <Router>
                <LoginPage/>
            </Router>
        );
        
        const buttonLogin = screen.getByRole('button', {
            name: "Login"
        })

        expect(buttonLogin).toBeInTheDocument();



    });
    test('Deve exibir o botão de cadastrar novo usuário',()=>{
        render(
            <Router>
                <LoginPage/>
            </Router>
        );
        const buttonSignUp = screen.getByRole('button',{
            name: "Cadastrar"
        });

        expect(buttonSignUp).toBeInTheDocument();

    });
    
});