// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { SwirlSymbolSize } from "../swirl-symbol.types";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../swirl-symbol.css",
  tag: "swirl-symbol-directions-car-filled",
})
export class SwirlSymbolDirectionsCarFilled {
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
            d="M18.92 6.01C18.8187 5.71425 18.6272 5.45772 18.3725 5.27653C18.1178 5.09534 17.8126 4.99863 17.5 5H6.5C6.18761 4.99952 5.88286 5.09659 5.6283 5.27765C5.37373 5.45872 5.18205 5.71475 5.08 6.01L3 12V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21C4.89782 21 5.27936 20.842 5.56066 20.5607C5.84196 20.2794 6 19.8978 6 19.5V19H18V19.5C18 19.8978 18.158 20.2794 18.4393 20.5607C18.7206 20.842 19.1022 21 19.5 21C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V12L18.92 6.01ZM7.5 16C7.20333 16 6.91332 15.912 6.66664 15.7472C6.41997 15.5824 6.22771 15.3481 6.11418 15.074C6.00065 14.7999 5.97094 14.4983 6.02882 14.2074C6.0867 13.9164 6.22956 13.6491 6.43934 13.4393C6.64912 13.2296 6.91639 13.0867 7.20736 13.0288C7.49834 12.9709 7.79994 13.0006 8.07403 13.1142C8.34811 13.2277 8.58238 13.42 8.7472 13.6666C8.91203 13.9133 9 14.2033 9 14.5C9 14.8978 8.84196 15.2794 8.56066 15.5607C8.27936 15.842 7.89782 16 7.5 16ZM16.5 16C16.2033 16 15.9133 15.912 15.6666 15.7472C15.42 15.5824 15.2277 15.3481 15.1142 15.074C15.0006 14.7999 14.9709 14.4983 15.0288 14.2074C15.0867 13.9164 15.2296 13.6491 15.4393 13.4393C15.6491 13.2296 15.9164 13.0867 16.2074 13.0288C16.4983 12.9709 16.7999 13.0006 17.074 13.1142C17.3481 13.2277 17.5824 13.42 17.7472 13.6666C17.912 13.9133 18 14.2033 18 14.5C18 14.8978 17.842 15.2794 17.5607 15.5607C17.2794 15.842 16.8978 16 16.5 16ZM5.81 10L6.85 7H17.14L18.18 10H5.81Z"
            fill="currentColor"
          />
        </Fragment>
      </svg>
    );
  }
}
