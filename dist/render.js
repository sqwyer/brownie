export function render(node) {
    [...document.getElementById("main").children].forEach(self => self.remove());
    document.getElementById("main").appendChild(node);
}
//# sourceMappingURL=render.js.map