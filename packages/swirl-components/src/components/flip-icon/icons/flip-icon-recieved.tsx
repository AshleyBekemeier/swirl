// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { FlipIconSize } from "../flip-icon.types";

@Component({
  shadow: true,
  styleUrl: "../flip-icon.css",
  tag: "flip-icon-recieved",
})
export class FlipIconRecieved {
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
        {this.size === 16 && <Fragment><path d="M1.16667 9.16662L3.2929 11.2928C3.68342 11.6834 4.31659 11.6834 4.70711 11.2928L10.5 5.49995C10.7761 5.22381 10.7761 4.7761 10.5 4.49995C10.2239 4.22381 9.77615 4.22381 9.5 4.49995L4 9.99995L2.16667 8.16662C1.89053 7.89048 1.44281 7.89048 1.16667 8.16662C0.890529 8.44276 0.890529 8.89048 1.16667 9.16662Z" fill="currentColor"/><path d="M8 9.33329L7 10.3333L7.95957 11.2928C8.35009 11.6834 8.98325 11.6834 9.37378 11.2928L15.1667 5.49995C15.4428 5.22381 15.4428 4.7761 15.1667 4.49995C14.8905 4.22381 14.4428 4.22381 14.1667 4.49995L8.66667 9.99995L8 9.33329Z" fill="currentColor"/></Fragment>}
        {this.size === 24 && <Fragment><path d="M1.74999 13.75L4.93933 16.9393C5.52512 17.5251 6.47486 17.5251 7.06065 16.9393L15.75 8.24999C16.1642 7.83578 16.1642 7.1642 15.75 6.74999C15.3358 6.33578 14.6642 6.33578 14.25 6.74999L5.99999 15L3.24999 12.25C2.83578 11.8358 2.1642 11.8358 1.74999 12.25C1.33578 12.6642 1.33578 13.3358 1.74999 13.75Z" fill="currentColor"/><path d="M12 14L10.5 15.5L11.9393 16.9393C12.5251 17.5251 13.4749 17.5251 14.0607 16.9393L22.75 8.24999C23.1642 7.83578 23.1642 7.1642 22.75 6.74999C22.3358 6.33578 21.6642 6.33578 21.25 6.74999L13 15L12 14Z" fill="currentColor"/></Fragment>}
        {this.size === 28 && <Fragment><path d="M2.04167 16.0417L5.76256 19.7626C6.44598 20.446 7.55402 20.446 8.23744 19.7626L18.375 9.62501C18.8583 9.14176 18.8583 8.35826 18.375 7.87501C17.8918 7.39176 17.1082 7.39176 16.625 7.87501L7 17.5L3.79167 14.2917C3.30842 13.8084 2.52492 13.8084 2.04167 14.2917C1.55842 14.7749 1.55842 15.5584 2.04167 16.0417Z" fill="currentColor"/><path d="M14 16.3333L12.25 18.0833L13.9292 19.7626C14.6126 20.446 15.7207 20.446 16.4041 19.7626L26.5417 9.62501C27.0249 9.14176 27.0249 8.35826 26.5417 7.87501C26.0584 7.39176 25.2749 7.39176 24.7917 7.87501L15.1667 17.5L14 16.3333Z" fill="currentColor"/></Fragment>}
      </svg>
    );
  }
}
