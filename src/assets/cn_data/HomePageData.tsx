// 这个模块包含了所有的 image_block 内容 --> 图片、图片上的文字
export const image_block = {
  image: "/src/assets/images/homepage.jpg",
  title: "您的可信赖律师事务所",
  text: "自信地处理复杂的法律问题",
  color: "aqua",
};

export const text_block1 = {
  title: "业务范围",
  law_types: [
    {
      id: 0,
      title: "移民法",
      subgroups: [
        "EB-5 移民",
        "L-1 签证",
        "EB-1A 签证",
        "H-1B 签证",
        "F-1 学生签证",
      ],
    },
    {
      id: 1,
      title: "商业与合同法",
      subgroups: [
        "公司/有限责任公司成立",
        "并购",
        "雇佣协议",
        "股票期权",
        "保密协议",
      ],
    },
    {
      id: 2,
      title: "房地产法",
      subgroups: [
        "购销协议审查",
        "房地产结算",
        "租赁协议",
        "分区和许可证",
        "房地产信托",
      ],
    },
    {
      id: 3,
      title: "税务",
      subgroups: ["个人税", "企业税", "税务规划", "税务咨询", "会计"],
    },
    {
      id: 4,
      title: "遗产规划",
      subgroups: ["遗嘱和信托", "授权书", "遗产税规划", "遗产管理", "生前遗嘱"],
    },
    {
      id: 5,
      title: "知识产权",
      subgroups: ["专利", "商标", "版权", "商业秘密", "知识产权保护规划"],
    },
    {
      id: 6,
      title: "民事/刑事诉讼",
      subgroups: [
        "人身伤害索赔",
        "合同违约",
        "商业纠纷",
        "家庭暴力",
        "白领犯罪",
      ],
    },
  ],
};

export const locations = {
  image: "src/assets/images/map.jpg",
  title: "我们的办公室",
  content: `MT Law 在美国和中国都有办公室。 
    我们在美国的办公室位于列克星敦、波士顿、纽约市、旧金山和洛杉矶。
    我们在中国的办公室位于北京和上海。`,
  button_content: "联系我们",
};

export const facts = [
  {
    big_text: "1000+",
    small_text: "企业客户",
  },

  {
    big_text: "20,000+",
    small_text: "个人客户",
  },
  {
    big_text: "30,000+",
    small_text: "案件和交易",
  },
];

export const case_studies = [
  {
    text: `Dr. XX 专注于一个非常特定且复杂的科学领域。
        虽然他的研究需要极高的技术技能和经验，
        但其对美国的正面影响间接且难以解释。
        不幸的是，Dr.XX 的雇主无法
        赞助他的移民申请，所以他不得不自己迅速申请，
        以免失去永久居留权。`,
  },
  {
    text: `王先生（化名）和他的合伙人在一个美国州开设了一家饮品店。
    张先生选择了一个相当受欢迎的标志，并计划向美国商标局申请注册；
    然而，一个类似的商标已经存在。由于客户喜欢这个标志，
    王先生希望他可以继续使用它。`,
  },
  {
    text: `田家来自中国，希望找到一位优秀的律师来协助他们在马萨诸塞州列克星敦购买商业物业。一位朋友推荐了他们 MT Law LLC。在了解了田家要实现的目标后，MT Law 帮助他们及时完成了商业采购。尽管田家住在国外，MT Law 依然能够以专业和成本效益高的方式促进这一过程。`,
  },
  {
    text: `MT Law 为一家知名的美国教育公司提供了关于商标、版权和域名纠纷的建议，该公司正在对抗一家中国本地公司。`,
  },
];

export const our_mission = {
  title: "我们的使命",
  content: "我们致力于提供高质量的综合法律服务，以满足客户的需求",
};
