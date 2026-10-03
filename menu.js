const wines = {
  sangria: { name: "Sangria", price: "5,000₮", kind: "Улаан · амтат коктейль", grape: "Улаан дарс, жимс", origin: "Испани хэв маяг", note: "Жимс, чихэрлэг амттай сангриа. Хөнгөн, хүйтнээр уухад тохиромжтой." },
  montmeyrac_red: { name: "Montmeyrac Moelleux Red", price: "5,500₮", kind: "Улаан · хагас амтат", grape: "Холимог улаан", origin: "Франц", note: "Зөөлөн, чихэрлэг улаан. Амттан болон жимстэй хоолноос гадна дангаар нь ууж болно." },
  tini_rosso_semi: { name: "Tini Vino Rosso Semi Sweet", price: "5,500₮", kind: "Улаан · хагас амтат", grape: "Итали улаан холимог", origin: "Итали", note: "Жимсний үнэр илүүтэй, хагас амтат улаан. Хөнгөн хоолтой зохино." },
  tini_rosso: { name: "Tini Vino Rosso", price: "5,500₮", kind: "Улаан · хуурай", grape: "Итали улаан холимог", origin: "Итали", note: "Жимс, хөнгөн таннинтай өдөр тутмын улаан дарс." },
  tini_sangiovese: { name: "Tini Sangiovese", price: "5,500₮", kind: "Улаан · хуурай", grape: "Sangiovese", origin: "Итали", note: "Интоор, улаан жимсний амттай, дунд зэргийн биетэй санжовезе." },
  tini_sang_cab: { name: "Tini Sangiovese Cabernet", price: "5,500₮", kind: "Улаан · холимог", grape: "Sangiovese, Cabernet", origin: "Итали", note: "Санжовезегийн жимс, кабернегийн бүтэц хосолсон улаан." },
  luigi_red: { name: "Luigi Leonardo Red", price: "6,000₮", kind: "Улаан · хуурай", grape: "Sangiovese", origin: "Итали", note: "Улаан жимс, зөөлөн таннинтай ширээний улаан дарс." },
  maipo_cab: { name: "Vina Maipo Cabernet Sauvignon", price: "7,000₮", kind: "Улаан · хуурай", grape: "Cabernet Sauvignon", origin: "Чили, Майпо", note: "Хар үхрийн нүд, ногоон чинжүүний өнгөтэй, бүтэцтэй каберне." },
  maipo_merlot: { name: "Vina Maipo Merlot", price: "7,000₮", kind: "Улаан · хуурай", grape: "Merlot", origin: "Чили, Майпо", note: "Чавга, зөөлөн таннинтай, уухад амар мерло." },
  maipo_carmenere: { name: "Vina Maipo Carmenere", price: "7,000₮", kind: "Улаан · хуурай", grape: "Carmenere", origin: "Чили", note: "Чилийн онцлог сорт. Хар жимс, ургамлын зөөлөн өнгөтэй." },
  maipo_sweet: { name: "Vina Maipo Sweet Red", price: "7,000₮", kind: "Улаан · амтат", grape: "Холимог улаан", origin: "Чили", note: "Чихэрлэг, жимсний амттай улаан. Амттантай зохино." },
  kiwi_pn: { name: "Cuvee Kiwi Pinot Noir 2019", price: "7,700₮", kind: "Улаан · хуурай", grape: "Pinot Noir", origin: "Шинэ Зеланд", note: "2019 оны ургац. Хөнгөн биетэй, улаан жимс, зөөлөн хүчиллэг." },
  kiwi_shiraz: { name: "Cuvee Kiwi Shiraz 2015", price: "7,700₮", kind: "Улаан · хуурай", grape: "Shiraz", origin: "Шинэ Зеланд", note: "2015 оны ургац. Хар жимс, бага зэргийн амтлаг өргөстгөлөгний өнгө." },
  louis_merlot: { name: "Louis Eschenauer Merlot", price: "8,000₮", kind: "Улаан · хуурай", grape: "Merlot", origin: "Франц", note: "Зөөлөн, дугуй биетэй мерло. Мах, бяслагтай зохино." },
  calvet_cab: { name: "Calvet Varietals Cabernet Sauvignon", price: "8,300₮", kind: "Улаан · хуурай", grape: "Cabernet Sauvignon", origin: "Франц", note: "Хар жимс, дунд зэргийн таннинтай каберне совиньон." },
  castel_merlot: { name: "Castel Merlot", price: "8,500₮", kind: "Улаан · хуурай", grape: "Merlot", origin: "Франц", note: "Чавга, зөөлөн өнгөтэй, хоолны ширээний мерло." },
  castel_cab: { name: "Castel Cabernet Sauvignon", price: "8,500₮", kind: "Улаан · хуурай", grape: "Cabernet Sauvignon", origin: "Франц", note: "Бүтэцтэй, хар үхрийн нүдтэй каберне. Улаан махтай зохино." },
  castel_grenache: { name: "Castel Grenache", price: "8,500₮", kind: "Улаан · хуурай", grape: "Grenache", origin: "Франц", note: "Улаан жимс, зөөлөн халуун ногооны өнгөтэй гренаш." },
  hans_pn: { name: "Hans Baer Pinot Noir", price: "8,900₮", kind: "Улаан · хуурай", grape: "Pinot Noir", origin: "Герман", note: "Хөнгөн, интоорын амттай пино нуар." },
  pinocchio: { name: "Piccini Pinocchio Rosso", price: "9,500₮", kind: "Улаан · хуурай", grape: "Sangiovese холимог", origin: "Итали, Тоскана", note: "Тосканы ширээний улаан. Жимс, зөөлөн хүчиллэг." },
  louis_bdx: { name: "Louis Eschenauer Bordeaux Red", price: "9,500₮", kind: "Улаан · хуурай", grape: "Бордо холимог", origin: "Франц, Бордо", note: "Мерло, каберне хосолсон сонгодог бордо загвар." },
  calvet_cahors: { name: "Calvet Cahors Red", price: "10,000₮", kind: "Улаан · хуурай", grape: "Malbec", origin: "Франц, Каор", note: "Каорын мальбек. Бараан жимс, илүү бүтэцтэй." },
  azahara: { name: "Azahara Shiraz", price: "11,500₮", kind: "Улаан · хуурай", grape: "Shiraz", origin: "Испани", note: "Боловсорсон хар жимс, зөөлөн амтлаг өнгөтэй шираз." },
  porto_red: { name: "Porto Valduoro Red", price: "11,500₮", kind: "Улаан · порт", grape: "Порт холимог", origin: "Португал", note: "Чихэрлэг, спирттэй порт. Амттан, бяслагтай бага хэмжээгээр." },
  mondavi_pn: { name: "Robert Mondavi Pinot Noir", price: "18,400₮", kind: "Улаан · хуурай", grape: "Pinot Noir", origin: "АНУ, Калифорни", note: "Улаан жимс, зөөлөн царсны өнгөтэй пино нуар." },
  ferrande_red: { name: "Chateau Ferrande Red", price: "33,000₮", kind: "Улаан · хуурай", grape: "Бордо холимог", origin: "Франц, Грав", note: "Гравийн шато дарс. Хар жимс, таннин, урт өнгө." },
  montmeyrac_white: { name: "Montmeyrac Moelleux White", price: "5,500₮", kind: "Цагаан · хагас амтат", grape: "Холимог цагаан", origin: "Франц", note: "Зөөлөн чихэрлэг цагаан. Жимс, амттантай зохино." },
  tini_rose: { name: "Tini Rose", price: "5,500₮", kind: "Розе", grape: "Холимог", origin: "Итали", note: "Хөнгөн, улаан жимсний өнгөтэй розе. Хүйтнээр ууна." },
  tini_treb: { name: "Tini Trebbiano Chardonnay", price: "5,500₮", kind: "Цагаан · хуурай", grape: "Trebbiano, Chardonnay", origin: "Итали", note: "Хөнгөн, цитрус, алимны амттай цагаан холимог." },
  tini_bianco: { name: "Tini Bianco", price: "5,500₮", kind: "Цагаан · хуурай", grape: "Итали цагаан холимог", origin: "Итали", note: "Цэвэрхэн, хөнгөн хүчиллэгтэй өдөр тутмын цагаан дарс." },
  tini_grec: { name: "Tini Grecanico Pinot Grigio", price: "5,500₮", kind: "Цагаан · хуурай", grape: "Grecanico, Pinot Grigio", origin: "Итали", note: "Лийр, цитрусын өнгөтэй, хөнгөн цагаан." },
  luigi_white: { name: "Luigi Leonardo White", price: "6,000₮", kind: "Цагаан · хуурай", grape: "Trebbiano", origin: "Итали", note: "Хөнгөн биетэй, цэцэг, цитрусын өнгөтэй цагаан." },
  maipo_sb: { name: "Vina Maipo Sauvignon Blanc", price: "7,000₮", kind: "Цагаан · хуурай", grape: "Sauvignon Blanc", origin: "Чили", note: "Ногоон алим, цитрус, өвслөг өнгөтэй совиньон блан." },
  maipo_moscato: { name: "Vina Maipo Sweet Moscato", price: "7,000₮", kind: "Цагаан · амтат", grape: "Moscato", origin: "Чили", note: "Цэцэг, усан үзэмний чихэрлэг амттай москато." },
  kiwi_sb: { name: "Cuvee Kiwi Sauvignon 2015", price: "7,700₮", kind: "Цагаан · хуурай", grape: "Sauvignon Blanc", origin: "Шинэ Зеланд", note: "2015 оны ургац. Цитрус, ногоон жимсний өнгөтэй." },
  crema: { name: "Crema Nobile al Cioccolata", price: "8,000₮", kind: "Амтат · шоколад", grape: "Амтат дарс", origin: "Итали", note: "Шоколадны амттай амтат дарс. Амттантай эсвэл дангаар нь." },
  calvet_sb: { name: "Calvet Varietals Sauvignon Blanc", price: "8,300₮", kind: "Цагаан · хуурай", grape: "Sauvignon Blanc", origin: "Франц", note: "Цэвэрхэн, цитрус, өвслөг өнгөтэй совиньон блан." },
  castel_rose: { name: "Castel Merlot Rose", price: "8,500₮", kind: "Розе", grape: "Merlot", origin: "Франц", note: "Мерлогоор хийсэн хуурай розе. Гүзээлзгэнэ, цитрус." },
  castel_chard: { name: "Castel Chardonnay", price: "8,500₮", kind: "Цагаан · хуурай", grape: "Chardonnay", origin: "Франц", note: "Алим, зөөлөн цөцгийн өнгөтэй шардонне." },
  castel_sb: { name: "Castel Sauvignon Blanc", price: "8,500₮", kind: "Цагаан · хуурай", grape: "Sauvignon Blanc", origin: "Франц", note: "Хүчиллэг сайтай, цитрусын өнгөтэй совиньон блан." },
  louis_bdx_w: { name: "Louis Eschenauer Bordeaux Sauvignon", price: "9,500₮", kind: "Цагаан · хуурай", grape: "Sauvignon Blanc", origin: "Франц, Бордо", note: "Бордогийн цагаан. Цитрус, эрдэс өнгө." },
  porto_white: { name: "Porto Valduoro White", price: "11,500₮", kind: "Цагаан · порт", grape: "Цагаан порт холимог", origin: "Португал", note: "Чихэрлэг цагаан порт. Хүйтнээр, амттантай." },
  mondavi_chard: { name: "Robert Mondavi Chardonnay", price: "18,400₮", kind: "Цагаан · хуурай", grape: "Chardonnay", origin: "АНУ, Калифорни", note: "Боловсорсон алим, ваниль, зөөлөн царсны өнгө." },
  ferrande_white: { name: "Chateau Ferrande White", price: "33,000₮", kind: "Цагаан · хуурай", grape: "Sauvignon Blanc, Semillon", origin: "Франц, Грав", note: "Гравийн цагаан шато. Цитрус, эрдэс, урт өнгө." },
  piccini_white: { name: "Piccini Memoro Vino Bianco d'Italia", price: "11,400₮", kind: "Цагаан · хуурай", grape: "Итали цагаан холимог", origin: "Итали", note: "Хэд хэдэн бүсийн усан үзэм хольсон цагаан. Жимс, цэцэг." },
  wolf: { name: "Wolf Blass White Wine", price: "8,500₮", kind: "Цагаан · хуурай", grape: "Холимог цагаан", origin: "Австрали", note: "Жимсний өнгөтэй, уухад амар цагаан дарс." }
};

