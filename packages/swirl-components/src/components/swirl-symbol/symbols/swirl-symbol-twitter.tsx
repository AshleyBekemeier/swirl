// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { SwirlSymbolSize } from "../swirl-symbol.types";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../swirl-symbol.css",
  tag: "swirl-symbol-twitter",
})
export class SwirlSymbolTwitter {
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
            d="M21.961 5.937C21.2123 6.26672 20.4191 6.48439 19.607 6.583C20.4611 6.06861 21.1004 5.26273 21.407 4.314C20.5988 4.78464 19.7182 5.11815 18.801 5.301C18.1839 4.64289 17.3669 4.20671 16.4767 4.06007C15.5865 3.91342 14.6728 4.0645 13.8771 4.48988C13.0815 4.91526 12.4484 5.59119 12.076 6.41292C11.7035 7.23465 11.6125 8.15629 11.817 9.035C10.1875 8.95629 8.59285 8.53519 7.13693 7.79913C5.68101 7.06308 4.39647 6.02857 3.367 4.763C2.99923 5.38799 2.80745 6.10085 2.812 6.826C2.81144 7.501 2.97754 8.16569 3.29555 8.76108C3.61357 9.35647 4.07367 9.86413 4.635 10.239C3.98396 10.2184 3.34728 10.0425 2.778 9.726V9.776C2.77726 10.723 3.10435 11.641 3.70372 12.3742C4.30309 13.1074 5.13777 13.6105 6.066 13.798C5.4647 13.9592 4.83491 13.9834 4.223 13.869C4.48632 14.6842 4.99761 15.3968 5.68549 15.9074C6.37336 16.4179 7.20349 16.701 8.06 16.717C6.6096 17.8553 4.81872 18.473 2.975 18.471C2.64921 18.4706 2.3237 18.4519 2 18.415C3.88066 19.6184 6.06726 20.2567 8.3 20.254C9.83363 20.2648 11.3541 19.9708 12.7732 19.3892C14.1923 18.8075 15.4818 17.9498 16.5667 16.8658C17.6516 15.7818 18.5105 14.4931 19.0933 13.0745C19.6762 11.6559 19.9714 10.1356 19.962 8.602C19.962 8.427 19.962 8.252 19.95 8.077C20.755 7.49782 21.4493 6.77873 22 5.954L21.961 5.937Z"
            fill="currentColor"
          />
        </Fragment>
      </svg>
    );
  }
}
