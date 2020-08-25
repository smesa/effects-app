import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(
    private usuariosService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.usuariosService.getUsers().subscribe(users => {
      this.usuarios = users;
    });
  }

}
