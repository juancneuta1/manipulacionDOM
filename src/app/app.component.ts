import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 👈 Estaba mal escrito "nagular"

// Si vas a usar RouterOutlet (para navegación con rutas)
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterOutlet], // 👈 puedes incluir RouterOutlet si lo usas
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // 👈 era styleUrl (en singular), debe ser styleUrls
})
export class AppComponent {
  title = 'clase2';

  objeto: any = {
    nombre: '',
    email: ''
  };

  agregarObjeto() {
    console.log('Objeto agregado:', this.objeto);
    alert(`Objeto agregado:\nNombre: ${this.objeto.nombre}\nEmail: ${this.objeto.email}`);
  }
}
