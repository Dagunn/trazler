

document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".category__tab");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const tabId = tab.getAttribute("data-tab");

            
            document.querySelectorAll(".category__tab").forEach(t => t.classList.remove("category__tab--active"));
            document.querySelectorAll(".category__panel").forEach(p => p.classList.remove("category__panel--active"));
            document.querySelectorAll(".category__cont-inner").forEach(inner => inner.classList.remove("category__cont-inner--active"));

            
            tab.classList.add("category__tab--active");

            const activePanel = document.querySelector(`.category__panel[data-panel="${tabId}"]`);
            if (activePanel) {
                activePanel.classList.add("category__panel--active");
            }

            const activeInner = activePanel?.closest(".category__cont-inner");
            if (activeInner) {
                activeInner.classList.add("category__cont-inner--active");
            }
        });
    });
});
