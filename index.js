// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const setDataFavoriteColorMonica = new Set(["Yellow","Pink","White","Purple"]);
const setDataFavoriteRestaurantMonica = new Set(["Bento","Sushi","Pancake","Eggy","Tempura","Bento","Eggy","Padang","Tteok","Sushi","Sushi"]);

const setDataFavoriteColorWendy = new Set(["Blue","Black","Grey"]);
const setDataFavoriteRestaurantWendy = new Set(["Tempura","Bento","Sushi","Pancake","Padang","Katsu","Geprek","Pancake","Eggy"]);

function Sekolahan(inName, inCity, inGraduate){
  this.name = inName;
  this.city = inCity;
  this.graduate = inGraduate;
}
const sdMonica = new Sekolahan("SD 01", "Jakarta", 2016);
const smpMonica = new Sekolahan("SMP 02", "Jakarta", 2019);
const smaMonica = new Sekolahan("SMA 03", "Tangerang");
const sdWendy = new Sekolahan("SD 02", "Jakarta", 2010);
const smpWendy = new Sekolahan("SMP 03", "Bogor", 2013);
const smaWendy = new Sekolahan("SMA 01", "Surabaya", 2016);
const univWendy = new Sekolahan("Universitas Maju", "Tangerang");

const firstUser = {
  name:"Monica",
  gender:"Female",
  age:17,
  email:"monica@dingdong.com",
  favoriteColor:Array.from(setDataFavoriteColorMonica),
  isHavePet:true,
  education:{sdMonica,smpMonica,smaMonica},
  favoriteRestaurant:Array.from(setDataFavoriteRestaurantMonica)
};
const secondUser = {
  name:"Wendy",
  gender:"Male",
  age:23,
  email:"wendy@dingdong.com",
  favoriteColor:Array.from(setDataFavoriteColorWendy),
  isHavePet:false,
  education:{sdWendy,smpWendy,smaWendy,univWendy},
  favoriteRestaurant:Array.from(setDataFavoriteRestaurantWendy)
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
    // Debug Data Length
    // console.log(users[0].favoriteColor.length);
    // console.log(users[1].favoriteColor.length);
    // console.log(users[0].favoriteRestaurant.length);
    // console.log(users[1].favoriteRestaurant.length);
}

main();

module.exports = {
    users
};
