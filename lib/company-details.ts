/** Cliste Systems Limited company details for public legal documents. */

export const PRODUCT_NAME = "Hello Cara";

export const CLISTE_COMPANY = {
  legalName: "Cliste Systems Limited",
  productName: PRODUCT_NAME,
  jurisdiction: "Ireland",
  croNumber: process.env.CLISTE_CRO_NUMBER?.trim() || null,
  registeredOffice: process.env.CLISTE_REGISTERED_OFFICE?.trim() || null,
  privacyEmail: "privacy@hellocara.ie",
  supportEmail: "support@hellocara.ie",
  helloEmail: "hello@hellocara.ie",
} as const;

export function companyRegistrationLine(): string {
  const parts = [
    `${CLISTE_COMPANY.legalName}, registered in ${CLISTE_COMPANY.jurisdiction}`,
  ];
  if (CLISTE_COMPANY.croNumber) {
    parts.push(`CRO ${CLISTE_COMPANY.croNumber}`);
  }
  if (CLISTE_COMPANY.registeredOffice) {
    parts.push(`Registered office: ${CLISTE_COMPANY.registeredOffice}`);
  }
  return parts.join(" · ");
}
