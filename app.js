// =========================
// CONFIG BASE
// =========================
const giorni = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];
const proteineList = ["Pollo", "Tonno", "Salmone"];
const carboList = ["Riso Basmati", "Pasta Integrale", "Cous Cous", "Patate"];
const fruttaList = ["Mela Golden", "Kiwi", "Banana", "Fragole"];

const baseFoods = [
  { name: "Petto di pollo", kcal: 165, carb: 0, prot: 31, fat: 3.6 },
  { name: "Tacchino", kcal: 135, carb: 0, prot: 30, fat: 1 },
  { name: "Tonno al naturale", kcal: 116, carb: 0, prot: 26, fat: 1 },
  { name: "Salmone", kcal: 208, carb: 0, prot: 20, fat: 13 },
  { name: "Uova", kcal: 143, carb: 1.1, prot: 13, fat: 9.5 },
  { name: "Fiocchi di latte", kcal: 98, carb: 3.4, prot: 11, fat: 4 },
  { name: "Yogurt greco 0%", kcal: 59, carb: 3.6, prot: 10, fat: 0.4 },
  { name: "Fiocchi d'avena", kcal: 389, carb: 66, prot: 17, fat: 7 },
  { name: "Riso basmati", kcal: 130, carb: 28, prot: 2.7, fat: 0.3 },
  { name: "Pasta integrale", kcal: 124, carb: 25, prot: 5, fat: 1 },
  { name: "Cous cous", kcal: 112, carb: 23, prot: 3.8, fat: 0.2 },
  { name: "Patate", kcal: 77, carb: 17, prot: 2, fat: 0.1 },
  { name: "Pane integrale", kcal: 247, carb: 41, prot: 13, fat: 4.2 },
  { name: "Mela Golden", kcal: 52, carb: 14, prot: 0.3, fat: 0.2 },
  { name: "Kiwi", kcal: 61, carb: 15, prot: 1.1, fat: 0.5 },
  { name: "Banana", kcal: 89, carb: 23, prot: 1.1, fat: 0.3 },
  { name: "Fragole", kcal: 32, carb: 7.7, prot: 0.7, fat: 0.3 },
  { name: "Albicocche", kcal: 42, carb: 9.8, prot: 0.4, fat: 0.1 },
  { name: "Albume", kcal: 43, carb: 0, prot: 10.7, fat: 0 },
  { name: "Anacardi", kcal: 604, carb: 33, prot: 15, fat: 46 },
  { name: "Ananas", kcal: 42, carb: 10, prot: 0.5, fat: 0 },
  { name: "Avocado", kcal: 238, carb: 1.8, prot: 4.4, fat: 23 },
  { name: "Borlotti", kcal: 102, carb: 15.9, prot: 6.7, fat: 0.5 },
  { name: "Broccoli", kcal: 33, carb: 3.1, prot: 3, fat: 0.4 },
  { name: "Budino proteico", kcal: 76, carb: 5.2, prot: 10, fat: 1.5 },
  { name: "Carciofi", kcal: 32, carb: 2.5, prot: 2.7, fat: 0.2 },
  { name: "Carote", kcal: 41, carb: 7.6, prot: 1.1, fat: 0.2 },
  { name: "Cavolfiore", kcal: 25, carb: 5, prot: 3.2, fat: 0.2 },
  { name: "Cavoli di Bruxelles", kcal: 43, carb: 8.4, prot: 3.4, fat: 0.3 },
  { name: "Ceci", kcal: 164, carb: 27.4, prot: 8.9, fat: 2.6 },
  { name: "Cetrioli", kcal: 15, carb: 3.6, prot: 0.7, fat: 0.1 },
  { name: "Ciliegie", kcal: 63, carb: 12, prot: 1, fat: 0.2 },
  { name: "Cime di rapa", kcal: 24, carb: 4, prot: 3.4, fat: 0.5 },
  { name: "Fagiolini", kcal: 31, carb: 7.5, prot: 2.4, fat: 0.2 },
  { name: "Farina d’avena", kcal: 389, carb: 66.3, prot: 12, fat: 6.5 },
  { name: "Farro perlato", kcal: 340, carb: 68.8, prot: 14.6, fat: 1.8 },
  { name: "Finocchi", kcal: 31, carb: 7.3, prot: 1.2, fat: 0.2 },
  { name: "Gallette di mais", kcal: 383, carb: 85, prot: 7.4, fat: 1.2 },
  { name: "Gamberi", kcal: 99, carb: 0.5, prot: 20.3, fat: 1.8 },
  { name: "Gamberi sgusciati", kcal: 105, carb: 0.2, prot: 23.1, fat: 0.9 },
  { name: "Lamponi", kcal: 52, carb: 11.9, prot: 1.2, fat: 0.7 },
  { name: "Latte d’avena", kcal: 53, carb: 9, prot: 1, fat: 1.2 },
  { name: "Lenticchie", kcal: 353, carb: 60.1, prot: 25.8, fat: 0.8 },
  { name: "Melanzane", kcal: 24, carb: 6, prot: 1.2, fat: 0.2 },
  { name: "Melone estivo", kcal: 34, carb: 8.6, prot: 0.6, fat: 0.2 },
  { name: "Merluzzo", kcal: 70, carb: 0, prot: 16.8, fat: 0.6 },
  { name: "Mirtilli", kcal: 57, carb: 14.5, prot: 0.7, fat: 0.3 },
  { name: "Nasello", kcal: 80, carb: 0, prot: 18.1, fat: 0.7 },
  { name: "Noci", kcal: 654, carb: 13.7, prot: 15.2, fat: 65.2 },
  { name: "Noci pecan", kcal: 691, carb: 13.9, prot: 9.2, fat: 72 },
  { name: "Peperoni", kcal: 20, carb: 6, prot: 1, fat: 0.3 },
  { name: "Pesche", kcal: 39, carb: 9.5, prot: 0.9, fat: 0.2 },
  { name: "Piselli", kcal: 81, carb: 14.5, prot: 5.4, fat: 0.4 },
  { name: "Pollo", kcal: 110, carb: 0, prot: 23, fat: 0.8 },
  { name: "Pomodorino", kcal: 18, carb: 3.9, prot: 0.9, fat: 0.2 },
  { name: "Pompelmo", kcal: 32, carb: 8.5, prot: 0.8, fat: 0.1 },
  { name: "Prugne Rosse", kcal: 57, carb: 15.2, prot: 0.5, fat: 0.1 },
  { name: "Riso integrale", kcal: 340, carb: 73.5, prot: 7.5, fat: 1.5 },
  { name: "Scamone", kcal: 129, carb: 0, prot: 22.5, fat: 4.1 },
  { name: "Spinaci", kcal: 23, carb: 3.6, prot: 2.9, fat: 0.4 },
  { name: "Tonno", kcal: 96, carb: 0, prot: 23.3, fat: 0.9 },
  { name: "Uva Bianca", kcal: 69, carb: 17, prot: 0.6, fat: 0.2 },
  { name: "Uva Nera", kcal: 69, carb: 17.6, prot: 0.6, fat: 0.2 },
  { name: "Wasa fit", kcal: 330, carb: 60, prot: 9, fat: 1.5 },
  { name: "Zucca", kcal: 26, carb: 7, prot: 1, fat: 0.1 },
  { name: "Zucchine", kcal: 17, carb: 3.1, prot: 1.2, fat: 0.2 },
  { name: "Mandorle", kcal: 579, carb: 22, prot: 21, fat: 50 },
  { name: "Olio EVO", kcal: 884, carb: 0, prot: 0, fat: 100 }
];

