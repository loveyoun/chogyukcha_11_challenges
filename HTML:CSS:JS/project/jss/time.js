function nowTime() {
  const now = new Date();
  const y = now.getFullYear();
  const mon = String(now.getMonth() + 1);
  const d = String(now.getDate());
  let h = now.getHours();
  let ap;
  if (h > 12) {
    ap = "pm";
    if (h !== 12) h -= 12;
  } else {
    ap = "am";
  }
  h = String(h).padStart(2, "0");
  const min = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");

  document.getElementById(
    "nowtime"
  ).innerText = `${y}년 ${mon}월 ${d}일  ${ap} ${h}:${min}:${s}`;
}
setInterval(nowTime, 1000);