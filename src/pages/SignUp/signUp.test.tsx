import { render, screen } from '@testing-library/react';
import SignUp from '.';
import '@testing-library/jest-dom/extend-expect';
import {BrowserRouter as Router} from 'react-router-dom';


describe("Página de Cadastro", () =>{
    test('Verifica se o formulário de cadastro está sendo exibido',()=>{
        render(
            <Router>
                <SignUp />
            </Router>,
          );

        const textoNome = screen.getByPlaceholderText(
            'Nome',
        );

        const textoEmail = screen.getByPlaceholderText(
            'E-mail',
        );


        const textoSenha = screen.getByPlaceholderText(
            'Senha',
        );

        const textoSenhaNovamente = screen.getByPlaceholderText(
            'Senha',
        );
        
        expect(textoNome).toBeInTheDocument();
        expect(textoEmail).toBeInTheDocument();
        expect(textoSenha).toBeInTheDocument();
        expect(textoSenhaNovamente).toBeInTheDocument();

        });
    test('Verifica se o botão está sendo exibido',()=>{

    })
    test('Verifica se função de enviar o forumalário ',()=>{

    })

});
    