import { Game } from "./Game.js"
import { render } from "./render.js"

export function Create() {
    const div = document.createElement("div")
    const input_wrapper = document.createElement("div")
    const input_label = document.createElement("span")
    const input = document.createElement("input")
    const button = document.createElement("button")

    div.className = "center"
    div.id = "src-div"

    button.innerText = "Go"
    button.id = "src-go"
    button.disabled = true;
    button.onclick = async function() {
        const image = new Image();
        image.onload = function() {
            render(Game(image))
        }
        image.onerror = function() {
            input_wrapper.className = "invalid-url"
            input_label.innerText = "Invalid URL"
        }
        image.src = input.value;
    }
    input_wrapper.id = "src-wrapper"
    input_label.id = "src-label"
    input_label.innerText = "Image URL"
    input.id = "src-input";
    input.required = true;
    input.type = "text";
    input.onkeyup = function() {
        if(input.value.trim() != "") button.disabled = false
        else button.disabled = true;
    }
    input_wrapper.appendChild(input)
    input_wrapper.appendChild(input_label)

    div.appendChild(input_wrapper)
    div.appendChild(button)

    return div;
}