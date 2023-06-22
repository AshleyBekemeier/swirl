// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { SwirlSymbolSize } from "../swirl-symbol.types";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../swirl-symbol.css",
  tag: "swirl-symbol-fitness-center",
})
export class SwirlSymbolFitnessCenter {
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
            d="M20.57 14.86L21.29 14.14C21.4762 13.9526 21.5808 13.6992 21.5808 13.435C21.5808 13.1708 21.4762 12.9174 21.29 12.73L21.27 12.71C21.0826 12.5238 20.8292 12.4192 20.565 12.4192C20.3008 12.4192 20.0474 12.5238 19.86 12.71L17 15.57L8.43 7L11.29 4.14C11.4762 3.95264 11.5808 3.69919 11.5808 3.435C11.5808 3.17082 11.4762 2.91736 11.29 2.73L11.27 2.71C11.0826 2.52375 10.8292 2.41921 10.565 2.41921C10.3008 2.41921 10.0474 2.52375 9.86 2.71L9.14 3.43L8.42 2.71C8.23119 2.52265 7.97598 2.41752 7.71 2.41752C7.44401 2.41752 7.1888 2.52265 7 2.71L5.57 4.14L4.85 3.42C4.66037 3.23037 4.40317 3.12384 4.135 3.12384C3.86682 3.12384 3.60963 3.23037 3.42 3.42C3.23037 3.60963 3.12383 3.86683 3.12383 4.135C3.12383 4.40318 3.23037 4.66037 3.42 4.85L4.14 5.57L2.71 7C2.52375 7.18736 2.4192 7.44082 2.4192 7.705C2.4192 7.96919 2.52375 8.22264 2.71 8.41L3.43 9.13L2.71 9.86C2.52375 10.0474 2.4192 10.3008 2.4192 10.565C2.4192 10.8292 2.52375 11.0826 2.71 11.27L2.73 11.29C2.91736 11.4763 3.17081 11.5808 3.435 11.5808C3.69918 11.5808 3.95263 11.4763 4.14 11.29L7 8.43L15.57 17L12.71 19.86C12.5237 20.0474 12.4192 20.3008 12.4192 20.565C12.4192 20.8292 12.5237 21.0826 12.71 21.27L12.73 21.29C12.9174 21.4763 13.1708 21.5808 13.435 21.5808C13.6992 21.5808 13.9526 21.4763 14.14 21.29L14.86 20.57L15.58 21.29C15.7674 21.4763 16.0208 21.5808 16.285 21.5808C16.5492 21.5808 16.8026 21.4763 16.99 21.29L18.42 19.86L19.14 20.58C19.3296 20.7696 19.5868 20.8762 19.855 20.8762C20.1232 20.8762 20.3804 20.7696 20.57 20.58C20.7596 20.3904 20.8662 20.1332 20.8662 19.865C20.8662 19.5968 20.7596 19.3396 20.57 19.15L19.85 18.43L21.29 17C21.4762 16.8126 21.5808 16.5592 21.5808 16.295C21.5808 16.0308 21.4762 15.7774 21.29 15.59L20.57 14.86Z"
            fill="currentColor"
          />
        </Fragment>
      </svg>
    );
  }
}