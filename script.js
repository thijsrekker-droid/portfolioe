const projects = [
  { title: "Stage — PEC Zwolle", cat: "Stage / Social Media", year: "01" },
  { title: "Game Of Two Halves", cat: "Campagne Design", year: "02" },
  { title: "Loszand Festival 2024", cat: "Festival Identiteit", year: "03" },
  { title: "Liqued Liquor", cat: "Branding / Label Design", year: "04" },
  { title: "Insanity", cat: "Festival Social Media", year: "05" },
  { title: "Ines Administratie", cat: "Huisstijl & Logo Design", year: "06" },
  { title: "Evntp", cat: "Event Branding", year: "07" },
  { title: "Intake 433", cat: "Redactioneel Design", year: "08" },
  { title: "Fight The Evil (Savellix)", cat: "Muziek Artwork", year: "09" },
  { title: "Rise And Unite (Savellix & TCM)", cat: "Muziek Artwork", year: "10" },
  { title: "Stage — Voetbalprimeur", cat: "Stage / Redactioneel", year: "11" },
  { title: "Stage — ZAC", cat: "Stage / Branding", year: "12" },
  { title: "Jeugdweek 2024", cat: "Campagne Design", year: "13" },
  { title: "Jeugdweek 2023", cat: "Campagne Design", year: "14" }
].map((p, i) => ({
  ...p,
  services: "Design",
  tools: "Adobe Creative Suite",
  desc: p.title,
  cover: `https://picsum.photos/seed/thijs${i+1}/1200/800`,
  preview: `https://picsum.photos/seed/thijs${i+1}/600/400`,
  gallery: [
    `https://picsum.photos/seed/thijs${i+1}a/1200/800`,
    `https://picsum.photos/seed/thijs${i+1}b/1200/800`,
    `https://picsum.photos/seed/thijs${i+1}c/1200/800`
  ]
}));

const pages = {
  home: document.getElementById("page-home"),
  about: document.getElementById("page-about"),
  project: document.getElementById("page-project")
};

function activatePage(key) {
  Object.values(pages).forEach(page => page.classList.remove("active"));
  pages[key].classList.add("active");
  window.scrollTo(0, 0);
}
function showHome() { activatePage("home"); }
function showPage(name) { if (pages[name]) activatePage(name); }

function splitTitle(title) {
  const parts = title.split(" ");
  if (parts.length < 2) return title;
  const last = parts.pop();
  return `${parts.join(" ")} <span class="thin">${last}</span>`;
}

function renderProjectList() {
  const list = document.getElementById("project-list");
  list.innerHTML = "";
  projects.forEach((project, index) => {
    const row = document.createElement("button");
    row.type = "button";
    row.className = "p-row";
    row.innerHTML = `
      <div class="p-num">${project.year}</div>
      <div class="p-title">${project.title}</div>
      <div class="p-meta"><div class="p-cat">${project.cat}</div></div>
    `;
    row.addEventListener("click", () => openProject(index));
    row.addEventListener("mouseenter", () => {
      row.classList.add("hovered");
      showPreview(project.preview);
    });
    row.addEventListener("mouseleave", () => {
      row.classList.remove("hovered");
      hidePreview();
    });
    list.appendChild(row);
  });
}

function openProject(index) {
  const project = projects[index];
  document.getElementById("proj-h").innerHTML = splitTitle(project.title);
  document.getElementById("ps-title").textContent = project.title;
  document.getElementById("ps-cat").textContent = project.cat;
  document.getElementById("ps-serv").textContent = project.services;
  document.getElementById("ps-tools").textContent = project.tools;
  document.getElementById("proj-desc").textContent = project.desc;
  document.getElementById("proj-cover").src = project.cover;
  const grid = document.getElementById("gal-grid");
  grid.innerHTML = "";
  project.gallery.forEach((src, i) => {
    const item = document.createElement("div");
    item.className = "gi" + (i === 0 ? " wide" : "");
    item.innerHTML = `<img src="${src}" alt="${project.title}">`;
    grid.appendChild(item);
  });
  activatePage("project");
}

const cur = document.getElementById("cur");
const curF = document.getElementById("cur-f");
window.addEventListener("mousemove", (e) => {
  if (cur) { cur.style.left = `${e.clientX - 4}px`; cur.style.top = `${e.clientY - 4}px`; }
  if (curF) { curF.style.left = `${e.clientX - 17}px`; curF.style.top = `${e.clientY - 17}px`; }
});

document.addEventListener("mouseover", (e) => {
  if (e.target.closest("a,button,.about-teaser")) cur?.classList.add("big");
});
document.addEventListener("mouseout", (e) => {
  if (e.target.closest("a,button,.about-teaser")) cur?.classList.remove("big");
});

const preview = document.getElementById("preview");
const previewImg = document.getElementById("preview-img");
function showPreview(src) {
  if (!preview || !previewImg || window.matchMedia("(pointer: coarse)").matches) return;
  previewImg.src = src;
  preview.classList.add("visible");
}
function hidePreview() { preview?.classList.remove("visible"); }
window.addEventListener("mousemove", (e) => {
  if (!preview || !preview.classList.contains("visible")) return;
  preview.style.left = `${e.clientX + 90}px`;
  preview.style.top = `${e.clientY - 10}px`;
});

renderProjectList();
