export function render(node: Node) {
    [...document.getElementById("main").children].forEach(self => self.remove())
    document.getElementById("main").appendChild(node)
}