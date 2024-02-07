// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { SwirlIconSize } from "../swirl-icon.types";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../swirl-icon.css",
  tag: "swirl-icon-light-mode",
})
export class SwirlIconLightMode {
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
            <g clip-path="url(#clip0_1234_73)">
              <path
                d="M8.00002 9.99984C8.55558 9.99984 9.0278 9.80539 9.41669 9.4165C9.80558 9.02762 10 8.55539 10 7.99984C10 7.44428 9.80558 6.97206 9.41669 6.58317C9.0278 6.19428 8.55558 5.99984 8.00002 5.99984C7.44447 5.99984 6.97224 6.19428 6.58335 6.58317C6.19446 6.97206 6.00002 7.44428 6.00002 7.99984C6.00002 8.55539 6.19446 9.02762 6.58335 9.4165C6.97224 9.80539 7.44447 9.99984 8.00002 9.99984ZM8.00002 11.3332C7.0778 11.3332 6.2918 11.0081 5.64202 10.3578C4.9918 9.70806 4.66669 8.92206 4.66669 7.99984C4.66669 7.07762 4.9918 6.29139 5.64202 5.64117C6.2918 4.99139 7.0778 4.6665 8.00002 4.6665C8.92224 4.6665 9.70847 4.99139 10.3587 5.64117C11.0085 6.29139 11.3334 7.07762 11.3334 7.99984C11.3334 8.92206 11.0085 9.70806 10.3587 10.3578C9.70847 11.0081 8.92224 11.3332 8.00002 11.3332ZM1.33335 8.6665C1.14446 8.6665 0.986243 8.6025 0.858687 8.4745C0.730687 8.34695 0.666687 8.18873 0.666687 7.99984C0.666687 7.81095 0.730687 7.6525 0.858687 7.5245C0.986243 7.39695 1.14446 7.33317 1.33335 7.33317H2.66669C2.85558 7.33317 3.01402 7.39695 3.14202 7.5245C3.26958 7.6525 3.33335 7.81095 3.33335 7.99984C3.33335 8.18873 3.26958 8.34695 3.14202 8.4745C3.01402 8.6025 2.85558 8.6665 2.66669 8.6665H1.33335ZM13.3334 8.6665C13.1445 8.6665 12.9862 8.6025 12.8587 8.4745C12.7307 8.34695 12.6667 8.18873 12.6667 7.99984C12.6667 7.81095 12.7307 7.6525 12.8587 7.5245C12.9862 7.39695 13.1445 7.33317 13.3334 7.33317H14.6667C14.8556 7.33317 15.0138 7.39695 15.1414 7.5245C15.2694 7.6525 15.3334 7.81095 15.3334 7.99984C15.3334 8.18873 15.2694 8.34695 15.1414 8.4745C15.0138 8.6025 14.8556 8.6665 14.6667 8.6665H13.3334ZM8.00002 3.33317C7.81113 3.33317 7.65291 3.26917 7.52535 3.14117C7.39735 3.01362 7.33335 2.85539 7.33335 2.6665V1.33317C7.33335 1.14428 7.39735 0.985837 7.52535 0.857837C7.65291 0.730282 7.81113 0.666504 8.00002 0.666504C8.18891 0.666504 8.34735 0.730282 8.47535 0.857837C8.60291 0.985837 8.66669 1.14428 8.66669 1.33317V2.6665C8.66669 2.85539 8.60291 3.01362 8.47535 3.14117C8.34735 3.26917 8.18891 3.33317 8.00002 3.33317ZM8.00002 15.3332C7.81113 15.3332 7.65291 15.2692 7.52535 15.1412C7.39735 15.0136 7.33335 14.8554 7.33335 14.6665V13.3332C7.33335 13.1443 7.39735 12.9861 7.52535 12.8585C7.65291 12.7305 7.81113 12.6665 8.00002 12.6665C8.18891 12.6665 8.34735 12.7305 8.47535 12.8585C8.60291 12.9861 8.66669 13.1443 8.66669 13.3332V14.6665C8.66669 14.8554 8.60291 15.0136 8.47535 15.1412C8.34735 15.2692 8.18891 15.3332 8.00002 15.3332ZM3.76669 4.69984L3.05002 3.99984C2.91669 3.87762 2.85269 3.72206 2.85802 3.53317C2.8638 3.34428 2.9278 3.18317 3.05002 3.04984C3.18335 2.9165 3.34446 2.84984 3.53335 2.84984C3.72224 2.84984 3.8778 2.9165 4.00002 3.04984L4.70002 3.7665C4.82224 3.89984 4.88335 4.05539 4.88335 4.23317C4.88335 4.41095 4.82224 4.5665 4.70002 4.69984C4.5778 4.83317 4.42513 4.89695 4.24202 4.89117C4.05846 4.88584 3.90002 4.82206 3.76669 4.69984ZM12 12.9498L11.3 12.2332C11.1778 12.0998 11.1167 11.9416 11.1167 11.7585C11.1167 11.5749 11.1778 11.4221 11.3 11.2998C11.4222 11.1665 11.5751 11.1027 11.7587 11.1085C11.9418 11.1138 12.1 11.1776 12.2334 11.2998L12.95 11.9998C13.0834 12.1221 13.1474 12.2776 13.142 12.4665C13.1362 12.6554 13.0722 12.8165 12.95 12.9498C12.8167 13.0832 12.6556 13.1498 12.4667 13.1498C12.2778 13.1498 12.1222 13.0832 12 12.9498ZM11.3 4.69984C11.1667 4.57762 11.1029 4.42473 11.1087 4.24117C11.114 4.05806 11.1778 3.89984 11.3 3.7665L12 3.04984C12.1222 2.9165 12.2778 2.8525 12.4667 2.85784C12.6556 2.86362 12.8167 2.92761 12.95 3.04984C13.0834 3.18317 13.15 3.34428 13.15 3.53317C13.15 3.72206 13.0834 3.87762 12.95 3.99984L12.2334 4.69984C12.1 4.82206 11.9445 4.88317 11.7667 4.88317C11.5889 4.88317 11.4334 4.82206 11.3 4.69984ZM3.05002 12.9498C2.91669 12.8165 2.85002 12.6554 2.85002 12.4665C2.85002 12.2776 2.91669 12.1221 3.05002 11.9998L3.76669 11.2998C3.90002 11.1776 4.05846 11.1165 4.24202 11.1165C4.42513 11.1165 4.5778 11.1776 4.70002 11.2998C4.83335 11.4221 4.89735 11.5749 4.89202 11.7585C4.88624 11.9416 4.82224 12.0998 4.70002 12.2332L4.00002 12.9498C3.8778 13.0832 3.72224 13.1469 3.53335 13.1412C3.34446 13.1358 3.18335 13.0721 3.05002 12.9498Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_1234_73">
                <rect width="16" height="16" fill="currentColor" />
              </clipPath>
            </defs>
          </Fragment>
        )}
        {(this.size === 20 || this.size === 24) && (
          <Fragment>
            <path
              d="M12 15C12.8333 15 13.5417 14.7083 14.125 14.125C14.7083 13.5417 15 12.8333 15 12C15 11.1667 14.7083 10.4583 14.125 9.875C13.5417 9.29167 12.8333 9 12 9C11.1667 9 10.4583 9.29167 9.875 9.875C9.29167 10.4583 9 11.1667 9 12C9 12.8333 9.29167 13.5417 9.875 14.125C10.4583 14.7083 11.1667 15 12 15ZM12 17C10.6167 17 9.43767 16.5123 8.463 15.537C7.48767 14.5623 7 13.3833 7 12C7 10.6167 7.48767 9.43733 8.463 8.462C9.43767 7.48733 10.6167 7 12 7C13.3833 7 14.5627 7.48733 15.538 8.462C16.5127 9.43733 17 10.6167 17 12C17 13.3833 16.5127 14.5623 15.538 15.537C14.5627 16.5123 13.3833 17 12 17ZM2 13C1.71667 13 1.47933 12.904 1.288 12.712C1.096 12.5207 1 12.2833 1 12C1 11.7167 1.096 11.479 1.288 11.287C1.47933 11.0957 1.71667 11 2 11H4C4.28333 11 4.521 11.0957 4.713 11.287C4.90433 11.479 5 11.7167 5 12C5 12.2833 4.90433 12.5207 4.713 12.712C4.521 12.904 4.28333 13 4 13H2ZM20 13C19.7167 13 19.4793 12.904 19.288 12.712C19.096 12.5207 19 12.2833 19 12C19 11.7167 19.096 11.479 19.288 11.287C19.4793 11.0957 19.7167 11 20 11H22C22.2833 11 22.5207 11.0957 22.712 11.287C22.904 11.479 23 11.7167 23 12C23 12.2833 22.904 12.5207 22.712 12.712C22.5207 12.904 22.2833 13 22 13H20ZM12 5C11.7167 5 11.4793 4.904 11.288 4.712C11.096 4.52067 11 4.28333 11 4V2C11 1.71667 11.096 1.479 11.288 1.287C11.4793 1.09567 11.7167 1 12 1C12.2833 1 12.521 1.09567 12.713 1.287C12.9043 1.479 13 1.71667 13 2V4C13 4.28333 12.9043 4.52067 12.713 4.712C12.521 4.904 12.2833 5 12 5ZM12 23C11.7167 23 11.4793 22.904 11.288 22.712C11.096 22.5207 11 22.2833 11 22V20C11 19.7167 11.096 19.4793 11.288 19.288C11.4793 19.096 11.7167 19 12 19C12.2833 19 12.521 19.096 12.713 19.288C12.9043 19.4793 13 19.7167 13 20V22C13 22.2833 12.9043 22.5207 12.713 22.712C12.521 22.904 12.2833 23 12 23ZM5.65 7.05L4.575 6C4.375 5.81667 4.279 5.58333 4.287 5.3C4.29567 5.01667 4.39167 4.775 4.575 4.575C4.775 4.375 5.01667 4.275 5.3 4.275C5.58333 4.275 5.81667 4.375 6 4.575L7.05 5.65C7.23333 5.85 7.325 6.08333 7.325 6.35C7.325 6.61667 7.23333 6.85 7.05 7.05C6.86667 7.25 6.63767 7.34567 6.363 7.337C6.08767 7.329 5.85 7.23333 5.65 7.05ZM18 19.425L16.95 18.35C16.7667 18.15 16.675 17.9127 16.675 17.638C16.675 17.3627 16.7667 17.1333 16.95 16.95C17.1333 16.75 17.3627 16.6543 17.638 16.663C17.9127 16.671 18.15 16.7667 18.35 16.95L19.425 18C19.625 18.1833 19.721 18.4167 19.713 18.7C19.7043 18.9833 19.6083 19.225 19.425 19.425C19.225 19.625 18.9833 19.725 18.7 19.725C18.4167 19.725 18.1833 19.625 18 19.425ZM16.95 7.05C16.75 6.86667 16.6543 6.63733 16.663 6.362C16.671 6.08733 16.7667 5.85 16.95 5.65L18 4.575C18.1833 4.375 18.4167 4.279 18.7 4.287C18.9833 4.29567 19.225 4.39167 19.425 4.575C19.625 4.775 19.725 5.01667 19.725 5.3C19.725 5.58333 19.625 5.81667 19.425 6L18.35 7.05C18.15 7.23333 17.9167 7.325 17.65 7.325C17.3833 7.325 17.15 7.23333 16.95 7.05ZM4.575 19.425C4.375 19.225 4.275 18.9833 4.275 18.7C4.275 18.4167 4.375 18.1833 4.575 18L5.65 16.95C5.85 16.7667 6.08767 16.675 6.363 16.675C6.63767 16.675 6.86667 16.7667 7.05 16.95C7.25 17.1333 7.346 17.3627 7.338 17.638C7.32933 17.9127 7.23333 18.15 7.05 18.35L6 19.425C5.81667 19.625 5.58333 19.7207 5.3 19.712C5.01667 19.704 4.775 19.6083 4.575 19.425Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M14 17.4998C14.9722 17.4998 15.7986 17.1596 16.4792 16.479C17.1597 15.7984 17.5 14.9721 17.5 13.9998C17.5 13.0276 17.1597 12.2012 16.4792 11.5207C15.7986 10.8401 14.9722 10.4998 14 10.4998C13.0278 10.4998 12.2014 10.8401 11.5208 11.5207C10.8403 12.2012 10.5 13.0276 10.5 13.9998C10.5 14.9721 10.8403 15.7984 11.5208 16.479C12.2014 17.1596 13.0278 17.4998 14 17.4998ZM14 19.8332C12.3861 19.8332 11.0106 19.2642 9.87349 18.1263C8.7356 16.9892 8.16666 15.6137 8.16666 13.9998C8.16666 12.3859 8.7356 11.0101 9.87349 9.87217C11.0106 8.73506 12.3861 8.1665 14 8.1665C15.6139 8.1665 16.9898 8.73506 18.1277 9.87217C19.2648 11.0101 19.8333 12.3859 19.8333 13.9998C19.8333 15.6137 19.2648 16.9892 18.1277 18.1263C16.9898 19.2642 15.6139 19.8332 14 19.8332ZM2.33332 15.1665C2.00277 15.1665 1.72588 15.0545 1.50266 14.8305C1.27866 14.6073 1.16666 14.3304 1.16666 13.9998C1.16666 13.6693 1.27866 13.392 1.50266 13.168C1.72588 12.9448 2.00277 12.8332 2.33332 12.8332H4.66666C4.99721 12.8332 5.27449 12.9448 5.49849 13.168C5.72171 13.392 5.83332 13.6693 5.83332 13.9998C5.83332 14.3304 5.72171 14.6073 5.49849 14.8305C5.27449 15.0545 4.99721 15.1665 4.66666 15.1665H2.33332ZM23.3333 15.1665C23.0028 15.1665 22.7259 15.0545 22.5027 14.8305C22.2787 14.6073 22.1667 14.3304 22.1667 13.9998C22.1667 13.6693 22.2787 13.392 22.5027 13.168C22.7259 12.9448 23.0028 12.8332 23.3333 12.8332H25.6667C25.9972 12.8332 26.2741 12.9448 26.4973 13.168C26.7213 13.392 26.8333 13.6693 26.8333 13.9998C26.8333 14.3304 26.7213 14.6073 26.4973 14.8305C26.2741 15.0545 25.9972 15.1665 25.6667 15.1665H23.3333ZM14 5.83317C13.6694 5.83317 13.3925 5.72117 13.1693 5.49717C12.9453 5.27395 12.8333 4.99706 12.8333 4.6665V2.33317C12.8333 2.00261 12.9453 1.72534 13.1693 1.50134C13.3925 1.27811 13.6694 1.1665 14 1.1665C14.3305 1.1665 14.6078 1.27811 14.8318 1.50134C15.055 1.72534 15.1667 2.00261 15.1667 2.33317V4.6665C15.1667 4.99706 15.055 5.27395 14.8318 5.49717C14.6078 5.72117 14.3305 5.83317 14 5.83317ZM14 26.8332C13.6694 26.8332 13.3925 26.7212 13.1693 26.4972C12.9453 26.2739 12.8333 25.9971 12.8333 25.6665V23.3332C12.8333 23.0026 12.9453 22.7257 13.1693 22.5025C13.3925 22.2785 13.6694 22.1665 14 22.1665C14.3305 22.1665 14.6078 22.2785 14.8318 22.5025C15.055 22.7257 15.1667 23.0026 15.1667 23.3332V25.6665C15.1667 25.9971 15.055 26.2739 14.8318 26.4972C14.6078 26.7212 14.3305 26.8332 14 26.8332ZM6.59166 8.22484L5.33749 6.99984C5.10416 6.78595 4.99216 6.51373 5.00149 6.18317C5.0116 5.85262 5.1236 5.57067 5.33749 5.33734C5.57082 5.104 5.85277 4.98734 6.18332 4.98734C6.51388 4.98734 6.7861 5.104 6.99999 5.33734L8.22499 6.5915C8.43888 6.82484 8.54582 7.09706 8.54582 7.40817C8.54582 7.71928 8.43888 7.9915 8.22499 8.22484C8.0111 8.45817 7.74393 8.56978 7.42349 8.55967C7.10227 8.55034 6.82499 8.43873 6.59166 8.22484ZM21 22.6623L19.775 21.4082C19.5611 21.1748 19.4542 20.8979 19.4542 20.5775C19.4542 20.2563 19.5611 19.9887 19.775 19.7748C19.9889 19.5415 20.2564 19.4299 20.5777 19.44C20.8981 19.4493 21.175 19.5609 21.4083 19.7748L22.6625 20.9998C22.8958 21.2137 23.0078 21.4859 22.9985 21.8165C22.9884 22.1471 22.8764 22.429 22.6625 22.6623C22.4292 22.8957 22.1472 23.0123 21.8167 23.0123C21.4861 23.0123 21.2139 22.8957 21 22.6623ZM19.775 8.22484C19.5417 8.01095 19.43 7.74339 19.4402 7.42217C19.4495 7.10173 19.5611 6.82484 19.775 6.5915L21 5.33734C21.2139 5.104 21.4861 4.992 21.8167 5.00134C22.1472 5.01145 22.4292 5.12345 22.6625 5.33734C22.8958 5.57067 23.0125 5.85262 23.0125 6.18317C23.0125 6.51373 22.8958 6.78595 22.6625 6.99984L21.4083 8.22484C21.175 8.43873 20.9028 8.54567 20.5917 8.54567C20.2805 8.54567 20.0083 8.43873 19.775 8.22484ZM5.33749 22.6623C5.10416 22.429 4.98749 22.1471 4.98749 21.8165C4.98749 21.4859 5.10416 21.2137 5.33749 20.9998L6.59166 19.7748C6.82499 19.5609 7.10227 19.454 7.42349 19.454C7.74393 19.454 8.0111 19.5609 8.22499 19.7748C8.45832 19.9887 8.57032 20.2563 8.56099 20.5775C8.55088 20.8979 8.43888 21.1748 8.22499 21.4082L6.99999 22.6623C6.7861 22.8957 6.51388 23.0073 6.18332 22.9972C5.85277 22.9878 5.57082 22.8762 5.33749 22.6623Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
