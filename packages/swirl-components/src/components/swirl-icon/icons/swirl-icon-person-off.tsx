// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { SwirlIconSize } from "../swirl-icon.types";
import { SwirlIconColor } from "../swirl-icon";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../swirl-icon.css",
  tag: "swirl-icon-person-off",
})
export class SwirlIconPersonOff {
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
              d="M12.7167 14.5999L11.4333 13.3332H3.33334C3.14445 13.3332 2.98601 13.2692 2.85801 13.1412C2.73045 13.0137 2.66668 12.8555 2.66668 12.6666V11.4666C2.66668 11.0888 2.76401 10.7415 2.95868 10.4246C3.1529 10.1081 3.41112 9.86657 3.73334 9.6999C4.23334 9.44435 4.74179 9.23879 5.25868 9.08324C5.77512 8.92768 6.30001 8.81101 6.83334 8.73324L1.38334 3.28324C1.25001 3.1499 1.18623 2.99435 1.19201 2.81657C1.19734 2.63879 1.26668 2.48324 1.40001 2.3499C1.53334 2.21657 1.69157 2.1499 1.87468 2.1499C2.05823 2.1499 2.21668 2.21657 2.35001 2.3499L13.6667 13.6666C13.8 13.7999 13.8667 13.9555 13.8667 14.1332C13.8667 14.311 13.8 14.4666 13.6667 14.5999C13.5333 14.7332 13.3751 14.7999 13.192 14.7999C13.0085 14.7999 12.85 14.7332 12.7167 14.5999ZM4.00001 11.9999H10.1L8.10001 9.9999H8.00001C7.37779 9.9999 6.76112 10.0748 6.15001 10.2246C5.5389 10.3748 4.93334 10.5999 4.33334 10.8999C4.23334 10.9555 4.1529 11.0332 4.09201 11.1332C4.03068 11.2332 4.00001 11.3443 4.00001 11.4666V11.9999ZM12.2667 9.6999C12.5889 9.85546 12.8445 10.0917 13.0333 10.4086C13.2222 10.725 13.3222 11.0666 13.3333 11.4332L11.1 9.1999C11.3 9.27768 11.4973 9.35546 11.692 9.43324C11.8862 9.51101 12.0778 9.5999 12.2667 9.6999ZM9.46668 7.56657L8.48334 6.58324C8.7389 6.48324 8.94445 6.31924 9.10001 6.09124C9.25557 5.86368 9.33334 5.61101 9.33334 5.33324C9.33334 4.96657 9.2029 4.65279 8.94201 4.3919C8.68068 4.13057 8.36668 3.9999 8.00001 3.9999C7.72223 3.9999 7.46957 4.07768 7.24201 4.23324C7.01401 4.38879 6.85001 4.59435 6.75001 4.8499L5.76668 3.86657C6.02223 3.48879 6.34446 3.19435 6.73334 2.98324C7.12223 2.77212 7.54445 2.66657 8.00001 2.66657C8.73334 2.66657 9.36112 2.92768 9.88334 3.4499C10.4056 3.97212 10.6667 4.5999 10.6667 5.33324C10.6667 5.78879 10.5611 6.21101 10.35 6.5999C10.1389 6.98879 9.84445 7.31101 9.46668 7.56657Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {(this.size === 20 || this.size === 24) && (
          <Fragment>
            <path
              d="M20.075 20.9L18.15 19H6.00002C5.71668 19 5.47902 18.904 5.28702 18.712C5.09568 18.5206 5.00002 18.2833 5.00002 18V16.2C5.00002 15.6333 5.14602 15.1123 5.43802 14.637C5.72935 14.1623 6.11668 13.8 6.60002 13.55C7.35002 13.1666 8.11268 12.8583 8.88802 12.625C9.66268 12.3916 10.45 12.2166 11.25 12.1L3.07502 3.92498C2.87502 3.72498 2.77935 3.49164 2.78802 3.22498C2.79602 2.95831 2.90002 2.72498 3.10002 2.52498C3.30002 2.32498 3.53735 2.22498 3.81202 2.22498C4.08735 2.22498 4.32502 2.32498 4.52502 2.52498L21.5 19.5C21.7 19.7 21.8 19.9333 21.8 20.2C21.8 20.4666 21.7 20.7 21.5 20.9C21.3 21.1 21.0627 21.2 20.788 21.2C20.5127 21.2 20.275 21.1 20.075 20.9ZM7.00002 17H16.15L13.15 14H13C12.0667 14 11.1417 14.1123 10.225 14.337C9.30835 14.5623 8.40002 14.9 7.50002 15.35C7.35002 15.4333 7.22935 15.55 7.13802 15.7C7.04602 15.85 7.00002 16.0166 7.00002 16.2V17ZM19.4 13.55C19.8833 13.7833 20.2667 14.1376 20.55 14.613C20.8333 15.0876 20.9833 15.6 21 16.15L17.65 12.8C17.95 12.9166 18.246 13.0333 18.538 13.15C18.8293 13.2666 19.1167 13.4 19.4 13.55ZM15.2 10.35L13.725 8.87498C14.1083 8.72498 14.4167 8.47898 14.65 8.13698C14.8833 7.79564 15 7.41664 15 6.99998C15 6.44998 14.8043 5.97931 14.413 5.58798C14.021 5.19598 13.55 4.99998 13 4.99998C12.5833 4.99998 12.2043 5.11664 11.863 5.34998C11.521 5.58331 11.275 5.89164 11.125 6.27498L9.65002 4.79998C10.0333 4.23331 10.5167 3.79164 11.1 3.47498C11.6833 3.15831 12.3167 2.99998 13 2.99998C14.1 2.99998 15.0417 3.39164 15.825 4.17498C16.6083 4.95831 17 5.89998 17 6.99998C17 7.68331 16.8417 8.31664 16.525 8.89998C16.2083 9.48331 15.7667 9.96664 15.2 10.35Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M23.2542 24.5499L21.0084 22.3333H6.83335C6.5028 22.3333 6.22552 22.2213 6.00152 21.9973C5.7783 21.7741 5.66668 21.4972 5.66668 21.1666V19.0666C5.66668 18.4055 5.83702 17.7977 6.17768 17.2431C6.51757 16.6893 6.96946 16.2666 7.53335 15.975C8.40835 15.5277 9.29813 15.168 10.2027 14.8958C11.1065 14.6236 12.025 14.4194 12.9584 14.2833L3.42085 4.74578C3.18752 4.51245 3.07591 4.24023 3.08602 3.92912C3.09535 3.61801 3.21668 3.34578 3.45002 3.11245C3.68335 2.87912 3.96024 2.76245 4.28068 2.76245C4.60191 2.76245 4.87918 2.87912 5.11252 3.11245L24.9167 22.9166C25.15 23.15 25.2667 23.4222 25.2667 23.7333C25.2667 24.0444 25.15 24.3166 24.9167 24.5499C24.6834 24.7833 24.4065 24.9 24.086 24.9C23.7648 24.9 23.4875 24.7833 23.2542 24.5499ZM8.00002 20H18.675L15.175 16.5H15C13.9111 16.5 12.832 16.631 11.7625 16.8931C10.6931 17.156 9.63335 17.55 8.58335 18.075C8.40835 18.1722 8.26757 18.3083 8.16102 18.4833C8.05368 18.6583 8.00002 18.8527 8.00002 19.0666V20ZM22.4667 15.975C23.0306 16.2472 23.4778 16.6606 23.8083 17.2151C24.1389 17.7689 24.3139 18.3666 24.3334 19.0083L20.425 15.1C20.775 15.2361 21.1204 15.3722 21.461 15.5083C21.8009 15.6444 22.1361 15.8 22.4667 15.975ZM17.5667 12.2416L15.8459 10.5208C16.2931 10.3458 16.6528 10.0588 16.925 9.65978C17.1972 9.26156 17.3334 8.8194 17.3334 8.33328C17.3334 7.69162 17.1051 7.14251 16.6485 6.68595C16.1912 6.22862 15.6417 5.99995 15 5.99995C14.5139 5.99995 14.0717 6.13606 13.6735 6.40828C13.2745 6.68051 12.9875 7.04023 12.8125 7.48745L11.0917 5.76662C11.5389 5.10551 12.1028 4.59023 12.7834 4.22078C13.4639 3.85134 14.2028 3.66662 15 3.66662C16.2834 3.66662 17.382 4.12356 18.2959 5.03745C19.2097 5.95134 19.6667 7.04995 19.6667 8.33328C19.6667 9.13051 19.482 9.8694 19.1125 10.55C18.7431 11.2305 18.2278 11.7944 17.5667 12.2416Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
