// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { SwirlIconSize } from "../swirl-icon.types";
import { SwirlIconColor } from "../swirl-icon";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../swirl-icon.css",
  tag: "swirl-icon-keyboard-hide",
})
export class SwirlIconKeyboardHide {
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
        aria-hidden="true"
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
              d="M7.76665 15.1L5.89998 13.2333C5.78887 13.1222 5.76109 13 5.81665 12.8667C5.8722 12.7333 5.97776 12.6667 6.13331 12.6667H9.86665C10.0222 12.6667 10.1278 12.7333 10.1833 12.8667C10.2389 13 10.2111 13.1222 10.1 13.2333L8.23331 15.1C8.16665 15.1667 8.08887 15.2 7.99998 15.2C7.91109 15.2 7.83331 15.1667 7.76665 15.1ZM2.66665 11.3333C2.29998 11.3333 1.98609 11.2028 1.72498 10.9417C1.46387 10.6806 1.33331 10.3667 1.33331 10V3.33333C1.33331 2.96667 1.46387 2.65278 1.72498 2.39167C1.98609 2.13056 2.29998 2 2.66665 2H13.3333C13.7 2 14.0139 2.13056 14.275 2.39167C14.5361 2.65278 14.6666 2.96667 14.6666 3.33333V10C14.6666 10.3667 14.5361 10.6806 14.275 10.9417C14.0139 11.2028 13.7 11.3333 13.3333 11.3333H2.66665ZM2.66665 10H13.3333V3.33333H2.66665V10ZM5.99998 9.33333H9.99998C10.1889 9.33333 10.3472 9.26945 10.475 9.14167C10.6028 9.01389 10.6666 8.85556 10.6666 8.66667C10.6666 8.47778 10.6028 8.31944 10.475 8.19167C10.3472 8.06389 10.1889 8 9.99998 8H5.99998C5.81109 8 5.65276 8.06389 5.52498 8.19167C5.3972 8.31944 5.33331 8.47778 5.33331 8.66667C5.33331 8.85556 5.3972 9.01389 5.52498 9.14167C5.65276 9.26945 5.81109 9.33333 5.99998 9.33333ZM3.99998 5.33333C4.18887 5.33333 4.3472 5.26944 4.47498 5.14167C4.60276 5.01389 4.66665 4.85556 4.66665 4.66667C4.66665 4.47778 4.60276 4.31944 4.47498 4.19167C4.3472 4.06389 4.18887 4 3.99998 4C3.81109 4 3.65276 4.06389 3.52498 4.19167C3.3972 4.31944 3.33331 4.47778 3.33331 4.66667C3.33331 4.85556 3.3972 5.01389 3.52498 5.14167C3.65276 5.26944 3.81109 5.33333 3.99998 5.33333ZM5.99998 5.33333C6.18887 5.33333 6.3472 5.26944 6.47498 5.14167C6.60276 5.01389 6.66665 4.85556 6.66665 4.66667C6.66665 4.47778 6.60276 4.31944 6.47498 4.19167C6.3472 4.06389 6.18887 4 5.99998 4C5.81109 4 5.65276 4.06389 5.52498 4.19167C5.3972 4.31944 5.33331 4.47778 5.33331 4.66667C5.33331 4.85556 5.3972 5.01389 5.52498 5.14167C5.65276 5.26944 5.81109 5.33333 5.99998 5.33333ZM7.99998 5.33333C8.18887 5.33333 8.3472 5.26944 8.47498 5.14167C8.60276 5.01389 8.66665 4.85556 8.66665 4.66667C8.66665 4.47778 8.60276 4.31944 8.47498 4.19167C8.3472 4.06389 8.18887 4 7.99998 4C7.81109 4 7.65276 4.06389 7.52498 4.19167C7.3972 4.31944 7.33331 4.47778 7.33331 4.66667C7.33331 4.85556 7.3972 5.01389 7.52498 5.14167C7.65276 5.26944 7.81109 5.33333 7.99998 5.33333ZM9.99998 5.33333C10.1889 5.33333 10.3472 5.26944 10.475 5.14167C10.6028 5.01389 10.6666 4.85556 10.6666 4.66667C10.6666 4.47778 10.6028 4.31944 10.475 4.19167C10.3472 4.06389 10.1889 4 9.99998 4C9.81109 4 9.65276 4.06389 9.52498 4.19167C9.3972 4.31944 9.33331 4.47778 9.33331 4.66667C9.33331 4.85556 9.3972 5.01389 9.52498 5.14167C9.65276 5.26944 9.81109 5.33333 9.99998 5.33333ZM12 5.33333C12.1889 5.33333 12.3472 5.26944 12.475 5.14167C12.6028 5.01389 12.6666 4.85556 12.6666 4.66667C12.6666 4.47778 12.6028 4.31944 12.475 4.19167C12.3472 4.06389 12.1889 4 12 4C11.8111 4 11.6528 4.06389 11.525 4.19167C11.3972 4.31944 11.3333 4.47778 11.3333 4.66667C11.3333 4.85556 11.3972 5.01389 11.525 5.14167C11.6528 5.26944 11.8111 5.33333 12 5.33333ZM3.99998 7.33333C4.18887 7.33333 4.3472 7.26944 4.47498 7.14167C4.60276 7.01389 4.66665 6.85556 4.66665 6.66667C4.66665 6.47778 4.60276 6.31944 4.47498 6.19167C4.3472 6.06389 4.18887 6 3.99998 6C3.81109 6 3.65276 6.06389 3.52498 6.19167C3.3972 6.31944 3.33331 6.47778 3.33331 6.66667C3.33331 6.85556 3.3972 7.01389 3.52498 7.14167C3.65276 7.26944 3.81109 7.33333 3.99998 7.33333ZM5.99998 7.33333C6.18887 7.33333 6.3472 7.26944 6.47498 7.14167C6.60276 7.01389 6.66665 6.85556 6.66665 6.66667C6.66665 6.47778 6.60276 6.31944 6.47498 6.19167C6.3472 6.06389 6.18887 6 5.99998 6C5.81109 6 5.65276 6.06389 5.52498 6.19167C5.3972 6.31944 5.33331 6.47778 5.33331 6.66667C5.33331 6.85556 5.3972 7.01389 5.52498 7.14167C5.65276 7.26944 5.81109 7.33333 5.99998 7.33333ZM7.99998 7.33333C8.18887 7.33333 8.3472 7.26944 8.47498 7.14167C8.60276 7.01389 8.66665 6.85556 8.66665 6.66667C8.66665 6.47778 8.60276 6.31944 8.47498 6.19167C8.3472 6.06389 8.18887 6 7.99998 6C7.81109 6 7.65276 6.06389 7.52498 6.19167C7.3972 6.31944 7.33331 6.47778 7.33331 6.66667C7.33331 6.85556 7.3972 7.01389 7.52498 7.14167C7.65276 7.26944 7.81109 7.33333 7.99998 7.33333ZM9.99998 7.33333C10.1889 7.33333 10.3472 7.26944 10.475 7.14167C10.6028 7.01389 10.6666 6.85556 10.6666 6.66667C10.6666 6.47778 10.6028 6.31944 10.475 6.19167C10.3472 6.06389 10.1889 6 9.99998 6C9.81109 6 9.65276 6.06389 9.52498 6.19167C9.3972 6.31944 9.33331 6.47778 9.33331 6.66667C9.33331 6.85556 9.3972 7.01389 9.52498 7.14167C9.65276 7.26944 9.81109 7.33333 9.99998 7.33333ZM12 7.33333C12.1889 7.33333 12.3472 7.26944 12.475 7.14167C12.6028 7.01389 12.6666 6.85556 12.6666 6.66667C12.6666 6.47778 12.6028 6.31944 12.475 6.19167C12.3472 6.06389 12.1889 6 12 6C11.8111 6 11.6528 6.06389 11.525 6.19167C11.3972 6.31944 11.3333 6.47778 11.3333 6.66667C11.3333 6.85556 11.3972 7.01389 11.525 7.14167C11.6528 7.26944 11.8111 7.33333 12 7.33333Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {(this.size === 20 || this.size === 24) && (
          <Fragment>
            <path
              d="M11.65 22.65L8.85 19.85C8.68333 19.6833 8.64167 19.5 8.725 19.3C8.80833 19.1 8.96667 19 9.2 19H14.8C15.0333 19 15.1917 19.1 15.275 19.3C15.3583 19.5 15.3167 19.6833 15.15 19.85L12.35 22.65C12.25 22.75 12.1333 22.8 12 22.8C11.8667 22.8 11.75 22.75 11.65 22.65ZM4 17C3.45 17 2.97917 16.8042 2.5875 16.4125C2.19583 16.0208 2 15.55 2 15V5C2 4.45 2.19583 3.97917 2.5875 3.5875C2.97917 3.19583 3.45 3 4 3H20C20.55 3 21.0208 3.19583 21.4125 3.5875C21.8042 3.97917 22 4.45 22 5V15C22 15.55 21.8042 16.0208 21.4125 16.4125C21.0208 16.8042 20.55 17 20 17H4ZM4 15H20V5H4V15ZM9 14H15C15.2833 14 15.5208 13.9042 15.7125 13.7125C15.9042 13.5208 16 13.2833 16 13C16 12.7167 15.9042 12.4792 15.7125 12.2875C15.5208 12.0958 15.2833 12 15 12H9C8.71667 12 8.47917 12.0958 8.2875 12.2875C8.09583 12.4792 8 12.7167 8 13C8 13.2833 8.09583 13.5208 8.2875 13.7125C8.47917 13.9042 8.71667 14 9 14ZM6 8C6.28333 8 6.52083 7.90417 6.7125 7.7125C6.90417 7.52083 7 7.28333 7 7C7 6.71667 6.90417 6.47917 6.7125 6.2875C6.52083 6.09583 6.28333 6 6 6C5.71667 6 5.47917 6.09583 5.2875 6.2875C5.09583 6.47917 5 6.71667 5 7C5 7.28333 5.09583 7.52083 5.2875 7.7125C5.47917 7.90417 5.71667 8 6 8ZM9 8C9.28333 8 9.52083 7.90417 9.7125 7.7125C9.90417 7.52083 10 7.28333 10 7C10 6.71667 9.90417 6.47917 9.7125 6.2875C9.52083 6.09583 9.28333 6 9 6C8.71667 6 8.47917 6.09583 8.2875 6.2875C8.09583 6.47917 8 6.71667 8 7C8 7.28333 8.09583 7.52083 8.2875 7.7125C8.47917 7.90417 8.71667 8 9 8ZM12 8C12.2833 8 12.5208 7.90417 12.7125 7.7125C12.9042 7.52083 13 7.28333 13 7C13 6.71667 12.9042 6.47917 12.7125 6.2875C12.5208 6.09583 12.2833 6 12 6C11.7167 6 11.4792 6.09583 11.2875 6.2875C11.0958 6.47917 11 6.71667 11 7C11 7.28333 11.0958 7.52083 11.2875 7.7125C11.4792 7.90417 11.7167 8 12 8ZM15 8C15.2833 8 15.5208 7.90417 15.7125 7.7125C15.9042 7.52083 16 7.28333 16 7C16 6.71667 15.9042 6.47917 15.7125 6.2875C15.5208 6.09583 15.2833 6 15 6C14.7167 6 14.4792 6.09583 14.2875 6.2875C14.0958 6.47917 14 6.71667 14 7C14 7.28333 14.0958 7.52083 14.2875 7.7125C14.4792 7.90417 14.7167 8 15 8ZM18 8C18.2833 8 18.5208 7.90417 18.7125 7.7125C18.9042 7.52083 19 7.28333 19 7C19 6.71667 18.9042 6.47917 18.7125 6.2875C18.5208 6.09583 18.2833 6 18 6C17.7167 6 17.4792 6.09583 17.2875 6.2875C17.0958 6.47917 17 6.71667 17 7C17 7.28333 17.0958 7.52083 17.2875 7.7125C17.4792 7.90417 17.7167 8 18 8ZM6 11C6.28333 11 6.52083 10.9042 6.7125 10.7125C6.90417 10.5208 7 10.2833 7 10C7 9.71667 6.90417 9.47917 6.7125 9.2875C6.52083 9.09583 6.28333 9 6 9C5.71667 9 5.47917 9.09583 5.2875 9.2875C5.09583 9.47917 5 9.71667 5 10C5 10.2833 5.09583 10.5208 5.2875 10.7125C5.47917 10.9042 5.71667 11 6 11ZM9 11C9.28333 11 9.52083 10.9042 9.7125 10.7125C9.90417 10.5208 10 10.2833 10 10C10 9.71667 9.90417 9.47917 9.7125 9.2875C9.52083 9.09583 9.28333 9 9 9C8.71667 9 8.47917 9.09583 8.2875 9.2875C8.09583 9.47917 8 9.71667 8 10C8 10.2833 8.09583 10.5208 8.2875 10.7125C8.47917 10.9042 8.71667 11 9 11ZM12 11C12.2833 11 12.5208 10.9042 12.7125 10.7125C12.9042 10.5208 13 10.2833 13 10C13 9.71667 12.9042 9.47917 12.7125 9.2875C12.5208 9.09583 12.2833 9 12 9C11.7167 9 11.4792 9.09583 11.2875 9.2875C11.0958 9.47917 11 9.71667 11 10C11 10.2833 11.0958 10.5208 11.2875 10.7125C11.4792 10.9042 11.7167 11 12 11ZM15 11C15.2833 11 15.5208 10.9042 15.7125 10.7125C15.9042 10.5208 16 10.2833 16 10C16 9.71667 15.9042 9.47917 15.7125 9.2875C15.5208 9.09583 15.2833 9 15 9C14.7167 9 14.4792 9.09583 14.2875 9.2875C14.0958 9.47917 14 9.71667 14 10C14 10.2833 14.0958 10.5208 14.2875 10.7125C14.4792 10.9042 14.7167 11 15 11ZM18 11C18.2833 11 18.5208 10.9042 18.7125 10.7125C18.9042 10.5208 19 10.2833 19 10C19 9.71667 18.9042 9.47917 18.7125 9.2875C18.5208 9.09583 18.2833 9 18 9C17.7167 9 17.4792 9.09583 17.2875 9.2875C17.0958 9.47917 17 9.71667 17 10C17 10.2833 17.0958 10.5208 17.2875 10.7125C17.4792 10.9042 17.7167 11 18 11Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M13.5916 26.425L10.325 23.1583C10.1305 22.9639 10.0819 22.75 10.1791 22.5167C10.2764 22.2833 10.4611 22.1667 10.7333 22.1667H17.2666C17.5389 22.1667 17.7236 22.2833 17.8208 22.5167C17.918 22.75 17.8694 22.9639 17.675 23.1583L14.4083 26.425C14.2916 26.5417 14.1555 26.6 14 26.6C13.8444 26.6 13.7083 26.5417 13.5916 26.425ZM4.66665 19.8333C4.02498 19.8333 3.47567 19.6049 3.01873 19.1479C2.56179 18.691 2.33331 18.1417 2.33331 17.5V5.83333C2.33331 5.19167 2.56179 4.64236 3.01873 4.18542C3.47567 3.72847 4.02498 3.5 4.66665 3.5H23.3333C23.975 3.5 24.5243 3.72847 24.9812 4.18542C25.4382 4.64236 25.6666 5.19167 25.6666 5.83333V17.5C25.6666 18.1417 25.4382 18.691 24.9812 19.1479C24.5243 19.6049 23.975 19.8333 23.3333 19.8333H4.66665ZM4.66665 17.5H23.3333V5.83333H4.66665V17.5ZM10.5 16.3333H17.5C17.8305 16.3333 18.1076 16.2215 18.3312 15.9979C18.5548 15.7743 18.6666 15.4972 18.6666 15.1667C18.6666 14.8361 18.5548 14.559 18.3312 14.3354C18.1076 14.1118 17.8305 14 17.5 14H10.5C10.1694 14 9.89234 14.1118 9.66873 14.3354C9.44512 14.559 9.33331 14.8361 9.33331 15.1667C9.33331 15.4972 9.44512 15.7743 9.66873 15.9979C9.89234 16.2215 10.1694 16.3333 10.5 16.3333ZM6.99998 9.33333C7.33054 9.33333 7.60762 9.22153 7.83123 8.99792C8.05484 8.77431 8.16665 8.49722 8.16665 8.16667C8.16665 7.83611 8.05484 7.55903 7.83123 7.33542C7.60762 7.11181 7.33054 7 6.99998 7C6.66942 7 6.39234 7.11181 6.16873 7.33542C5.94512 7.55903 5.83331 7.83611 5.83331 8.16667C5.83331 8.49722 5.94512 8.77431 6.16873 8.99792C6.39234 9.22153 6.66942 9.33333 6.99998 9.33333ZM10.5 9.33333C10.8305 9.33333 11.1076 9.22153 11.3312 8.99792C11.5548 8.77431 11.6666 8.49722 11.6666 8.16667C11.6666 7.83611 11.5548 7.55903 11.3312 7.33542C11.1076 7.11181 10.8305 7 10.5 7C10.1694 7 9.89234 7.11181 9.66873 7.33542C9.44512 7.55903 9.33331 7.83611 9.33331 8.16667C9.33331 8.49722 9.44512 8.77431 9.66873 8.99792C9.89234 9.22153 10.1694 9.33333 10.5 9.33333ZM14 9.33333C14.3305 9.33333 14.6076 9.22153 14.8312 8.99792C15.0548 8.77431 15.1666 8.49722 15.1666 8.16667C15.1666 7.83611 15.0548 7.55903 14.8312 7.33542C14.6076 7.11181 14.3305 7 14 7C13.6694 7 13.3923 7.11181 13.1687 7.33542C12.9451 7.55903 12.8333 7.83611 12.8333 8.16667C12.8333 8.49722 12.9451 8.77431 13.1687 8.99792C13.3923 9.22153 13.6694 9.33333 14 9.33333ZM17.5 9.33333C17.8305 9.33333 18.1076 9.22153 18.3312 8.99792C18.5548 8.77431 18.6666 8.49722 18.6666 8.16667C18.6666 7.83611 18.5548 7.55903 18.3312 7.33542C18.1076 7.11181 17.8305 7 17.5 7C17.1694 7 16.8923 7.11181 16.6687 7.33542C16.4451 7.55903 16.3333 7.83611 16.3333 8.16667C16.3333 8.49722 16.4451 8.77431 16.6687 8.99792C16.8923 9.22153 17.1694 9.33333 17.5 9.33333ZM21 9.33333C21.3305 9.33333 21.6076 9.22153 21.8312 8.99792C22.0548 8.77431 22.1666 8.49722 22.1666 8.16667C22.1666 7.83611 22.0548 7.55903 21.8312 7.33542C21.6076 7.11181 21.3305 7 21 7C20.6694 7 20.3923 7.11181 20.1687 7.33542C19.9451 7.55903 19.8333 7.83611 19.8333 8.16667C19.8333 8.49722 19.9451 8.77431 20.1687 8.99792C20.3923 9.22153 20.6694 9.33333 21 9.33333ZM6.99998 12.8333C7.33054 12.8333 7.60762 12.7215 7.83123 12.4979C8.05484 12.2743 8.16665 11.9972 8.16665 11.6667C8.16665 11.3361 8.05484 11.059 7.83123 10.8354C7.60762 10.6118 7.33054 10.5 6.99998 10.5C6.66942 10.5 6.39234 10.6118 6.16873 10.8354C5.94512 11.059 5.83331 11.3361 5.83331 11.6667C5.83331 11.9972 5.94512 12.2743 6.16873 12.4979C6.39234 12.7215 6.66942 12.8333 6.99998 12.8333ZM10.5 12.8333C10.8305 12.8333 11.1076 12.7215 11.3312 12.4979C11.5548 12.2743 11.6666 11.9972 11.6666 11.6667C11.6666 11.3361 11.5548 11.059 11.3312 10.8354C11.1076 10.6118 10.8305 10.5 10.5 10.5C10.1694 10.5 9.89234 10.6118 9.66873 10.8354C9.44512 11.059 9.33331 11.3361 9.33331 11.6667C9.33331 11.9972 9.44512 12.2743 9.66873 12.4979C9.89234 12.7215 10.1694 12.8333 10.5 12.8333ZM14 12.8333C14.3305 12.8333 14.6076 12.7215 14.8312 12.4979C15.0548 12.2743 15.1666 11.9972 15.1666 11.6667C15.1666 11.3361 15.0548 11.059 14.8312 10.8354C14.6076 10.6118 14.3305 10.5 14 10.5C13.6694 10.5 13.3923 10.6118 13.1687 10.8354C12.9451 11.059 12.8333 11.3361 12.8333 11.6667C12.8333 11.9972 12.9451 12.2743 13.1687 12.4979C13.3923 12.7215 13.6694 12.8333 14 12.8333ZM17.5 12.8333C17.8305 12.8333 18.1076 12.7215 18.3312 12.4979C18.5548 12.2743 18.6666 11.9972 18.6666 11.6667C18.6666 11.3361 18.5548 11.059 18.3312 10.8354C18.1076 10.6118 17.8305 10.5 17.5 10.5C17.1694 10.5 16.8923 10.6118 16.6687 10.8354C16.4451 11.059 16.3333 11.3361 16.3333 11.6667C16.3333 11.9972 16.4451 12.2743 16.6687 12.4979C16.8923 12.7215 17.1694 12.8333 17.5 12.8333ZM21 12.8333C21.3305 12.8333 21.6076 12.7215 21.8312 12.4979C22.0548 12.2743 22.1666 11.9972 22.1666 11.6667C22.1666 11.3361 22.0548 11.059 21.8312 10.8354C21.6076 10.6118 21.3305 10.5 21 10.5C20.6694 10.5 20.3923 10.6118 20.1687 10.8354C19.9451 11.059 19.8333 11.3361 19.8333 11.6667C19.8333 11.9972 19.9451 12.2743 20.1687 12.4979C20.3923 12.7215 20.6694 12.8333 21 12.8333Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}