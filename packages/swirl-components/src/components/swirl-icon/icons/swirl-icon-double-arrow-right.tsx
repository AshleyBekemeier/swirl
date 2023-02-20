// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { SwirlIconSize } from "../swirl-icon.types";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../swirl-icon.css",
  tag: "swirl-icon-double-arrow-right",
})
export class SwirlIconDoubleArrowRight {
  @Prop() size: SwirlIconSize = 24;

  render() {
    const viewBoxSize = this.size === 20 ? 24 : this.size;

    const className = classnames("swirl-icon", `swirl-icon--size-${this.size}`);

    return (
      <svg
        class={className}
        fill="none"
        height={this.size}
        part="icon"
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        width={this.size}
        xmlns="http://www.w3.org/2000/svg"
      >
        {this.size === 16 && (
          <Fragment>
            <path
              d="M4.08503 11.5291C3.9628 11.4068 3.90169 11.2513 3.90169 11.0624C3.90169 10.8735 3.9628 10.7179 4.08503 10.5957L6.66836 7.99572L4.08503 5.39572C3.9628 5.2735 3.89903 5.12061 3.89369 4.93705C3.88792 4.75394 3.95169 4.59572 4.08503 4.46239C4.20725 4.34016 4.3628 4.27905 4.55169 4.27905C4.74058 4.27905 4.89614 4.34016 5.01836 4.46239L8.08503 7.52905C8.15169 7.59572 8.19903 7.66794 8.22703 7.74572C8.25458 7.8235 8.26836 7.90683 8.26836 7.99572C8.26836 8.08461 8.25458 8.16794 8.22703 8.24572C8.19903 8.3235 8.15169 8.39572 8.08503 8.46239L5.01836 11.5291C4.89614 11.6513 4.74325 11.7151 4.55969 11.7204C4.37658 11.7262 4.21836 11.6624 4.08503 11.5291ZM8.48503 11.5291C8.3628 11.4068 8.30169 11.2513 8.30169 11.0624C8.30169 10.8735 8.3628 10.7179 8.48503 10.5957L11.0684 7.99572L8.48503 5.39572C8.3628 5.2735 8.2988 5.12061 8.29303 4.93705C8.28769 4.75394 8.35169 4.59572 8.48503 4.46239C8.60725 4.34016 8.7628 4.27905 8.95169 4.27905C9.14058 4.27905 9.29614 4.34016 9.41836 4.46239L12.485 7.52905C12.5517 7.59572 12.5988 7.66794 12.6264 7.74572C12.6544 7.8235 12.6684 7.90683 12.6684 7.99572C12.6684 8.08461 12.6544 8.16794 12.6264 8.24572C12.5988 8.3235 12.5517 8.39572 12.485 8.46239L9.41836 11.5291C9.29614 11.6513 9.14347 11.7151 8.96036 11.7204C8.7768 11.7262 8.61836 11.6624 8.48503 11.5291Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {(this.size === 20 || this.size === 24) && (
          <Fragment>
            <path
              d="M6.12754 17.2937C5.94421 17.1104 5.85254 16.877 5.85254 16.5937C5.85254 16.3104 5.94421 16.077 6.12754 15.8937L10.0025 11.9937L6.12754 8.0937C5.94421 7.91037 5.84854 7.68103 5.84054 7.4057C5.83187 7.13103 5.92754 6.8937 6.12754 6.6937C6.31087 6.51037 6.54421 6.4187 6.82754 6.4187C7.11087 6.4187 7.34421 6.51037 7.52754 6.6937L12.1275 11.2937C12.2275 11.3937 12.2985 11.502 12.3405 11.6187C12.3819 11.7354 12.4025 11.8604 12.4025 11.9937C12.4025 12.127 12.3819 12.252 12.3405 12.3687C12.2985 12.4854 12.2275 12.5937 12.1275 12.6937L7.52754 17.2937C7.34421 17.477 7.11487 17.5727 6.83954 17.5807C6.56487 17.5894 6.32754 17.4937 6.12754 17.2937ZM12.7275 17.2937C12.5442 17.1104 12.4525 16.877 12.4525 16.5937C12.4525 16.3104 12.5442 16.077 12.7275 15.8937L16.6025 11.9937L12.7275 8.0937C12.5442 7.91037 12.4482 7.68103 12.4395 7.4057C12.4315 7.13103 12.5275 6.8937 12.7275 6.6937C12.9109 6.51037 13.1442 6.4187 13.4275 6.4187C13.7109 6.4187 13.9442 6.51037 14.1275 6.6937L18.7275 11.2937C18.8275 11.3937 18.8982 11.502 18.9395 11.6187C18.9815 11.7354 19.0025 11.8604 19.0025 11.9937C19.0025 12.127 18.9815 12.252 18.9395 12.3687C18.8982 12.4854 18.8275 12.5937 18.7275 12.6937L14.1275 17.2937C13.9442 17.477 13.7152 17.5727 13.4405 17.5807C13.1652 17.5894 12.9275 17.4937 12.7275 17.2937Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M7.14879 20.176C6.93491 19.9621 6.82796 19.6899 6.82796 19.3594C6.82796 19.0288 6.93491 18.7566 7.14879 18.5427L11.6696 13.9927L7.14879 9.44269C6.93491 9.2288 6.82329 8.96125 6.81396 8.64003C6.80385 8.31958 6.91546 8.04269 7.14879 7.80936C7.36268 7.59547 7.63491 7.48853 7.96546 7.48853C8.29602 7.48853 8.56824 7.59547 8.78213 7.80936L14.1488 13.176C14.2655 13.2927 14.3483 13.4191 14.3973 13.5552C14.4455 13.6913 14.4696 13.8371 14.4696 13.9927C14.4696 14.1482 14.4455 14.2941 14.3973 14.4302C14.3483 14.5663 14.2655 14.6927 14.1488 14.8094L8.78213 20.176C8.56824 20.3899 8.30068 20.5015 7.97946 20.5109C7.65902 20.521 7.38213 20.4094 7.14879 20.176ZM14.8488 20.176C14.6349 19.9621 14.528 19.6899 14.528 19.3594C14.528 19.0288 14.6349 18.7566 14.8488 18.5427L19.3696 13.9927L14.8488 9.44269C14.6349 9.2288 14.5229 8.96125 14.5128 8.64003C14.5035 8.31958 14.6155 8.04269 14.8488 7.80936C15.0627 7.59547 15.3349 7.48853 15.6655 7.48853C15.996 7.48853 16.2682 7.59547 16.4821 7.80936L21.8488 13.176C21.9655 13.2927 22.0479 13.4191 22.0961 13.5552C22.1451 13.6913 22.1696 13.8371 22.1696 13.9927C22.1696 14.1482 22.1451 14.2941 22.0961 14.4302C22.0479 14.5663 21.9655 14.6927 21.8488 14.8094L16.4821 20.176C16.2682 20.3899 16.0011 20.5015 15.6806 20.5109C15.3594 20.521 15.0821 20.4094 14.8488 20.176Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
