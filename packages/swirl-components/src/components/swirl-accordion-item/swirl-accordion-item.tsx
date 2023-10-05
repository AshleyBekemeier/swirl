import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Method,
  Prop,
  State,
} from "@stencil/core";
import { v4 as uuid } from "uuid";
import { SwirlHeadingLevel } from "../swirl-heading/swirl-heading";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "swirl-accordion-item.css",
  tag: "swirl-accordion-item",
})
export class SwirlAccordionItem {
  @Element() el: HTMLElement;

  @Prop() description?: string;
  @Prop() heading!: string;
  @Prop() headingLevel?: SwirlHeadingLevel = 2;
  @Prop() initiallyOpen?: boolean;

  @Event() expansionChange: EventEmitter<boolean>;

  @State() expanded = false;

  private accordion: HTMLSwirlAccordionElement;
  private id = `accordion-item-${uuid()}`;
  private headingId = `${this.id}-heading`;

  componentWillLoad() {
    this.accordion = this.el.closest("swirl-accordion");
    this.expanded = this.initiallyOpen || false;

    if (!Boolean(this.accordion)) {
      throw new Error(
        "[Swirl] swirl-accordion-item must be a child of a swirl-accordion."
      );
    }
  }

  /**
   * Collapsed the accordion item.
   */
  @Method()
  async collapse() {
    if (!this.expanded) {
      return;
    }

    this.expanded = false;
    this.expansionChange.emit(this.expanded);
  }

  /**
   * Expands the accordion item.
   */
  @Method()
  async expand() {
    if (this.expanded) {
      return;
    }

    this.expanded = true;
    this.expansionChange.emit(this.expanded);
  }

  /**
   * Toggles the accordion item.
   */
  @Method()
  async toggle() {
    if (this.expanded) {
      this.collapse();
    } else {
      this.expand();
    }
  }

  private onHeadingClick = () => {
    this.toggle();
  };

  render() {
    const HeadingTag = `h${this.headingLevel}`;

    const className = classnames("accordion-item", {
      "accordion-item--expanded": this.expanded,
    });

    return (
      <Host>
        <div class={className}>
          <HeadingTag class="accordion-item__heading">
            <button
              aria-controls={this.id}
              aria-expanded={String(this.expanded)}
              class="accordion-item__toggle"
              id={this.headingId}
              onClick={this.onHeadingClick}
              type="button"
            >
              <span class="accordion-item__toggle-text">
                {this.heading}
                {this.description && (
                  <swirl-text as="span" color="subdued" size="sm">
                    {this.description}
                  </swirl-text>
                )}
              </span>
              <span class="accordion-item__icon">
                {!this.expanded && (
                  <swirl-icon glyph="chevron-right" size={20}></swirl-icon>
                )}
                {this.expanded && (
                  <swirl-icon glyph="expand-more" size={20}></swirl-icon>
                )}
              </span>
            </button>
          </HeadingTag>
          <div
            aria-labelledby={this.headingId}
            class="accordion-item__content"
            id={this.id}
            role="region"
          >
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
