const boards = [
  { id: "r1", group: "red", label: "1", img: "img/red-1.jpg", spots: gridSpots(31.4, 17.0, 66.8, 66.4, 6, 5, ["sangria","montmeyrac_red","tini_rosso_semi","tini_rosso","tini_sangiovese","tini_sang_cab","luigi_red","maipo_cab","maipo_merlot","maipo_carmenere","maipo_sweet"]) },
  { id: "r2", group: "red", label: "2", img: "img/red-2.jpg", spots: gridSpots(1.6, 17.0, 96.6, 66.4, 6, 5, ["kiwi_pn","kiwi_shiraz","louis_merlot","calvet_cab","castel_merlot","castel_cab","castel_grenache","hans_pn","pinocchio","louis_bdx","calvet_cahors"]) },
  { id: "r3", group: "red", label: "3", img: "img/red-3.jpg", spots: listSpots(41.8, 16.2, 56.4, 67.6, 4, ["azahara","porto_red","mondavi_pn","ferrande_red"]) },
  { id: "w1", group: "white", label: "1", img: "img/white-1.jpg", spots: gridSpots(31.4, 17.0, 66.8, 66.4, 5, 6, ["montmeyrac_white","tini_rose","tini_treb","tini_bianco","tini_grec","luigi_white","maipo_sb","maipo_moscato","kiwi_sb","crema","calvet_sb"]) },
  { id: "w2", group: "white", label: "2", img: "img/white-2.jpg", spots: gridSpots(31.6, 16.2, 66.6, 72.5, 3, 3, ["castel_rose","castel_chard","castel_sb","louis_bdx_w","porto_white","mondavi_chard","ferrande_white","piccini_white","wolf"], 3) },
  { id: "canned", group: "beer", label: "1", img: "img/canned.jpg", logo: false, spots: gridSpots(31.2, 17.6, 65.2, 66.8, 6, 5, ["niisel","altangobi","borgio","kaltenberg","sengur","heineken","terra","cass","asahi","tsingtao","airag"]) },
  { id: "draft", group: "beer", label: "2", img: "img/draft.jpg", logo: false, spots: rowSpots(22.6, 17.2, 74.6, 64.5, ["eroogovi","gem","ooze","eve"]) },
  { id: "snacks", group: "snacks", label: "1", img: "img/snacks.jpg", logo: false, spots: [] }
];

function gridSpots(x, y, w, h, colsTop, colsBot, ids, botCols) {
  const bottomCols = botCols || colsBot;
  const rowH = (h - 1.2) / 2;
  const spots = [];
  const top = ids.slice(0, colsTop);
  const bot = ids.slice(colsTop);
  top.forEach((id, i) => spots.push({ id, l: x + (w / colsTop) * i + 0.35, t: y + 0.4, w: w / colsTop - 0.7, h: rowH - 0.6 }));
  bot.forEach((id, i) => spots.push({ id, l: x + (w / bottomCols) * i + 0.35, t: y + rowH + 1.0, w: w / bottomCols - 0.7, h: rowH - 0.6 }));
  return spots;
}
function rowSpots(x, y, w, h, ids) {
  const cw = w / ids.length;
  return ids.map((id, i) => ({ id, l: x + cw * i + 0.4, t: y, w: cw - 0.8, h }));
}
function listSpots(x, y, w, h, n, ids) {
  const rh = h / n;
  return ids.map((id, i) => ({ id, l: x + 0.6, t: y + rh * i + 0.5, w: w - 1.2, h: rh - 1.0 }));
}

const spread = document.getElementById("spread");
const sheet = document.getElementById("sheet");
const card = document.getElementById("card");
let index = 0;
let busy = false;
let drag = null;

function pageHtml(board, extra) {
  const hits = board.spots.map(s => `<button class="hit" style="left:${s.l}%;top:${s.t}%;width:${s.w}%;height:${s.h}%" data-id="${s.id}" aria-label="${wines[s.id].name}"></button>`).join("");
  return `<div class="page ${extra || ""}">${hits}<img src="${board.img}?v=15" alt=""><div class="back"></div><div class="shade"></div></div>`;
}

