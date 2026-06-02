function setupTabs(groupSelector, panelSelector, activeClass = "active") {
  const tabs = document.querySelectorAll(groupSelector);
  const panels = document.querySelectorAll(panelSelector);
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.target || tab.dataset.page;
      tabs.forEach(item => item.classList.toggle(activeClass, item === tab));
      panels.forEach(panel => {
        const key = panel.dataset.panel || panel.dataset.page;
        panel.classList.toggle(activeClass, key === target);
      });
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  setupTabs("[data-tab]", "[data-panel]");
});