let foods = [...baseFoods];
let selectedFoods = new Set(baseFoods.map((food) => food.name));
let planData = [];
let kcalChart = null;

const ui = {
  sex: document.getElementById("sex"),
  age: document.getElementById("age"),
  weight: document.getElementById("weight"),
  height: document.getElementById("height"),
  activity: document.getElementById("activity"),
  goal: document.getElementById("goal"),
  tdee: document.getElementById("tdee"),
  carb: document.getElementById("carb"),
  prot: document.getElementById("prot"),
  fat: document.getElementById("fat"),
  mealCount: document.getElementById("mealCount"),
  autoCalc: document.getElementById("autoCalc"),
  generatePlan: document.getElementById("generatePlan"),
  resetPlan: document.getElementById("resetPlan"),
  foodsList: document.getElementById("foodsList"),
  foodSearch: document.getElementById("foodSearch"),
  selectAllFoods: document.getElementById("selectAllFoods"),
  deselectAllFoods: document.getElementById("deselectAllFoods"),
  foodName: document.getElementById("foodName"),
  foodKcal: document.getElementById("foodKcal"),
  foodC: document.getElementById("foodC"),
  foodP: document.getElementById("foodP"),
  foodF: document.getElementById("foodF"),
  addFood: document.getElementById("addFood"),
  resetFoods: document.getElementById("resetFoods"),
  chartDay: document.getElementById("chartDay"),
  kcalBar: document.getElementById("kcalBar"),
  macroSummary: document.getElementById("macroSummary"),
  exportPDF: document.getElementById("exportPDF"),
  exportJSON: document.getElementById("exportJSON"),
  importFile: document.getElementById("importFile"),
  importJSON: document.getElementById("importJSON"),
  planContainer: document.getElementById("planContainer")
};

