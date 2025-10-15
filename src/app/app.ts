import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Inicio } from './pages/inicio/inicio';
import { Feedbacks } from "./pages/inicio/feedbacks/feedbacks";
import { Footer } from "./components/footer/footer";
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Inicio,
    Feedbacks,
    Footer
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('nowISpeak');
}
