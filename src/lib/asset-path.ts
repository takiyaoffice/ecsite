/**
 * public/ 配下のアセットを base パス(GitHub Pages のサブパス配信など)を
 * 考慮して参照するためのヘルパー。
 */
export function assetPath(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