// =========================
// TAB GIORNALIERE
// =========================
function showDay(idx){
  const allCards = document.querySelectorAll('.day-card');
  if(idx === "all"){
    allCards.forEach(card=>{
      card.style.display = 'block';
      card.classList.add('active');
    });
    return;
  }

  allCards.forEach(card=>{
    const isActive = Number(card.dataset.day) === Number(idx);
    card.style.display = isActive ? 'block' : 'none';
    card.classList.toggle('active', isActive);
  });
}

function setupDayTabs(){
  const tabsContainer = document.getElementById("dayTabs");
  if (!tabsContainer) return;

  let tabsHtml = giorni
    .map((g,i)=>`<button class="day-tab${i===0?' active':''}" data-day="${i}">${g}</button>`)
    .join("");
  tabsHtml += `<button class="day-tab" data-day="all">🗓️ Settimana intera</button>`;

  tabsContainer.innerHTML = tabsHtml;

  tabsContainer.querySelectorAll('.day-tab').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      tabsContainer.querySelectorAll('.day-tab').forEach(t=>t.classList.remove('active'));
      btn.classList.add('active');
      showDay(btn.dataset.day);
    });
  });

  showDay(0);
}

// =========================
// UTILITIES
// =========================
function getFoodByName(name) {
  return foods.find((food) => food.name.toLowerCase() === name.toLowerCase());
}

function calculateItemKcal(item) {
  const food = getFoodByName(item.name);
  if (!food) return 0;
  return Math.round((food.kcal * item.grams) / 100);
}

function parseFoodItem(raw) {
  if (typeof raw !== "string") return raw;
  const match = raw.match(/(.+?)\s(\d+(?:[.,]\d+)?)g$/i);
  if (!match) {
    return { name: raw.trim(), grams: 100 };
  }
  return { name: match[1].trim(), grams: Number(match[2].replace(",", ".")) };
}

function getPreferredFood(preferredList, fallbackIndex, pool) {
  const normalizedPool = pool.map((name) => name.toLowerCase());
  const found = preferredList.find((name) => normalizedPool.includes(name.toLowerCase()));
  if (found) return found;
  return pool[fallbackIndex % pool.length];
}

function buildBreakfastOptions(planFoods, pools, dayIndex, targetKcal, macroPercents) {
  const sweetChoices = ["Fiocchi d'avena", "Yogurt greco 0%", "Banana", "Fragole", "Mela Golden"];
  const savoryChoices = ["Uova", "Pane integrale", "Avocado", "Fiocchi di latte", "Petto di pollo"];

  const sweetSeed = getPreferredFood(sweetChoices, dayIndex, planFoods);
  const savorySeed = getPreferredFood(savoryChoices, dayIndex, planFoods);

  return {
    sweet: buildMealItems(pools, dayIndex, 0, true, sweetSeed, targetKcal, macroPercents),
    savory: buildMealItems(pools, dayIndex, 1, true, savorySeed, targetKcal, macroPercents)
  };
}

const fruitNames = [
  "Albicocche",
  "Ananas",
  "Banana",
  "Ciliegie",
  "Fragole",
  "Kiwi",
  "Lamponi",
  "Mela Golden",
  "Mele Golden",
  "Melone estivo",
  "Mirtilli",
  "Pesche",
  "Pompelmo",
  "Prugne Rosse",
  "Uva Bianca",
  "Uva Nera"
];

const vegNames = [
  "Broccoli",
  "Carciofi",
  "Carote",
  "Cavolfiore",
  "Cavoli di Bruxelles",
  "Cetrioli",
  "Cime di rapa",
  "Fagiolini",
  "Finocchi",
  "Melanzane",
  "Peperoni",
  "Pomodorino",
  "Spinaci",
  "Zucca",
  "Zucchine"
];

function filterByNames(list, names) {
  const normalized = names.map((name) => name.toLowerCase());
  return list.filter((food) => normalized.includes(food.name.toLowerCase()));
}

function isProduceFood(food) {
  const lowFat = food.fat <= 1.5;
  const lowProtein = food.prot <= 3;
  const moderateCarb = food.carb <= 15;
  return lowFat && lowProtein && moderateCarb;
}

function buildPools(planFoodsNames) {
  const poolFoods = foods.filter((food) => planFoodsNames.includes(food.name));
  const protein = poolFoods.filter((food) => food.prot >= 15);
  const carbs = poolFoods.filter((food) => food.carb >= 20);
  const fats = poolFoods.filter((food) => food.fat >= 10);
  const produce = poolFoods.filter(isProduceFood);
  const fruits = filterByNames(poolFoods, fruitNames);
  const vegs = filterByNames(poolFoods, vegNames);
  const fallback = foods;

  return {
    protein: protein.length ? protein : fallback.filter((food) => food.prot >= 15),
    carbs: carbs.length ? carbs : fallback.filter((food) => food.carb >= 20),
    fats: fats.length ? fats : fallback.filter((food) => food.fat >= 10),
    produce: produce.length ? produce : fallback.filter(isProduceFood),
    fruits: fruits.length ? fruits : filterByNames(fallback, fruitNames),
    vegs: vegs.length ? vegs : filterByNames(fallback, vegNames),
    all: poolFoods.length ? poolFoods : fallback
  };
}

