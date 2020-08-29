import { Action, createReducer, on } from '@ngrx/store';
import * as UsuarioActions from './../actions';
import { cargarUsuario } from './../actions';
import { Usuario } from '../../models/usuario.model';


export interface UsuarioState {
  id: string;
  user: Usuario;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const UsuarioInitialState: UsuarioState = {
  id: null,
  user: null,
  loaded: false,
  loading: false,
  error: null
};


const _UsuarioReducer = createReducer(
  UsuarioInitialState,

  on(UsuarioActions.cargarUsuario, (state, { id }) => ({
    ...state,
    loading: true,
    id
  })),

  on(UsuarioActions.cargarUsuarioSuccess, (state, { usuario }) => ({
    ...state,
    loading: false,
    loaded: true,
    error: null,
    user: { ...usuario }
  })),

  on(UsuarioActions.cargarUsuarioError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: true,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message
    }
  }))
);



export function UsuarioReducer(state, action) {
  return _UsuarioReducer(state, action);
}