const boards = [
  { id: "r1", group: "red", label: "1", img: "img/red-1.jpg", spots: gridSpots(31.4, 17.0, 66.8, 66.4, 6, 5, ["sangria","montmeyrac_red","tini_rosso_semi","tini_rosso","tini_sangiovese","tini_sang_cab","luigi_red","maipo_cab","maipo_merlot","maipo_carmenere","maipo_sweet"]) },
  { id: "r2", group: "red", label: "2", img: "img/red-2.jpg", spots: gridSpots(1.6, 17.0, 96.6, 66.4, 6, 5, ["kiwi_pn","kiwi_shiraz","louis_merlot","calvet_cab","castel_merlot","castel_cab","castel_grenache","hans_pn","pinocchio","louis_bdx","calvet_cahors"]) },
  { id: "r3", group: "red", label: "3", img: "img/red-3.jpg", spots: listSpots(41.8, 16.2, 56.4, 67.6, 4, ["azahara","porto_red","mondavi_pn","ferrande_red"]) },
  { id: "w1", group: "white", label: "1", img: "img/white-1.jpg", spots: gridSpots(31.4, 17.0, 66.8, 66.4, 5, 6, ["montmeyrac_white","tini_rose","tini_treb","tini_bianco","tini_grec","luigi_white","maipo_sb","maipo_moscato","kiwi_sb","crema","calvet_sb"]) },
  { id: "w2", group: "white", label: "2", img: "img/white-2.jpg", spots: gridSpots(31.6, 16.2, 66.6, 72.5, 3, 3, ["castel_rose","castel_chard","castel_sb","louis_bdx_w","porto_white","mondavi_chard","ferrande_white","piccini_white","wolf"], 3) }
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
  return `<div class="page ${extra || ""}">${hits}<img src="${board.img}" alt=""><div class="edge"></div></div>`;
}

