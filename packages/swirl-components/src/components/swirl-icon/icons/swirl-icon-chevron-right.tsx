// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { SwirlIconSize } from "../swirl-icon.types";
import { SwirlIconColor } from "../swirl-icon";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../swirl-icon.css",
  tag: "swirl-icon-chevron-right",
})
export class SwirlIconChevronRight {
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
              d="M5.73333 11.6C5.58889 11.4556 5.51666 11.2778 5.51666 11.0667C5.51666 10.8556 5.58889 10.6778 5.73333 10.5333L8.26666 8.00002L5.73333 5.46668C5.58889 5.32224 5.51666 5.14446 5.51666 4.93335C5.51666 4.72224 5.58889 4.54446 5.73333 4.40002C5.87777 4.25557 6.05555 4.18335 6.26666 4.18335C6.47777 4.18335 6.65555 4.25557 6.8 4.40002L9.86666 7.46668C9.94444 7.54446 10 7.62779 10.0333 7.71668C10.0667 7.80557 10.0833 7.90002 10.0833 8.00002C10.0833 8.10002 10.0667 8.19446 10.0333 8.28335C10 8.37224 9.94444 8.45557 9.86666 8.53335L6.8 11.6C6.65555 11.7445 6.47777 11.8167 6.26666 11.8167C6.05555 11.8167 5.87777 11.7445 5.73333 11.6V11.6Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {(this.size === 20 || this.size === 24) && (
          <Fragment>
            <path
              d="M8.59999 17.4C8.38333 17.1834 8.27499 16.9167 8.27499 16.6C8.27499 16.2834 8.38333 16.0167 8.59999 15.8L12.4 12L8.59999 8.20002C8.38333 7.98336 8.27499 7.71669 8.27499 7.40002C8.27499 7.08336 8.38333 6.81669 8.59999 6.60002C8.81666 6.38336 9.08333 6.27502 9.39999 6.27502C9.71666 6.27502 9.98333 6.38336 10.2 6.60002L14.8 11.2C14.9167 11.3167 15 11.4417 15.05 11.575C15.1 11.7084 15.125 11.85 15.125 12C15.125 12.15 15.1 12.2917 15.05 12.425C15 12.5584 14.9167 12.6834 14.8 12.8L10.2 17.4C9.98333 17.6167 9.71666 17.725 9.39999 17.725C9.08333 17.725 8.81666 17.6167 8.59999 17.4Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M10.0333 20.3C9.78056 20.0472 9.65417 19.7361 9.65417 19.3666C9.65417 18.9972 9.78056 18.6861 10.0333 18.4333L14.4667 14L10.0333 9.56663C9.78056 9.31386 9.65417 9.00275 9.65417 8.6333C9.65417 8.26386 9.78056 7.95275 10.0333 7.69997C10.2861 7.44719 10.5972 7.3208 10.9667 7.3208C11.3361 7.3208 11.6472 7.44719 11.9 7.69997L17.2667 13.0666C17.4028 13.2027 17.5 13.3486 17.5583 13.5041C17.6167 13.6597 17.6458 13.825 17.6458 14C17.6458 14.175 17.6167 14.3402 17.5583 14.4958C17.5 14.6514 17.4028 14.7972 17.2667 14.9333L11.9 20.3C11.6472 20.5527 11.3361 20.6791 10.9667 20.6791C10.5972 20.6791 10.2861 20.5527 10.0333 20.3V20.3Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