function pickFromPool(pool, index, used, fallbackPool) {
  const list = pool.length ? pool : fallbackPool;
  if (!list.length) return null;
  for (let offset = 0; offset < list.length; offset++) {
    const item = list[(index + offset) % list.length];
    if (!used.has(item.name)) {
      used.add(item.name);
      return item;
    }
  }
  return list[index % list.length];
}

function roundGrams(value) {
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, Math.round(value / 5) * 5);
}

function calculateGramsForFood(food, targetKcal, minGrams = 30) {
  if (!food || food.kcal <= 0) return 0;
  const grams = (targetKcal / food.kcal) * 100;
  const rounded = roundGrams(grams);
  if (rounded === 0 && targetKcal > 0) return minGrams;
  return Math.max(rounded, minGrams);
}

function buildMealItems(pools, dayIndex, mealIndex, preferFruit, seedName, targetKcal, macroPercents) {
  const used = new Set();
  const items = [];
  const baseIndex = dayIndex * 3 + mealIndex;

  const seed = seedName ? getFoodByName(seedName) : null;
  if (seed) {
    items.push({ name: seed.name, grams: 100 });
    used.add(seed.name);
  }

  const carb = pickFromPool(pools.carbs, baseIndex, used, pools.all);
  const protein = pickFromPool(pools.protein, baseIndex + 1, used, pools.all);
  const fat = pickFromPool(pools.fats, baseIndex + 2, used, pools.all);
  const producePool = preferFruit ? pools.fruits : pools.vegs;
  const produceFallback = producePool.length ? producePool : pools.produce;
  const produce = pickFromPool(producePool, baseIndex + 3, used, produceFallback);

  if (carb) items.push({ name: carb.name, grams: 100, role: "carb" });
  if (protein) items.push({ name: protein.name, grams: 100, role: "protein" });
  if (fat) items.push({ name: fat.name, grams: 100, role: "fat" });
  if (produce) items.push({ name: produce.name, grams: 100, role: preferFruit ? "fruit" : "vegetable" });

  while (items.length < 4) {
    const extra = pickFromPool(pools.all, baseIndex + items.length, used, pools.all);
    if (!extra) break;
    items.push({ name: extra.name, grams: 100, role: "extra" });
  }

  if (Number.isFinite(targetKcal)) {
    const produceItem = items.find((item) => item.role === "fruit" || item.role === "vegetable");
    const produceFood = produceItem ? getFoodByName(produceItem.name) : null;
    const produceGrams = produceItem ? roundGrams(produceItem.grams || 100) : 0;
    if (produceItem) produceItem.grams = produceGrams || 100;
    const produceKcal = produceFood ? Math.round((produceFood.kcal * (produceItem?.grams || 0)) / 100) : 0;
    const remainingKcal = Math.max(targetKcal - produceKcal, 0);
    const macroTargets = {
      carb: remainingKcal * macroPercents.carb,
      protein: remainingKcal * macroPercents.prot,
      fat: remainingKcal * macroPercents.fat
    };

    items.forEach((item) => {
      if (item.role === "carb") {
        item.grams = calculateGramsForFood(getFoodByName(item.name), macroTargets.carb);
      }
      if (item.role === "protein") {
        item.grams = calculateGramsForFood(getFoodByName(item.name), macroTargets.protein);
      }
      if (item.role === "fat") {
        item.grams = calculateGramsForFood(getFoodByName(item.name), macroTargets.fat, 10);
      }
      if (item.role === "extra") {
        item.grams = roundGrams(item.grams) || 100;
      }
    });
  } else {
    items.forEach((item) => {
      item.grams = roundGrams(item.grams) || 100;
    });
  }

  return items;
}

