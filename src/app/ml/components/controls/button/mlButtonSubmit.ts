import {Component, ElementRef, Input, Renderer, ViewEncapsulation, ViewChild} from "@angular/core";
import MdlButton from "./mdButtonLib";
import * as ml from "../../../lib/ml_lib";

@Component({
selector: 'ml-button-submit',
// moduleId: module.id.toString(),
styleUrls: ['./mlButton.css'],
template: `

<div class="mdl-button" style="padding: 3px">
<input #input type="submit" class="mdl-button" [attr.value]="text" [disabled]="disabled" />
<span class="mdl-button__ripple-container" style="z-index: -10">
  <span class="mdl-ripple"></span>
</span>
</div>

`//template
})
export class MlButtonSubmit{

  @ViewChild('input') input: ElementRef;
  @Input() aspect: string; // Possible values: [rised, colored, accent] (in lowercase)
  @Input() text: string;
  @Input() disabled: string;

  constructor(private ren: Renderer){}

  ngOnInit(){
    if (ml.isSubstring('raised', this.aspect)){
      ml.setClass(this.input, 'mdl-button--raised', this.ren);
    }
    if (ml.isSubstring('colored', this.aspect)){
      ml.setClass(this.input, 'mdl-button--colored', this.ren);
    }
    if (ml.isSubstring('accent', this.aspect)){
      ml.setClass(this.input, 'mdl-button--accent', this.ren);
    }
    new MdlButton(this.input.nativeElement);
  }
}
