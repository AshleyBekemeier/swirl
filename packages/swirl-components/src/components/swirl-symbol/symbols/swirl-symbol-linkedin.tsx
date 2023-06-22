// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { SwirlSymbolSize } from "../swirl-symbol.types";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../swirl-symbol.css",
  tag: "swirl-symbol-linkedin",
})
export class SwirlSymbolLinkedin {
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
            d="M19.039 19.0431H16.078V14.4001C16.078 13.2931 16.055 11.8691 14.535 11.8691C12.991 11.8691 12.755 13.0691 12.755 14.3181V19.0401H9.792V9.50011H12.637V10.8001H12.675C12.96 10.3133 13.3716 9.91287 13.8661 9.64135C14.3605 9.36983 14.9193 9.23739 15.483 9.25811C18.483 9.25811 19.039 11.2331 19.039 13.8041V19.0431ZM6.447 8.19411C6.04957 8.19287 5.66487 8.05387 5.35842 7.8008C5.05198 7.54773 4.84276 7.19625 4.76639 6.80622C4.69003 6.4162 4.75125 6.01176 4.93963 5.66181C5.12801 5.31186 5.43189 5.03804 5.7995 4.88701C6.16712 4.73598 6.57572 4.71707 6.95571 4.83351C7.33571 4.94995 7.66357 5.19453 7.88347 5.52558C8.10336 5.85664 8.20167 6.2537 8.16165 6.64911C8.12163 7.04452 7.94576 7.41382 7.664 7.69411C7.34063 8.01548 6.9029 8.19532 6.447 8.19411ZM7.932 19.0431H4.963V9.50011H7.933L7.932 19.0431ZM20.521 2.00011H3.476C3.28445 1.99774 3.0943 2.03313 2.91643 2.10427C2.73856 2.17542 2.57646 2.28092 2.43938 2.41474C2.30231 2.54857 2.19295 2.7081 2.11756 2.88421C2.04217 3.06032 2.00222 3.24956 2 3.44111V20.5591C2.00222 20.7507 2.04217 20.9399 2.11756 21.116C2.19295 21.2921 2.30231 21.4517 2.43938 21.5855C2.57646 21.7193 2.73856 21.8248 2.91643 21.896C3.0943 21.9671 3.28445 22.0025 3.476 22.0001H20.518C20.9055 22.0052 21.2792 21.8563 21.5571 21.5861C21.8349 21.316 21.9942 20.9466 22 20.5591V3.44111C21.9939 3.0537 21.8346 2.68449 21.5568 2.41438C21.279 2.14427 20.9054 1.9953 20.518 2.00011H20.521Z"
            fill="currentColor"
          />
        </Fragment>
      </svg>
    );
  }
}