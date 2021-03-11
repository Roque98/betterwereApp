import { Component, ViewChild, AfterViewInit, Output, EventEmitter  } from "@angular/core";
import { BarcodeScannerLivestreamComponent } from "ngx-barcode-scanner";

@Component({
  selector: 'app-lector-codigo-barras',
  templateUrl: './lector-codigo-barras.component.html',
  styleUrls: ['./lector-codigo-barras.component.css']
})
export class LectorCodigoBarrasComponent implements AfterViewInit {

  @ViewChild(BarcodeScannerLivestreamComponent)
  barcodeScanner: BarcodeScannerLivestreamComponent;

  @Output() newItemEvent = new EventEmitter<string>();
  barcodeValue;

  ngAfterViewInit() {
    this.barcodeScanner.start();
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }


  onValueChanges(result) {
    this.barcodeValue = result.codeResult.code;
    this.addNewItem(this.barcodeValue);
  }

  onStarted(started) {
    console.log(started);
  }

}