// =========================
// GENERA PIANO VARIABILE 5 PASTI
// =========================
function generatePlan(){
  const tdee = Number(ui.tdee.value) || 2000;
  const carbPerc = Number(ui.carb.value) / 100;
  const protPerc = Number(ui.prot.value) / 100;
  const fatPerc = Number(ui.fat.value) / 100;
  const mealCount = Number(ui.mealCount?.value) || 5;

  const totalCarbGr = Math.round((tdee * carbPerc) / 4);
  const totalProtGr = Math.round((tdee * protPerc) / 4);
  const totalFatGr = Math.round((tdee * fatPerc) / 9);
  const perMealKcal = tdee / mealCount;
  const macroPercents = { carb: carbPerc, prot: protPerc, fat: fatPerc };

  const selectedNames = foods
    .map((food) => food.name)
    .filter((name) => selectedFoods.has(name));
  const planFoods = selectedNames.length ? selectedNames : foods.map((food) => food.name);
  if (!planFoods.length) {
    ui.planContainer.innerHTML = "<p class='info-text'>Seleziona almeno un alimento per generare il piano.</p>";
    return;
  }
  const pools = buildPools(planFoods);

  const mealLabels = {
    3: ["Colazione", "Pranzo", "Cena"],
    4: ["Colazione", "Spuntino", "Pranzo", "Cena"],
    5: ["Colazione", "Spuntino Mattina", "Pranzo", "Spuntino Pomeriggio", "Cena"],
    6: ["Colazione", "Spuntino Mattina", "Pranzo", "Spuntino Pomeriggio", "Cena", "Pre-nanna"]
  };

  planData = [];
  for (let i = 0; i < 7; i++) {
    const giorno = giorni[i];
    const labels = mealLabels[mealCount] ?? mealLabels[5];

    const meals = labels.map((label, mealIndex) => {
      const preferFruit = label.includes("Colazione") || label.includes("Spuntino");
      if (label === "Colazione") {
        return {
          title: label,
          type: "breakfast",
          choice: "sweet",
          options: buildBreakfastOptions(planFoods, pools, i, perMealKcal, macroPercents)
        };
      }
      const items = buildMealItems(pools, i, mealIndex, preferFruit, null, perMealKcal, macroPercents);
      return { title: label, items };
    });

    planData.push({
      day: giorno,
      macros: { carb: totalCarbGr, prot: totalProtGr, fat: totalFatGr },
      meals
    });
  }
  renderPlan();
  setupDayTabs();
  updateCharts();
}

// =========================
// MACRO + TDEE
// =========================
function clampNumber(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function calculateTdee() {
  const weight = Number(ui.weight.value);
  const height = Number(ui.height.value);
  const age = Number(ui.age.value);
  const activity = Number(ui.activity.value);
  const sex = ui.sex.value;

  if (!weight || !height || !age) return;

  const bmr =
    sex === "M"
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161;

  let tdee = bmr * activity;
  if (ui.goal.value === "def") tdee *= 0.85;
  if (ui.goal.value === "bulk") tdee *= 1.1;

  ui.tdee.value = Math.round(tdee);
}

function ensureMacroTotals() {
  const carb = Number(ui.carb.value) || 0;
  const prot = Number(ui.prot.value) || 0;
  const fat = Number(ui.fat.value) || 0;
  const total = carb + prot + fat;

  if (total === 100) return;
  if (total === 0) {
    ui.carb.value = 45;
    ui.prot.value = 30;
    ui.fat.value = 25;
    return;
  }

  const factor = 100 / total;
  ui.carb.value = Math.round(carb * factor);
  ui.prot.value = Math.round(prot * factor);
  ui.fat.value = clampNumber(100 - Number(ui.carb.value) - Number(ui.prot.value), 0, 100);
}

// =========================
// FOODS
// =========================
function renderFoods(list) {
  if (!ui.foodsList) return;

  if (!list.length) {
    ui.foodsList.innerHTML = "<p class='info-text'>Nessun alimento disponibile.</p>";
    return;
  }

  ui.foodsList.innerHTML = `
    <table class="foods-table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Kcal</th>
          <th>Carbo</th>
          <th>Prot</th>
          <th>Grassi</th>
          <th>Usa nel piano</th>
        </tr>
      </thead>
      <tbody>
        ${list
          .map(
            (food) => `
          <tr>
            <td>${food.name}</td>
            <td>${food.kcal}</td>
            <td>${food.carb}</td>
            <td>${food.prot}</td>
            <td>${food.fat}</td>
            <td>
              <input class="food-select" type="checkbox" data-name="${food.name}" ${
                selectedFoods.has(food.name) ? "checked" : ""
              }>
            </td>
          </tr>`
          )
          .join("")}
      </tbody>
    </table>`;

  ui.foodsList.querySelectorAll(".food-select").forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      const name = event.target.dataset.name;
      if (!name) return;
      if (event.target.checked) {
        selectedFoods.add(name);
      } else {
        selectedFoods.delete(name);
      }
    });
  });
}

