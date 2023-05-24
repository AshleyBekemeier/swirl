// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { SwirlIconSize } from "../swirl-icon.types";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../swirl-icon.css",
  tag: "swirl-icon-mark-chat-read",
})
export class SwirlIconMarkChatRead {
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
              d="M11.5667 11.45L13.9334 9.08331C14.0667 8.94998 14.2223 8.88609 14.4 8.89165C14.5778 8.8972 14.7334 8.96665 14.8667 9.09998C14.9889 9.23331 15.0528 9.38887 15.0584 9.56665C15.0639 9.74442 15 9.89998 14.8667 10.0333L12.0334 12.8666C11.9 13 11.7445 13.0639 11.5667 13.0583C11.3889 13.0528 11.2334 12.9833 11.1 12.85L9.68337 11.4333C9.56115 11.3111 9.49726 11.1583 9.49171 10.975C9.48615 10.7916 9.55004 10.6333 9.68337 10.5C9.8056 10.3778 9.96115 10.3166 10.15 10.3166C10.3389 10.3166 10.4945 10.3778 10.6167 10.5L11.5667 11.45ZM4.00004 12L2.46671 13.5333C2.2556 13.7444 2.01393 13.7916 1.74171 13.675C1.46949 13.5583 1.33337 13.35 1.33337 13.05V2.66665C1.33337 2.29998 1.46393 1.98609 1.72504 1.72498C1.98615 1.46387 2.30004 1.33331 2.66671 1.33331H13.3334C13.7 1.33331 14.0139 1.46387 14.275 1.72498C14.5362 1.98609 14.6667 2.29998 14.6667 2.66665V7.33331H9.33337C8.96671 7.33331 8.65282 7.46387 8.39171 7.72498C8.1306 7.98609 8.00004 8.29998 8.00004 8.66665V12H4.00004Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {(this.size === 20 || this.size === 24) && (
          <Fragment>
            <path
              d="M17.35 17.175L20.9 13.625C21.1 13.425 21.3333 13.3292 21.6 13.3375C21.8667 13.3458 22.1 13.45 22.3 13.65C22.4833 13.85 22.5792 14.0833 22.5875 14.35C22.5958 14.6167 22.5 14.85 22.3 15.05L18.05 19.3C17.85 19.5 17.6167 19.5958 17.35 19.5875C17.0833 19.5792 16.85 19.475 16.65 19.275L14.525 17.15C14.3417 16.9667 14.2458 16.7375 14.2375 16.4625C14.2292 16.1875 14.325 15.95 14.525 15.75C14.7083 15.5667 14.9417 15.475 15.225 15.475C15.5083 15.475 15.7417 15.5667 15.925 15.75L17.35 17.175ZM6 18L3.7 20.3C3.38333 20.6167 3.02083 20.6875 2.6125 20.5125C2.20417 20.3375 2 20.025 2 19.575V4C2 3.45 2.19583 2.97917 2.5875 2.5875C2.97917 2.19583 3.45 2 4 2H20C20.55 2 21.0208 2.19583 21.4125 2.5875C21.8042 2.97917 22 3.45 22 4V11H14C13.45 11 12.9792 11.1958 12.5875 11.5875C12.1958 11.9792 12 12.45 12 13V18H6Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M20.2417 20.0375L24.3834 15.8958C24.6167 15.6625 24.8889 15.5507 25.2 15.5604C25.5112 15.5701 25.7834 15.6916 26.0167 15.925C26.2306 16.1583 26.3424 16.4305 26.3521 16.7416C26.3618 17.0528 26.25 17.325 26.0167 17.5583L21.0584 22.5166C20.825 22.75 20.5528 22.8618 20.2417 22.8521C19.9306 22.8423 19.6584 22.7208 19.425 22.4875L16.9459 20.0083C16.732 19.7944 16.6202 19.5271 16.6105 19.2062C16.6007 18.8854 16.7125 18.6083 16.9459 18.375C17.1598 18.1611 17.432 18.0541 17.7625 18.0541C18.0931 18.0541 18.3653 18.1611 18.5792 18.375L20.2417 20.0375ZM7.00004 21L4.31671 23.6833C3.94726 24.0528 3.52435 24.1354 3.04796 23.9312C2.57157 23.7271 2.33337 23.3625 2.33337 22.8375V4.66665C2.33337 4.02498 2.56185 3.47567 3.01879 3.01873C3.47574 2.56179 4.02504 2.33331 4.66671 2.33331H23.3334C23.975 2.33331 24.5243 2.56179 24.9813 3.01873C25.4382 3.47567 25.6667 4.02498 25.6667 4.66665V12.8333H16.3334C15.6917 12.8333 15.1424 13.0618 14.6855 13.5187C14.2285 13.9757 14 14.525 14 15.1666V21H7.00004Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
