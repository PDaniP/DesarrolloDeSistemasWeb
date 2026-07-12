import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, cleanup, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Formulario from '../components/Formulario';
import * as api from '../services/api';


vi.mock('../services/api', () => ({
  createItem: vi.fn(),
}));

describe('Pruebas de Componente - Formulario', () => {

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  
  const completarFormulario = async () => {
    await userEvent.type(screen.getByPlaceholderText('Nombre'), 'Boca Juniors');
    await userEvent.type(screen.getByPlaceholderText('País'), 'Argentina');
    await userEvent.type(screen.getByPlaceholderText('Liga'), 'Liga Profesional');
    await userEvent.type(screen.getByPlaceholderText('Año de Fundación'), '1905');
    await userEvent.type(screen.getByPlaceholderText('Títulos Nacionales'), '35');
    await userEvent.type(screen.getByPlaceholderText('Títulos Internacionales'), '18');
    await userEvent.type(screen.getByPlaceholderText('Capacidad del Estadio'), '54000');
    await userEvent.type(screen.getByPlaceholderText('Color 1'), 'Azul');
    await userEvent.type(screen.getByPlaceholderText('Color 2'), 'Amarillo');
  };

  test('Debe enviar el formulario correctamente y llamar a createItem', async () => {
    window.alert = vi.fn();

    render(<Formulario />);

    const boton = screen.getByRole('button', { name: /guardar/i });

    
    await completarFormulario();
    
    api.createItem.mockResolvedValue({});

    await userEvent.click(boton);

    expect(api.createItem).toHaveBeenCalledTimes(1);

    expect(api.createItem).toHaveBeenCalledWith({
      nombre: 'Boca Juniors',
      pais: 'Argentina',
      liga: 'Liga Profesional',
      fundacion: 1905,
      cantidadDeTitulosNacionales: 35,
      cantidadDeTitulosInternacionales: 18,
      capacidadEstadio: 54000,
      coloresCamiseta: {
        color1: 'Azul',
        color2: 'Amarillo',
      },
    });

    expect(window.alert).toHaveBeenCalledWith('Equipo creado correctamente');
  });

  test('Debe mostrar error si la API falla', async () => {
    window.alert = vi.fn();

    render(<Formulario />);

    const boton = screen.getByRole('button', { name: /guardar/i });

    
    await completarFormulario();

    
    api.createItem.mockRejectedValue(new Error('Error'));

    await userEvent.click(boton);

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith('Error al crear equipo');
    });
  });

});