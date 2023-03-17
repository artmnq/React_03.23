export default function formatPhoneNumber(phoneNumber) {
  const cleaned = ("" + phoneNumber).replace(/\D/g, "");
  const match = cleaned.match(/^(\d{1})(\d{0,3})(\d{0,2})(\d{0,2})$/);
  if (match) {
    const intlCode = match[1] ? "+7" : "";
    const firstGroup = match[2];
    const secondGroup = match[3];
    const thirdGroup = match[4];
    let formattedNumber = intlCode;
    if (firstGroup) formattedNumber += `-${firstGroup}`;
    if (secondGroup) formattedNumber += `-${secondGroup}`;
    if (thirdGroup) formattedNumber += `-${thirdGroup}`;
    return formattedNumber;
  }
  return phoneNumber;
}
