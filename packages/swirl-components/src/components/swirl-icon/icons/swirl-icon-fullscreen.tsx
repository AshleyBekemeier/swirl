// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { SwirlIconSize } from "../swirl-icon.types";
import { SwirlIconColor } from "../swirl-icon";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../swirl-icon.css",
  tag: "swirl-icon-fullscreen",
})
export class SwirlIconFullscreen {
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
              d="M3.93333 12.8167C3.72222 12.8167 3.54445 12.7445 3.4 12.6C3.25556 12.4556 3.18333 12.2778 3.18333 12.0667V10C3.18333 9.78891 3.25556 9.60846 3.4 9.45868C3.54445 9.30846 3.72222 9.23335 3.93333 9.23335C4.15556 9.23335 4.33889 9.30846 4.48333 9.45868C4.62778 9.60846 4.7 9.78891 4.7 10V11.3H6C6.21111 11.3 6.39156 11.3722 6.54133 11.5167C6.69156 11.6611 6.76667 11.8445 6.76667 12.0667C6.76667 12.2778 6.69156 12.4556 6.54133 12.6C6.39156 12.7445 6.21111 12.8167 6 12.8167H3.93333ZM3.93333 6.76668C3.72222 6.76668 3.54445 6.69157 3.4 6.54135C3.25556 6.39157 3.18333 6.21113 3.18333 6.00002V3.93335C3.18333 3.72224 3.25556 3.54446 3.4 3.40002C3.54445 3.25557 3.72222 3.18335 3.93333 3.18335H6C6.21111 3.18335 6.39156 3.25557 6.54133 3.40002C6.69156 3.54446 6.76667 3.72224 6.76667 3.93335C6.76667 4.15557 6.69156 4.33891 6.54133 4.48335C6.39156 4.62779 6.21111 4.70002 6 4.70002H4.7V6.00002C4.7 6.21113 4.62778 6.39157 4.48333 6.54135C4.33889 6.69157 4.15556 6.76668 3.93333 6.76668V6.76668ZM10 12.8167C9.78889 12.8167 9.60845 12.7445 9.45867 12.6C9.30845 12.4556 9.23334 12.2778 9.23334 12.0667C9.23334 11.8445 9.30845 11.6611 9.45867 11.5167C9.60845 11.3722 9.78889 11.3 10 11.3H11.3V10C11.3 9.78891 11.3722 9.60846 11.5167 9.45868C11.6611 9.30846 11.8444 9.23335 12.0667 9.23335C12.2778 9.23335 12.4556 9.30846 12.6 9.45868C12.7444 9.60846 12.8167 9.78891 12.8167 10V12.0667C12.8167 12.2778 12.7444 12.4556 12.6 12.6C12.4556 12.7445 12.2778 12.8167 12.0667 12.8167H10ZM12.0667 6.76668C11.8444 6.76668 11.6611 6.69157 11.5167 6.54135C11.3722 6.39157 11.3 6.21113 11.3 6.00002V4.70002H10C9.78889 4.70002 9.60845 4.62779 9.45867 4.48335C9.30845 4.33891 9.23334 4.15557 9.23334 3.93335C9.23334 3.72224 9.30845 3.54446 9.45867 3.40002C9.60845 3.25557 9.78889 3.18335 10 3.18335H12.0667C12.2778 3.18335 12.4556 3.25557 12.6 3.40002C12.7444 3.54446 12.8167 3.72224 12.8167 3.93335V6.00002C12.8167 6.21113 12.7444 6.39157 12.6 6.54135C12.4556 6.69157 12.2778 6.76668 12.0667 6.76668V6.76668Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {(this.size === 20 || this.size === 24) && (
          <Fragment>
            <path
              d="M5.9 19.225C5.58333 19.225 5.31667 19.1167 5.1 18.9C4.88333 18.6834 4.775 18.4167 4.775 18.1V15C4.775 14.6834 4.88333 14.4127 5.1 14.188C5.31667 13.9627 5.58333 13.85 5.9 13.85C6.23333 13.85 6.50833 13.9627 6.725 14.188C6.94167 14.4127 7.05 14.6834 7.05 15V16.95H9C9.31667 16.95 9.58733 17.0584 9.812 17.275C10.0373 17.4917 10.15 17.7667 10.15 18.1C10.15 18.4167 10.0373 18.6834 9.812 18.9C9.58733 19.1167 9.31667 19.225 9 19.225H5.9ZM5.9 10.15C5.58333 10.15 5.31667 10.0374 5.1 9.81202C4.88333 9.58736 4.775 9.31669 4.775 9.00002V5.90002C4.775 5.58336 4.88333 5.31669 5.1 5.10002C5.31667 4.88336 5.58333 4.77502 5.9 4.77502H9C9.31667 4.77502 9.58733 4.88336 9.812 5.10002C10.0373 5.31669 10.15 5.58336 10.15 5.90002C10.15 6.23336 10.0373 6.50836 9.812 6.72502C9.58733 6.94169 9.31667 7.05002 9 7.05002H7.05V9.00002C7.05 9.31669 6.94167 9.58736 6.725 9.81202C6.50833 10.0374 6.23333 10.15 5.9 10.15V10.15ZM15 19.225C14.6833 19.225 14.4127 19.1167 14.188 18.9C13.9627 18.6834 13.85 18.4167 13.85 18.1C13.85 17.7667 13.9627 17.4917 14.188 17.275C14.4127 17.0584 14.6833 16.95 15 16.95H16.95V15C16.95 14.6834 17.0583 14.4127 17.275 14.188C17.4917 13.9627 17.7667 13.85 18.1 13.85C18.4167 13.85 18.6833 13.9627 18.9 14.188C19.1167 14.4127 19.225 14.6834 19.225 15V18.1C19.225 18.4167 19.1167 18.6834 18.9 18.9C18.6833 19.1167 18.4167 19.225 18.1 19.225H15ZM18.1 10.15C17.7667 10.15 17.4917 10.0374 17.275 9.81202C17.0583 9.58736 16.95 9.31669 16.95 9.00002V7.05002H15C14.6833 7.05002 14.4127 6.94169 14.188 6.72502C13.9627 6.50836 13.85 6.23336 13.85 5.90002C13.85 5.58336 13.9627 5.31669 14.188 5.10002C14.4127 4.88336 14.6833 4.77502 15 4.77502H18.1C18.4167 4.77502 18.6833 4.88336 18.9 5.10002C19.1167 5.31669 19.225 5.58336 19.225 5.90002V9.00002C19.225 9.31669 19.1167 9.58736 18.9 9.81202C18.6833 10.0374 18.4167 10.15 18.1 10.15V10.15Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M6.88333 22.4291C6.51389 22.4291 6.20278 22.3027 5.95 22.05C5.69722 21.7972 5.57083 21.4861 5.57083 21.1166V17.5C5.57083 17.1305 5.69722 16.8147 5.95 16.5526C6.20278 16.2897 6.51389 16.1583 6.88333 16.1583C7.27222 16.1583 7.59305 16.2897 7.84583 16.5526C8.09861 16.8147 8.225 17.1305 8.225 17.5V19.775H10.5C10.8694 19.775 11.1852 19.9014 11.4473 20.1541C11.7102 20.4069 11.8417 20.7277 11.8417 21.1166C11.8417 21.4861 11.7102 21.7972 11.4473 22.05C11.1852 22.3027 10.8694 22.4291 10.5 22.4291H6.88333ZM6.88333 11.8416C6.51389 11.8416 6.20278 11.7102 5.95 11.4473C5.69722 11.1852 5.57083 10.8694 5.57083 10.5V6.8833C5.57083 6.51386 5.69722 6.20274 5.95 5.94997C6.20278 5.69719 6.51389 5.5708 6.88333 5.5708H10.5C10.8694 5.5708 11.1852 5.69719 11.4473 5.94997C11.7102 6.20274 11.8417 6.51386 11.8417 6.8833C11.8417 7.27219 11.7102 7.59302 11.4473 7.8458C11.1852 8.09858 10.8694 8.22497 10.5 8.22497H8.225V10.5C8.225 10.8694 8.09861 11.1852 7.84583 11.4473C7.59305 11.7102 7.27222 11.8416 6.88333 11.8416V11.8416ZM17.5 22.4291C17.1306 22.4291 16.8148 22.3027 16.5527 22.05C16.2898 21.7972 16.1583 21.4861 16.1583 21.1166C16.1583 20.7277 16.2898 20.4069 16.5527 20.1541C16.8148 19.9014 17.1306 19.775 17.5 19.775H19.775V17.5C19.775 17.1305 19.9014 16.8147 20.1542 16.5526C20.4069 16.2897 20.7278 16.1583 21.1167 16.1583C21.4861 16.1583 21.7972 16.2897 22.05 16.5526C22.3028 16.8147 22.4292 17.1305 22.4292 17.5V21.1166C22.4292 21.4861 22.3028 21.7972 22.05 22.05C21.7972 22.3027 21.4861 22.4291 21.1167 22.4291H17.5ZM21.1167 11.8416C20.7278 11.8416 20.4069 11.7102 20.1542 11.4473C19.9014 11.1852 19.775 10.8694 19.775 10.5V8.22497H17.5C17.1306 8.22497 16.8148 8.09858 16.5527 7.8458C16.2898 7.59302 16.1583 7.27219 16.1583 6.8833C16.1583 6.51386 16.2898 6.20274 16.5527 5.94997C16.8148 5.69719 17.1306 5.5708 17.5 5.5708H21.1167C21.4861 5.5708 21.7972 5.69719 22.05 5.94997C22.3028 6.20274 22.4292 6.51386 22.4292 6.8833V10.5C22.4292 10.8694 22.3028 11.1852 22.05 11.4473C21.7972 11.7102 21.4861 11.8416 21.1167 11.8416V11.8416Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
