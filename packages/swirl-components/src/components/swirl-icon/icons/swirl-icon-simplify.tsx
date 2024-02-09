// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { SwirlIconSize } from "../swirl-icon.types";
import { SwirlIconColor } from "../swirl-icon";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../swirl-icon.css",
  tag: "swirl-icon-simplify",
})
export class SwirlIconSimplify {
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
              d="M9.30002 13.5998L13.2667 12.3665C13.2111 12.2665 13.1306 12.1804 13.025 12.1082C12.9195 12.0359 12.8 11.9998 12.6667 11.9998H9.30002C9.00002 11.9998 8.76113 11.9887 8.58335 11.9665C8.40558 11.9443 8.22224 11.8998 8.03335 11.8332L7.08335 11.5165C6.90558 11.4609 6.7778 11.3498 6.70002 11.1832C6.62224 11.0165 6.61113 10.8443 6.66669 10.6665C6.72224 10.4887 6.83058 10.3582 6.99169 10.2748C7.1528 10.1915 7.32224 10.1776 7.50002 10.2332L8.20002 10.4665C8.38891 10.5221 8.6028 10.5665 8.84169 10.5998C9.08058 10.6332 9.40558 10.6554 9.81669 10.6665H10C10 10.5443 9.96391 10.4276 9.89169 10.3165C9.81946 10.2054 9.73335 10.1332 9.63335 10.0998L5.73335 8.6665H4.66669V12.3332L9.30002 13.5998ZM8.95002 14.8998L4.66669 13.6998C4.5778 13.9887 4.4028 14.2221 4.14169 14.3998C3.88058 14.5776 3.61113 14.6665 3.33335 14.6665H2.00002C1.63335 14.6665 1.31946 14.5359 1.05835 14.2748C0.797243 14.0137 0.666687 13.6998 0.666687 13.3332V8.6665C0.666687 8.29984 0.797243 7.98595 1.05835 7.72484C1.31946 7.46373 1.63335 7.33317 2.00002 7.33317H5.73335C5.81113 7.33317 5.88891 7.3415 5.96669 7.35817C6.04446 7.37484 6.11669 7.39428 6.18335 7.4165L10.1 8.8665C10.4667 8.99984 10.7639 9.23317 10.9917 9.5665C11.2195 9.89984 11.3334 10.2665 11.3334 10.6665H12.6667C13.2222 10.6665 13.6945 10.8498 14.0834 11.2165C14.4722 11.5832 14.6667 12.0665 14.6667 12.6665C14.6667 12.9109 14.6028 13.1026 14.475 13.2415C14.3472 13.3804 14.15 13.4943 13.8834 13.5832L9.71669 14.8832C9.59446 14.9276 9.46669 14.9498 9.33335 14.9498C9.20002 14.9498 9.07224 14.9332 8.95002 14.8998ZM2.00002 13.3332H3.33335V8.6665H2.00002V13.3332Z"
              fill="currentColor"
            />
            <path
              d="M10.5209 5.479L11.6667 7.99984L12.8125 5.479L15.3334 4.33317L12.8125 3.18734L11.6667 0.666504L10.5209 3.18734L8.00002 4.33317L10.5209 5.479Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {(this.size === 20 || this.size === 24) && (
          <Fragment>
            <path
              d="M13.95 20.4L19.9 18.55C19.8167 18.4 19.6958 18.2708 19.5375 18.1625C19.3792 18.0542 19.2 18 19 18H13.95C13.5 18 13.1417 17.9833 12.875 17.95C12.6083 17.9167 12.3333 17.85 12.05 17.75L10.625 17.275C10.3583 17.1917 10.1667 17.025 10.05 16.775C9.93333 16.525 9.91667 16.2667 10 16C10.0833 15.7333 10.2458 15.5375 10.4875 15.4125C10.7292 15.2875 10.9833 15.2667 11.25 15.35L12.3 15.7C12.5833 15.7833 12.9042 15.85 13.2625 15.9C13.6208 15.95 14.1083 15.9833 14.725 16H15C15 15.8167 14.9458 15.6417 14.8375 15.475C14.7292 15.3083 14.6 15.2 14.45 15.15L8.6 13H7V18.5L13.95 20.4ZM13.425 22.35L7 20.55C6.86667 20.9833 6.60417 21.3333 6.2125 21.6C5.82083 21.8667 5.41667 22 5 22H3C2.45 22 1.97917 21.8042 1.5875 21.4125C1.19583 21.0208 1 20.55 1 20V13C1 12.45 1.19583 11.9792 1.5875 11.5875C1.97917 11.1958 2.45 11 3 11H8.6C8.71667 11 8.83333 11.0125 8.95 11.0375C9.06667 11.0625 9.175 11.0917 9.275 11.125L15.15 13.3C15.7 13.5 16.1458 13.85 16.4875 14.35C16.8292 14.85 17 15.4 17 16H19C19.8333 16 20.5417 16.275 21.125 16.825C21.7083 17.375 22 18.1 22 19C22 19.3667 21.9042 19.6542 21.7125 19.8625C21.5208 20.0708 21.225 20.2417 20.825 20.375L14.575 22.325C14.3917 22.3917 14.2 22.425 14 22.425C13.8 22.425 13.6083 22.4 13.425 22.35ZM3 20H5V13H3V20Z"
              fill="currentColor"
            />
            <path
              d="M15.7812 8.21875L17.5 12L19.2188 8.21875L23 6.5L19.2188 4.78125L17.5 1L15.7812 4.78125L12 6.5L15.7812 8.21875Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M16.275 23.7998L23.2167 21.6415C23.1194 21.4665 22.9785 21.3158 22.7937 21.1894C22.609 21.063 22.4 20.9998 22.1667 20.9998H16.275C15.75 20.9998 15.3319 20.9804 15.0208 20.9415C14.7097 20.9026 14.3889 20.8248 14.0583 20.7082L12.3958 20.154C12.0847 20.0568 11.8611 19.8623 11.725 19.5707C11.5889 19.279 11.5694 18.9776 11.6667 18.6665C11.7639 18.3554 11.9535 18.1269 12.2354 17.9811C12.5174 17.8353 12.8139 17.811 13.125 17.9082L14.35 18.3165C14.6805 18.4137 15.0549 18.4915 15.4729 18.5498C15.891 18.6082 16.4597 18.6471 17.1792 18.6665H17.5C17.5 18.4526 17.4368 18.2485 17.3104 18.054C17.184 17.8596 17.0333 17.7332 16.8583 17.6748L10.0333 15.1665H8.16666V21.5832L16.275 23.7998ZM15.6625 26.0748L8.16666 23.9748C8.0111 24.4804 7.70485 24.8887 7.24791 25.1998C6.79096 25.511 6.31943 25.6665 5.83332 25.6665H3.49999C2.85832 25.6665 2.30902 25.438 1.85207 24.9811C1.39513 24.5241 1.16666 23.9748 1.16666 23.3332V15.1665C1.16666 14.5248 1.39513 13.9755 1.85207 13.5186C2.30902 13.0616 2.85832 12.8332 3.49999 12.8332H10.0333C10.1694 12.8332 10.3055 12.8478 10.4417 12.8769C10.5778 12.9061 10.7042 12.9401 10.8208 12.979L17.675 15.5165C18.3167 15.7498 18.8368 16.1582 19.2354 16.7415C19.634 17.3248 19.8333 17.9665 19.8333 18.6665H22.1667C23.1389 18.6665 23.9653 18.9873 24.6458 19.629C25.3264 20.2707 25.6667 21.1165 25.6667 22.1665C25.6667 22.5943 25.5549 22.9297 25.3312 23.1728C25.1076 23.4158 24.7625 23.6151 24.2958 23.7707L17.0042 26.0457C16.7903 26.1235 16.5667 26.1623 16.3333 26.1623C16.1 26.1623 15.8764 26.1332 15.6625 26.0748ZM3.49999 23.3332H5.83332V15.1665H3.49999V23.3332Z"
              fill="currentColor"
            />
            <path
              d="M18.4114 9.58838L20.4167 13.9998L22.4219 9.58838L26.8333 7.58317L22.4219 5.57796L20.4167 1.1665L18.4114 5.57796L14 7.58317L18.4114 9.58838Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
