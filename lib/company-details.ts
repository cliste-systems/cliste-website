/** Cliste Systems Limited company details for public legal documents. */

export const CLISTE_COMPANY = {
  legalName: "Cliste Systems Limited",
  jurisdiction: "Ireland",
  croNumber: process.env.CLISTE_CRO_NUMBER?.trim() || null,
  registeredOffice: process.env.CLISTE_REGISTERED_OFFICE?.trim() || null,
  privacyEmail: "privacy@clistesystems.ie",
  supportEmail: "support@clistesystems.ie",
  helloEmail: "hello@clistesystems.ie",
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
