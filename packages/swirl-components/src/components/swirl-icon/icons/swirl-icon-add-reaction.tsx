// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { SwirlIconSize } from "../swirl-icon.types";
import { SwirlIconColor } from "../swirl-icon";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../swirl-icon.css",
  tag: "swirl-icon-add-reaction",
})
export class SwirlIconAddReaction {
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
              d="M7.99998 14.6667C7.07776 14.6667 6.21109 14.4917 5.39998 14.1417C4.58887 13.7917 3.88331 13.3167 3.28331 12.7167C2.68331 12.1167 2.20831 11.4112 1.85831 10.6001C1.50831 9.78897 1.33331 8.9223 1.33331 8.00008C1.33331 7.07786 1.50831 6.21119 1.85831 5.40008C2.20831 4.58897 2.68331 3.88341 3.28331 3.28341C3.88331 2.68341 4.58887 2.20841 5.39998 1.85841C6.21109 1.50841 7.07776 1.33341 7.99998 1.33341C8.47776 1.33341 8.93887 1.38064 9.38331 1.47508C9.82776 1.56953 10.2555 1.70564 10.6666 1.88341V3.38341C10.2778 3.16119 9.85831 2.98619 9.40831 2.85841C8.95831 2.73064 8.48887 2.66675 7.99998 2.66675C6.5222 2.66675 5.26387 3.18619 4.22498 4.22508C3.18609 5.26397 2.66665 6.5223 2.66665 8.00008C2.66665 9.47786 3.18609 10.7362 4.22498 11.7751C5.26387 12.814 6.5222 13.3334 7.99998 13.3334C9.47776 13.3334 10.7361 12.814 11.775 11.7751C12.8139 10.7362 13.3333 9.47786 13.3333 8.00008C13.3333 7.64453 13.2972 7.30008 13.225 6.96675C13.1528 6.63341 13.0555 6.31119 12.9333 6.00008H14.3666C14.4666 6.3223 14.5416 6.6473 14.5916 6.97508C14.6416 7.30286 14.6666 7.64453 14.6666 8.00008C14.6666 8.9223 14.4916 9.78897 14.1416 10.6001C13.7916 11.4112 13.3166 12.1167 12.7166 12.7167C12.1166 13.3167 11.4111 13.7917 10.6 14.1417C9.78887 14.4917 8.9222 14.6667 7.99998 14.6667ZM13.3333 3.33341H12.6666C12.4778 3.33341 12.3194 3.26953 12.1916 3.14175C12.0639 3.01397 12 2.85564 12 2.66675C12 2.47786 12.0639 2.31953 12.1916 2.19175C12.3194 2.06397 12.4778 2.00008 12.6666 2.00008H13.3333V1.33341C13.3333 1.14453 13.3972 0.986192 13.525 0.858415C13.6528 0.730637 13.8111 0.666748 14 0.666748C14.1889 0.666748 14.3472 0.730637 14.475 0.858415C14.6028 0.986192 14.6666 1.14453 14.6666 1.33341V2.00008H15.3333C15.5222 2.00008 15.6805 2.06397 15.8083 2.19175C15.9361 2.31953 16 2.47786 16 2.66675C16 2.85564 15.9361 3.01397 15.8083 3.14175C15.6805 3.26953 15.5222 3.33341 15.3333 3.33341H14.6666V4.00008C14.6666 4.18897 14.6028 4.3473 14.475 4.47508C14.3472 4.60286 14.1889 4.66675 14 4.66675C13.8111 4.66675 13.6528 4.60286 13.525 4.47508C13.3972 4.3473 13.3333 4.18897 13.3333 4.00008V3.33341ZM10.3333 7.33341C10.6111 7.33341 10.8472 7.23619 11.0416 7.04175C11.2361 6.8473 11.3333 6.61119 11.3333 6.33341C11.3333 6.05564 11.2361 5.81953 11.0416 5.62508C10.8472 5.43064 10.6111 5.33341 10.3333 5.33341C10.0555 5.33341 9.81942 5.43064 9.62498 5.62508C9.43054 5.81953 9.33331 6.05564 9.33331 6.33341C9.33331 6.61119 9.43054 6.8473 9.62498 7.04175C9.81942 7.23619 10.0555 7.33341 10.3333 7.33341ZM5.66665 7.33341C5.94442 7.33341 6.18054 7.23619 6.37498 7.04175C6.56942 6.8473 6.66665 6.61119 6.66665 6.33341C6.66665 6.05564 6.56942 5.81953 6.37498 5.62508C6.18054 5.43064 5.94442 5.33341 5.66665 5.33341C5.38887 5.33341 5.15276 5.43064 4.95831 5.62508C4.76387 5.81953 4.66665 6.05564 4.66665 6.33341C4.66665 6.61119 4.76387 6.8473 4.95831 7.04175C5.15276 7.23619 5.38887 7.33341 5.66665 7.33341ZM7.99998 11.6667C8.64442 11.6667 9.23887 11.5112 9.78331 11.2001C10.3278 10.889 10.7666 10.4667 11.1 9.93342C11.1666 9.80008 11.1611 9.66675 11.0833 9.53342C11.0055 9.40008 10.8889 9.33341 10.7333 9.33341H5.26665C5.11109 9.33341 4.99442 9.40008 4.91665 9.53342C4.83887 9.66675 4.83331 9.80008 4.89998 9.93342C5.23331 10.4667 5.67498 10.889 6.22498 11.2001C6.77498 11.5112 7.36665 11.6667 7.99998 11.6667Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {(this.size === 20 || this.size === 24) && (
          <Fragment>
            <path
              d="M12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C12.7167 2 13.4083 2.07083 14.075 2.2125C14.7417 2.35417 15.3833 2.55833 16 2.825V5.075C15.4167 4.74167 14.7875 4.47917 14.1125 4.2875C13.4375 4.09583 12.7333 4 12 4C9.78333 4 7.89583 4.77917 6.3375 6.3375C4.77917 7.89583 4 9.78333 4 12C4 14.2167 4.77917 16.1042 6.3375 17.6625C7.89583 19.2208 9.78333 20 12 20C14.2167 20 16.1042 19.2208 17.6625 17.6625C19.2208 16.1042 20 14.2167 20 12C20 11.4667 19.9458 10.95 19.8375 10.45C19.7292 9.95 19.5833 9.46667 19.4 9H21.55C21.7 9.48333 21.8125 9.97083 21.8875 10.4625C21.9625 10.9542 22 11.4667 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM20 5H19C18.7167 5 18.4792 4.90417 18.2875 4.7125C18.0958 4.52083 18 4.28333 18 4C18 3.71667 18.0958 3.47917 18.2875 3.2875C18.4792 3.09583 18.7167 3 19 3H20V2C20 1.71667 20.0958 1.47917 20.2875 1.2875C20.4792 1.09583 20.7167 1 21 1C21.2833 1 21.5208 1.09583 21.7125 1.2875C21.9042 1.47917 22 1.71667 22 2V3H23C23.2833 3 23.5208 3.09583 23.7125 3.2875C23.9042 3.47917 24 3.71667 24 4C24 4.28333 23.9042 4.52083 23.7125 4.7125C23.5208 4.90417 23.2833 5 23 5H22V6C22 6.28333 21.9042 6.52083 21.7125 6.7125C21.5208 6.90417 21.2833 7 21 7C20.7167 7 20.4792 6.90417 20.2875 6.7125C20.0958 6.52083 20 6.28333 20 6V5ZM15.5 11C15.9167 11 16.2708 10.8542 16.5625 10.5625C16.8542 10.2708 17 9.91667 17 9.5C17 9.08333 16.8542 8.72917 16.5625 8.4375C16.2708 8.14583 15.9167 8 15.5 8C15.0833 8 14.7292 8.14583 14.4375 8.4375C14.1458 8.72917 14 9.08333 14 9.5C14 9.91667 14.1458 10.2708 14.4375 10.5625C14.7292 10.8542 15.0833 11 15.5 11ZM8.5 11C8.91667 11 9.27083 10.8542 9.5625 10.5625C9.85417 10.2708 10 9.91667 10 9.5C10 9.08333 9.85417 8.72917 9.5625 8.4375C9.27083 8.14583 8.91667 8 8.5 8C8.08333 8 7.72917 8.14583 7.4375 8.4375C7.14583 8.72917 7 9.08333 7 9.5C7 9.91667 7.14583 10.2708 7.4375 10.5625C7.72917 10.8542 8.08333 11 8.5 11ZM12 17.5C12.9667 17.5 13.8583 17.2667 14.675 16.8C15.4917 16.3333 16.15 15.7 16.65 14.9C16.75 14.7 16.7417 14.5 16.625 14.3C16.5083 14.1 16.3333 14 16.1 14H7.9C7.66667 14 7.49167 14.1 7.375 14.3C7.25833 14.5 7.25 14.7 7.35 14.9C7.85 15.7 8.5125 16.3333 9.3375 16.8C10.1625 17.2667 11.05 17.5 12 17.5Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M14 25.6667C12.3861 25.6667 10.8695 25.3605 9.45001 24.748C8.03057 24.1355 6.79584 23.3042 5.74584 22.2542C4.69584 21.2042 3.86459 19.9695 3.25209 18.5501C2.63959 17.1306 2.33334 15.614 2.33334 14.0001C2.33334 12.3862 2.63959 10.8695 3.25209 9.45008C3.86459 8.03064 4.69584 6.79591 5.74584 5.74591C6.79584 4.69591 8.03057 3.86466 9.45001 3.25216C10.8695 2.63966 12.3861 2.33341 14 2.33341C14.8361 2.33341 15.6431 2.41605 16.4208 2.58133C17.1986 2.74661 17.9472 2.9848 18.6667 3.29591V5.92091C17.9861 5.53203 17.2521 5.22578 16.4646 5.00216C15.6771 4.77855 14.8556 4.66675 14 4.66675C11.4139 4.66675 9.21182 5.57578 7.39376 7.39383C5.5757 9.21189 4.66668 11.414 4.66668 14.0001C4.66668 16.5862 5.5757 18.7883 7.39376 20.6063C9.21182 22.4244 11.4139 23.3334 14 23.3334C16.5861 23.3334 18.7882 22.4244 20.6063 20.6063C22.4243 18.7883 23.3333 16.5862 23.3333 14.0001C23.3333 13.3779 23.2701 12.7751 23.1438 12.1917C23.0174 11.6084 22.8472 11.0445 22.6333 10.5001H25.1417C25.3167 11.064 25.4479 11.6327 25.5354 12.2063C25.6229 12.7799 25.6667 13.3779 25.6667 14.0001C25.6667 15.614 25.3604 17.1306 24.7479 18.5501C24.1354 19.9695 23.3042 21.2042 22.2542 22.2542C21.2042 23.3042 19.9695 24.1355 18.55 24.748C17.1306 25.3605 15.6139 25.6667 14 25.6667ZM23.3333 5.83341H22.1667C21.8361 5.83341 21.559 5.72161 21.3354 5.498C21.1118 5.27439 21 4.9973 21 4.66675C21 4.33619 21.1118 4.05911 21.3354 3.8355C21.559 3.61189 21.8361 3.50008 22.1667 3.50008H23.3333V2.33341C23.3333 2.00286 23.4451 1.72578 23.6688 1.50216C23.8924 1.27855 24.1695 1.16675 24.5 1.16675C24.8306 1.16675 25.1076 1.27855 25.3313 1.50216C25.5549 1.72578 25.6667 2.00286 25.6667 2.33341V3.50008H26.8333C27.1639 3.50008 27.441 3.61189 27.6646 3.8355C27.8882 4.05911 28 4.33619 28 4.66675C28 4.9973 27.8882 5.27439 27.6646 5.498C27.441 5.72161 27.1639 5.83341 26.8333 5.83341H25.6667V7.00008C25.6667 7.33064 25.5549 7.60772 25.3313 7.83133C25.1076 8.05494 24.8306 8.16675 24.5 8.16675C24.1695 8.16675 23.8924 8.05494 23.6688 7.83133C23.4451 7.60772 23.3333 7.33064 23.3333 7.00008V5.83341ZM18.0833 12.8334C18.5695 12.8334 18.9826 12.6633 19.3229 12.323C19.6632 11.9827 19.8333 11.5695 19.8333 11.0834C19.8333 10.5973 19.6632 10.1841 19.3229 9.84383C18.9826 9.50355 18.5695 9.33341 18.0833 9.33341C17.5972 9.33341 17.184 9.50355 16.8438 9.84383C16.5035 10.1841 16.3333 10.5973 16.3333 11.0834C16.3333 11.5695 16.5035 11.9827 16.8438 12.323C17.184 12.6633 17.5972 12.8334 18.0833 12.8334ZM9.91668 12.8334C10.4028 12.8334 10.816 12.6633 11.1563 12.323C11.4965 11.9827 11.6667 11.5695 11.6667 11.0834C11.6667 10.5973 11.4965 10.1841 11.1563 9.84383C10.816 9.50355 10.4028 9.33341 9.91668 9.33341C9.43057 9.33341 9.01737 9.50355 8.67709 9.84383C8.33682 10.1841 8.16668 10.5973 8.16668 11.0834C8.16668 11.5695 8.33682 11.9827 8.67709 12.323C9.01737 12.6633 9.43057 12.8334 9.91668 12.8334ZM14 20.4167C15.1278 20.4167 16.1681 20.1445 17.1208 19.6001C18.0736 19.0556 18.8417 18.3167 19.425 17.3834C19.5417 17.1501 19.532 16.9167 19.3958 16.6834C19.2597 16.4501 19.0556 16.3334 18.7833 16.3334H9.21668C8.94445 16.3334 8.74029 16.4501 8.60418 16.6834C8.46807 16.9167 8.45834 17.1501 8.57501 17.3834C9.15834 18.3167 9.93126 19.0556 10.8938 19.6001C11.8563 20.1445 12.8917 20.4167 14 20.4167Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