function renderPlan() {
  let html = "";
  planData.forEach((day, dayIndex) => {
    html += `<div class="day-card" data-day="${dayIndex}">
      <h2>${day.day}</h2>
      <p class="day-total" data-day-total="${dayIndex}"></p>`;

    day.meals.forEach((meal, mealIndex) => {
      if (meal.type === "breakfast") {
        html += `
          <div class="pasto-card" data-day="${dayIndex}" data-meal="${mealIndex}">
            <h3>${meal.title}</h3>
            <div class="meal-choice">
              <label><input type="radio" name="breakfast-${dayIndex}" value="sweet" ${
                meal.choice === "sweet" ? "checked" : ""
              }> Dolce</label>
              <label><input type="radio" name="breakfast-${dayIndex}" value="savory" ${
                meal.choice === "savory" ? "checked" : ""
              }> Salata</label>
            </div>
            ${["sweet", "savory"]
              .map((option) => {
                const isActive = meal.choice === option;
                const items = meal.options[option] ?? [];
                return `
                  <div class="meal-option ${isActive ? "active" : ""}" data-option="${option}">
                    ${items
                      .map(
                        (item, itemIndex) => `
                      <div class="meal-item">
                        <select class="food-item-select" data-day="${dayIndex}" data-meal="${mealIndex}" data-item="${itemIndex}" data-option="${option}">
                          ${foods
                            .map(
                              (food) =>
                                `<option value="${food.name}" ${
                                  food.name === item.name ? "selected" : ""
                                }>${food.name}</option>`
                            )
                            .join("")}
                        </select>
                        <input class="food-item-grams" type="number" min="0" step="1" value="${item.grams}" data-day="${dayIndex}" data-meal="${mealIndex}" data-item="${itemIndex}" data-option="${option}">
                        <span>g</span>
                      </div>`
                      )
                      .join("")}
                  </div>`;
              })
              .join("")}
            <p class="meal-total" data-meal-total="${dayIndex}-${mealIndex}"></p>
          </div>`;
        return;
      }

      html += `
        <div class="pasto-card" data-day="${dayIndex}" data-meal="${mealIndex}">
          <h3>${meal.title}</h3>
          ${meal.items
            .map(
              (item, itemIndex) => `
            <div class="meal-item">
              <select class="food-item-select" data-day="${dayIndex}" data-meal="${mealIndex}" data-item="${itemIndex}">
                ${foods
                  .map(
                    (food) =>
                      `<option value="${food.name}" ${food.name === item.name ? "selected" : ""}>${
                        food.name
                      }</option>`
                  )
                  .join("")}
              </select>
              <input class="food-item-grams" type="number" min="0" step="1" value="${item.grams}" data-day="${dayIndex}" data-meal="${mealIndex}" data-item="${itemIndex}">
              <span>g</span>
            </div>`
            )
            .join("")}
          <p class="meal-total" data-meal-total="${dayIndex}-${mealIndex}"></p>
        </div>`;
    });

    html += `</div>`;
  });

  ui.planContainer.innerHTML = html || "<p class='info-text'>Premi \"Genera Piano\" per visualizzare il piano.</p>";
  bindPlanControls();
  updatePlanTotals();
  if (planData.length) {
    setupDayTabs();
  }
}

function bindPlanControls() {
  ui.planContainer.querySelectorAll(".food-item-select").forEach((select) => {
    select.addEventListener("change", (event) => {
      const { day, meal, item, option } = event.target.dataset;
      const dayIndex = Number(day);
      const mealIndex = Number(meal);
      const itemIndex = Number(item);
      const mealData = planData[dayIndex]?.meals[mealIndex];
      if (!mealData) return;

      if (mealData.type === "breakfast" && option) {
        mealData.options[option][itemIndex].name = event.target.value;
      } else {
        mealData.items[itemIndex].name = event.target.value;
      }
      updatePlanTotals();
    });
  });

  ui.planContainer.querySelectorAll(".food-item-grams").forEach((input) => {
    input.addEventListener("input", (event) => {
      const { day, meal, item, option } = event.target.dataset;
      const dayIndex = Number(day);
      const mealIndex = Number(meal);
      const itemIndex = Number(item);
      const mealData = planData[dayIndex]?.meals[mealIndex];
      if (!mealData) return;

      const gramsValue = Number(event.target.value) || 0;
      if (mealData.type === "breakfast" && option) {
        mealData.options[option][itemIndex].grams = gramsValue;
      } else {
        mealData.items[itemIndex].grams = gramsValue;
      }
      updatePlanTotals();
    });
  });

  ui.planContainer.querySelectorAll("input[type='radio'][name^='breakfast-']").forEach((radio) => {
    radio.addEventListener("change", (event) => {
      const dayIndex = Number(event.target.name.replace("breakfast-", ""));
      const choice = event.target.value;
      const mealData = planData[dayIndex]?.meals.find((meal) => meal.type === "breakfast");
      if (!mealData) return;

      mealData.choice = choice;
      const breakfastCard = ui.planContainer.querySelector(
        `.pasto-card[data-day="${dayIndex}"][data-meal="${planData[dayIndex].meals.indexOf(mealData)}"]`
      );
      if (breakfastCard) {
        breakfastCard.querySelectorAll(".meal-option").forEach((option) => {
          option.classList.toggle("active", option.dataset.option === choice);
        });
      }
      updatePlanTotals();
    });
  });
}

