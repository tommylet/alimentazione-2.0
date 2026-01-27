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
  autoCalc: document.getElementById("autoCalc"),
  generatePlan: document.getElementById("generatePlan"),
  resetPlan: document.getElementById("resetPlan"),
  foodsList: document.getElementById("foodsList"),
  foodSearch: document.getElementById("foodSearch"),
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
// GENERA PIANO VARIABILE 5 PASTI
// =========================
function generatePlan(){
  const tdee = Number(ui.tdee.value) || 2000;
  const carbPerc = Number(ui.carb.value) / 100;
  const protPerc = Number(ui.prot.value) / 100;
  const fatPerc = Number(ui.fat.value) / 100;

  const totalCarbGr = Math.round((tdee * carbPerc) / 4);
  const totalProtGr = Math.round((tdee * protPerc) / 4);
  const totalFatGr = Math.round((tdee * fatPerc) / 9);

  planData = [];
  let html = "";
  for (let i = 0; i < 7; i++) {
    const giorno = giorni[i];
    const p1 = proteineList[i % proteineList.length];
    const p2 = proteineList[(i + 1) % proteineList.length];
    const c1 = carboList[i % carboList.length];
    const c2 = carboList[(i + 1) % carboList.length];
    const f1 = fruttaList[i % fruttaList.length];
    const f2 = fruttaList[(i + 1) % fruttaList.length];

    const meals = [
      {
        title: "Colazione",
        items: ["Fiocchi d'Avena 40g", "Yogurt Greco 150g", `${f1} 100g`]
      },
      {
        title: "Spuntino Mattina",
        items: ["Fiocchi di Latte 80g", "Mandorle 15g"]
      },
      {
        title: "Pranzo",
        items: [`${p1} 150g`, `${c1} 80g`, "Olio EVO 10g"]
      },
      {
        title: "Spuntino Pomeriggio",
        items: ["Yogurt Greco 150g", `${f2} 100g`]
      },
      {
        title: "Cena",
        items: [`${p2} 150g`, `${c2} 100g`, "Olio EVO 10g"]
      }
    ];

    planData.push({
      day: giorno,
      macros: { carb: totalCarbGr, prot: totalProtGr, fat: totalFatGr },
      meals
    });

    html += `<div class="day-card" data-day="${i}"><h2>${giorno}</h2>`;
    meals.forEach((meal) => {
      html += `<div class="pasto-card"><h3>${meal.title}</h3>${meal.items.join("<br>")}</div>`;
    });
    html += `</div>`;
  }
  ui.planContainer.innerHTML = html;
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
          </tr>`
          )
          .join("")}
      </tbody>
    </table>`;
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

  ui.foodName.value = "";
  ui.foodKcal.value = "";
  ui.foodC.value = "";
  ui.foodP.value = "";
  ui.foodF.value = "";
  renderFoods(foods);
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
      planData = Array.isArray(data.planData) ? data.planData : planData;
      renderFoods(foods);
      if (planData.length) {
        ui.planContainer.innerHTML = planData
          .map(
            (day, index) => `
            <div class="day-card" data-day="${index}">
              <h2>${day.day}</h2>
              ${day.meals
                .map((meal) => `<div class="pasto-card"><h3>${meal.title}</h3>${meal.items.join("<br>")}</div>`)
                .join("")}
            </div>`
          )
          .join("");
        setupDayTabs();
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
      doc.text(`${meal.title}: ${meal.items.join(", ")}`, 16, y);
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
