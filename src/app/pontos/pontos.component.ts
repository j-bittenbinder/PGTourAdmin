import { Component, OnInit } from '@angular/core';
import { DadosPonto, PontosService } from './pontos.service';


@Component({
  selector: 'app-pontos',
  templateUrl: './pontos.component.html',
  styleUrls: ['./pontos.component.scss']
})
export class PontosComponent implements OnInit {

  ponto: DadosPonto;
  pontos: any;

  constructor(private service: PontosService) { }

  ngOnInit() {
      this.service.getListaPontos().subscribe(dados => {
        this.pontos = dados;
      });
  }

  visualizarPonto(id) {
    this.service.getPonto(id).subscribe(dados => {
      this.ponto = dados[0];
      // console.log('point: ', this.ponto);
      document.getElementById('open').click();
    });
  }

}
