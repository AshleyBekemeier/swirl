// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { SwirlSymbolSize } from "../swirl-symbol.types";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../swirl-symbol.css",
  tag: "swirl-symbol-email",
})
export class SwirlSymbolEmail {
  @Prop() size: SwirlSymbolSize = 24;

  render() {
    const viewBoxSize = this.size === 20 ? 24 : this.size;

    const className = classnames(
      "swirl-symbol",
      `swirl-symbol--size-${this.size}`
    );

    return (
      <svg
        class={className}
        fill="none"
        height={this.size}
        part="symbol"
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        width={this.size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <Fragment>
          <path
            d="M20 4H4C3.4713 4.00264 2.96516 4.21452 2.59225 4.58931C2.21933 4.9641 2.00999 5.4713 2.01 6L2 18C2.00158 18.5299 2.2128 19.0377 2.58753 19.4125C2.96227 19.7872 3.47005 19.9984 4 20H20C20.5299 19.9984 21.0377 19.7872 21.4125 19.4125C21.7872 19.0377 21.9984 18.5299 22 18V6C21.9984 5.47005 21.7872 4.96227 21.4125 4.58753C21.0377 4.2128 20.5299 4.00158 20 4ZM19.6 8.25L12.53 12.67C12.3706 12.7681 12.1872 12.8201 12 12.8201C11.8128 12.8201 11.6294 12.7681 11.47 12.67L4.4 8.25C4.30545 8.19091 4.22346 8.11377 4.15872 8.02299C4.09398 7.93221 4.04776 7.82956 4.02269 7.72092C3.99761 7.61227 3.99419 7.49976 4.0126 7.38979C4.03101 7.27982 4.07091 7.17455 4.13 7.08C4.18909 6.98545 4.26623 6.90346 4.35701 6.83872C4.44779 6.77398 4.55044 6.72776 4.65908 6.70268C4.76773 6.67761 4.88024 6.67419 4.99021 6.6926C5.10018 6.71101 5.20545 6.75091 5.3 6.81L12 11L18.7 6.81C18.7946 6.75091 18.8998 6.71101 19.0098 6.6926C19.1198 6.67419 19.2323 6.67761 19.3409 6.70268C19.4496 6.72776 19.5522 6.77398 19.643 6.83872C19.7338 6.90346 19.8109 6.98545 19.87 7.08C19.9291 7.17455 19.969 7.27982 19.9874 7.38979C20.0058 7.49976 20.0024 7.61227 19.9773 7.72092C19.9522 7.82956 19.906 7.93221 19.8413 8.02299C19.7765 8.11377 19.6946 8.19091 19.6 8.25Z"
            fill="currentColor"
          />
        </Fragment>
      </svg>
    );
  }
}
