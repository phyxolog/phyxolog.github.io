export const SITE = {
  website: "https://phyxolog.github.io", // replace this with your deployed domain
  author: "Yurii Zhyvaha",
  profile: null,
  desc: "software engineer / reverse exorcist / runtime surgeon / dark arts",
  title: "px blog",
  ogImage: "og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 5,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "suggest changes",
    url: "https://github.com/phyxolog/phyxolog.github.io/edit/main/",
  },
  dynamicOgImage: true,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/Madrid", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
