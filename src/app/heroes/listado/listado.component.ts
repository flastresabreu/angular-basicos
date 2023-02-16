import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit{

  heroes: string[] = ['Iroman', 'Spaider-Man', 'Hulk', 'Batman'];
  heroeBorrado?: string[];
  noHeroes: number = this.heroes.length;

  constructor(){
    console.log('Constructor');
  }

  ngOnInit(): void {
    console.log('OnInit');
  }

  borrarHeroe(index: number): void{    
    this.heroeBorrado = this.heroes.splice(index, 1);
    this.noHeroes --;
    console.log(this.noHeroes);
  }

}