function getMealItems(meal) {
  if (meal.type === "breakfast") {
    return meal.options?.[meal.choice] ?? [];
  }
  return meal.items ?? [];
}

function updatePlanTotals() {
  planData.forEach((day, dayIndex) => {
    let dayTotal = 0;
    day.meals.forEach((meal, mealIndex) => {
      const items = getMealItems(meal);
      const mealTotal = items.reduce((sum, item) => sum + calculateItemKcal(item), 0);
      dayTotal += mealTotal;
      const mealTotalNode = ui.planContainer.querySelector(`[data-meal-total="${dayIndex}-${mealIndex}"]`);
      if (mealTotalNode) {
        mealTotalNode.textContent = `Kcal pasto: ${mealTotal}`;
      }
    });
    const dayTotalNode = ui.planContainer.querySelector(`[data-day-total="${dayIndex}"]`);
    if (dayTotalNode) {
      dayTotalNode.textContent = `Totale giorno: ${dayTotal} kcal`;
    }
  });
}

function addOrUpdateFood() {
  const name = ui.foodName.value.trim();
  if (!name) return;

  const newFood = {
    name,
    kcal: Number(ui.foodKcal.value) || 0,
    carb: Number(ui.foodC.value) || 0,
    prot: Number(ui.foodP.value) || 0,
    fat: Number(ui.foodF.value) || 0
  };

  const existingIndex = foods.findIndex((food) => food.name.toLowerCase() === name.toLowerCase());
  if (existingIndex >= 0) {
    foods[existingIndex] = newFood;
  } else {
    foods.push(newFood);
  }
  selectedFoods.add(newFood.name);

  ui.foodName.value = "";
  ui.foodKcal.value = "";
  ui.foodC.value = "";
  ui.foodP.value = "";
  ui.foodF.value = "";
  renderFoods(foods);
  if (planData.length) {
    renderPlan();
  }
}

function filterFoods() {
  const query = ui.foodSearch.value.trim().toLowerCase();
  if (!query) {
    renderFoods(foods);
    return;
  }
  const filtered = foods.filter((food) => food.name.toLowerCase().includes(query));
  renderFoods(filtered);
}

function resetFoods() {
  foods = [...baseFoods];
  selectedFoods = new Set(foods.map((food) => food.name));
  renderFoods(foods);
  if (planData.length) {
    renderPlan();
  }
}

function selectAllFoods() {
  selectedFoods = new Set(foods.map((food) => food.name));
  renderFoods(foods);
}

function deselectAllFoods() {
  selectedFoods = new Set();
  renderFoods(foods);
}

// =========================
// CHARTS
// =========================
function updateCharts() {
  const tdee = Number(ui.tdee.value) || 0;
  const carbPerc = Number(ui.carb.value) || 0;
  const protPerc = Number(ui.prot.value) || 0;
  const fatPerc = Number(ui.fat.value) || 0;

  const kcalData = [
    Math.round((tdee * carbPerc) / 100),
    Math.round((tdee * protPerc) / 100),
    Math.round((tdee * fatPerc) / 100)
  ];

  if (!kcalChart) {
    kcalChart = new Chart(ui.kcalBar, {
      type: "bar",
      data: {
        labels: ["Carboidrati", "Proteine", "Grassi"],
        datasets: [
          {
            label: "Kcal per macro",
            data: kcalData,
            backgroundColor: ["#5AC8FA", "#34C759", "#FF9F0A"]
          }
        ]
      },
      options: { responsive: true }
    });
  } else {
    kcalChart.data.datasets[0].data = kcalData;
    kcalChart.update();
  }
}

function setupChartDayOptions() {
  if (!ui.chartDay) return;
  ui.chartDay.innerHTML = giorni.map((giorno, index) => `<option value="${index}">${giorno}</option>`).join("");
}

