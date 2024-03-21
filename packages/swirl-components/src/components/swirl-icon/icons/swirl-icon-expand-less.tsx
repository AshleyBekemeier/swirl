// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { SwirlIconSize } from "../swirl-icon.types";
import { SwirlIconColor } from "../swirl-icon";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../swirl-icon.css",
  tag: "swirl-icon-expand-less",
})
export class SwirlIconExpandLess {
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
              d="M4.39999 9.85C4.25554 9.70556 4.18332 9.52778 4.18332 9.31667C4.18332 9.10556 4.25554 8.92778 4.39999 8.78333L7.46665 5.71667C7.54443 5.63889 7.62776 5.58333 7.71665 5.55C7.80554 5.51667 7.89999 5.5 7.99999 5.5C8.09999 5.5 8.19443 5.51667 8.28332 5.55C8.37221 5.58333 8.45554 5.63889 8.53332 5.71667L11.6167 8.8C11.7611 8.94444 11.8307 9.11667 11.8253 9.31667C11.8195 9.51667 11.7444 9.69444 11.6 9.85C11.4555 9.98333 11.2778 10.05 11.0667 10.05C10.8555 10.05 10.6778 9.98333 10.5333 9.85L7.99999 7.3L5.44999 9.86667C5.30554 10 5.13332 10.0667 4.93332 10.0667C4.73332 10.0667 4.55554 9.99444 4.39999 9.85V9.85Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {(this.size === 20 || this.size === 24) && (
          <Fragment>
            <path
              d="M6.59999 14.775C6.38333 14.5583 6.27499 14.2917 6.27499 13.975C6.27499 13.6583 6.38333 13.3917 6.59999 13.175L11.2 8.575C11.3167 8.45833 11.4417 8.375 11.575 8.325C11.7083 8.275 11.85 8.25 12 8.25C12.15 8.25 12.2917 8.275 12.425 8.325C12.5583 8.375 12.6833 8.45833 12.8 8.575L17.425 13.2C17.6417 13.4167 17.746 13.675 17.738 13.975C17.7293 14.275 17.6167 14.5417 17.4 14.775C17.1833 14.975 16.9167 15.075 16.6 15.075C16.2833 15.075 16.0167 14.975 15.8 14.775L12 10.95L8.17499 14.8C7.95833 15 7.69999 15.1 7.39999 15.1C7.09999 15.1 6.83333 14.9917 6.59999 14.775Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M7.7 17.2375C7.44722 16.9847 7.32083 16.6736 7.32083 16.3042C7.32083 15.9347 7.44722 15.6236 7.7 15.3708L13.0667 10.0042C13.2028 9.86806 13.3486 9.77083 13.5042 9.7125C13.6597 9.65417 13.825 9.625 14 9.625C14.175 9.625 14.3403 9.65417 14.4958 9.7125C14.6514 9.77083 14.7972 9.86806 14.9333 10.0042L20.3292 15.4C20.5819 15.6528 20.7037 15.9542 20.6943 16.3042C20.6842 16.6542 20.5528 16.9653 20.3 17.2375C20.0472 17.4708 19.7361 17.5875 19.3667 17.5875C18.9972 17.5875 18.6861 17.4708 18.4333 17.2375L14 12.775L9.5375 17.2667C9.28472 17.5 8.98333 17.6167 8.63333 17.6167C8.28333 17.6167 7.97222 17.4903 7.7 17.2375V17.2375Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
