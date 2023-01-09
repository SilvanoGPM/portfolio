const BIRTH_YEAR = 2004;
const BIRTH_MONTH = 9;

export function getMyAge() {
  const now = new Date();
  const age = now.getFullYear() - BIRTH_YEAR;

  const alreadyHadBirthday =
    now.getMonth() >= BIRTH_MONTH - 1 && now.getDate() >= 4;

  return alreadyHadBirthday ? age : age - 1;
}
