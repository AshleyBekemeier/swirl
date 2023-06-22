// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { SwirlSymbolSize } from "../swirl-symbol.types";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../swirl-symbol.css",
  tag: "swirl-symbol-redeem",
})
export class SwirlSymbolRedeem {
  @Prop() size: SwirlSymbolSize = 24;

  render() {
    const viewBoxSize = this.size === 20 ? 24 : this.size;

    const className = classnames(
      "swirl-symbol",
      `swirl-symbol--size-${this.size}`
    );

    return (
      <svg
        class={className}
        fill="none"
        height={this.size}
        part="symbol"
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        width={this.size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <Fragment>
          <path
            d="M20 6H17.82C18.0661 5.31049 18.051 4.55468 17.7775 3.87557C17.504 3.19647 16.991 2.64116 16.3357 2.31473C15.6804 1.9883 14.9281 1.91339 14.2213 2.10417C13.5145 2.29494 12.9021 2.73817 12.5 3.35L12 4.02L11.5 3.34C11.098 2.72563 10.4843 2.28038 9.77554 2.08888C9.06677 1.89738 8.31234 1.97298 7.65566 2.30132C6.99898 2.62966 6.48584 3.18784 6.21377 3.86976C5.94171 4.55168 5.92969 5.3098 6.18 6H4C3.73764 5.99933 3.47774 6.05068 3.23535 6.15108C2.99296 6.25147 2.77287 6.39893 2.58782 6.58491C2.40277 6.77089 2.25642 6.99171 2.15724 7.23461C2.05806 7.4775 2.00801 7.73764 2.01 8L2 19C1.99907 19.2629 2.05017 19.5234 2.15035 19.7665C2.25054 20.0095 2.39782 20.2304 2.58372 20.4163C2.76962 20.6022 2.99047 20.7495 3.23354 20.8496C3.47661 20.9498 3.73709 21.0009 4 21H20C20.2629 21.0009 20.5234 20.9498 20.7665 20.8496C21.0095 20.7495 21.2304 20.6022 21.4163 20.4163C21.6022 20.2304 21.7495 20.0095 21.8496 19.7665C21.9498 19.5234 22.0009 19.2629 22 19V8C22.0009 7.7371 21.9498 7.47661 21.8496 7.23354C21.7495 6.99047 21.6022 6.76963 21.4163 6.58372C21.2304 6.39782 21.0095 6.25054 20.7665 6.15036C20.5234 6.05017 20.2629 5.99907 20 6ZM15 4C15.1978 4 15.3911 4.05865 15.5556 4.16853C15.72 4.27841 15.8482 4.43459 15.9239 4.61732C15.9996 4.80004 16.0194 5.00111 15.9808 5.19509C15.9422 5.38907 15.847 5.56725 15.7071 5.70711C15.5673 5.84696 15.3891 5.9422 15.1951 5.98079C15.0011 6.01937 14.8 5.99957 14.6173 5.92388C14.4346 5.84819 14.2784 5.72002 14.1685 5.55557C14.0586 5.39112 14 5.19778 14 5C14 4.73478 14.1054 4.48043 14.2929 4.29289C14.4804 4.10536 14.7348 4 15 4ZM9 4C9.19778 4 9.39112 4.05865 9.55557 4.16853C9.72002 4.27841 9.84819 4.43459 9.92388 4.61732C9.99956 4.80004 10.0194 5.00111 9.98078 5.19509C9.9422 5.38907 9.84696 5.56725 9.7071 5.70711C9.56725 5.84696 9.38907 5.9422 9.19509 5.98079C9.00111 6.01937 8.80004 5.99957 8.61731 5.92388C8.43459 5.84819 8.27841 5.72002 8.16853 5.55557C8.05865 5.39112 8 5.19778 8 5C8 4.73478 8.10535 4.48043 8.29289 4.29289C8.48043 4.10536 8.73478 4 9 4ZM19 19H5C4.73478 19 4.48043 18.8946 4.29289 18.7071C4.10535 18.5196 4 18.2652 4 18V17H20V18C20 18.2652 19.8946 18.5196 19.7071 18.7071C19.5196 18.8946 19.2652 19 19 19ZM20 14H4V9C4 8.73478 4.10535 8.48043 4.29289 8.29289C4.48043 8.10536 4.73478 8 5 8H9.08L7.6 10.02C7.51257 10.1249 7.44755 10.2466 7.40896 10.3776C7.37037 10.5086 7.35901 10.6461 7.3756 10.7817C7.39219 10.9172 7.43637 11.048 7.50541 11.1658C7.57446 11.2836 7.6669 11.386 7.77705 11.4668C7.8872 11.5475 8.01272 11.6048 8.14586 11.6352C8.27901 11.6655 8.41697 11.6683 8.55122 11.6433C8.68548 11.6183 8.8132 11.5661 8.9265 11.4898C9.0398 11.4136 9.13628 11.315 9.21 11.2L12 7.4L14.79 11.2C14.8637 11.315 14.9602 11.4136 15.0735 11.4898C15.1868 11.5661 15.3145 11.6183 15.4488 11.6433C15.583 11.6683 15.721 11.6655 15.8541 11.6352C15.9873 11.6048 16.1128 11.5475 16.2229 11.4668C16.3331 11.386 16.4255 11.2836 16.4946 11.1658C16.5636 11.048 16.6078 10.9172 16.6244 10.7817C16.641 10.6461 16.6296 10.5086 16.591 10.3776C16.5524 10.2466 16.4874 10.1249 16.4 10.02L14.92 8H19C19.2652 8 19.5196 8.10536 19.7071 8.29289C19.8946 8.48043 20 8.73478 20 9V14Z"
            fill="currentColor"
          />
        </Fragment>
      </svg>
    );
  }
}