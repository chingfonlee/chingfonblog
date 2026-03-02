export const POST_CATEGORY_VALUES = ['ai-practice', 'productivity-system', 'life-thinking'] as const;

export type PostCategoryValue = (typeof POST_CATEGORY_VALUES)[number];

export const POST_CATEGORY_DEFAULT: PostCategoryValue = 'life-thinking';

export const POST_CATEGORY_LABELS: Record<PostCategoryValue, string> = {
  'ai-practice': 'AI 實戰',
  'productivity-system': '效率系統',
  'life-thinking': '人生思考',
};

export const HOME_CATEGORY_LABELS: Record<PostCategoryValue, string> = {
  'ai-practice': 'AI 幫了誰',
  'productivity-system': '東拼西湊的產品',
  'life-thinking': '思考不停',
};

export const POST_CATEGORY_OPTIONS = [
  { value: 'ai-practice', label: 'AI 實戰' },
  { value: 'productivity-system', label: '效率系統' },
  { value: 'life-thinking', label: '人生思考' },
] as const satisfies ReadonlyArray<{ value: PostCategoryValue; label: string }>;
