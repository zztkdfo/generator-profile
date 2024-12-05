export interface MenuItemType {
  id: string;
  title: string;
}

export interface IntroductionDataType {
  mainTitle: string;
  email: string;
  description: string;
}

export interface SkillsDataType {
  skills: {
    id: string;
    name: string;
    level: number;
    category: string;
  }[];
}

export interface HelloWordDataType {
  words: {
    id: string;
    text: string;
    placeholder?: string;
  }[];
}

export interface ArticlesDataType {
  mainBlog: string;
  articles: {
    id: string;
    title: string;
    url: string;
  }[];
}
