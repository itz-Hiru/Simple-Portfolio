var typed = new Typed(".typing", {
  strings: [
    "Student ",
    "Web Designer ",
    "Frontend Developer ",
    "Backend Developer ",
    "Android Developer ",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  backDelay: 1500,
  loop: true,
});

const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNav = navList.length,
  AllSection = document.querySelectorAll(".section"),
  totalSection = AllSection.length;

for (let i = 0; i < totalNav; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < navList.length; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);

    if (window.innerWidth < 1200) {
      AsideSectionTogglerBtn();
    }
  });
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    AllSection[i].classList.remove("active");
  }

  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function addBackSection(j) {
  AllSection[j].classList.add("back-section");
}

function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    AllSection[i].classList.remove("back-section");
  }
}

function updateNav(element) {
  for (let i = 0; i < totalSection; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];

    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});

const navTogglerBtn = document.querySelector(".nav-toggler"),
  Aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  AsideSectionTogglerBtn();
});

function AsideSectionTogglerBtn() {
  Aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");

  for (let i = 0; i < totalSection; i++) {
    AllSection[i].classList.toggle("open");
  }
}
