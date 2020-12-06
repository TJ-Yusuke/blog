/**
 * プレーンテキスト作成
 * @param text: html文字列
 * @return text: プレーンテキスト
 */
export const getPlainText = (text: string): string => {
  text = text.replace(/<style([\s\S]*?)<\/style>/gi, '');
  text = text.replace(/<script([\s\S]*?)<\/script>/gi, '');
  text = text.replace(/<\/div>/gi, '\n');
  text = text.replace(/<\/li>/gi, '\n');
  text = text.replace(/<li>/gi, '');
  text = text.replace(/<\/ul>/gi, '\n');
  text = text.replace(/<\/p>/gi, '\n');
  text = text.replace(/<br\s*[\/]?>/gi, '\n');
  text = text.replace(/<[^>]+>/gi, '');
  return text;
};
