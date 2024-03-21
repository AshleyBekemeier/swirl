// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { SwirlIconSize } from "../swirl-icon.types";
import { SwirlIconColor } from "../swirl-icon";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../swirl-icon.css",
  tag: "swirl-icon-cancel",
})
export class SwirlIconCancel {
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
              d="M8 1.33337C4.31334 1.33337 1.33334 4.31337 1.33334 8.00004C1.33334 11.6867 4.31334 14.6667 8 14.6667C11.6867 14.6667 14.6667 11.6867 14.6667 8.00004C14.6667 4.31337 11.6867 1.33337 8 1.33337ZM10.8667 10.8667C10.6067 11.1267 10.1867 11.1267 9.92667 10.8667L8 8.94004L6.07334 10.8667C5.81334 11.1267 5.39334 11.1267 5.13334 10.8667C4.87334 10.6067 4.87334 10.1867 5.13334 9.92671L7.06 8.00004L5.13334 6.07337C4.87334 5.81337 4.87334 5.39337 5.13334 5.13337C5.39334 4.87337 5.81334 4.87337 6.07334 5.13337L8 7.06004L9.92667 5.13337C10.1867 4.87337 10.6067 4.87337 10.8667 5.13337C11.1267 5.39337 11.1267 5.81337 10.8667 6.07337L8.94 8.00004L10.8667 9.92671C11.12 10.18 11.12 10.6067 10.8667 10.8667Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {(this.size === 20 || this.size === 24) && (
          <Fragment>
            <path
              d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM16.3 16.3C15.91 16.69 15.28 16.69 14.89 16.3L12 13.41L9.11 16.3C8.72 16.69 8.09 16.69 7.7 16.3C7.31 15.91 7.31 15.28 7.7 14.89L10.59 12L7.7 9.11C7.31 8.72 7.31 8.09 7.7 7.7C8.09 7.31 8.72 7.31 9.11 7.7L12 10.59L14.89 7.7C15.28 7.31 15.91 7.31 16.3 7.7C16.69 8.09 16.69 8.72 16.3 9.11L13.41 12L16.3 14.89C16.68 15.27 16.68 15.91 16.3 16.3Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M14 2.33337C7.54834 2.33337 2.33334 7.54837 2.33334 14C2.33334 20.4517 7.54834 25.6667 14 25.6667C20.4517 25.6667 25.6667 20.4517 25.6667 14C25.6667 7.54837 20.4517 2.33337 14 2.33337ZM19.0167 19.0167C18.5617 19.4717 17.8267 19.4717 17.3717 19.0167L14 15.645L10.6283 19.0167C10.1733 19.4717 9.43834 19.4717 8.98334 19.0167C8.52834 18.5617 8.52834 17.8267 8.98334 17.3717L12.355 14L8.98334 10.6284C8.52834 10.1734 8.52834 9.43837 8.98334 8.98337C9.43834 8.52837 10.1733 8.52837 10.6283 8.98337L14 12.355L17.3717 8.98337C17.8267 8.52837 18.5617 8.52837 19.0167 8.98337C19.4717 9.43837 19.4717 10.1734 19.0167 10.6284L15.645 14L19.0167 17.3717C19.46 17.815 19.46 18.5617 19.0167 19.0167Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
