export interface MenuItemType {
  id: string;
  title: string;
}

export interface IntroductionDataType {
  mainTitle: string;
  email: string;
  description: string;
  showImage?: boolean;
  imageSrc?: string;
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
  showImage?: boolean;
  imageSrc?: string;
}

export interface ArticlesDataType {
  mainBlog: string;
  articles: {
    id: string;
    title: string;
    url: string;
  }[];
}
export interface Template {
  id: string;
  name: string;
  isAvailable: boolean;
  sections: Section[];
}

export interface Section {
  id: string;
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<any>;
  initialData:
    | IntroductionDataType
    | SkillsDataType
    | HelloWordDataType
    | ArticlesDataType;
}
