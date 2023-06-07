import { newSpecPage } from "@stencil/core/testing";
import { SwirlResourceListItem } from "../swirl-resource-list-item/swirl-resource-list-item";
import { SwirlResourceList } from "./swirl-resource-list";
import { MockElement } from "@stencil/core/mock-doc";

(MockElement.prototype as any).after = function () {
  var argArr = Array.prototype.slice.call(arguments);
  var docFrag = document.createDocumentFragment();

  for (var n = 0; n < argArr.length; n++) {
    docFrag.appendChild(argArr[n]);
  }

  this.parentNode.insertBefore(docFrag, this.nextSibling);
};

(MockElement.prototype as any).before = function () {
  var argArr = Array.prototype.slice.call(arguments);
  var docFrag = document.createDocumentFragment();

  for (var n = 0; n < argArr.length; n++) {
    docFrag.appendChild(argArr[n]);
  }

  this.parentNode.insertBefore(docFrag, this.previousSibling);
};

describe("swirl-resource-list", () => {
  const template = `
    <swirl-resource-list label="Label">
      <swirl-resource-list-item
        description="With a description"
        label="This is a resource item"
        media="<swirl-avatar label=&quot;John Doe&quot; src=&quot;https://picsum.photos/id/433/144/144&quot;></swirl-avatar>"
      ></swirl-resource-list-item>
      <swirl-resource-list-item
        description="With a description"
        label="This is a resource item"
        media="<swirl-avatar label=&quot;John Doe&quot; src=&quot;https://picsum.photos/id/103/144/144&quot;></swirl-avatar>"
      ></swirl-resource-list-item>
    </swirl-resource-list>
  `;

  it("renders its items", async () => {
    const page = await newSpecPage({
      components: [SwirlResourceList],
      html: template,
    });

    expect(page.root).toEqualHtml(`
      <swirl-resource-list label="Label">
        <swirl-visually-hidden role="alert"></swirl-visually-hidden>
        <swirl-stack aria-label="Label" class="resource-list" role="grid">
          <swirl-resource-list-item description="With a description" label="This is a resource item" media="<swirl-avatar label=&quot;John Doe&quot; src=&quot;https://picsum.photos/id/433/144/144&quot;></swirl-avatar>"></swirl-resource-list-item>
          <swirl-resource-list-item description="With a description" label="This is a resource item" media="<swirl-avatar label=&quot;John Doe&quot; src=&quot;https://picsum.photos/id/103/144/144&quot;></swirl-avatar>"></swirl-resource-list-item>
        </swirl-stack>
      </swirl-resource-list>
    `);
  });

  it("manages focus via keyboard events", async () => {
    const page = await newSpecPage({
      components: [SwirlResourceList, SwirlResourceListItem],
      html: template,
    });

    const items = Array.from(
      page.root.querySelectorAll("swirl-resource-list-item")
    );

    const interactiveElements = items.map((item) =>
      item.querySelector<HTMLElement>(".resource-list-item__content")
    );

    // focuses the first element if list is focused
    (page.root.children[0] as HTMLElement).focus();
    expect(interactiveElements[0].getAttribute("tabIndex")).toBe("0");

    // Down arrow focues the next element
    page.root.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowDown" }));
    expect(interactiveElements[0].getAttribute("tabIndex")).toBe("-1");
    expect(interactiveElements[1].getAttribute("tabIndex")).toBe("0");

    // Up arrow focues the next element
    page.root.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowUp" }));
    expect(interactiveElements[0].getAttribute("tabIndex")).toBe("0");
    expect(interactiveElements[1].getAttribute("tabIndex")).toBe("-1");

    // End key focues the first element
    page.root.dispatchEvent(new KeyboardEvent("keydown", { key: "End" }));
    expect(interactiveElements[0].getAttribute("tabIndex")).toBe("-1");
    expect(interactiveElements[1].getAttribute("tabIndex")).toBe("0");

    // Home key focues the first element
    page.root.dispatchEvent(new KeyboardEvent("keydown", { key: "Home" }));
    expect(interactiveElements[0].getAttribute("tabIndex")).toBe("0");
    expect(interactiveElements[1].getAttribute("tabIndex")).toBe("-1");
  });

  it("makes items draggable", async () => {
    const page = await newSpecPage({
      components: [SwirlResourceList, SwirlResourceListItem],
      html: template,
    });

    const items = Array.from(
      page.root.querySelectorAll("swirl-resource-list-item")
    );

    const assistiveText =
      page.root.querySelector<HTMLElement>('[role="alert"]');

    const resourceList =
      page.root.querySelector<HTMLElement>(".resource-list").parentElement;

    for (const item of items) {
      expect(item.getAttribute("allow-drag")).toBeNull();
    }

    page.root.setAttribute("allow-drag", "true");
    await page.waitForChanges();

    for (const item of items) {
      expect(item.getAttribute("allow-drag")).toBe("true");
    }

    items[0]
      .querySelector<HTMLButtonElement>(".resource-list-item__drag-handle")
      .dispatchEvent(new KeyboardEvent("keydown", { code: "Space" }));
    await page.waitForChanges();

    expect(assistiveText.innerHTML).toBe(
      "Item grabbed. Use arrow keys to move item up or down. Use spacebar to save position."
    );

    resourceList.dispatchEvent(
      new KeyboardEvent("keydown", { key: "ArrowDown" })
    );
    await page.waitForChanges();

    expect(assistiveText.innerHTML).toBe("Current position: 2");

    resourceList.dispatchEvent(
      new KeyboardEvent("keydown", { key: "ArrowUp" })
    );
    await page.waitForChanges();

    expect(assistiveText.innerHTML).toBe("Current position: 1");
  });
});
