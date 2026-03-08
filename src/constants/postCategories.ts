export const POST_CATEGORY_VALUES = ['ai-practice', 'productivity-system', 'life-thinking'] as const;

export type PostCategoryValue = (typeof POST_CATEGORY_VALUES)[number];

export const POST_CATEGORY_DEFAULT: PostCategoryValue = 'life-thinking';

export const POST_CATEGORY_LABELS: Record<PostCategoryValue, string> = {
  'ai-practice': 'AI 取代誰',
  'productivity-system': '天畏系統',
  'life-thinking': '行動思考',
};

export const HOME_CATEGORY_LABELS: Record<PostCategoryValue, string> = {
  'ai-practice': 'AI 取代誰',
  'productivity-system': '天畏系統',
  'life-thinking': '行動思考',
};

export const POST_CATEGORY_OPTIONS = [
  { value: 'ai-practice', label: 'AI 取代誰' },
  { value: 'productivity-system', label: '天畏系統' },
  { value: 'life-thinking', label: '行動思考' },
] as const satisfies ReadonlyArray<{ value: PostCategoryValue; label: string }>;
