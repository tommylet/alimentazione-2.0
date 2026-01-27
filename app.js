// =========================
// CONFIG BASE
// =========================
const giorni = ["Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato","Domenica"];
const proteineList = ["Pollo","Tonno","Salmone"];
const carboList = ["Riso Basmati","Pasta Integrale","Cous Cous","Patate"];
const fruttaList = ["Mela Golden","Kiwi","Banana","Fragole"];

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
  const tdee = Number(document.getElementById("tdee").value) || 2000;
  const carbPerc = Number(document.getElementById("carb").value)/100;
  const protPerc = Number(document.getElementById("prot").value)/100;
  const fatPerc  = Number(document.getElementById("fat").value)/100;

  const totalCarbGr = tdee * carbPerc / 4;
  const totalProtGr = tdee * protPerc / 4;
  const totalFatGr  = tdee * fatPerc  / 9;

  let html = "";
  for(let i=0;i<7;i++){
    const giorno = giorni[i];
    const p1 = proteineList[i % proteineList.length];
    const p2 = proteineList[(i+1) % proteineList.length];
    const c1 = carboList[i % carboList.length];
    const c2 = carboList[(i+1) % carboList.length];
    const f1 = fruttaList[i % fruttaList.length];
    const f2 = fruttaList[(i+1) % fruttaList.length];

    html += `<div class="day-card" data-day="${i}"><h2>${giorno}</h2>`;

    // Colazione
    html += `<div class="pasto-card"><h3>Colazione</h3>
      Fiocchi d'Avena 40g<br>
      Yogurt Greco 150g<br>
      ${f1} 100g
    </div>`;

    // Spuntino Mattina
    html += `<div class="pasto-card"><h3>Spuntino Mattina</h3>
      Fiocchi di Latte 80g<br>
      Mandorle 15g
    </div>`;

    // Pranzo
    html += `<div class="pasto-card"><h3>Pranzo</h3>
      ${p1} 150g<br>
      ${c1} 80g<br>
      Olio EVO 10g
    </div>`;

    // Spuntino Pomeriggio
    html += `<div class="pasto-card"><h3>Spuntino Pomeriggio</h3>
      Yogurt Greco 150g<br>
      ${f2} 100g
    </div>`;

    // Cena
    html += `<div class="pasto-card"><h3>Cena</h3>
      ${p2} 150g<br>
      ${c2} 100g<br>
      Olio EVO 10g
    </div>`;

    html += `</div>`;
  }
  document.getElementById("planContainer").innerHTML = html;
  setupDayTabs();
}

// =========================
// INIT
// =========================
window.addEventListener("DOMContentLoaded",()=>{
  document.getElementById("generatePlan").onclick = generatePlan;
});
