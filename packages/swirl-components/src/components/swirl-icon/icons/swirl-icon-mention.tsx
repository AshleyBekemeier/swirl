// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { SwirlIconSize } from "../swirl-icon.types";
import { SwirlIconColor } from "../swirl-icon";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../swirl-icon.css",
  tag: "swirl-icon-mention",
})
export class SwirlIconMention {
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
              d="M8.00001 14.7833C7.06668 14.7833 6.1889 14.6056 5.36668 14.25C4.54445 13.8945 3.8249 13.4085 3.20801 12.792C2.59156 12.1751 2.10556 11.4556 1.75001 10.6333C1.39445 9.81112 1.21667 8.93334 1.21667 8.00001C1.21667 7.06668 1.39445 6.1889 1.75001 5.36668C2.10556 4.54445 2.59156 3.8249 3.20801 3.20801C3.8249 2.59156 4.54445 2.10556 5.36668 1.75001C6.1889 1.39445 7.06668 1.21667 8.00001 1.21667C8.93334 1.21667 9.81112 1.39445 10.6333 1.75001C11.4556 2.10556 12.1751 2.59156 12.792 3.20801C13.4085 3.8249 13.8945 4.54445 14.25 5.36668C14.6056 6.1889 14.7833 7.06668 14.7833 8.00001V8.96668C14.7833 9.65556 14.5529 10.2333 14.092 10.7C13.6307 11.1667 13.0556 11.4 12.3667 11.4C11.9556 11.4 11.5749 11.3085 11.2247 11.1253C10.8749 10.9418 10.5889 10.7 10.3667 10.4C10.0778 10.7111 9.73068 10.9556 9.32534 11.1333C8.91956 11.3111 8.47779 11.4 8.00001 11.4C7.06668 11.4 6.26667 11.0696 5.60001 10.4087C4.93334 9.74734 4.60001 8.94445 4.60001 8.00001C4.60001 7.06668 4.93334 6.26667 5.60001 5.60001C6.26667 4.93334 7.06668 4.60001 8.00001 4.60001C8.94445 4.60001 9.74734 4.93045 10.4087 5.59134C11.0696 6.25268 11.4 7.05556 11.4 8.00001V8.93334C11.4 9.24445 11.4945 9.4889 11.6833 9.66668C11.8722 9.84445 12.1 9.93334 12.3667 9.93334C12.6222 9.93334 12.8471 9.84445 13.0413 9.66668C13.236 9.4889 13.3333 9.24445 13.3333 8.93334V8.00001C13.3333 6.54445 12.8082 5.29156 11.758 4.24134C10.7082 3.19156 9.45556 2.66667 8.00001 2.66667C6.54445 2.66667 5.29156 3.19156 4.24134 4.24134C3.19156 5.29156 2.66667 6.54445 2.66667 8.00001C2.66667 9.45556 3.19156 10.7082 4.24134 11.758C5.29156 12.8082 6.54445 13.3333 8.00001 13.3333H10.6C10.8111 13.3333 10.9862 13.4027 11.1253 13.5413C11.264 13.6805 11.3333 13.8556 11.3333 14.0667C11.3333 14.2667 11.264 14.4362 11.1253 14.5753C10.9862 14.714 10.8111 14.7833 10.6 14.7833H8.00001ZM8.00001 9.93334C8.53334 9.93334 8.9889 9.74445 9.36668 9.36668C9.74445 8.9889 9.93334 8.53334 9.93334 8.00001C9.93334 7.46668 9.74445 7.01112 9.36668 6.63334C8.9889 6.25556 8.53334 6.06668 8.00001 6.06668C7.46668 6.06668 7.01112 6.25556 6.63334 6.63334C6.25556 7.01112 6.06668 7.46668 6.06668 8.00001C6.06668 8.53334 6.25556 8.9889 6.63334 9.36668C7.01112 9.74445 7.46668 9.93334 8.00001 9.93334Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {(this.size === 20 || this.size === 24) && (
          <Fragment>
            <path
              d="M12 22.175C10.6 22.175 9.28335 21.9083 8.05001 21.375C6.81668 20.8417 5.73735 20.1127 4.81201 19.188C3.88735 18.2627 3.15835 17.1833 2.62501 15.95C2.09168 14.7167 1.82501 13.4 1.82501 12C1.82501 10.6 2.09168 9.28335 2.62501 8.05001C3.15835 6.81668 3.88735 5.73735 4.81201 4.81201C5.73735 3.88735 6.81668 3.15835 8.05001 2.62501C9.28335 2.09168 10.6 1.82501 12 1.82501C13.4 1.82501 14.7167 2.09168 15.95 2.62501C17.1833 3.15835 18.2627 3.88735 19.188 4.81201C20.1127 5.73735 20.8417 6.81668 21.375 8.05001C21.9083 9.28335 22.175 10.6 22.175 12V13.45C22.175 14.4833 21.8293 15.35 21.138 16.05C20.446 16.75 19.5833 17.1 18.55 17.1C17.9333 17.1 17.3623 16.9627 16.837 16.688C16.3123 16.4127 15.8833 16.05 15.55 15.6C15.1167 16.0667 14.596 16.4333 13.988 16.7C13.3793 16.9667 12.7167 17.1 12 17.1C10.6 17.1 9.40001 16.6043 8.40001 15.613C7.40001 14.621 6.90001 13.4167 6.90001 12C6.90001 10.6 7.40001 9.40001 8.40001 8.40001C9.40001 7.40001 10.6 6.90001 12 6.90001C13.4167 6.90001 14.621 7.39568 15.613 8.38701C16.6043 9.37901 17.1 10.5833 17.1 12V13.4C17.1 13.8667 17.2417 14.2333 17.525 14.5C17.8083 14.7667 18.15 14.9 18.55 14.9C18.9333 14.9 19.2707 14.7667 19.562 14.5C19.854 14.2333 20 13.8667 20 13.4V12C20 9.81668 19.2123 7.93735 17.637 6.36201C16.0623 4.78735 14.1833 4.00001 12 4.00001C9.81668 4.00001 7.93735 4.78735 6.36201 6.36201C4.78735 7.93735 4.00001 9.81668 4.00001 12C4.00001 14.1833 4.78735 16.0623 6.36201 17.637C7.93735 19.2123 9.81668 20 12 20H15.9C16.2167 20 16.4793 20.104 16.688 20.312C16.896 20.5207 17 20.7833 17 21.1C17 21.4 16.896 21.6543 16.688 21.863C16.4793 22.071 16.2167 22.175 15.9 22.175H12ZM12 14.9C12.8 14.9 13.4833 14.6167 14.05 14.05C14.6167 13.4833 14.9 12.8 14.9 12C14.9 11.2 14.6167 10.5167 14.05 9.95001C13.4833 9.38335 12.8 9.10001 12 9.10001C11.2 9.10001 10.5167 9.38335 9.95001 9.95001C9.38335 10.5167 9.10001 11.2 9.10001 12C9.10001 12.8 9.38335 13.4833 9.95001 14.05C10.5167 14.6167 11.2 14.9 12 14.9Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M14 25.8708C12.3667 25.8708 10.8306 25.5597 9.39168 24.9375C7.95279 24.3153 6.69357 23.4648 5.61401 22.386C4.53524 21.3064 3.68474 20.0472 3.06251 18.6083C2.44029 17.1694 2.12918 15.6333 2.12918 14C2.12918 12.3667 2.44029 10.8305 3.06251 9.39165C3.68474 7.95276 4.53524 6.69354 5.61401 5.61398C6.69357 4.53521 7.95279 3.68471 9.39168 3.06248C10.8306 2.44026 12.3667 2.12915 14 2.12915C15.6333 2.12915 17.1695 2.44026 18.6083 3.06248C20.0472 3.68471 21.3065 4.53521 22.386 5.61398C23.4648 6.69354 24.3153 7.95276 24.9375 9.39165C25.5597 10.8305 25.8708 12.3667 25.8708 14V15.6916C25.8708 16.8972 25.4676 17.9083 24.661 18.725C23.8537 19.5416 22.8472 19.95 21.6417 19.95C20.9222 19.95 20.2561 19.7898 19.6432 19.4693C19.0311 19.1481 18.5306 18.725 18.1417 18.2C17.6361 18.7444 17.0287 19.1722 16.3193 19.4833C15.6092 19.7944 14.8361 19.95 14 19.95C12.3667 19.95 10.9667 19.3717 9.80001 18.2151C8.63335 17.0578 8.05001 15.6528 8.05001 14C8.05001 12.3667 8.63335 10.9666 9.80001 9.79998C10.9667 8.63332 12.3667 8.04998 14 8.04998C15.6528 8.04998 17.0578 8.62826 18.2152 9.78482C19.3717 10.9422 19.95 12.3472 19.95 14V15.6333C19.95 16.1778 20.1153 16.6055 20.4458 16.9167C20.7764 17.2278 21.175 17.3833 21.6417 17.3833C22.0889 17.3833 22.4825 17.2278 22.8223 16.9167C23.163 16.6055 23.3333 16.1778 23.3333 15.6333V14C23.3333 11.4528 22.4144 9.26021 20.5765 7.42232C18.7394 5.58521 16.5472 4.66665 14 4.66665C11.4528 4.66665 9.26024 5.58521 7.42235 7.42232C5.58524 9.26021 4.66668 11.4528 4.66668 14C4.66668 16.5472 5.58524 18.7394 7.42235 20.5765C9.26024 22.4144 11.4528 23.3333 14 23.3333H18.55C18.9195 23.3333 19.2259 23.4546 19.4693 23.6973C19.712 23.9408 19.8333 24.2472 19.8333 24.6166C19.8333 24.9666 19.712 25.2634 19.4693 25.5068C19.2259 25.7495 18.9195 25.8708 18.55 25.8708H14ZM14 17.3833C14.9333 17.3833 15.7306 17.0528 16.3917 16.3917C17.0528 15.7305 17.3833 14.9333 17.3833 14C17.3833 13.0667 17.0528 12.2694 16.3917 11.6083C15.7306 10.9472 14.9333 10.6167 14 10.6167C13.0667 10.6167 12.2695 10.9472 11.6083 11.6083C10.9472 12.2694 10.6167 13.0667 10.6167 14C10.6167 14.9333 10.9472 15.7305 11.6083 16.3917C12.2695 17.0528 13.0667 17.3833 14 17.3833Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
