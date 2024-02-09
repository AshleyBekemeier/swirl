// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { SwirlIconSize } from "../swirl-icon.types";
import { SwirlIconColor } from "../swirl-icon";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../swirl-icon.css",
  tag: "swirl-icon-more-vertikal",
})
export class SwirlIconMoreVertikal {
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
              d="M8.00001 13.5167C7.62223 13.5167 7.29445 13.3807 7.01667 13.1087C6.73889 12.8362 6.60001 12.5056 6.60001 12.1167C6.60001 11.7389 6.73889 11.4138 7.01667 11.1413C7.29445 10.8693 7.62223 10.7333 8.00001 10.7333C8.3889 10.7333 8.71956 10.8693 8.99201 11.1413C9.26401 11.4138 9.40001 11.7389 9.40001 12.1167C9.40001 12.5056 9.26401 12.8362 8.99201 13.1087C8.71956 13.3807 8.3889 13.5167 8.00001 13.5167ZM8.00001 9.4C7.62223 9.4 7.29445 9.26112 7.01667 8.98334C6.73889 8.70556 6.60001 8.37778 6.60001 8C6.60001 7.61112 6.73889 7.28045 7.01667 7.008C7.29445 6.736 7.62223 6.6 8.00001 6.6C8.3889 6.6 8.71956 6.736 8.99201 7.008C9.26401 7.28045 9.40001 7.61112 9.40001 8C9.40001 8.37778 9.26401 8.70556 8.99201 8.98334C8.71956 9.26112 8.3889 9.4 8.00001 9.4V9.4ZM8.00001 5.26667C7.62223 5.26667 7.29445 5.13045 7.01667 4.858C6.73889 4.586 6.60001 4.26112 6.60001 3.88334C6.60001 3.49445 6.73889 3.16378 7.01667 2.89134C7.29445 2.61934 7.62223 2.48334 8.00001 2.48334C8.3889 2.48334 8.71956 2.61934 8.99201 2.89134C9.26401 3.16378 9.40001 3.49445 9.40001 3.88334C9.40001 4.26112 9.26401 4.586 8.99201 4.858C8.71956 5.13045 8.3889 5.26667 8.00001 5.26667V5.26667Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {(this.size === 20 || this.size === 24) && (
          <Fragment>
            <path
              d="M12 20.275C11.4333 20.275 10.9417 20.071 10.525 19.663C10.1083 19.2543 9.89999 18.7583 9.89999 18.175C9.89999 17.6083 10.1083 17.1206 10.525 16.712C10.9417 16.304 11.4333 16.1 12 16.1C12.5833 16.1 13.0793 16.304 13.488 16.712C13.896 17.1206 14.1 17.6083 14.1 18.175C14.1 18.7583 13.896 19.2543 13.488 19.663C13.0793 20.071 12.5833 20.275 12 20.275ZM12 14.1C11.4333 14.1 10.9417 13.8916 10.525 13.475C10.1083 13.0583 9.89999 12.5666 9.89999 12C9.89999 11.4166 10.1083 10.9206 10.525 10.512C10.9417 10.104 11.4333 9.89998 12 9.89998C12.5833 9.89998 13.0793 10.104 13.488 10.512C13.896 10.9206 14.1 11.4166 14.1 12C14.1 12.5666 13.896 13.0583 13.488 13.475C13.0793 13.8916 12.5833 14.1 12 14.1ZM12 7.89998C11.4333 7.89998 10.9417 7.69564 10.525 7.28698C10.1083 6.87898 9.89999 6.39164 9.89999 5.82498C9.89999 5.24164 10.1083 4.74564 10.525 4.33698C10.9417 3.92898 11.4333 3.72498 12 3.72498C12.5833 3.72498 13.0793 3.92898 13.488 4.33698C13.896 4.74564 14.1 5.24164 14.1 5.82498C14.1 6.39164 13.896 6.87898 13.488 7.28698C13.0793 7.69564 12.5833 7.89998 12 7.89998Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M14 23.6542C13.3389 23.6542 12.7653 23.4162 12.2792 22.9402C11.793 22.4634 11.55 21.8847 11.55 21.2042C11.55 20.543 11.793 19.9741 12.2792 19.4973C12.7653 19.0213 13.3389 18.7833 14 18.7833C14.6805 18.7833 15.2592 19.0213 15.736 19.4973C16.212 19.9741 16.45 20.543 16.45 21.2042C16.45 21.8847 16.212 22.4634 15.736 22.9402C15.2592 23.4162 14.6805 23.6542 14 23.6542ZM14 16.45C13.3389 16.45 12.7653 16.2069 12.2792 15.7208C11.793 15.2347 11.55 14.6611 11.55 14C11.55 13.3194 11.793 12.7408 12.2792 12.264C12.7653 11.788 13.3389 11.55 14 11.55C14.6805 11.55 15.2592 11.788 15.736 12.264C16.212 12.7408 16.45 13.3194 16.45 14C16.45 14.6611 16.212 15.2347 15.736 15.7208C15.2592 16.2069 14.6805 16.45 14 16.45V16.45ZM14 9.21666C13.3389 9.21666 12.7653 8.97827 12.2792 8.50149C11.793 8.02549 11.55 7.45694 11.55 6.79583C11.55 6.11527 11.793 5.5366 12.2792 5.05983C12.7653 4.58383 13.3389 4.34583 14 4.34583C14.6805 4.34583 15.2592 4.58383 15.736 5.05983C16.212 5.5366 16.45 6.11527 16.45 6.79583C16.45 7.45694 16.212 8.02549 15.736 8.50149C15.2592 8.97827 14.6805 9.21666 14 9.21666V9.21666Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
