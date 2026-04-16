export const locales = ["en", "mk", "de"] as const;
export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  mk: "MK",
  de: "DE",
};

export type Messages = {
  tagline: string;
  socialBlurb: string;
  footer: string;
  themeLight: string;
  themeDark: string;
  languageLabel: string;
  socialHeading: string;
  emailAria: string;
};

export const messages: Record<Locale, Messages> = {
  en: {
    tagline: "Building cool stuff on the web",
    socialBlurb: "My site and social profiles — say hello anytime.",
    footer: "Made with \u2764\ufe0f by Dlink",
    themeLight: "Light appearance",
    themeDark: "Dark appearance",
    languageLabel: "Language",
    socialHeading: "Social Media",
    emailAria: "Send email to dimihbt@yahoo.com",
  },
  mk: {
    tagline: "Градам интересни работи на вебот",
    socialBlurb: "Мојата страница и социјални профили — пиши ми.",
    footer: "Направено со \u2764\ufe0f од Dlink",
    themeLight: "Светла тема",
    themeDark: "Темна тема",
    languageLabel: "\u0408\u0430\u0437\u0438\u043a",
    socialHeading: "Социјални мрежи",
    emailAria: "Испрати е-пошта на dimihbt@yahoo.com",
  },
  de: {
    tagline: "Ich baue spannende Dinge f\u00fcrs Web",
    socialBlurb: "Meine Website und Social-Profile — melde dich gern.",
    footer: "Mit \u2764\ufe0f gemacht von Dlink",
    themeLight: "Helles Erscheinungsbild",
    themeDark: "Dunkles Erscheinungsbild",
    languageLabel: "Sprache",
    socialHeading: "Soziale Medien",
    emailAria: "E-Mail an dimihbt@yahoo.com senden",
  },
};