// =========================
// EXPORT / IMPORT
// =========================
function exportData() {
  const payload = {
    user: {
      sex: ui.sex.value,
      age: ui.age.value,
      weight: ui.weight.value,
      height: ui.height.value,
      activity: ui.activity.value,
      goal: ui.goal.value,
      tdee: ui.tdee.value,
      carb: ui.carb.value,
      prot: ui.prot.value,
      fat: ui.fat.value
    },
    foods,
    selectedFoods: Array.from(selectedFoods),
    planData
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "piano-alimentare.json";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function importData(file) {
  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const data = JSON.parse(event.target.result);
      if (data.user) {
        ui.sex.value = data.user.sex ?? ui.sex.value;
        ui.age.value = data.user.age ?? ui.age.value;
        ui.weight.value = data.user.weight ?? ui.weight.value;
        ui.height.value = data.user.height ?? ui.height.value;
        ui.activity.value = data.user.activity ?? ui.activity.value;
        ui.goal.value = data.user.goal ?? ui.goal.value;
        ui.tdee.value = data.user.tdee ?? ui.tdee.value;
        ui.carb.value = data.user.carb ?? ui.carb.value;
        ui.prot.value = data.user.prot ?? ui.prot.value;
        ui.fat.value = data.user.fat ?? ui.fat.value;
      }
      foods = Array.isArray(data.foods) ? data.foods : foods;
      selectedFoods = new Set(Array.isArray(data.selectedFoods) ? data.selectedFoods : foods.map((food) => food.name));
      planData = Array.isArray(data.planData) ? data.planData : planData;
      planData = planData.map((day) => ({
        ...day,
        meals: (day.meals ?? []).map((meal) => {
          if (meal.type === "breakfast") {
            return {
              ...meal,
              options: {
                sweet: (meal.options?.sweet ?? []).map(parseFoodItem),
                savory: (meal.options?.savory ?? []).map(parseFoodItem)
              }
            };
          }
          return {
            ...meal,
            items: (meal.items ?? []).map(parseFoodItem)
          };
        })
      }));
      renderFoods(foods);
      if (planData.length) {
        renderPlan();
      }
      updateCharts();
    } catch (error) {
      console.error("Errore importazione JSON:", error);
    }
  };
  reader.readAsText(file);
}

function exportPdf() {
  if (!window.jspdf?.jsPDF) return;
  const doc = new window.jspdf.jsPDF();
  doc.setFontSize(16);
  doc.text("Piano Alimentare Settimanale", 14, 20);

  doc.setFontSize(11);
  doc.text(`TDEE: ${ui.tdee.value} kcal`, 14, 30);
  doc.text(`Macro: C ${ui.carb.value}% / P ${ui.prot.value}% / F ${ui.fat.value}%`, 14, 36);

  let y = 46;
  planData.forEach((day) => {
    doc.setFontSize(12);
    doc.text(day.day, 14, y);
    y += 6;
    doc.setFontSize(10);
    day.meals.forEach((meal) => {
      const items = getMealItems(meal);
      const line = items.map((item) => `${item.name} ${item.grams}g`).join(", ");
      const title = meal.type === "breakfast" ? `${meal.title} (${meal.choice === "sweet" ? "Dolce" : "Salata"})` : meal.title;
      doc.text(`${title}: ${line}`, 16, y);
      y += 5;
      if (y > 270) {
        doc.addPage();
        y = 20;
      }
    });
    y += 4;
  });

  doc.save("piano-alimentare.pdf");
}

function resetPlan() {
  planData = [];
  ui.planContainer.innerHTML = "<p class='info-text'>Premi \"Genera Piano\" per visualizzare il piano.</p>";
}

function updateMacroSummary() {
  if (!ui.macroSummary) return;
  const tdee = Number(ui.tdee.value) || 0;
  const carbPerc = Number(ui.carb.value) || 0;
  const protPerc = Number(ui.prot.value) || 0;
  const fatPerc = Number(ui.fat.value) || 0;

  if (!tdee) {
    ui.macroSummary.textContent = "Inserisci i dati e calcola il TDEE per vedere i macro.";
    return;
  }

  const carbGr = Math.round((tdee * carbPerc) / 100 / 4);
  const protGr = Math.round((tdee * protPerc) / 100 / 4);
  const fatGr = Math.round((tdee * fatPerc) / 100 / 9);

  ui.macroSummary.textContent = `Macro: C ${carbPerc}% (${carbGr}g) · P ${protPerc}% (${protGr}g) · F ${fatPerc}% (${fatGr}g)`;
}

// =========================
// INIT
// =========================
window.addEventListener("DOMContentLoaded", () => {
  setupChartDayOptions();
  renderFoods(foods);
  updateCharts();

  ui.generatePlan.addEventListener("click", generatePlan);
  ui.autoCalc.addEventListener("click", () => {
    calculateTdee();
    ensureMacroTotals();
    updateCharts();
    updateMacroSummary();
  });
  ui.resetPlan.addEventListener("click", resetPlan);
  ui.addFood.addEventListener("click", addOrUpdateFood);
  ui.resetFoods.addEventListener("click", resetFoods);
  ui.selectAllFoods.addEventListener("click", selectAllFoods);
  ui.deselectAllFoods.addEventListener("click", deselectAllFoods);
  ui.foodSearch.addEventListener("input", filterFoods);
  ui.exportJSON.addEventListener("click", exportData);
  ui.importJSON.addEventListener("click", () => ui.importFile.click());
  ui.importFile.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) importData(file);
  });
  ui.exportPDF.addEventListener("click", exportPdf);
  [ui.tdee, ui.carb, ui.prot, ui.fat].forEach((input) => {
    input.addEventListener("input", () => {
      ensureMacroTotals();
      updateCharts();
      updateMacroSummary();
    });
  });
  updateMacroSummary();
});
