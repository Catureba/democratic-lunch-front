import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from ".";
import '@testing-library/jest-dom/extend-expect';
import { AxiosResponse } from 'axios';

describe("Footer", () =>{
    test('Deve existir um pequena descrição no footer', () => {
        render(<Footer />);
    
        const textoDescricao = screen.getByText(
            'Vote em seu restaurante preferido',
        );
        expect(textoDescricao).toBeInTheDocument();
        });
    test('Deve exibir o nome da aplicação no footer', () => {
        render(<Footer />);
    
        const nomeApi = screen.getByText(
            'Democratic Lunch',
        );
        expect(nomeApi).toBeInTheDocument();
        });
});