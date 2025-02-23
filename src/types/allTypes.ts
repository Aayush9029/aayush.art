export enum SocialPlatform {
  TWITTER = 'TWITTER',
  YOUTUBE = 'YOUTUBE',
  GITHUB = 'GITHUB',
  INSTAGRAM = 'INSTAGRAM',
  WEBSITE = 'WEBSITE'
}

export interface Social {
  platform: SocialPlatform;
  url: string;
}

export interface Tweet {
  id: string;
  content: string;
  timestamp: string;
  image?: string | null;
  location?: string;
  url?: string;
}

export interface Author {
  name: string;
  handle: string;
  avatar: string;
  bio: string;
  socials: Social[];
}

export interface TweetsData {
  tweets: Tweet[];
  author: Author;
}