import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'Tatiana Viana';
  habilidades = 'Habilidades';
  pericias = 'Perícias';
  levelUp = 'Ganhando Experiência';

  isChecked = true;

  // constructor(private _formBuilder: FormBuilder) {}

  // color: ThemePalette = 'accent';
  // checked = false;
  // disabled = false;
}
