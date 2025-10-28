
// ------------------------
// HERO SLIDESHOW
// ------------------------
const hero = document.querySelector(".hero");
// Mảng chứa link ảnh (có thể là link thật hoặc demo)
const images = [
  "https://puluongexcursions.com/wp-content/uploads/2023/03/vinh-ha-long-01.jpg",
  "https://mia.vn/media/uploads/blog-du-lich/dia-diem-du-lich-viet-nam-2-1721209508.jpg",
  "https://r2.nucuoimekong.com/wp-content/uploads/cac-dia-diem-du-lich-sinh-thai-o-viet-nam.jpg",
  "https://images.vietnamtourism.gov.vn/vn/images/2019/CNMN/18.2._5_Dia_diem_me_hoac_cua_Viet_Nam_duoc_truyen_thong_quoc_te_vinh_danh_1.jpg",
];

let current = 0;

function changeHeroImage() {
  hero.classList.add("fade-out");
  setTimeout(() => {
    hero.style.backgroundImage = `url('${images[current]}')`;
    hero.classList.remove("fade-out");
    current = (current + 1) % images.length;
  }, 1500);
}

// Ảnh đầu tiên và bắt đầu chạy slideshow
hero.style.backgroundImage = `url('${images[0]}')`;
setInterval(changeHeroImage, 2000);


