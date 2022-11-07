import { Game } from "./Game.js"
import { render } from "./render.js"

const presets = [
    {
        name: "Cosmic Brownie",
        url: "./images/cosmic_brownie.png"
    }
]

export function Create() {
    const div = document.createElement("div")
    const input_wrapper = document.createElement("div")
    const input_label = document.createElement("span")
    const input = document.createElement("input")
    const button = document.createElement("button")
    const link = document.createElement("a");

    function createPopover() {
        const popover = document.createElement("div");
        popover.id = "presets-popover"
        for(let preset of presets) {
            const preset_div = document.createElement("div")
            const preset_col = document.createElement("div");
            const preset_label = document.createElement("p")
            const preset_url = document.createElement("p")
            const preset_img = new Image();
            preset_div.className = "presets-popver-preset"
            preset_img.id = "preset-img"
            preset_img.src = preset.url
            preset_label.id = "preset-label"
            preset_label.innerText = preset.name
            preset_url.id = "preset-url"
            preset_url.innerText = preset.url
            preset_div.appendChild(preset_img)
            preset_col.appendChild(preset_label)
            preset_col.appendChild(preset_url)
            preset_div.appendChild(preset_col)
            popover.appendChild(preset_div)
            preset_div.onclick = function() {
                input.value = preset.url;
                button.disabled = false;
                popover.remove();
            }
        }
        const popver_exit = document.createElement("p")
        popver_exit.id = "preset-exit"
        popver_exit.innerText = "Close"
        popver_exit.onclick = function() {
            popover.remove();
        }
        popover.appendChild(popver_exit)
        div.appendChild(popover)
    }

    div.className = "center"
    div.id = "src-div"

    link.id = "show-presets";
    link.innerText = "Image Presets"

    button.innerText = "Go"
    button.id = "src-go"
    button.disabled = true
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
    input.id = "src-input"
    input.required = true
    input.type = "text"
    input.onkeyup = function() {
        if(input.value.trim() != "") button.disabled = false
        else button.disabled = true
    }
    input_wrapper.appendChild(input)
    input_wrapper.appendChild(input_label)

    link.onclick = function() {
        createPopover()
    }

    div.appendChild(input_wrapper)
    div.appendChild(button)
    div.appendChild(link)

    return div;
}
