import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '.';
import '@testing-library/jest-dom/extend-expect';
import { AxiosResponse } from 'axios';

describe("Página Home", () =>{
    test('Deve existir um texto de boas vindas', () => {
    render(<Home />);

    const textoBoasVindas = screen.getByText(
        'Não encontrou seu restaurante preferido?',
    );
    expect(textoBoasVindas).toBeInTheDocument();
    });
});