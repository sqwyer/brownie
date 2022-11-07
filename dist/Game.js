export function Game(image) {
    let clicks = 0;
    function Click() {
        const img = new Image();
        clicks++;
        score.innerText = clicks.toString();
        img.src = image.src;
        img.className = "img";
        img.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
        setTimeout(function () {
            img.remove();
        }, 10000);
        div.appendChild(img);
    }
    function CreateClicker() {
        const container = document.createElement("div");
        const clicker = new Image();
        const { clientHeight, clientWidth } = document.getElementById("img");
        container.className = "clicker";
        clicker.src = "/images/clicker.gif";
        container.appendChild(clicker);
        container.style.left = window.innerWidth / 2 - (clientWidth + 50) / 2 + "px";
        container.style.top = window.innerHeight / 2 - (clientHeight + 50) / 2 + "px";
        container.style.height = (clientHeight + 50) + "px";
        container.style.width = (clientWidth + 50) + "px";
        clicker_wrapper.appendChild(container);
        setInterval(Click, 800);
    }
    const div = document.createElement("div");
    const menu = document.createElement("div");
    const score_wrapper = document.createElement("p");
    const score_label = document.createElement("span");
    const score = document.createElement("span");
    const glow = document.createElement("div");
    const clicker_wrapper = document.createElement("div");
    const shop_wrapper = document.createElement("div");
    const shop_clicker = document.createElement("a");
    shop_wrapper.id = "shop";
    shop_clicker.id = "shop-clicker";
    shop_clicker.innerText = "Click for me";
    shop_clicker.onclick = CreateClicker;
    shop_wrapper.appendChild(shop_clicker);
    clicker_wrapper.style.height = image.height + 100 + "px";
    clicker_wrapper.style.width = image.width + 100 + "px";
    glow.className = "center";
    glow.id = "glow";
    menu.id = "menu";
    score_wrapper.id = "score-wrapper";
    score_label.id = "score-label";
    score_label.innerText = " Clicks";
    score.id = "score";
    score.innerText = "0";
    score_wrapper.appendChild(score);
    score_wrapper.appendChild(score_label);
    menu.appendChild(score_wrapper);
    menu.appendChild(shop_wrapper);
    image.className = "center";
    image.id = "img";
    image.onclick = Click;
    div.appendChild(clicker_wrapper);
    div.appendChild(menu);
    div.appendChild(glow);
    div.appendChild(image);
    return div;
}
//# sourceMappingURL=Game.js.map