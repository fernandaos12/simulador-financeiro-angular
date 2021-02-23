import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  valores: number;
  updateSetting(event) {
    this.valores = event.value; 
  }
  private valor: number;
  private juros: number;
  private juros240: number;
  private meses: number;
 
    public constructor() {
      /*this.valor = 12000;*/
      this.juros = 18/100;
      this.meses = 180;
      this.juros240 = 24/100;
      this.valores = event.returnValue;
   }
   public calculajuros180():number{
    var resultadocomjuros = (this.valores * this.juros)+this.valores;
     return (resultadocomjuros);
   }
   private calculaparcelas180():number{
     var parcelas180 = (this.valores * this.juros) + this.valores;
     return (parcelas180/180);
   }
   private calculajuros240():number{
     var resultadocomjuros240 = (this.valores * this.juros240)+this.valores;
     return(resultadocomjuros240);
   }
   private calculaparcelas240():number{
      var parcelas240 = (this.valores * this.juros240);
      parcelas240 = parcelas240 + this.valores;
     return (parcelas240/240);
   }
  ngOnInit() {
  }

}