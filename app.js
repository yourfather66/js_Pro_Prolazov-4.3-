let userYearOfBirth = +prompt(`Enter your year of birth`, 1999);
let userCity = prompt(`Enter your city`, `Киев`);
let userFavoriteKindOfSport = prompt(
  `Enter your favorite kind of sport`,
  `Бокс`
);
let userAge = 2024 - userYearOfBirth;

if (!userYearOfBirth) {
  userAge = `Жаль что вы решили не вводить свой год рождения`;
} else {
  userAge = `Твой возраст ${userAge}`;
}

if (userCity === `Киев` || userCity === `киев`) {
  userCity = `Слава Україні!`;
} else if (userCity === `Вашингтон` || userCity === `вашингтон`) {
  userCity = `Круто, ты живешь в столице Америки`;
} else if (userCity === `лондон` || userCity === `Лондон`) {
  userCity = `Круто, ты живешь в столице Англии`;
} else if (!userCity) {
  userCity = `Жаль ,что вы решили не вводить свой город`;
} else {
  userCity = `Круто, ты живешь в городе ${userCity}`;
}

if (userFavoriteKindOfSport === `бокс` || userFavoriteKindOfSport === `Бокс`) {
  userFavoriteKindOfSport = `Круто, хочешь быть как Усик?`;
} else if (
  userFavoriteKindOfSport === `футбол` ||
  userFavoriteKindOfSport === `Футбол`
) {
  userFavoriteKindOfSport = `Круто, хочешь быть как Шевченко?`;
} else if (
  userFavoriteKindOfSport === `хоббихорсинг` ||
  userFavoriteKindOfSport === `Хоббихорсинг`
) {
  userFavoriteKindOfSport = `Да что с тобой не так?`;
} else if (!userFavoriteKindOfSport) {
  userFavoriteKindOfSport = `Жаль что вы решили не вводить свой любимый вид спорта`;
} else {
  userFavoriteKindOfSport = `Круто, ${userFavoriteKindOfSport}-это очень интересный вид спорта`;
}
alert(`${userAge}
${userCity}
${userFavoriteKindOfSport}`);
