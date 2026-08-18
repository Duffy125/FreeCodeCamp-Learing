function maskEmail(email) {
  const atIndex = email.indexOf("@");

  const firstChar = email[0];
  const lastChar = email[atIndex - 1];
  const domain = email.slice(atIndex);

  const asterisks = "*".repeat(atIndex-2);
  return firstChar + asterisks + lastChar + domain;
}

const email = "apple.pie@example.com";
console.log(maskEmail(email));