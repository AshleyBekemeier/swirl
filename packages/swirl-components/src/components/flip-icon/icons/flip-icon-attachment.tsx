// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { FlipIconSize } from "../flip-icon.types";

@Component({
  shadow: true,
  styleUrl: "../flip-icon.css",
  tag: "flip-icon-attachment",
})
export class FlipIconAttachment {
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
        {this.size === 16 && <Fragment><path d="M8.57157 12.8796C7.81732 13.6338 6.91584 14.0089 5.86712 14.0048C4.81809 14.0011 3.92038 13.626 3.17399 12.8796C2.41974 12.1253 2.04073 11.2237 2.03696 10.1747C2.03287 9.12594 2.40795 8.22446 3.1622 7.47021L8.15909 2.47333C8.7012 1.93121 9.35913 1.66204 10.1329 1.66581C10.9069 1.6699 11.565 1.943 12.1071 2.48511C12.6492 3.02723 12.9203 3.68327 12.9203 4.45323C12.9203 5.22319 12.6492 5.87922 12.1071 6.42134L7.60519 10.9233C7.25949 11.2689 6.84513 11.4438 6.3621 11.4479C5.87875 11.4517 5.46423 11.2807 5.11853 10.935C4.76498 10.5815 4.59024 10.1632 4.59433 9.68016C4.5981 9.19681 4.77283 8.78229 5.11853 8.43659L9.21975 4.33537C9.32974 4.22538 9.46127 4.16834 9.61432 4.16425C9.76768 4.16048 9.90329 4.21752 10.0211 4.33537C10.1311 4.44537 10.1842 4.57705 10.1805 4.73041C10.1764 4.88346 10.1193 5.01498 10.0094 5.12498L5.90813 9.2262C5.78243 9.3519 5.71957 9.50118 5.71957 9.67403C5.71957 9.84688 5.78635 10.0001 5.91992 10.1337C6.04563 10.2594 6.1949 10.3222 6.36775 10.3222C6.5406 10.3222 6.68988 10.2594 6.81559 10.1337L11.3175 5.63174C11.6475 5.30175 11.8125 4.90892 11.8125 4.45323C11.8125 3.99753 11.6475 3.6047 11.3175 3.27471C10.9875 2.94473 10.5947 2.77974 10.139 2.77974C9.6833 2.77974 9.29046 2.94473 8.96048 3.27471L3.96359 8.2716C3.43719 8.798 3.17399 9.43424 3.17399 10.1803C3.17399 10.927 3.43719 11.5636 3.96359 12.09C4.48999 12.6164 5.1245 12.8775 5.86712 12.8735C6.60943 12.8697 7.24378 12.6046 7.77018 12.0782L12.3664 7.482C12.4764 7.372 12.6099 7.31701 12.7671 7.31701C12.9242 7.31701 13.0578 7.372 13.1678 7.482C13.2856 7.59985 13.3425 7.7353 13.3384 7.88835C13.3346 8.04171 13.2778 8.17339 13.1678 8.28339L8.57157 12.8796Z" fill="currentColor"/></Fragment>}
        {this.size === 24 && <Fragment><path d="M12.8574 19.3194C11.726 20.4507 10.3738 21.0134 8.80068 21.0072C7.22713 21.0016 5.88057 20.439 4.76098 19.3194C3.62961 18.188 3.0611 16.8355 3.05544 15.262C3.04931 13.6889 3.61193 12.3367 4.7433 11.2053L12.2386 3.70999C13.0518 2.89682 14.0387 2.49306 15.1993 2.49872C16.3604 2.50484 17.3475 2.91449 18.1607 3.72767C18.9738 4.54084 19.3804 5.5249 19.3804 6.67984C19.3804 7.83478 18.9738 8.81884 18.1607 9.63201L11.4078 16.3849C10.8892 16.9034 10.2677 17.1658 9.54314 17.1719C8.81812 17.1775 8.19634 16.9211 7.6778 16.4026C7.14747 15.8722 6.88536 15.2448 6.89149 14.5202C6.89715 13.7952 7.15925 13.1734 7.6778 12.6549L13.8296 6.50306C13.9946 6.33807 14.1919 6.25251 14.4215 6.24638C14.6515 6.24072 14.8549 6.32628 15.0317 6.50306C15.1967 6.66805 15.2764 6.86557 15.2707 7.09562C15.2646 7.32519 15.179 7.52247 15.014 7.68747L8.8622 13.8393C8.67364 14.0279 8.57936 14.2518 8.57936 14.511C8.57936 14.7703 8.67953 15.0001 8.87988 15.2005C9.06844 15.389 9.29236 15.4833 9.55163 15.4833C9.8109 15.4833 10.0348 15.389 10.2234 15.2005L16.9762 8.4476C17.4712 7.95263 17.7187 7.36337 17.7187 6.67984C17.7187 5.9963 17.4712 5.40704 16.9762 4.91207C16.4813 4.4171 15.892 4.16961 15.2085 4.16961C14.5249 4.16961 13.9357 4.4171 13.4407 4.91207L5.94538 12.4074C5.15578 13.197 4.76098 14.1514 4.76098 15.2705C4.76098 16.3905 5.15578 17.3454 5.94538 18.135C6.73499 18.9246 7.68675 19.3163 8.80068 19.3102C9.91414 19.3045 10.8657 18.9069 11.6553 18.1173L18.5496 11.223C18.7146 11.058 18.9149 10.9755 19.1506 10.9755C19.3863 10.9755 19.5867 11.058 19.7516 11.223C19.9284 11.3998 20.0137 11.603 20.0076 11.8325C20.002 12.0626 19.9166 12.2601 19.7516 12.4251L12.8574 19.3194Z" fill="currentColor"/></Fragment>}
        {this.size === 28 && <Fragment><path d="M15.0003 22.5393C13.6803 23.8593 12.1027 24.5157 10.2675 24.5085C8.43167 24.5019 6.86068 23.8455 5.55449 22.5393C4.23456 21.2194 3.57129 19.6415 3.56469 17.8057C3.55754 15.9705 4.21394 14.3929 5.53387 13.0729L14.2784 4.32838C15.2271 3.37968 16.3785 2.90863 17.7325 2.91523C19.0871 2.92238 20.2387 3.4003 21.1874 4.34901C22.1361 5.29771 22.6105 6.44578 22.6105 7.79321C22.6105 9.14064 22.1361 10.2887 21.1874 11.2374L13.3091 19.1158C12.7041 19.7207 11.979 20.0268 11.1337 20.0339C10.2878 20.0405 9.56241 19.7413 8.95744 19.1364C8.33873 18.5177 8.03294 17.7856 8.04009 16.9403C8.04669 16.0945 8.35247 15.3691 8.95744 14.7641L16.1346 7.58697C16.3271 7.39448 16.5572 7.29466 16.8251 7.28751C17.0935 7.28091 17.3308 7.38073 17.537 7.58697C17.7295 7.77946 17.8224 8.00989 17.8158 8.27828C17.8087 8.54612 17.7089 8.77628 17.5164 8.96877L10.3392 16.1459C10.1193 16.3659 10.0093 16.6271 10.0093 16.9296C10.0093 17.2321 10.1261 17.5002 10.3599 17.7339C10.5799 17.9539 10.8411 18.0639 11.1436 18.0639C11.4461 18.0639 11.7073 17.9539 11.9273 17.7339L19.8056 9.8556C20.3831 9.27813 20.6718 8.59066 20.6718 7.79321C20.6718 6.99575 20.3831 6.30828 19.8056 5.73081C19.2282 5.15334 18.5407 4.8646 17.7432 4.8646C16.9458 4.8646 16.2583 5.15334 15.6808 5.73081L6.9363 14.4754C6.01509 15.3966 5.55449 16.51 5.55449 17.8156C5.55449 19.1224 6.01509 20.2363 6.9363 21.1575C7.8575 22.0787 8.96789 22.5358 10.2675 22.5286C11.5665 22.522 12.6766 22.0581 13.5978 21.1369L21.6412 13.0936C21.8337 12.9011 22.0674 12.8048 22.3424 12.8048C22.6174 12.8048 22.8511 12.9011 23.0436 13.0936C23.2498 13.2998 23.3494 13.5368 23.3422 13.8047C23.3356 14.0731 23.2361 14.3035 23.0436 14.496L15.0003 22.5393Z" fill="currentColor"/></Fragment>}
      </svg>
    );
  }
}
