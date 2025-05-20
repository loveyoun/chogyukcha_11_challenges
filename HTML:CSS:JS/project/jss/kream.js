// 크롤링한 데이터를 아래와 같은 형태의 객체 배열로 가정합니다.
// 추후 데이터베이스에 있는 데이터를 쿼리문으로 불러 올 수 있게 쿼리를 작성해 볼 수 있음

//* 제품 데이터
const product_data = [
  {
    category: "상의",
    brand: "Supreme",
    product: "슈프림 박스로고 후드티",
    price: "390,000",
  },
  {
    category: "상의",
    brand: "Supreme",
    product: "슈프림 박스로고 후드티",
    price: "390,000",
  },

  {
    category: "상의",
    brand: "Supreme",
    product: "슈프림 박스로고 후드티",
    price: "390,000",
  },

  {
    category: "상의",
    brand: "Supreme",
    product: "슈프림 박스로고 후드티",
    price: "390,000",
  },
  {
    category: "상의",
    brand: "Supreme",
    product: "슈프림 박스로고 후드티",
    price: "390,000",
  },
  {
    category: "상의",
    brand: "Supreme",
    product: "슈프림 박스로고 후드티",
    price: "390,000",
  },

  {
    category: "하의",
    brand: "DIESEL",
    product: "디젤 트랙 팬츠",
    price: "188,000",
  },
  {
    category: "하의",
    brand: "DIESEL",
    product: "디젤 트랙 팬츠",
    price: "188,000",
  },
  {
    category: "하의",
    brand: "DIESEL",
    product: "디젤 트랙 팬츠",
    price: "188,000",
  },
  {
    category: "하의",
    brand: "DIESEL",
    product: "디젤 트랙 팬츠",
    price: "188,000",
  },
  {
    category: "하의",
    brand: "DIESEL",
    product: "디젤 트랙 팬츠",
    price: "188,000",
  },
  {
    category: "하의",
    brand: "DIESEL",
    product: "디젤 트랙 팬츠",
    price: "188,000",
  },
  { category: "신발", brand: "Nike", product: "에어포스 1", price: "137,000" },
  { category: "신발", brand: "Nike", product: "에어포스 1", price: "137,000" },
  { category: "신발", brand: "Nike", product: "에어포스 1", price: "137,000" },
  { category: "신발", brand: "Nike", product: "에어포스 1", price: "137,000" },
  { category: "신발", brand: "Nike", product: "에어포스 1", price: "137,000" },
  { category: "신발", brand: "Nike", product: "에어포스 1", price: "137,000" },
  {
    category: "패션잡화",
    brand: "Music&Goods",
    product: "빵빵이 키링",
    price: "29,000",
  },
  {
    category: "패션잡화",
    brand: "Music&Goods",
    product: "빵빵이 키링",
    price: "29,000",
  },
  {
    category: "패션잡화",
    brand: "Music&Goods",
    product: "빵빵이 키링",
    price: "29,000",
  },
  {
    category: "패션잡화",
    brand: "Music&Goods",
    product: "빵빵이 키링",
    price: "29,000",
  },
  {
    category: "패션잡화",
    brand: "Music&Goods",
    product: "빵빵이 키링",
    price: "29,000",
  },
  {
    category: "패션잡화",
    brand: "Music&Goods",
    product: "빵빵이 키링",
    price: "29,000",
  },
  // ...
];

const product_data_Table = document.getElementById("product_data_Table");

//* 제품 테이블에 데이터 추가
function productTable(pdata) {
  product_data_Table.innerHTML = "";
  pdata.forEach((item) => {
    const row = product_data_Table.insertRow();
    row.insertCell(0).innerHTML = item.category;
    row.insertCell(1).innerHTML = item.brand;
    row.insertCell(2).innerHTML = item.product;
    row.insertCell(3).innerHTML = item.price;
  });
}

