export const locations = [
  { id: 0, name: "Quincy" },
  { id: 1, name: "Boston" },
  { id: 2, name: "New York" },
  { id: 3, name: "Pasadena" },
  { id: 4, name: "Santa Clara" },
  { id: 5, name: "Beijing" },
];

export const links = [
  {
    id: 0,
    head_link: {
      value: "Home",
      route: "/en",
    },
    other_links: [],
  },
  {
    id: 1,
    head_link: { value: "About Us", route: "/en/aboutus" },
    other_links: [],
  },
  {
    id: 2,
    head_link: { value: "Our Team", route: "/en/ourteam" },
    other_links: [],
  },
  {
    id: 3,
    head_link: { value: "Legal Services" },
    other_links: [
      {
        id: 0,
        link: "Immigration Law",
      },
      {
        id: 1,
        link: "Real Estate Law",
      },
      {
        id: 2,
        link: "Estate Planning",
      },
      {
        id: 3,
        link: "Civil/Criminal Litigation",
      },
      {
        id: 4,
        link: "Business and Corporate Law",
      },
      {
        id: 5,
        link: "Tax Law",
      },
      {
        id: 6,
        link: "Trademark and Licensing",
      },
      {
        id: 7,
        link: "Employment Law",
      },
    ],
  },
  {
    id: 4,
    head_link: { value: "Careers", route: "/en/careers" },
    other_links: [],
  },
];
