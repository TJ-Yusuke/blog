/**
 * 日付文字列作成
 * @param date: Date型日付
 * @string: 日付文字列
 */
export const getDateString = (date: Date): string => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};