const cat_filter = document.getElementById("categoryfilter");
const search_filter = document.getElementById("searchfilter");
const search_button = document.getElementById("search");

const fst = document.getElementById("fst");
const snd = document.getElementById("snd");
const trd = document.getElementById("trd");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

// 5 products per page, for 3 pages
// if more than 3 pages, 123 -> 456
// 24 / 5 / 3
// 4+1 page, 1+1 iter
let filteredData = product_data.slice();
let plen, pages, iter;

function prevAction() {
  const curIter = Number(fst.textContent);
  const curIterDiv = Math.ceil(curIter / 3);
  if (curIterDiv <= 1) return;
  fst.textContent = String(curIter - 3);
  snd.textContent = String(curIter - 2);
  trd.textContent = String(curIter - 1);

  displayTabs();
  initTab();
  if (curIterDiv == 2) prev.classList.add("disabled");
  pagination(fst.textContent);
}

function nextAction() {
  const curIter = Number(fst.textContent); // 4페이지
  const curIterDiv = Math.ceil(curIter / 3); // 1번째 그룹

  if (curIterDiv >= iter) return;

  displayTabs();
  initTab();
  /* 요소 없애기 */ // fst.remove();
  fst.textContent = curIter + 3;
  if (curIter + 4 > pages) snd.style.display = "none";
  else snd.textContent = curIter + 4;
  if (curIter + 5 > pages) trd.style.display = "none";
  else trd.textContent = curIter + 5;
  // console.log(typeof trd.textContent);

  if (curIterDiv == iter - 1) next.classList.add("disabled");
  pagination(fst.textContent);
}

function displayTabs() {
  fst.style.display = "block";
  snd.style.display = "block";
  trd.style.display = "block";
  prev.style.display = "block";
  next.style.display = "block";
}
function initTab() {
  displayTabs();
  fst.classList.add("active");
  snd.classList.remove("active");
  trd.classList.remove("active");
  if (pages < 2) snd.style.display = "none";
  if (pages < 3) trd.style.display = "none";

  prev.classList.remove("disabled");
  next.classList.remove("disabled");
}
function deactiveAll() {
  fst.classList.remove("active");
  snd.classList.remove("active");
  trd.classList.remove("active");
}

function pagination(p) {
  const curData = filteredData.slice((p - 1) * 5, p * 5);
  productTable(curData);
}

function tabEvents() {
  // << 1
  prev.addEventListener("click", prevAction);

  // 3 >>
  next.addEventListener("click", nextAction);

  fst.addEventListener("click", () => {
    pagination(Number(fst.textContent));
    deactiveAll();
    fst.classList.add("active");
  });
  snd.addEventListener("click", () => {
    pagination(Number(snd.textContent));
    deactiveAll();
    snd.classList.add("active");
  });
  trd.addEventListener("click", () => {
    pagination(Number(trd.textContent));
    deactiveAll();
    trd.classList.add("active");
  });
}

function filterData() {
  const cat = cat_filter.value;
  // const search = search_filter.value === "" ? null : search_filter.value.toLowerCase();
  const search = search_filter.value.toLowerCase();

  filteredData = product_data.filter((item) => {
    return (
      (item.category === cat || cat === "전체") &&
      (item.product.toLowerCase().includes(search) ||
        item.brand.toLowerCase().includes(search))
    ); // && > || in priority. 카테고리 먼저.
  });

  plen = filteredData.length;
  pages = Math.ceil(plen / 5);
  iter = Math.ceil(pages / 3);
  fst.textContent = 1;
  snd.textContent = 2;
  trd.textContent = 3;
  initTab(); // tab
  prev.classList.add("disabled");
  if (pages < 3) next.classList.add("disabled");
  pagination(1); // data table
}

function initialize() {
  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") e.preventDefault();
  });

  cat_filter.addEventListener("input", filterData);
  search_filter.addEventListener("input", filterData);
  search_button.addEventListener("click", filterData);
  tabEvents();

  filterData();
}

initialize();
