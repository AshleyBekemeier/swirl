// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { SwirlIconSize } from "../swirl-icon.types";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../swirl-icon.css",
  tag: "swirl-icon-like",
})
export class SwirlIconLike {
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
              d="M4.66665 13.9999V5.33326L8.5466 1.45331C8.98109 1.01882 9.68554 1.01882 10.12 1.45331C10.397 1.73029 10.5079 2.13253 10.4121 2.51233L9.69998 5.33326H13.3333C14.4379 5.33326 15.3333 6.22869 15.3333 7.33326V7.72412C15.3333 8.0821 15.2612 8.43642 15.1214 8.76595L13.4172 12.7813C13.1036 13.5201 12.3788 13.9999 11.5761 13.9999H4.66665ZM5.99998 12.6666H11.5604C11.8271 12.6666 12.0681 12.5077 12.1731 12.2625L13.8922 8.25148C13.9633 8.08551 14 7.90682 14 7.72625V7.33326C14 6.96507 13.7015 6.66659 13.3333 6.66659H8.85007C8.41754 6.66659 8.09952 6.26108 8.20262 5.84101L8.89998 2.99993L5.99998 5.89993V12.6666ZM4.66665 5.33326V6.66659H3.33331C2.96512 6.66659 2.66665 6.96507 2.66665 7.33326V11.9999C2.66665 12.3681 2.96512 12.6666 3.33331 12.6666H4.66665V13.9999H3.33331C2.22874 13.9999 1.33331 13.1045 1.33331 11.9999V7.33326C1.33331 6.22869 2.22874 5.33326 3.33331 5.33326H4.66665Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {(this.size === 20 || this.size === 24) && (
          <Fragment>
            <path
              d="M7 20.9999V7.99989L12.8199 2.17996C13.4717 1.52823 14.5283 1.52823 15.1801 2.17997C15.5956 2.59544 15.7619 3.19879 15.6181 3.7685L14.55 7.99989H20C21.6569 7.99989 23 9.34304 23 10.9999V11.5862C23 12.1232 22.8919 12.6546 22.6821 13.1489L20.1258 19.172C19.6555 20.2802 18.5682 20.9999 17.3642 20.9999H7ZM9 18.9999H17.3406C17.7406 18.9999 18.1022 18.7615 18.2597 18.3938L20.8383 12.3772C20.945 12.1283 21 11.8602 21 11.5894V10.9999C21 10.4476 20.5523 9.99989 20 9.99989H13.2751C12.6263 9.99989 12.1493 9.39161 12.304 8.76151L13.35 4.49989L9 8.84989V18.9999ZM7 7.99989V9.99989H5C4.44772 9.99989 4 10.4476 4 10.9999V17.9999C4 18.5522 4.44772 18.9999 5 18.9999H7V20.9999H5C3.34315 20.9999 2 19.6567 2 17.9999V10.9999C2 9.34304 3.34315 7.99989 5 7.99989H7Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M8.16665 24.5V9.33333L14.9566 2.54341C15.7169 1.78305 16.9497 1.78306 17.7101 2.54341C18.1948 3.02814 18.3889 3.73205 18.2211 4.3967L16.975 9.33333H23.3333C25.2663 9.33333 26.8333 10.9003 26.8333 12.8333V13.5173C26.8333 14.1438 26.7072 14.7639 26.4624 15.3405L23.4801 22.3674C22.9313 23.6603 21.6628 24.5 20.2583 24.5H8.16665ZM10.5 22.1667H20.2307C20.6974 22.1667 21.1192 21.8885 21.303 21.4596L24.3113 14.4402C24.4358 14.1498 24.5 13.8371 24.5 13.5211V12.8333C24.5 12.189 23.9776 11.6667 23.3333 11.6667H15.4876C14.7307 11.6667 14.1742 10.957 14.3546 10.2219L15.575 5.25L10.5 10.325V22.1667ZM8.16665 9.33333V11.6667H5.83331C5.18898 11.6667 4.66665 12.189 4.66665 12.8333V21C4.66665 21.6443 5.18898 22.1667 5.83331 22.1667H8.16665V24.5H5.83331C3.90032 24.5 2.33331 22.933 2.33331 21V12.8333C2.33331 10.9003 3.90032 9.33333 5.83331 9.33333H8.16665Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
