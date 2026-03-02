import {
  HOME_CATEGORY_LABELS,
  POST_CATEGORY_DEFAULT,
  POST_CATEGORY_LABELS,
  POST_CATEGORY_OPTIONS,
} from './postCategories';

export const DEFAULT_POST_COVER =
  'https://res.cloudinary.com/dwobro2s5/image/upload/f_auto,q_auto,c_fill,ar_16:9,w_1600/sample';
export const DEFAULT_POST_COVER_ALT = 'lee-chingfon 預設文章封面';

export const postCategoryOptions = POST_CATEGORY_OPTIONS;

export const postCategoryLabelMap: Record<string, string> = POST_CATEGORY_LABELS;

export const homeCategoryLabelMap: Record<string, string> = HOME_CATEGORY_LABELS;

export const DEFAULT_CATEGORY_LABEL = POST_CATEGORY_LABELS[POST_CATEGORY_DEFAULT];

export const homePageText = {
  featuredSectionTitle: '精選文章',
  featuredSectionAction: '查看全部主題',
  projectsSectionTitle: '我做的東西',
  projectsSectionAction: '全部專案',
  toolsSectionTitle: '推薦工具',
  toolsSectionAction: '全部工具',
  emptyPosts: '目前尚未有文章。',
  emptyProjects: '目前還沒有公開的專案。',
  emptyTools: '目前還沒有推薦的工具。',
} as const;

export const postsPageText = {
  pageTitle: '所有文章 | lee-chingfon',
  pageDescription: '分享 AI 實戰、效率系統與人生思考的文章。',
  heroTitle: '所有文章',
  heroSubtitle: '分享 AI 實戰、效率系統與人生思考的文章',
  filterAllLabel: '全部',
  filterStatusAll: '目前顯示全部文章。',
  filterStatusInvalidCategory: '無效的 category 參數，已回退為全部文章。',
  filterStatusCategoryPrefix: '目前顯示分類：',
  emptyCategory: '此分類目前沒有文章。',
  featuredTag: '精選',
} as const;

export const projectsPageText = {
  pageTitle: '我做的東西 | lee-chingfon',
  pageDescription: 'Projects by lee-chingfon.',
  heroTitle: '我做的東西',
  heroSubtitle: '從想法到上線，持續累積的作品與產品。',
  emptyProjects: '目前還沒有公開的專案。',
} as const;

export const toolsPageText = {
  pageTitle: '推薦工具 | lee-chingfon',
  pageDescription: 'Recommended tools by lee-chingfon.',
  heroTitle: '推薦工具',
  heroSubtitle: '我實際用過、覺得值得推薦的工具與資源。',
  emptyTools: '目前還沒有推薦的工具。',
} as const;
