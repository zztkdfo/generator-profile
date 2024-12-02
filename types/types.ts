export interface MenuItemType {
  id: string;
  title: string;
}

export interface IntroductionDataType {
  mainTitle: string;
  email: string;
  philosophy: string;
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
