import { generateStoryElement } from "../../utils";
import Docs from "./swirl-tab.mdx";

export default {
  component: "swirl-tab",
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: Docs,
    },
  },
  title: "Components/SwirlTab",
};

const Template = (args) => {
  const element = generateStoryElement("swirl-tab", args);

  element.innerHTML = `<swirl-text>Content</swirl-text>`;

  return element;
};

export const SwirlTab = Template.bind({});

SwirlTab.args = {
  active: true,
  icon: '<swirl-icon glyph="emoji-satisfied" size="20"></swirl-icon>',
  label: "Label",
  tabId: "tab-id",
};
