const select = document.getElementById("bank");
const vade = document.getElementById("vade");
const tutar = document.getElementById("tutar");
const button = document.getElementById("btn");

let oran = 0;
let taksit = 0;

button.addEventListener("click", () => {
  if (select.value === "Seçiniz:" || vade.value === "" || tutar.value === "") {
    alert("Tüm Alanları Doldurmalısınız");
  } else {
    if (select.value === "Konut") {
      oran = 2.3;
    } else if (select.value === "Araç") {
      oran = 2.42;
    } else if (select.value === "İhtiyaç") {
      oran = 1.35;
    }
  }
  const faizOranı = oran / 100;
  taksit =
    (tutar.value * (faizOranı * (1 + faizOranı) ** vade.value)) /
    ((1 + faizOranı) ** vade.value - 1);
  sonuc();
});

const sonuc = () => {
  const sonuc = document.querySelector(".sonuc");
  sonuc.innerHTML = `
        <h2>Kredi Bilgileri</h2>
        <table class="table">
          <tbody>
            <tr>
              <th scope="row">Kredi Miktarı</th>
              <td>${tutar.value}</td>
              <th>Kredi Tipi</th>
              <td>${select.value}</td>
            </tr>
            <tr>
              <th scope="row">Vade</th>
              <td>${vade.value}</td>
              <th>Faiz Oranı</th>
              <td>${oran}</td>
            </tr>
            <tr>
              <th scope="row">Toplam Tutar</th>
              <td>${(taksit * vade.value).toFixed(2)}</td>
              <th>Taksit Ödemesi</th>
              <td>${taksit.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
        `;
};
