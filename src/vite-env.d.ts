/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_CONTACT_EMAIL?: string;
	readonly VITE_SUPPORT_EMAIL?: string;
	readonly VITE_PRIVACY_EMAIL?: string;
	readonly VITE_CONTACT_PHONE_DISPLAY?: string;
	readonly VITE_CONTACT_PHONE_TEL?: string;
	readonly VITE_CONTACT_WHATSAPP_URL?: string;

	readonly VITE_SOCIAL_INSTAGRAM?: string;
	readonly VITE_SOCIAL_FACEBOOK?: string;
	readonly VITE_SOCIAL_LINKEDIN?: string;
	readonly VITE_SOCIAL_TIKTOK?: string;

	readonly VITE_PAYMENT_METHOD?: string;
	readonly VITE_PAYMENT_ACCOUNT_NAME?: string;
	readonly VITE_PAYMENT_ACCOUNT_NUMBER?: string;
	readonly VITE_PAYMENT_IBAN?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
