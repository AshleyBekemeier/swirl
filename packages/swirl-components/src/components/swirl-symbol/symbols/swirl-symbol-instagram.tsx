// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { SwirlSymbolSize } from "../swirl-symbol.types";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../swirl-symbol.css",
  tag: "swirl-symbol-instagram",
})
export class SwirlSymbolInstagram {
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
            d="M12 2C9.283 2 8.944 2.012 7.877 2.06C7.0476 2.07738 6.22708 2.23458 5.45 2.525C4.78247 2.77582 4.17773 3.16931 3.678 3.678C3.16878 4.1773 2.77521 4.78216 2.525 5.45C2.23418 6.22697 2.07696 7.04756 2.06 7.877C2.01 8.944 2 9.283 2 12C2 14.717 2.012 15.056 2.06 16.122C2.07734 16.9517 2.23455 17.7726 2.525 18.55C2.77582 19.2175 3.16931 19.8223 3.678 20.322C4.17753 20.8309 4.78233 21.2245 5.45 21.475C6.22745 21.7654 7.04828 21.9226 7.878 21.94C8.944 21.99 9.278 22 12 22C14.722 22 15.056 21.988 16.122 21.94C16.9517 21.9222 17.7725 21.765 18.55 21.475C19.2145 21.2182 19.8179 20.8254 20.3216 20.3216C20.8254 19.8179 21.2182 19.2145 21.475 18.55C21.7655 17.7726 21.9227 16.9517 21.94 16.122C21.99 15.055 22 14.716 22 12C22 9.284 21.988 8.944 21.94 7.878C21.9221 7.04866 21.7649 6.22822 21.475 5.451C21.224 4.78359 20.8305 4.1789 20.322 3.679C19.8229 3.16924 19.218 2.7753 18.55 2.525C17.7727 2.23416 16.9518 2.07694 16.122 2.06C15.056 2.01 14.717 2 12 2ZM12 3.8C14.669 3.8 14.988 3.813 16.042 3.859C16.6763 3.86486 17.3049 3.98022 17.9 4.2C18.3325 4.36522 18.7253 4.61985 19.0527 4.94726C19.3801 5.27466 19.6348 5.66746 19.8 6.1C20.0204 6.69433 20.1367 7.32217 20.144 7.956C20.187 9.013 20.2 9.33 20.2 12C20.2 14.67 20.187 14.988 20.138 16.042C20.1264 16.676 20.0077 17.3035 19.787 17.898C19.6244 18.3321 19.3688 18.7253 19.038 19.05C18.7148 19.3812 18.322 19.6364 17.888 19.797C17.2912 20.0174 16.6611 20.1337 16.025 20.141C14.963 20.188 14.651 20.199 11.976 20.199C9.301 20.199 8.988 20.186 7.927 20.137C7.2907 20.1254 6.6609 20.0067 6.064 19.786C5.62988 19.6253 5.23727 19.3693 4.915 19.037C4.58047 18.716 4.32391 18.3226 4.165 17.887C3.94471 17.29 3.82639 16.6602 3.815 16.024C3.777 14.974 3.764 14.65 3.764 11.987C3.764 9.324 3.776 9 3.813 7.937C3.82439 7.30109 3.94271 6.67164 4.163 6.075C4.31941 5.63789 4.57631 5.24364 4.913 4.924C5.23213 4.58812 5.62571 4.33191 6.062 4.176C6.65441 3.95408 7.28048 3.83536 7.913 3.825C8.976 3.787 9.288 3.775 11.962 3.775L12 3.8ZM12 6.865C10.9844 6.865 9.99159 7.16616 9.14715 7.7304C8.3027 8.29464 7.64453 9.09662 7.25588 10.0349C6.86722 10.9732 6.76553 12.0057 6.96367 13.0018C7.1618 13.9979 7.65086 14.9129 8.36901 15.631C9.08715 16.3491 10.0021 16.8382 10.9982 17.0363C11.9943 17.2345 13.0268 17.1328 13.9651 16.7441C14.9034 16.3555 15.7054 15.6973 16.2696 14.8529C16.8338 14.0084 17.135 13.0156 17.135 12C17.135 10.6381 16.594 9.33201 15.631 8.36901C14.668 7.40601 13.3619 6.865 12 6.865ZM12 15.333C11.3408 15.333 10.6964 15.1375 10.1483 14.7713C9.60017 14.4051 9.17298 13.8845 8.92071 13.2755C8.66844 12.6665 8.60244 11.9963 8.73104 11.3498C8.85965 10.7032 9.17708 10.1093 9.64321 9.64321C10.1093 9.17708 10.7032 8.85965 11.3498 8.73104C11.9963 8.60244 12.6665 8.66844 13.2755 8.92071C13.8845 9.17298 14.4051 9.60017 14.7713 10.1483C15.1375 10.6964 15.333 11.3408 15.333 12C15.333 12.884 14.9818 13.7317 14.3568 14.3568C13.7317 14.9818 12.884 15.333 12 15.333ZM18.538 6.662C18.538 6.89934 18.4676 7.13135 18.3358 7.32868C18.2039 7.52602 18.0165 7.67983 17.7972 7.77066C17.5779 7.86148 17.3367 7.88524 17.1039 7.83894C16.8711 7.79264 16.6573 7.67835 16.4895 7.51053C16.3216 7.34271 16.2074 7.12889 16.1611 6.89611C16.1148 6.66333 16.1385 6.42205 16.2293 6.20278C16.3202 5.98351 16.474 5.79609 16.6713 5.66424C16.8687 5.53238 17.1007 5.462 17.338 5.462C17.6563 5.462 17.9615 5.58843 18.1865 5.81347C18.4116 6.03852 18.538 6.34374 18.538 6.662Z"
            fill="currentColor"
          />
        </Fragment>
      </svg>
    );
  }
}
