import { generateStoryElement } from "../../utils";
import Docs from "./swirl-accordion.mdx";

export default {
  component: "swirl-accordion",
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: Docs,
    },
  },
  title: "Components/SwirlAccordion",
};

const Template = (args) => {
  const element = generateStoryElement("swirl-accordion", args);

  element.innerHTML = `
  <swirl-accordion-item description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." heading="Accordion item 1" initially-open>
    <swirl-stack spacing="16">
      <swirl-text size="sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        euismod libero, nec sollicitudin diam ultricies ut. Donec eget
        consectetur libero. Donec et mi non mauris fermentum dictum. Sed
        scelerisque, sapien vitae fringilla aliquam, quam sapien aliquet.
      </swirl-text>
      <swirl-button label="A button" variant="flat"></swirl-button>
    </swirl-stack>
  </swirl-accordion-item>
  <swirl-accordion-item description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." heading="Accordion item 2">
    <swirl-stack spacing="16">
      <swirl-text size="sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        euismod libero, nec sollicitudin diam ultricies ut. Donec eget
        consectetur libero. Donec et mi non mauris fermentum dictum. Sed
        scelerisque, sapien vitae fringilla aliquam, quam sapien aliquet.
      </swirl-text>
      <swirl-button label="A button" variant="flat"></swirl-button>
    </swirl-stack>
  </swirl-accordion-item>
  <swirl-accordion-item description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." heading="Accordion item 3">
    <swirl-stack spacing="16">
      <swirl-text size="sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        euismod libero, nec sollicitudin diam ultricies ut. Donec eget
        consectetur libero. Donec et mi non mauris fermentum dictum. Sed
        scelerisque, sapien vitae fringilla aliquam, quam sapien aliquet.
      </swirl-text>
      <swirl-button label="A button" variant="flat"></swirl-button>
    </swirl-stack>
  </swirl-accordion-item>
`;

  return element;
};

export const SwirlAccordion = Template.bind({});

SwirlAccordion.args = {};
