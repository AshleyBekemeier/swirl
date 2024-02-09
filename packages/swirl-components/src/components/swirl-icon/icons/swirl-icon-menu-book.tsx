// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { SwirlIconSize } from "../swirl-icon.types";
import { SwirlIconColor } from "../swirl-icon";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../swirl-icon.css",
  tag: "swirl-icon-menu-book",
})
export class SwirlIconMenuBook {
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
              d="M9.33333 5.85008C9.33333 5.75008 9.36945 5.6473 9.44167 5.54175C9.51389 5.43619 9.59445 5.36675 9.68333 5.33341C10.0056 5.2223 10.3278 5.13897 10.65 5.08341C10.9722 5.02786 11.3111 5.00008 11.6667 5.00008C11.8889 5.00008 12.1083 5.01397 12.325 5.04175C12.5417 5.06953 12.7556 5.10564 12.9667 5.15008C13.0667 5.1723 13.1528 5.22786 13.225 5.31675C13.2972 5.40564 13.3333 5.50564 13.3333 5.61675C13.3333 5.80564 13.2722 5.94453 13.15 6.03341C13.0278 6.1223 12.8722 6.14453 12.6833 6.10008C12.5278 6.06675 12.3639 6.04175 12.1917 6.02508C12.0194 6.00841 11.8444 6.00008 11.6667 6.00008C11.3778 6.00008 11.0944 6.02786 10.8167 6.08341C10.5389 6.13897 10.2722 6.21119 10.0167 6.30008C9.81667 6.37786 9.65278 6.3723 9.525 6.28341C9.39722 6.19453 9.33333 6.05008 9.33333 5.85008ZM9.33333 9.51675C9.33333 9.41675 9.36945 9.31397 9.44167 9.20841C9.51389 9.10286 9.59445 9.03341 9.68333 9.00008C10.0056 8.88897 10.3278 8.80564 10.65 8.75008C10.9722 8.69453 11.3111 8.66675 11.6667 8.66675C11.8889 8.66675 12.1083 8.68064 12.325 8.70841C12.5417 8.73619 12.7556 8.7723 12.9667 8.81675C13.0667 8.83897 13.1528 8.89453 13.225 8.98341C13.2972 9.0723 13.3333 9.1723 13.3333 9.28341C13.3333 9.4723 13.2722 9.61119 13.15 9.70008C13.0278 9.78897 12.8722 9.81119 12.6833 9.76675C12.5278 9.73341 12.3639 9.70841 12.1917 9.69175C12.0194 9.67508 11.8444 9.66675 11.6667 9.66675C11.3778 9.66675 11.0944 9.69175 10.8167 9.74175C10.5389 9.79175 10.2722 9.86119 10.0167 9.95008C9.81667 10.0279 9.65278 10.0251 9.525 9.94175C9.39722 9.85841 9.33333 9.71675 9.33333 9.51675ZM9.33333 7.68341C9.33333 7.58341 9.36945 7.48064 9.44167 7.37508C9.51389 7.26953 9.59445 7.20008 9.68333 7.16675C10.0056 7.05564 10.3278 6.9723 10.65 6.91675C10.9722 6.86119 11.3111 6.83341 11.6667 6.83341C11.8889 6.83341 12.1083 6.8473 12.325 6.87508C12.5417 6.90286 12.7556 6.93897 12.9667 6.98341C13.0667 7.00564 13.1528 7.06119 13.225 7.15008C13.2972 7.23897 13.3333 7.33897 13.3333 7.45008C13.3333 7.63897 13.2722 7.77786 13.15 7.86675C13.0278 7.95564 12.8722 7.97786 12.6833 7.93341C12.5278 7.90008 12.3639 7.87508 12.1917 7.85841C12.0194 7.84175 11.8444 7.83341 11.6667 7.83341C11.3778 7.83341 11.0944 7.86119 10.8167 7.91675C10.5389 7.9723 10.2722 8.04453 10.0167 8.13341C9.81667 8.21119 9.65278 8.20564 9.525 8.11675C9.39722 8.02786 9.33333 7.88341 9.33333 7.68341ZM4.33333 10.6667C4.85556 10.6667 5.36389 10.7251 5.85833 10.8417C6.35278 10.9584 6.84445 11.1334 7.33333 11.3667V4.80008C6.87778 4.53341 6.39445 4.33341 5.88333 4.20008C5.37222 4.06675 4.85556 4.00008 4.33333 4.00008C3.93333 4.00008 3.53611 4.03897 3.14167 4.11675C2.74722 4.19453 2.36667 4.31119 2 4.46675V11.0667C2.38889 10.9334 2.775 10.8334 3.15833 10.7667C3.54167 10.7001 3.93333 10.6667 4.33333 10.6667ZM8.66667 11.3667C9.15556 11.1334 9.64722 10.9584 10.1417 10.8417C10.6361 10.7251 11.1444 10.6667 11.6667 10.6667C12.0667 10.6667 12.4583 10.7001 12.8417 10.7667C13.225 10.8334 13.6111 10.9334 14 11.0667V4.46675C13.6333 4.31119 13.2528 4.19453 12.8583 4.11675C12.4639 4.03897 12.0667 4.00008 11.6667 4.00008C11.1444 4.00008 10.6278 4.06675 10.1167 4.20008C9.60556 4.33341 9.12222 4.53341 8.66667 4.80008V11.3667ZM8 12.9834C7.84445 12.9834 7.69722 12.964 7.55833 12.9251C7.41945 12.8862 7.28889 12.8334 7.16667 12.7667C6.73333 12.5112 6.27778 12.3195 5.8 12.1917C5.32222 12.064 4.83333 12.0001 4.33333 12.0001C3.86667 12.0001 3.40833 12.0612 2.95833 12.1834C2.50833 12.3056 2.07778 12.4779 1.66667 12.7001C1.43333 12.8223 1.20833 12.8167 0.991668 12.6834C0.775001 12.5501 0.666668 12.3556 0.666668 12.1001V4.06675C0.666668 3.94453 0.697223 3.82786 0.758335 3.71675C0.819446 3.60564 0.911112 3.5223 1.03333 3.46675C1.54445 3.20008 2.07778 3.00008 2.63333 2.86675C3.18889 2.73341 3.75556 2.66675 4.33333 2.66675C4.97778 2.66675 5.60833 2.75008 6.225 2.91675C6.84167 3.08341 7.43333 3.33341 8 3.66675C8.56667 3.33341 9.15833 3.08341 9.775 2.91675C10.3917 2.75008 11.0222 2.66675 11.6667 2.66675C12.2444 2.66675 12.8111 2.73341 13.3667 2.86675C13.9222 3.00008 14.4556 3.20008 14.9667 3.46675C15.0889 3.5223 15.1806 3.60564 15.2417 3.71675C15.3028 3.82786 15.3333 3.94453 15.3333 4.06675V12.1001C15.3333 12.3556 15.225 12.5501 15.0083 12.6834C14.7917 12.8167 14.5667 12.8223 14.3333 12.7001C13.9222 12.4779 13.4917 12.3056 13.0417 12.1834C12.5917 12.0612 12.1333 12.0001 11.6667 12.0001C11.1667 12.0001 10.6778 12.064 10.2 12.1917C9.72222 12.3195 9.26667 12.5112 8.83333 12.7667C8.71111 12.8334 8.58056 12.8862 8.44167 12.9251C8.30278 12.964 8.15556 12.9834 8 12.9834Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {(this.size === 20 || this.size === 24) && (
          <Fragment>
            <path
              d="M14 8.775C14 8.625 14.0542 8.47083 14.1625 8.3125C14.2708 8.15417 14.3917 8.05 14.525 8C15.0083 7.83333 15.4917 7.70833 15.975 7.625C16.4583 7.54167 16.9667 7.5 17.5 7.5C17.8333 7.5 18.1625 7.52083 18.4875 7.5625C18.8125 7.60417 19.1333 7.65833 19.45 7.725C19.6 7.75833 19.7292 7.84167 19.8375 7.975C19.9458 8.10833 20 8.25833 20 8.425C20 8.70833 19.9083 8.91667 19.725 9.05C19.5417 9.18333 19.3083 9.21667 19.025 9.15C18.7917 9.1 18.5458 9.0625 18.2875 9.0375C18.0292 9.0125 17.7667 9 17.5 9C17.0667 9 16.6417 9.04167 16.225 9.125C15.8083 9.20833 15.4083 9.31667 15.025 9.45C14.725 9.56667 14.4792 9.55833 14.2875 9.425C14.0958 9.29167 14 9.075 14 8.775ZM14 14.275C14 14.125 14.0542 13.9708 14.1625 13.8125C14.2708 13.6542 14.3917 13.55 14.525 13.5C15.0083 13.3333 15.4917 13.2083 15.975 13.125C16.4583 13.0417 16.9667 13 17.5 13C17.8333 13 18.1625 13.0208 18.4875 13.0625C18.8125 13.1042 19.1333 13.1583 19.45 13.225C19.6 13.2583 19.7292 13.3417 19.8375 13.475C19.9458 13.6083 20 13.7583 20 13.925C20 14.2083 19.9083 14.4167 19.725 14.55C19.5417 14.6833 19.3083 14.7167 19.025 14.65C18.7917 14.6 18.5458 14.5625 18.2875 14.5375C18.0292 14.5125 17.7667 14.5 17.5 14.5C17.0667 14.5 16.6417 14.5375 16.225 14.6125C15.8083 14.6875 15.4083 14.7917 15.025 14.925C14.725 15.0417 14.4792 15.0375 14.2875 14.9125C14.0958 14.7875 14 14.575 14 14.275ZM14 11.525C14 11.375 14.0542 11.2208 14.1625 11.0625C14.2708 10.9042 14.3917 10.8 14.525 10.75C15.0083 10.5833 15.4917 10.4583 15.975 10.375C16.4583 10.2917 16.9667 10.25 17.5 10.25C17.8333 10.25 18.1625 10.2708 18.4875 10.3125C18.8125 10.3542 19.1333 10.4083 19.45 10.475C19.6 10.5083 19.7292 10.5917 19.8375 10.725C19.9458 10.8583 20 11.0083 20 11.175C20 11.4583 19.9083 11.6667 19.725 11.8C19.5417 11.9333 19.3083 11.9667 19.025 11.9C18.7917 11.85 18.5458 11.8125 18.2875 11.7875C18.0292 11.7625 17.7667 11.75 17.5 11.75C17.0667 11.75 16.6417 11.7917 16.225 11.875C15.8083 11.9583 15.4083 12.0667 15.025 12.2C14.725 12.3167 14.4792 12.3083 14.2875 12.175C14.0958 12.0417 14 11.825 14 11.525ZM6.5 16C7.28333 16 8.04583 16.0875 8.7875 16.2625C9.52917 16.4375 10.2667 16.7 11 17.05V7.2C10.3167 6.8 9.59167 6.5 8.825 6.3C8.05833 6.1 7.28333 6 6.5 6C5.9 6 5.30417 6.05833 4.7125 6.175C4.12083 6.29167 3.55 6.46667 3 6.7V16.6C3.58333 16.4 4.1625 16.25 4.7375 16.15C5.3125 16.05 5.9 16 6.5 16ZM13 17.05C13.7333 16.7 14.4708 16.4375 15.2125 16.2625C15.9542 16.0875 16.7167 16 17.5 16C18.1 16 18.6875 16.05 19.2625 16.15C19.8375 16.25 20.4167 16.4 21 16.6V6.7C20.45 6.46667 19.8792 6.29167 19.2875 6.175C18.6958 6.05833 18.1 6 17.5 6C16.7167 6 15.9417 6.1 15.175 6.3C14.4083 6.5 13.6833 6.8 13 7.2V17.05ZM12 19.475C11.7667 19.475 11.5458 19.4458 11.3375 19.3875C11.1292 19.3292 10.9333 19.25 10.75 19.15C10.1 18.7667 9.41667 18.4792 8.7 18.2875C7.98333 18.0958 7.25 18 6.5 18C5.8 18 5.1125 18.0917 4.4375 18.275C3.7625 18.4583 3.11667 18.7167 2.5 19.05C2.15 19.2333 1.8125 19.225 1.4875 19.025C1.1625 18.825 1 18.5333 1 18.15V6.1C1 5.91667 1.04583 5.74167 1.1375 5.575C1.22917 5.40833 1.36667 5.28333 1.55 5.2C2.31667 4.8 3.11667 4.5 3.95 4.3C4.78333 4.1 5.63333 4 6.5 4C7.46667 4 8.4125 4.125 9.3375 4.375C10.2625 4.625 11.15 5 12 5.5C12.85 5 13.7375 4.625 14.6625 4.375C15.5875 4.125 16.5333 4 17.5 4C18.3667 4 19.2167 4.1 20.05 4.3C20.8833 4.5 21.6833 4.8 22.45 5.2C22.6333 5.28333 22.7708 5.40833 22.8625 5.575C22.9542 5.74167 23 5.91667 23 6.1V18.15C23 18.5333 22.8375 18.825 22.5125 19.025C22.1875 19.225 21.85 19.2333 21.5 19.05C20.8833 18.7167 20.2375 18.4583 19.5625 18.275C18.8875 18.0917 18.2 18 17.5 18C16.75 18 16.0167 18.0958 15.3 18.2875C14.5833 18.4792 13.9 18.7667 13.25 19.15C13.0667 19.25 12.8708 19.3292 12.6625 19.3875C12.4542 19.4458 12.2333 19.475 12 19.475Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M16.3333 10.2376C16.3333 10.0626 16.3965 9.88272 16.5229 9.698C16.6493 9.51328 16.7903 9.39175 16.9458 9.33341C17.5097 9.13897 18.0736 8.99314 18.6375 8.89591C19.2014 8.79869 19.7944 8.75008 20.4167 8.75008C20.8056 8.75008 21.1896 8.77439 21.5687 8.823C21.9479 8.87161 22.3222 8.9348 22.6917 9.01258C22.8667 9.05147 23.0174 9.14869 23.1437 9.30425C23.2701 9.4598 23.3333 9.6348 23.3333 9.82925C23.3333 10.1598 23.2264 10.4029 23.0125 10.5584C22.7986 10.714 22.5264 10.7529 22.1958 10.6751C21.9236 10.6167 21.6368 10.573 21.3354 10.5438C21.034 10.5147 20.7278 10.5001 20.4167 10.5001C19.9111 10.5001 19.4153 10.5487 18.9292 10.6459C18.4431 10.7431 17.9764 10.8695 17.5292 11.0251C17.1792 11.1612 16.8924 11.1515 16.6687 10.9959C16.4451 10.8404 16.3333 10.5876 16.3333 10.2376ZM16.3333 16.6542C16.3333 16.4792 16.3965 16.2994 16.5229 16.1147C16.6493 15.9299 16.7903 15.8084 16.9458 15.7501C17.5097 15.5556 18.0736 15.4098 18.6375 15.3126C19.2014 15.2154 19.7944 15.1667 20.4167 15.1667C20.8056 15.1667 21.1896 15.1911 21.5687 15.2397C21.9479 15.2883 22.3222 15.3515 22.6917 15.4292C22.8667 15.4681 23.0174 15.5654 23.1437 15.7209C23.2701 15.8765 23.3333 16.0515 23.3333 16.2459C23.3333 16.5765 23.2264 16.8195 23.0125 16.9751C22.7986 17.1306 22.5264 17.1695 22.1958 17.0917C21.9236 17.0334 21.6368 16.9897 21.3354 16.9605C21.034 16.9313 20.7278 16.9167 20.4167 16.9167C19.9111 16.9167 19.4153 16.9605 18.9292 17.048C18.4431 17.1355 17.9764 17.257 17.5292 17.4126C17.1792 17.5487 16.8924 17.5438 16.6687 17.398C16.4451 17.2522 16.3333 17.0042 16.3333 16.6542ZM16.3333 13.4459C16.3333 13.2709 16.3965 13.0911 16.5229 12.9063C16.6493 12.7216 16.7903 12.6001 16.9458 12.5417C17.5097 12.3473 18.0736 12.2015 18.6375 12.1042C19.2014 12.007 19.7944 11.9584 20.4167 11.9584C20.8056 11.9584 21.1896 11.9827 21.5687 12.0313C21.9479 12.0799 22.3222 12.1431 22.6917 12.2209C22.8667 12.2598 23.0174 12.357 23.1437 12.5126C23.2701 12.6681 23.3333 12.8431 23.3333 13.0376C23.3333 13.3681 23.2264 13.6112 23.0125 13.7667C22.7986 13.9223 22.5264 13.9612 22.1958 13.8834C21.9236 13.8251 21.6368 13.7813 21.3354 13.7522C21.034 13.723 20.7278 13.7084 20.4167 13.7084C19.9111 13.7084 19.4153 13.757 18.9292 13.8542C18.4431 13.9515 17.9764 14.0779 17.5292 14.2334C17.1792 14.3695 16.8924 14.3598 16.6687 14.2042C16.4451 14.0487 16.3333 13.7959 16.3333 13.4459ZM7.58333 18.6667C8.49722 18.6667 9.3868 18.7688 10.2521 18.973C11.1174 19.1772 11.9778 19.4834 12.8333 19.8917V8.40008C12.0361 7.93341 11.1903 7.58341 10.2958 7.35008C9.40139 7.11675 8.49722 7.00008 7.58333 7.00008C6.88333 7.00008 6.18819 7.06814 5.49791 7.20425C4.80764 7.34036 4.14166 7.54453 3.5 7.81675V19.3667C4.18055 19.1334 4.85625 18.9584 5.52708 18.8417C6.19791 18.7251 6.88333 18.6667 7.58333 18.6667ZM15.1667 19.8917C16.0222 19.4834 16.8826 19.1772 17.7479 18.973C18.6132 18.7688 19.5028 18.6667 20.4167 18.6667C21.1167 18.6667 21.8021 18.7251 22.4729 18.8417C23.1437 18.9584 23.8194 19.1334 24.5 19.3667V7.81675C23.8583 7.54453 23.1924 7.34036 22.5021 7.20425C21.8118 7.06814 21.1167 7.00008 20.4167 7.00008C19.5028 7.00008 18.5986 7.11675 17.7042 7.35008C16.8097 7.58341 15.9639 7.93341 15.1667 8.40008V19.8917ZM14 22.7209C13.7278 22.7209 13.4701 22.6869 13.2271 22.6188C12.984 22.5508 12.7556 22.4584 12.5417 22.3417C11.7833 21.8945 10.9861 21.5591 10.15 21.3355C9.31389 21.1119 8.45833 21.0001 7.58333 21.0001C6.76666 21.0001 5.96458 21.107 5.17708 21.3209C4.38958 21.5348 3.63611 21.8362 2.91666 22.2251C2.50833 22.439 2.11458 22.4292 1.73541 22.1959C1.35625 21.9626 1.16666 21.6223 1.16666 21.1751V7.11675C1.16666 6.90286 1.22014 6.69869 1.32708 6.50425C1.43403 6.3098 1.59444 6.16397 1.80833 6.06675C2.70278 5.60008 3.63611 5.25008 4.60833 5.01675C5.58055 4.78341 6.57222 4.66675 7.58333 4.66675C8.71111 4.66675 9.81458 4.81258 10.8937 5.10425C11.9729 5.39591 13.0083 5.83341 14 6.41675C14.9917 5.83341 16.0271 5.39591 17.1062 5.10425C18.1854 4.81258 19.2889 4.66675 20.4167 4.66675C21.4278 4.66675 22.4194 4.78341 23.3917 5.01675C24.3639 5.25008 25.2972 5.60008 26.1917 6.06675C26.4056 6.16397 26.566 6.3098 26.6729 6.50425C26.7799 6.69869 26.8333 6.90286 26.8333 7.11675V21.1751C26.8333 21.6223 26.6437 21.9626 26.2646 22.1959C25.8854 22.4292 25.4917 22.439 25.0833 22.2251C24.3639 21.8362 23.6104 21.5348 22.8229 21.3209C22.0354 21.107 21.2333 21.0001 20.4167 21.0001C19.5417 21.0001 18.6861 21.1119 17.85 21.3355C17.0139 21.5591 16.2167 21.8945 15.4583 22.3417C15.2444 22.4584 15.016 22.5508 14.7729 22.6188C14.5299 22.6869 14.2722 22.7209 14 22.7209Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
