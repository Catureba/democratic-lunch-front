import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '.';
import '@testing-library/jest-dom/extend-expect';
import {BrowserRouter as Router} from 'react-router-dom';


describe("Página Home", () =>{

    test('Deve exibit o vencedor do dia', () => {
    render(
        <Router>
            <Home />
        </Router>,
    );

    const textoBoasVindas = screen.getByText(
        'Vencedor do dia:'
    );
    expect(textoBoasVindas).toBeInTheDocument();
    });

    test('Deve exibir o formulário de cadastro para novo restaurante', () => {
        render(
            <Router>
                <Home />
            </Router>,
        );
    
        const formularioNome = screen.getByPlaceholderText(
            'Nome'
        );

        const formularioSite = screen.getByPlaceholderText(
            'Site'
        );

        const formularioDescricao = screen.getByPlaceholderText(
            'Descrição'
        );

        const formularioCEP = screen.getByPlaceholderText(
            'CEP'
        );

        expect(formularioNome).toBeInTheDocument();
        expect(formularioSite).toBeInTheDocument();
        expect(formularioDescricao).toBeInTheDocument();
        expect(formularioCEP).toBeInTheDocument();
    
    });

    test('Deve exibir botão de cadastrar restaurante', () => {
        render(
            <Router>
                <Home />
            </Router>,
        );
    
        const botao = screen.getByRole('button', {
            name: /cadastrar/i
          })
        expect(botao).toBeInTheDocument();
        });
});
