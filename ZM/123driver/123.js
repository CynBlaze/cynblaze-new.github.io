window.addEventListener("load", () => {
  const numLights = 30; // 光点数量（建议 20~50，太多影响性能）
  const body = document.body;

  for (let i = 0; i < numLights; i++) {
    const dot = document.createElement("div");
    dot.classList.add("light-dot");

    // 随机位置（基于视口宽度/高度）
    const randomX = Math.random() * 100 + "vw"; // 0~100% 视口宽度
    const randomY = Math.random() * 100 + "vh"; // 0~100% 视口高度
    dot.style.left = randomX;
    dot.style.top = randomY;

    // 随机动画延迟和时长（增加随机性）
    const delay = Math.random() * 3 + "s"; // 0~3秒延迟
    const duration = Math.random() * 2 + 1.5 + "s"; // 1.5~3.5秒时长
    dot.style.animationDelay = delay;
    dot.style.animationDuration = duration;

    body.appendChild(dot);
  }
});
