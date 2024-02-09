// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { SwirlIconSize } from "../swirl-icon.types";
import { SwirlIconColor } from "../swirl-icon";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../swirl-icon.css",
  tag: "swirl-icon-bar-chart",
})
export class SwirlIconBarChart {
  @Prop() color?: SwirlIconColor;
  @Prop() size: SwirlIconSize = 24;

  render() {
    const viewBoxSize = this.size === 20 ? 24 : this.size;

    const styles = {
      color: Boolean(this.color) ? `var(--s-icon-${this.color})` : undefined,
    };

    const className = classnames("swirl-icon", `swirl-icon--size-${this.size}`);

    return (
      <svg
        class={className}
        fill="none"
        height={this.size}
        part="icon"
        style={styles}
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        width={this.size}
        xmlns="http://www.w3.org/2000/svg"
      >
        {this.size === 16 && (
          <Fragment>
            <path
              d="M2.00004 14C1.81115 14 1.65282 13.9361 1.52504 13.8083C1.39726 13.6806 1.33337 13.5222 1.33337 13.3333C1.33337 13.1444 1.39726 12.9861 1.52504 12.8583C1.65282 12.7306 1.81115 12.6667 2.00004 12.6667H14C14.1889 12.6667 14.3473 12.7306 14.475 12.8583C14.6028 12.9861 14.6667 13.1444 14.6667 13.3333C14.6667 13.5222 14.6028 13.6806 14.475 13.8083C14.3473 13.9361 14.1889 14 14 14H2.00004ZM3.00004 12C2.72226 12 2.48615 11.9028 2.29171 11.7083C2.09726 11.5139 2.00004 11.2778 2.00004 11V8.33333C2.00004 8.05556 2.09726 7.81944 2.29171 7.625C2.48615 7.43056 2.72226 7.33333 3.00004 7.33333C3.27782 7.33333 3.51393 7.43056 3.70837 7.625C3.90282 7.81944 4.00004 8.05556 4.00004 8.33333V11C4.00004 11.2778 3.90282 11.5139 3.70837 11.7083C3.51393 11.9028 3.27782 12 3.00004 12ZM6.33337 12C6.0556 12 5.81948 11.9028 5.62504 11.7083C5.4306 11.5139 5.33337 11.2778 5.33337 11V5C5.33337 4.72222 5.4306 4.48611 5.62504 4.29167C5.81948 4.09722 6.0556 4 6.33337 4C6.61115 4 6.84726 4.09722 7.04171 4.29167C7.23615 4.48611 7.33337 4.72222 7.33337 5V11C7.33337 11.2778 7.23615 11.5139 7.04171 11.7083C6.84726 11.9028 6.61115 12 6.33337 12ZM9.66671 12C9.38893 12 9.15282 11.9028 8.95837 11.7083C8.76393 11.5139 8.66671 11.2778 8.66671 11V7C8.66671 6.72222 8.76393 6.48611 8.95837 6.29167C9.15282 6.09722 9.38893 6 9.66671 6C9.94448 6 10.1806 6.09722 10.375 6.29167C10.5695 6.48611 10.6667 6.72222 10.6667 7V11C10.6667 11.2778 10.5695 11.5139 10.375 11.7083C10.1806 11.9028 9.94448 12 9.66671 12ZM13 12C12.7223 12 12.4862 11.9028 12.2917 11.7083C12.0973 11.5139 12 11.2778 12 11V3C12 2.72222 12.0973 2.48611 12.2917 2.29167C12.4862 2.09722 12.7223 2 13 2C13.2778 2 13.5139 2.09722 13.7084 2.29167C13.9028 2.48611 14 2.72222 14 3V11C14 11.2778 13.9028 11.5139 13.7084 11.7083C13.5139 11.9028 13.2778 12 13 12Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {(this.size === 20 || this.size === 24) && (
          <Fragment>
            <path
              d="M3 21C2.71667 21 2.47917 20.9042 2.2875 20.7125C2.09583 20.5208 2 20.2833 2 20C2 19.7167 2.09583 19.4792 2.2875 19.2875C2.47917 19.0958 2.71667 19 3 19H21C21.2833 19 21.5208 19.0958 21.7125 19.2875C21.9042 19.4792 22 19.7167 22 20C22 20.2833 21.9042 20.5208 21.7125 20.7125C21.5208 20.9042 21.2833 21 21 21H3ZM4.5 18C4.08333 18 3.72917 17.8542 3.4375 17.5625C3.14583 17.2708 3 16.9167 3 16.5V12.5C3 12.0833 3.14583 11.7292 3.4375 11.4375C3.72917 11.1458 4.08333 11 4.5 11C4.91667 11 5.27083 11.1458 5.5625 11.4375C5.85417 11.7292 6 12.0833 6 12.5V16.5C6 16.9167 5.85417 17.2708 5.5625 17.5625C5.27083 17.8542 4.91667 18 4.5 18ZM9.5 18C9.08333 18 8.72917 17.8542 8.4375 17.5625C8.14583 17.2708 8 16.9167 8 16.5V7.5C8 7.08333 8.14583 6.72917 8.4375 6.4375C8.72917 6.14583 9.08333 6 9.5 6C9.91667 6 10.2708 6.14583 10.5625 6.4375C10.8542 6.72917 11 7.08333 11 7.5V16.5C11 16.9167 10.8542 17.2708 10.5625 17.5625C10.2708 17.8542 9.91667 18 9.5 18ZM14.5 18C14.0833 18 13.7292 17.8542 13.4375 17.5625C13.1458 17.2708 13 16.9167 13 16.5V10.5C13 10.0833 13.1458 9.72917 13.4375 9.4375C13.7292 9.14583 14.0833 9 14.5 9C14.9167 9 15.2708 9.14583 15.5625 9.4375C15.8542 9.72917 16 10.0833 16 10.5V16.5C16 16.9167 15.8542 17.2708 15.5625 17.5625C15.2708 17.8542 14.9167 18 14.5 18ZM19.5 18C19.0833 18 18.7292 17.8542 18.4375 17.5625C18.1458 17.2708 18 16.9167 18 16.5V4.5C18 4.08333 18.1458 3.72917 18.4375 3.4375C18.7292 3.14583 19.0833 3 19.5 3C19.9167 3 20.2708 3.14583 20.5625 3.4375C20.8542 3.72917 21 4.08333 21 4.5V16.5C21 16.9167 20.8542 17.2708 20.5625 17.5625C20.2708 17.8542 19.9167 18 19.5 18Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M3.50004 24.5C3.16949 24.5 2.8924 24.3882 2.66879 24.1646C2.44518 23.941 2.33337 23.6639 2.33337 23.3333C2.33337 23.0028 2.44518 22.7257 2.66879 22.5021C2.8924 22.2785 3.16949 22.1667 3.50004 22.1667H24.5C24.8306 22.1667 25.1077 22.2785 25.3313 22.5021C25.5549 22.7257 25.6667 23.0028 25.6667 23.3333C25.6667 23.6639 25.5549 23.941 25.3313 24.1646C25.1077 24.3882 24.8306 24.5 24.5 24.5H3.50004ZM5.25004 21C4.76393 21 4.35074 20.8299 4.01046 20.4896C3.67018 20.1493 3.50004 19.7361 3.50004 19.25V14.5833C3.50004 14.0972 3.67018 13.684 4.01046 13.3437C4.35074 13.0035 4.76393 12.8333 5.25004 12.8333C5.73615 12.8333 6.14935 13.0035 6.48962 13.3437C6.8299 13.684 7.00004 14.0972 7.00004 14.5833V19.25C7.00004 19.7361 6.8299 20.1493 6.48962 20.4896C6.14935 20.8299 5.73615 21 5.25004 21ZM11.0834 21C10.5973 21 10.1841 20.8299 9.84379 20.4896C9.50351 20.1493 9.33337 19.7361 9.33337 19.25V8.75C9.33337 8.26389 9.50351 7.85069 9.84379 7.51042C10.1841 7.17014 10.5973 7 11.0834 7C11.5695 7 11.9827 7.17014 12.323 7.51042C12.6632 7.85069 12.8334 8.26389 12.8334 8.75V19.25C12.8334 19.7361 12.6632 20.1493 12.323 20.4896C11.9827 20.8299 11.5695 21 11.0834 21ZM16.9167 21C16.4306 21 16.0174 20.8299 15.6771 20.4896C15.3368 20.1493 15.1667 19.7361 15.1667 19.25V12.25C15.1667 11.7639 15.3368 11.3507 15.6771 11.0104C16.0174 10.6701 16.4306 10.5 16.9167 10.5C17.4028 10.5 17.816 10.6701 18.1563 11.0104C18.4966 11.3507 18.6667 11.7639 18.6667 12.25V19.25C18.6667 19.7361 18.4966 20.1493 18.1563 20.4896C17.816 20.8299 17.4028 21 16.9167 21ZM22.75 21C22.2639 21 21.8507 20.8299 21.5105 20.4896C21.1702 20.1493 21 19.7361 21 19.25V5.25C21 4.76389 21.1702 4.35069 21.5105 4.01042C21.8507 3.67014 22.2639 3.5 22.75 3.5C23.2362 3.5 23.6493 3.67014 23.9896 4.01042C24.3299 4.35069 24.5 4.76389 24.5 5.25V19.25C24.5 19.7361 24.3299 20.1493 23.9896 20.4896C23.6493 20.8299 23.2362 21 22.75 21Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
