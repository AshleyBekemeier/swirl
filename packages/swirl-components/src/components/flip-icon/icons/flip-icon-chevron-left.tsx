// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { FlipIconSize } from "../flip-icon.types";

@Component({
  shadow: true,
  styleUrl: "../flip-icon.css",
  tag: "flip-icon-chevron-left",
})
export class FlipIconChevronLeft {
  @Prop() size: FlipIconSize = 24;

  render() {
    return (
      <svg
        class="flip-icon"
        fill="none"
        height={this.size}
        part="icon"
        viewBox={`0 0 ${this.size} ${this.size}`}
        width={this.size}
        xmlns="http://www.w3.org/2000/svg"
      >
        {this.size === 16 && <Fragment><path d="M8.8 11.6L5.73333 8.53335C5.65555 8.45557 5.6 8.37224 5.56666 8.28335C5.53333 8.19446 5.51666 8.10002 5.51666 8.00002C5.51666 7.90002 5.53333 7.80557 5.56666 7.71668C5.6 7.62779 5.65555 7.54446 5.73333 7.46668L8.8 4.40002C8.94444 4.25557 9.12222 4.18335 9.33333 4.18335C9.54444 4.18335 9.72222 4.25557 9.86666 4.40002C10.0111 4.54446 10.0833 4.72224 10.0833 4.93335C10.0833 5.14446 10.0111 5.32224 9.86666 5.46668L7.33333 8.00002L9.86666 10.5333C10.0111 10.6778 10.0833 10.8556 10.0833 11.0667C10.0833 11.2778 10.0111 11.4556 9.86666 11.6C9.72222 11.7445 9.54444 11.8167 9.33333 11.8167C9.12222 11.8167 8.94444 11.7445 8.8 11.6V11.6Z" fill="currentColor"/></Fragment>}
        {this.size === 24 && <Fragment><path d="M13.2 17.4L8.59999 12.8C8.48333 12.6834 8.39999 12.5584 8.34999 12.425C8.29999 12.2917 8.27499 12.15 8.27499 12C8.27499 11.85 8.29999 11.7084 8.34999 11.575C8.39999 11.4417 8.48333 11.3167 8.59999 11.2L13.2 6.60002C13.4167 6.38336 13.6833 6.27502 14 6.27502C14.3167 6.27502 14.5833 6.38336 14.8 6.60002C15.0167 6.81669 15.125 7.08336 15.125 7.40002C15.125 7.71669 15.0167 7.98336 14.8 8.20002L11 12L14.8 15.8C15.0167 16.0167 15.125 16.2834 15.125 16.6C15.125 16.9167 15.0167 17.1834 14.8 17.4C14.5833 17.6167 14.3167 17.725 14 17.725C13.6833 17.725 13.4167 17.6167 13.2 17.4Z" fill="currentColor"/></Fragment>}
        {this.size === 28 && <Fragment><path d="M15.4 20.3L10.0333 14.9333C9.89723 14.7972 9.80001 14.6514 9.74168 14.4958C9.68334 14.3402 9.65417 14.175 9.65417 14C9.65417 13.825 9.68334 13.6597 9.74168 13.5041C9.80001 13.3486 9.89723 13.2027 10.0333 13.0666L15.4 7.69997C15.6528 7.44719 15.9639 7.3208 16.3333 7.3208C16.7028 7.3208 17.0139 7.44719 17.2667 7.69997C17.5195 7.95275 17.6458 8.26386 17.6458 8.6333C17.6458 9.00275 17.5195 9.31386 17.2667 9.56663L12.8333 14L17.2667 18.4333C17.5195 18.6861 17.6458 18.9972 17.6458 19.3666C17.6458 19.7361 17.5195 20.0472 17.2667 20.3C17.0139 20.5527 16.7028 20.6791 16.3333 20.6791C15.9639 20.6791 15.6528 20.5527 15.4 20.3V20.3Z" fill="currentColor"/></Fragment>}
      </svg>
    );
  }
}
