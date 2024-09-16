export const locations = [
  { id: 0, name: "昆西", link: "https://maps.app.goo.gl/h7qA4FMXbaW3jaHv8" },
  { id: 1, name: "波士顿", link: "https://maps.app.goo.gl/sQKyptepUiXMLdft9" },
  { id: 2, name: "纽约", link: "https://maps.app.goo.gl/si4qU8yE8XLdU9VY9" },
  {
    id: 3,
    name: "帕萨迪纳",
    link: "https://maps.app.goo.gl/zBJbMp7r6zr14bQg6",
  },
  {
    id: 4,
    name: "圣克拉拉",
    link: "https://maps.app.goo.gl/o6mFzeJT8yo3XSzC7",
  },
  { id: 5, name: "北京", link: "/cn/contactus" },
];

export const links = [
  {
    id: 0,
    head_link: {
      value: "首页",
      route: "/cn",
    },
    other_links: [],
  },
  {
    id: 1,
    head_link: { value: "关于我们", route: "/cn/aboutus" },
    other_links: [],
  },
  {
    id: 2,
    head_link: { value: "我们的团队", route: "/cn/ourteam" },
    other_links: [],
  },
  {
    id: 3,
    head_link: { value: "法律服务" },
    other_links: [
      {
        id: 0,
        link: "移民法",
      },
      {
        id: 1,
        link: "房地产法",
      },
      {
        id: 2,
        link: "资产传承规划",
      },
      {
        id: 3,
        link: "民事/刑事诉讼",
      },
      {
        id: 4,
        link: "商业与公司法",
      },
      {
        id: 5,
        link: "税法",
      },
      {
        id: 6,
        link: "商标，专营权，许可",
      },
      {
        id: 7,
        link: "劳动法和雇佣",
      },
    ],
  },
  {
    id: 4,
    head_link: { value: "职业发展", route: "/cn/careers" },
    other_links: [],
  },
];