function render(incoming) {
  const cur = boards[index];
  const nxt = boards[Math.min(boards.length - 1, index + 1)];
  const prev = boards[Math.max(0, index - 1)];
  const under = incoming === "down" ? prev : nxt;
  spread.innerHTML = pageHtml(under, "under") + pageHtml(cur, "leaf" + (incoming === "down" ? " down" : ""));
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
    setTimeout(done, 680);
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
  card.innerHTML = `<button class="x" id="close" aria-label="Хаах">×</button>
    <div class="meta">${w.kind}</div>
    <h2>${w.name}</h2>
    <div class="price">${w.price}</div>
    <p>${w.note}</p>
    <div class="row"><span class="chip">${w.grape}</span><span class="chip">${w.origin}</span><span class="chip">Шил</span></div>
    <div class="warn">21+ · Хэтрүүлэн хэрэглэх нь таны эрүүл мэндэд хортой.</div>`;
  sheet.classList.add("on");
  document.getElementById("close").onclick = close;
}
function close() { sheet.classList.remove("on"); }
sheet.addEventListener("click", e => { if (e.target === sheet) close(); });
document.addEventListener("keydown", e => {
  if (e.key === "Escape") close();
  if (e.key === "ArrowUp" || e.key === "ArrowRight") turn(1);
  if (e.key === "ArrowDown" || e.key === "ArrowLeft") turn(-1);
});

render();

