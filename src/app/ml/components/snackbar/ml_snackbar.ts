import {Component, ElementRef, Input, ViewEncapsulation, Renderer} from "@angular/core";
import MdlSnackbar from "./mdl_snackbar";

export interface IConfigSnackbar {
  message: string, actionHandler?: Function, actionText?: string, timeout?: number
}

@Component({
selector: 'ml-snackbar',
styleUrls: ['./ml_snackbar.css'],
moduleId: module.id.toString(),
encapsulation: ViewEncapsulation.None,
host: {class: 'mdl-snackbar'},
template:`

<div class="mdl-snackbar__text"></div>
<button type="button" class="mdl-snackbar__action" (click)="close()"></button>

`//template
})
export class MlSnackBar{
  @Input() config: IConfigSnackbar;
  mdlSnackbar: MdlSnackbar;

  constructor( private hostElm: ElementRef){}
  show(){ this.mdlSnackbar.showSnackbar(this.config) }
  close(){ this.mdlSnackbar.cleanup_() }
  ngAfterViewInit(){ this.mdlSnackbar = new MdlSnackbar(this.hostElm.nativeElement) }

}