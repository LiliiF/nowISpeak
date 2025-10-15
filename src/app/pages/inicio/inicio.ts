import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Cursos } from './cursos/cursos';
import { Feedbacks } from './feedbacks/feedbacks';

@Component({
  selector: 'app-inicio',
  imports: [
    Hero,
    Cursos,
    Feedbacks
  ],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss'
})
export class Inicio {

}
