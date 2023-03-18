import styles from "../Components/Form/Form.module.css";

export function formatPhoneNumber(phoneNumber) {
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

export const MAX_CHARS = 600;

export function CharacterCount({ count, maxChars }) {
  if (count > maxChars) {
    return <div className={styles.error}>Превышен лимит символов в поле</div>;
  } else {
    const remainingChars = maxChars - count;
    return (
      <div className={styles.charCount}>
        Осталось {remainingChars}/{maxChars} символов
      </div>
    );
  }
}
