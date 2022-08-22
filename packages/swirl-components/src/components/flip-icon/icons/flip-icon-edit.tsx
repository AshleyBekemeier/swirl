// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { FlipIconSize } from "../flip-icon.types";

@Component({
  shadow: true,
  styleUrl: "../flip-icon.css",
  tag: "flip-icon-edit",
})
export class FlipIconEdit {
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
        {this.size === 16 && <Fragment><path d="M12.7025 6.06027L9.912 3.29863L10.8312 2.37808C11.0829 2.12603 11.3922 2 11.759 2C12.1254 2 12.4344 2.12603 12.6861 2.37808L13.6054 3.29863C13.8571 3.55068 13.9884 3.8549 13.9993 4.21129C14.0103 4.56723 13.8899 4.87123 13.6382 5.12329L12.7025 6.06027ZM2.6566 14C2.47056 14 2.31473 13.9369 2.1891 13.8106C2.06303 13.6848 2 13.5288 2 13.3425V11.4849C2 11.3973 2.01641 11.3124 2.04924 11.2305C2.08207 11.1481 2.13132 11.074 2.19698 11.0082L8.95993 4.23562L11.7505 7.03014L4.98752 13.8027C4.92186 13.8685 4.8481 13.9178 4.76624 13.9507C4.68395 13.9836 4.59903 14 4.51148 14H2.6566Z" fill="currentColor"/></Fragment>}
        {this.size === 24 && <Fragment><path d="M19.0538 9.09041L14.868 4.94795L16.2469 3.56712C16.6244 3.18904 17.0883 3 17.6385 3C18.1881 3 18.6516 3.18904 19.0292 3.56712L20.408 4.94795C20.7856 5.32603 20.9826 5.78236 20.999 6.31693C21.0154 6.85085 20.8348 7.30685 20.4573 7.68493L19.0538 9.09041ZM3.9849 21C3.70584 21 3.47209 20.9053 3.28365 20.7159C3.09455 20.5272 3 20.2931 3 20.0137V17.2274C3 17.0959 3.02462 16.9687 3.07387 16.8457C3.12311 16.7221 3.19698 16.611 3.29547 16.5123L13.4399 6.35342L17.6257 10.5452L7.48128 20.7041C7.38279 20.8027 7.27215 20.8767 7.14937 20.926C7.02593 20.9753 6.89855 21 6.76723 21H3.9849Z" fill="currentColor"/></Fragment>}
        {this.size === 28 && <Fragment><path d="M22.2294 10.6055L17.346 5.7726L18.9547 4.16164C19.3951 3.72055 19.9363 3.5 20.5783 3.5C21.2194 3.5 21.7602 3.72055 22.2007 4.16164L23.8094 5.7726C24.2498 6.2137 24.4797 6.74608 24.4988 7.36975C24.518 7.99266 24.3073 8.52466 23.8668 8.96575L22.2294 10.6055ZM4.64905 24.5C4.32348 24.5 4.05078 24.3895 3.83093 24.1686C3.61031 23.9484 3.5 23.6753 3.5 23.3493V20.0986C3.5 19.9452 3.52873 19.7968 3.58618 19.6533C3.64363 19.5091 3.72981 19.3795 3.84471 19.2644L15.6799 7.41233L20.5633 12.3027L8.72816 24.1548C8.61325 24.2699 8.48418 24.3562 8.34093 24.4137C8.19691 24.4712 8.0483 24.5 7.8951 24.5H4.64905Z" fill="currentColor"/></Fragment>}
      </svg>
    );
  }
}
