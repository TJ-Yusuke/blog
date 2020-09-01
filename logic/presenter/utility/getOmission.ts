/**
 * 省略テキスト作成
 * @param text: 作成したい文字列
 * @param limit: 省略したい文字数
 */
export const getOmission = (text: string, limit: number): string => {
  return text.length > limit ? text.slice(0, limit) + '…' : text;
};
