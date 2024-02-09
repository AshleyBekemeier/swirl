// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { SwirlIconSize } from "../swirl-icon.types";
import { SwirlIconColor } from "../swirl-icon";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../swirl-icon.css",
  tag: "swirl-icon-photo-camera",
})
export class SwirlIconPhotoCamera {
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
              d="M7.99998 11.6667C8.83331 11.6667 9.54176 11.3751 10.1253 10.792C10.7084 10.2084 11 9.5 11 8.66667C11 7.83333 10.7084 7.12489 10.1253 6.54133C9.54176 5.95822 8.83331 5.66667 7.99998 5.66667C7.16665 5.66667 6.4582 5.95822 5.87465 6.54133C5.29154 7.12489 4.99998 7.83333 4.99998 8.66667C4.99998 9.5 5.29154 10.2084 5.87465 10.792C6.4582 11.3751 7.16665 11.6667 7.99998 11.6667ZM2.66665 14C2.29998 14 1.9862 13.8696 1.72531 13.6087C1.46398 13.3473 1.33331 13.0333 1.33331 12.6667V4.66667C1.33331 4.3 1.46398 3.98622 1.72531 3.72533C1.9862 3.464 2.29998 3.33333 2.66665 3.33333H4.76665L5.59998 2.43333C5.7222 2.28889 5.86931 2.18044 6.04131 2.108C6.21376 2.036 6.39442 2 6.58331 2H9.41665C9.60553 2 9.7862 2.036 9.95865 2.108C10.1306 2.18044 10.2778 2.28889 10.4 2.43333L11.2333 3.33333H13.3333C13.7 3.33333 14.014 3.464 14.2753 3.72533C14.5362 3.98622 14.6666 4.3 14.6666 4.66667V12.6667C14.6666 13.0333 14.5362 13.3473 14.2753 13.6087C14.014 13.8696 13.7 14 13.3333 14H2.66665ZM13.3333 12.6667V4.66667H2.66665V12.6667H13.3333Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {(this.size === 20 || this.size === 24) && (
          <Fragment>
            <path
              d="M12 17.5C13.25 17.5 14.3127 17.0627 15.188 16.188C16.0627 15.3127 16.5 14.25 16.5 13C16.5 11.75 16.0627 10.6873 15.188 9.812C14.3127 8.93733 13.25 8.5 12 8.5C10.75 8.5 9.68733 8.93733 8.812 9.812C7.93733 10.6873 7.5 11.75 7.5 13C7.5 14.25 7.93733 15.3127 8.812 16.188C9.68733 17.0627 10.75 17.5 12 17.5ZM4 21C3.45 21 2.97933 20.8043 2.588 20.413C2.196 20.021 2 19.55 2 19V7C2 6.45 2.196 5.97933 2.588 5.588C2.97933 5.196 3.45 5 4 5H7.15L8.4 3.65C8.58333 3.43333 8.804 3.27067 9.062 3.162C9.32067 3.054 9.59167 3 9.875 3H14.125C14.4083 3 14.6793 3.054 14.938 3.162C15.196 3.27067 15.4167 3.43333 15.6 3.65L16.85 5H20C20.55 5 21.021 5.196 21.413 5.588C21.8043 5.97933 22 6.45 22 7V19C22 19.55 21.8043 20.021 21.413 20.413C21.021 20.8043 20.55 21 20 21H4ZM20 19V7H4V19H20Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M14 20.4167C15.4583 20.4167 16.6981 19.9064 17.7193 18.886C18.7398 17.8648 19.25 16.625 19.25 15.1667C19.25 13.7083 18.7398 12.4686 17.7193 11.4473C16.6981 10.4269 15.4583 9.91667 14 9.91667C12.5416 9.91667 11.3019 10.4269 10.2806 11.4473C9.2602 12.4686 8.74998 13.7083 8.74998 15.1667C8.74998 16.625 9.2602 17.8648 10.2806 18.886C11.3019 19.9064 12.5416 20.4167 14 20.4167ZM4.66665 24.5C4.02498 24.5 3.47587 24.2717 3.01931 23.8152C2.56198 23.3578 2.33331 22.8083 2.33331 22.1667V8.16667C2.33331 7.525 2.56198 6.97589 3.01931 6.51933C3.47587 6.062 4.02498 5.83333 4.66665 5.83333H8.34165L9.79998 4.25833C10.0139 4.00556 10.2713 3.81578 10.5723 3.689C10.8741 3.563 11.1903 3.5 11.5208 3.5H16.4791C16.8097 3.5 17.1259 3.563 17.4276 3.689C17.7286 3.81578 17.9861 4.00556 18.2 4.25833L19.6583 5.83333H23.3333C23.975 5.83333 24.5245 6.062 24.9818 6.51933C25.4384 6.97589 25.6666 7.525 25.6666 8.16667V22.1667C25.6666 22.8083 25.4384 23.3578 24.9818 23.8152C24.5245 24.2717 23.975 24.5 23.3333 24.5H4.66665ZM23.3333 22.1667V8.16667H4.66665V22.1667H23.3333Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
