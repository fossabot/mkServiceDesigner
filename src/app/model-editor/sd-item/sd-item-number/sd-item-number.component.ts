import { Component, Input } from "@angular/core";
import { SdItemNumeric } from "../../../classes/sd-item";

@Component({
  selector: "app-sd-item-number",
  styleUrls: ["./sd-item-number.component.less"],
  templateUrl: "./sd-item-number.component.html",
})
export class SdItemNumberComponent {
  @Input() public item: SdItemNumeric;
  private isInteger: boolean = false;
  @Input("integer")
  public set integer(val: boolean) {
    this.isInteger = val !== false;
  }
  public get integer() {
    return this.isInteger;
  }
}
