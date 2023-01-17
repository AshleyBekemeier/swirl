import { generateStoryElement } from "../../utils";
import Docs from "./swirl-lightbox.mdx";

export default {
  component: "swirl-lightbox",
  parameters: {
    docs: {
      page: Docs,
      source: {
        code: `<swirl-lightbox id="lightbox" label="Lightbox">
  <swirl-file-viewer description="Cute dog in a blaket." file="/sample.jpg" type="image/jpeg"></swirl-file-viewer>
  <swirl-file-viewer description="Another cute dog in a blanket." file="/sample-2.jpg" type="image/jpeg"></swirl-file-viewer>
  <swirl-file-viewer description="Black puppy." file="/sample-3.jpg" type="image/jpeg"></swirl-file-viewer>
  <swirl-file-viewer autoplay file="/sample.mp4" type="video/mp4"></swirl-file-viewer>
</swirl-lightbox>

<script>
  const lightbox = document.body.querySelector('#lightbox');
  lightbox.open();
</script>`,
      },
    },
  },
  title: "Components/SwirlLightbox",
};

const Template = (args) => {
  const container = document.createElement("div");
  const trigger = document.createElement("swirl-button");
  const element = generateStoryElement(
    "swirl-lightbox",
    args
  ) as HTMLSwirlLightboxElement;

  trigger.label = "Open lightbox";
  trigger.addEventListener("click", () => element.open());

  element.innerHTML = `
    <swirl-file-viewer description="Cute dog in a blanket." file="/sample.jpg" type="image/jpeg"></swirl-file-viewer>
    <swirl-file-viewer description="Another cute dog in a blanket." file="/sample-2.jpg" type="image/jpeg"></swirl-file-viewer>
    <swirl-file-viewer description="Black puppy." file="/sample-3.jpg" type="image/jpeg"></swirl-file-viewer>
    <swirl-file-viewer autoplay file="/sample.mp4" type="video/mp4"></swirl-file-viewer>
  `;

  container.append(trigger, element);

  return container;
};

export const SwirlLightbox = Template.bind({});

SwirlLightbox.args = {
  label: "Lightbox",
};