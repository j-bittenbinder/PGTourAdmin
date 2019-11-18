import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PontosService {

  private readonly API = 'https://apipgtour.herokuapp.com/index.php';
  private headerHttp = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getListaPontos() {
    return this.http.get(this.API + '/getPontoTuristico');
  }

  getPonto(idPonto) {
    return this.http.post((this.API + '/getDadosPontoTuristico'), { id: idPonto }, this.headerHttp);
  }
}

export interface DadosPonto {
  id_ponto: string;
  nome: string;
  descricao: string;
  latitude: string;
  longitude: string;
  endereco: string;
  quantidade_visita: string;
}
