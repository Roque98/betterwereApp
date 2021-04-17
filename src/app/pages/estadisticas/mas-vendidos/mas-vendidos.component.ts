import { Component, OnInit } from '@angular/core';
import { HistorialService } from 'src/app/services/historial.service';
import RegistroHistorial from '../../historial/historial.interface';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-mas-vendidos',
  templateUrl: './mas-vendidos.component.html',
  styleUrls: ['./mas-vendidos.component.css'],
})
export class MasVendidosComponent implements OnInit {
  data: any[];
  cargando = false;
  cargado = false;
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      xAxes: [{}],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  public barChartLabels: Label[] = ['16/04/2021'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [];

  constructor(private historialService: HistorialService) {}

  ngOnInit(): void {
    this.cargando = true;
    this.historialService
      .getListarSalidasDeInventario()
      .then((res: RegistroHistorial[]) => {

        // Aqui contamos la cantidad de salidas de cada producto.
        this.data = this.groupBy(res);


        // Ordenar de mayor a menor
        this.data.sort((a, b) => {
          if (a.cantidaSalidas < b.cantidaSalidas) {
            return 1;
          }
          if (a.cantidaSalidas > b.cantidaSalidas) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });

        

        // LLenar la tabla de datos
        this.data.forEach((elemento, index) => {
         

          if (index<6) {
            this.barChartData.push({
              label: elemento.nombre_producto,
              data: [elemento.cantidaSalidas],
            });
          }
        });


        // Quitar el loader
        this.cargado = true;
        this.cargando = false;
      });
  }

  private groupBy(historial: RegistroHistorial[]) {
    let arregloDeSalida = [];

    historial.forEach((registroHistorial) => {
      // si el arreglo de salida esta vacio
      if (arregloDeSalida.length === 0) {
        arregloDeSalida.push({
          codigo_producto: registroHistorial.codigo_producto,
          nombre_producto: registroHistorial.nombre_producto,
          cantidaSalidas: Math.abs(registroHistorial.cantidad),
        });
      } else {
        const posicionElemento = this.buscarPosicionDEelementoEnArreglo(
          arregloDeSalida,
          registroHistorial.codigo_producto
        );
        if (posicionElemento > -1) {
          arregloDeSalida[posicionElemento].cantidaSalidas += Math.abs(
            registroHistorial.cantidad
          );
        } else {
          arregloDeSalida.push({
            codigo_producto: registroHistorial.codigo_producto,
            nombre_producto: registroHistorial.nombre_producto,
            cantidaSalidas: Math.abs(registroHistorial.cantidad),
          });
        }
      }
    });

    return arregloDeSalida;
  }

  private buscarPosicionDEelementoEnArreglo(
    arregloDeSalida: RegistroHistorial[],
    codigoBuscado: string
  ) {
    let posicionElemento = -1;
    for (let i = 0; i < arregloDeSalida.length; i++) {
      const element = arregloDeSalida[i];
      if (element.codigo_producto === codigoBuscado) {
        posicionElemento = i;
        break;
      }
    }
    return posicionElemento;
  }
}