function render(incoming) {
  const cur = boards[index];
  const nxt = boards[Math.min(boards.length - 1, index + 1)];
  const prev = boards[Math.max(0, index - 1)];
  const under = incoming === "down" ? prev : nxt;
  const logo = spread.querySelector(".logo");
  spread.innerHTML = pageHtml(under, "under") + pageHtml(cur, "leaf" + (incoming === "down" ? " down" : ""));
  if (logo) {
    logo.hidden = boards[index].logo === false;
    spread.appendChild(logo);
  }
}

function finish(nextIndex) {
  index = nextIndex;
  busy = false;
  render();
}

function turn(dir) {
  if (busy) return;
  if (dir > 0 && index >= boards.length - 1) return;
  if (dir < 0 && index <= 0) return;
  busy = true;
  if (dir < 0) {
    index -= 1;
    render("down");
    const leaf = spread.querySelector(".leaf");
    const done = () => finish(index);
    leaf.addEventListener("animationend", done, { once: true });
    setTimeout(done, 960);
    return;
  }
  const leaf = spread.querySelector(".leaf");
  leaf.classList.add("up");
  const next = index + 1;
  let settled = false;
  const done = () => {
    if (settled) return;
    settled = true;
    finish(next);
  };
  leaf.addEventListener("animationend", done, { once: true });
  setTimeout(done, 680);
}

let start = null;
spread.addEventListener("pointerdown", e => {
  if (sheet.classList.contains("on")) return;
  start = { x: e.clientX, y: e.clientY, t: Date.now() };
});
spread.addEventListener("pointerup", e => {
  if (!start || sheet.classList.contains("on")) return;
  const dx = e.clientX - start.x;
  const dy = start.y - e.clientY;
  const tap = Math.abs(dx) < 16 && Math.abs(dy) < 16;
  start = null;
  if (tap) {
    const el = document.elementFromPoint(e.clientX, e.clientY);
    const hit = el && el.closest ? el.closest(".hit") : null;
    if (hit) openWine(hit.dataset.id);
    return;
  }
  if (dy > 48) turn(1);
  else if (dy < -48) turn(-1);
});
spread.addEventListener("pointercancel", () => { start = null; });

function openWine(id) {
  const w = wines[id];
  const beer = w.drink === "beer";
  const rows = [
    ["Үйлдвэрлэгч", w.producer],
    [beer ? "Гарал үүсэл" : "Ургацын бүс нутаг", w.region],
    [beer ? "Найрлага" : "Усан үзмийн сорт", w.grape],
    ["Төрөл", w.kind],
    ["Шинж чанар", w.character],
    ["Хэрэглэх заавар", w.serve],
    ["Уух тохиромжтой хэм", w.temp]
  ].map(([k, v]) => `<div><b>${k}</b><span>${v}</span></div>`).join("");
  card.innerHTML = `<button class="x" id="close" aria-label="Хаах">×</button>
    <div class="meta">${beer ? "Нэр" : "Дарсны нэр"}</div>
    <h2>${w.name}</h2>
    <div class="price">${w.price}</div>
    <div class="facts">${rows}</div>
    <div class="warn">21+ · Хэтрүүлэн хэрэглэх нь таны эрүүл мэндэд хортой.</div>`;
  sheet.classList.add("on");
  document.getElementById("close").onclick = close;
}
function close() { sheet.classList.remove("on"); card.innerHTML = ""; }
sheet.addEventListener("click", e => { if (e.target === sheet || e.target.id === "close") close(); });
document.addEventListener("keydown", e => {
  if (e.key === "Escape") close();
  if (e.key === "ArrowUp" || e.key === "ArrowRight") turn(1);
  if (e.key === "ArrowDown" || e.key === "ArrowLeft") turn(-1);
});

render();

