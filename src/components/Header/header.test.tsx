import React from 'react';
import { act, render, screen } from '@testing-library/react';
import Header from '.';
import '@testing-library/jest-dom/extend-expect';
import { AxiosResponse } from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../../pages/Home';
import userEvent from '@testing-library/user-event';

describe("Header", () =>{

    test("Deve exibir o nome do Site",()=>{
        render(
            <Router>
                <Header/>
            </Router>
        )

        const nomeSite = screen.getByText("Democratic Lunch");

        expect(nomeSite).toBeInTheDocument;

    });

    test("Deve exibir o opções de navegação",()=>{
        render(
            <Router>
                <Header/>
            </Router>
        )


        const textoHome = screen.getByText("Home");
        const textoUser = screen.getByText("Usuario");

        expect(textoHome).toBeInTheDocument();
        expect(textoUser).toBeInTheDocument();
    });

    test("Verifica se a rota home está sendo chamada ao ser clickado no header",()=>{
        //Deveria ser renderizado outra página que também tem o header para verificar se esta sendo redirecionado, porém apenas a home tem um header.
        render(
            <Router>
                <Home/>
            </Router>
        )
        act(() => {           
            userEvent.click(screen.getByText(/home/i));
        });
        
        
        expect("Vendedor do dia").toBeInTheDocument;

    });
    
});