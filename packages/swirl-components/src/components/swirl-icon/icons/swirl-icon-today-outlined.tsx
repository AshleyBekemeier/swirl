// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { SwirlIconSize } from "../swirl-icon.types";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../swirl-icon.css",
  tag: "swirl-icon-today-outlined",
})
export class SwirlIconTodayOutlined {
  @Prop() size: SwirlIconSize = 24;

  render() {
    const viewBoxSize = this.size === 20 ? 24 : this.size;

    const className = classnames("swirl-icon", `swirl-icon--size-${this.size}`);

    return (
      <svg
        class={className}
        fill="none"
        height={this.size}
        part="icon"
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        width={this.size}
        xmlns="http://www.w3.org/2000/svg"
      >
        {this.size === 16 && (
          <Fragment>
            <path
              d="M6 10.9999C5.53333 10.9999 5.13889 10.8388 4.81667 10.5166C4.49444 10.1944 4.33333 9.79992 4.33333 9.33325C4.33333 8.86658 4.49444 8.47214 4.81667 8.14992C5.13889 7.8277 5.53333 7.66658 6 7.66658C6.46667 7.66658 6.86111 7.8277 7.18333 8.14992C7.50556 8.47214 7.66667 8.86658 7.66667 9.33325C7.66667 9.79992 7.50556 10.1944 7.18333 10.5166C6.86111 10.8388 6.46667 10.9999 6 10.9999ZM3.33333 14.6666C2.96667 14.6666 2.65267 14.5361 2.39133 14.2753C2.13044 14.0139 2 13.6999 2 13.3333V3.99992C2 3.63325 2.13044 3.31947 2.39133 3.05859C2.65267 2.79725 2.96667 2.66659 3.33333 2.66659H4V1.99992C4 1.81103 4.06378 1.65259 4.19133 1.52459C4.31933 1.39703 4.47778 1.33325 4.66667 1.33325C4.85556 1.33325 5.014 1.39703 5.142 1.52459C5.26956 1.65259 5.33333 1.81103 5.33333 1.99992V2.66659H10.6667V1.99992C10.6667 1.81103 10.7307 1.65259 10.8587 1.52459C10.9862 1.39703 11.1444 1.33325 11.3333 1.33325C11.5222 1.33325 11.6804 1.39703 11.808 1.52459C11.936 1.65259 12 1.81103 12 1.99992V2.66659H12.6667C13.0333 2.66659 13.3473 2.79725 13.6087 3.05859C13.8696 3.31947 14 3.63325 14 3.99992V13.3333C14 13.6999 13.8696 14.0139 13.6087 14.2753C13.3473 14.5361 13.0333 14.6666 12.6667 14.6666H3.33333ZM3.33333 13.3333H12.6667V6.66658H3.33333V13.3333ZM3.33333 5.33325H12.6667V3.99992H3.33333V5.33325Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {(this.size === 20 || this.size === 24) && (
          <Fragment>
            <path
              d="M9 16.5C8.3 16.5 7.70833 16.2583 7.225 15.775C6.74167 15.2917 6.5 14.7 6.5 14C6.5 13.3 6.74167 12.7083 7.225 12.225C7.70833 11.7417 8.3 11.5 9 11.5C9.7 11.5 10.2917 11.7417 10.775 12.225C11.2583 12.7083 11.5 13.3 11.5 14C11.5 14.7 11.2583 15.2917 10.775 15.775C10.2917 16.2583 9.7 16.5 9 16.5ZM5 22C4.45 22 3.979 21.8043 3.587 21.413C3.19567 21.021 3 20.55 3 20V6C3 5.45 3.19567 4.97933 3.587 4.588C3.979 4.196 4.45 4 5 4H6V3C6 2.71667 6.09567 2.479 6.287 2.287C6.479 2.09567 6.71667 2 7 2C7.28333 2 7.521 2.09567 7.713 2.287C7.90433 2.479 8 2.71667 8 3V4H16V3C16 2.71667 16.096 2.479 16.288 2.287C16.4793 2.09567 16.7167 2 17 2C17.2833 2 17.5207 2.09567 17.712 2.287C17.904 2.479 18 2.71667 18 3V4H19C19.55 4 20.021 4.196 20.413 4.588C20.8043 4.97933 21 5.45 21 6V20C21 20.55 20.8043 21.021 20.413 21.413C20.021 21.8043 19.55 22 19 22H5ZM5 20H19V10H5V20ZM5 8H19V6H5V8Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M10.5 19.2499C9.68333 19.2499 8.99306 18.968 8.42917 18.4041C7.86528 17.8402 7.58333 17.1499 7.58333 16.3333C7.58333 15.5166 7.86528 14.8263 8.42917 14.2624C8.99306 13.6985 9.68333 13.4166 10.5 13.4166C11.3167 13.4166 12.0069 13.6985 12.5708 14.2624C13.1347 14.8263 13.4167 15.5166 13.4167 16.3333C13.4167 17.1499 13.1347 17.8402 12.5708 18.4041C12.0069 18.968 11.3167 19.2499 10.5 19.2499ZM5.83333 25.6666C5.19167 25.6666 4.64217 25.4383 4.18483 24.9818C3.72828 24.5244 3.5 23.9749 3.5 23.3333V6.99992C3.5 6.35825 3.72828 5.80914 4.18483 5.35259C4.64217 4.89525 5.19167 4.66659 5.83333 4.66659H7V3.49992C7 3.16936 7.11161 2.89209 7.33483 2.66809C7.55883 2.44486 7.83611 2.33325 8.16667 2.33325C8.49722 2.33325 8.7745 2.44486 8.9985 2.66809C9.22172 2.89209 9.33333 3.16936 9.33333 3.49992V4.66659H18.6667V3.49992C18.6667 3.16936 18.7787 2.89209 19.0027 2.66809C19.2259 2.44486 19.5028 2.33325 19.8333 2.33325C20.1639 2.33325 20.4408 2.44486 20.664 2.66809C20.888 2.89209 21 3.16936 21 3.49992V4.66659H22.1667C22.8083 4.66659 23.3578 4.89525 23.8152 5.35259C24.2717 5.80914 24.5 6.35825 24.5 6.99992V23.3333C24.5 23.9749 24.2717 24.5244 23.8152 24.9818C23.3578 25.4383 22.8083 25.6666 22.1667 25.6666H5.83333ZM5.83333 23.3333H22.1667V11.6666H5.83333V23.3333ZM5.83333 9.33325H22.1667V6.99992H5.83333V9.33325Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}