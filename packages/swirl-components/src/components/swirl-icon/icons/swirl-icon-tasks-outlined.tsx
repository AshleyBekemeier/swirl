// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { SwirlIconSize } from "../swirl-icon.types";
import { SwirlIconColor } from "../swirl-icon";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../swirl-icon.css",
  tag: "swirl-icon-tasks-outlined",
})
export class SwirlIconTasksOutlined {
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
              d="M7.06671 9.20004L5.61671 7.75004C5.49449 7.62782 5.34182 7.5696 5.15871 7.57537C4.97515 7.58071 4.82226 7.64448 4.70004 7.76671C4.57782 7.88893 4.51671 8.04448 4.51671 8.23337C4.51671 8.42226 4.57782 8.57782 4.70004 8.70004L6.60004 10.6C6.72226 10.7223 6.87782 10.7834 7.06671 10.7834C7.2556 10.7834 7.41115 10.7223 7.53337 10.6L11.3167 6.81671C11.4389 6.69449 11.4974 6.5416 11.492 6.35804C11.4863 6.17493 11.4223 6.02226 11.3 5.90004C11.1778 5.77782 11.0223 5.71671 10.8334 5.71671C10.6445 5.71671 10.4889 5.77782 10.3667 5.90004L7.06671 9.20004ZM8.00004 14.6667C7.07782 14.6667 6.21115 14.4916 5.40004 14.1414C4.58893 13.7916 3.88337 13.3167 3.28337 12.7167C2.68337 12.1167 2.20849 11.4112 1.85871 10.6C1.50849 9.78893 1.33337 8.92226 1.33337 8.00004C1.33337 7.07782 1.50849 6.21115 1.85871 5.40004C2.20849 4.58893 2.68337 3.88337 3.28337 3.28337C3.88337 2.68337 4.58893 2.20826 5.40004 1.85804C6.21115 1.50826 7.07782 1.33337 8.00004 1.33337C8.92226 1.33337 9.78893 1.50826 10.6 1.85804C11.4112 2.20826 12.1167 2.68337 12.7167 3.28337C13.3167 3.88337 13.7916 4.58893 14.1414 5.40004C14.4916 6.21115 14.6667 7.07782 14.6667 8.00004C14.6667 8.92226 14.4916 9.78893 14.1414 10.6C13.7916 11.4112 13.3167 12.1167 12.7167 12.7167C12.1167 13.3167 11.4112 13.7916 10.6 14.1414C9.78893 14.4916 8.92226 14.6667 8.00004 14.6667ZM8.00004 13.3334C9.47782 13.3334 10.7363 12.814 11.7754 11.7754C12.814 10.7363 13.3334 9.47782 13.3334 8.00004C13.3334 6.52226 12.814 5.26382 11.7754 4.22471C10.7363 3.18604 9.47782 2.66671 8.00004 2.66671C6.52226 2.66671 5.26404 3.18604 4.22537 4.22471C3.18626 5.26382 2.66671 6.52226 2.66671 8.00004C2.66671 9.47782 3.18626 10.7363 4.22537 11.7754C5.26404 12.814 6.52226 13.3334 8.00004 13.3334Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {(this.size === 20 || this.size === 24) && (
          <Fragment>
            <path
              d="M10.6 13.8L8.425 11.625C8.24167 11.4417 8.01267 11.3543 7.738 11.363C7.46267 11.371 7.23333 11.4667 7.05 11.65C6.86667 11.8333 6.775 12.0667 6.775 12.35C6.775 12.6333 6.86667 12.8667 7.05 13.05L9.9 15.9C10.0833 16.0833 10.3167 16.175 10.6 16.175C10.8833 16.175 11.1167 16.0833 11.3 15.9L16.975 10.225C17.1583 10.0417 17.246 9.81233 17.238 9.537C17.2293 9.26233 17.1333 9.03333 16.95 8.85C16.7667 8.66667 16.5333 8.575 16.25 8.575C15.9667 8.575 15.7333 8.66667 15.55 8.85L10.6 13.8ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6873 5.825 19.975 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26267 14.6833 2 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31267 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.31233 8.1 2.787C9.31667 2.26233 10.6167 2 12 2C13.3833 2 14.6833 2.26233 15.9 2.787C17.1167 3.31233 18.175 4.025 19.075 4.925C19.975 5.825 20.6873 6.88333 21.212 8.1C21.7373 9.31667 22 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6873 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6873 15.9 21.212C14.6833 21.7373 13.3833 22 12 22ZM12 20C14.2167 20 16.1043 19.221 17.663 17.663C19.221 16.1043 20 14.2167 20 12C20 9.78333 19.221 7.89567 17.663 6.337C16.1043 4.779 14.2167 4 12 4C9.78333 4 7.896 4.779 6.338 6.337C4.77933 7.89567 4 9.78333 4 12C4 14.2167 4.77933 16.1043 6.338 17.663C7.896 19.221 9.78333 20 12 20Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M12.3667 16.1L9.82921 13.5625C9.61532 13.3487 9.34815 13.2468 9.02771 13.2569C8.70649 13.2662 8.43893 13.3778 8.22504 13.5917C8.01115 13.8056 7.90421 14.0778 7.90421 14.4084C7.90421 14.7389 8.01115 15.0112 8.22504 15.225L11.55 18.55C11.7639 18.7639 12.0362 18.8709 12.3667 18.8709C12.6973 18.8709 12.9695 18.7639 13.1834 18.55L19.8042 11.9292C20.0181 11.7153 20.1204 11.4478 20.111 11.1265C20.1009 10.8061 19.9889 10.5389 19.775 10.325C19.5612 10.1112 19.2889 10.0042 18.9584 10.0042C18.6278 10.0042 18.3556 10.1112 18.1417 10.325L12.3667 16.1ZM14 25.6667C12.3862 25.6667 10.8695 25.3603 9.45004 24.7474C8.0306 24.1353 6.79587 23.3042 5.74587 22.2542C4.69587 21.2042 3.86482 19.9695 3.25271 18.55C2.63982 17.1306 2.33337 15.6139 2.33337 14C2.33337 12.3862 2.63982 10.8695 3.25271 9.45004C3.86482 8.0306 4.69587 6.79587 5.74587 5.74587C6.79587 4.69587 8.0306 3.86443 9.45004 3.25154C10.8695 2.63943 12.3862 2.33337 14 2.33337C15.6139 2.33337 17.1306 2.63943 18.55 3.25154C19.9695 3.86443 21.2042 4.69587 22.2542 5.74587C23.3042 6.79587 24.1353 8.0306 24.7474 9.45004C25.3603 10.8695 25.6667 12.3862 25.6667 14C25.6667 15.6139 25.3603 17.1306 24.7474 18.55C24.1353 19.9695 23.3042 21.2042 22.2542 22.2542C21.2042 23.3042 19.9695 24.1353 18.55 24.7474C17.1306 25.3603 15.6139 25.6667 14 25.6667ZM14 23.3334C16.5862 23.3334 18.7884 22.4245 20.6069 20.6069C22.4245 18.7884 23.3334 16.5862 23.3334 14C23.3334 11.4139 22.4245 9.21165 20.6069 7.39321C18.7884 5.57554 16.5862 4.66671 14 4.66671C11.4139 4.66671 9.21204 5.57554 7.39437 7.39321C5.57593 9.21165 4.66671 11.4139 4.66671 14C4.66671 16.5862 5.57593 18.7884 7.39437 20.6069C9.21204 22.4245 11.4139 23.3334 14 23.3334Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
