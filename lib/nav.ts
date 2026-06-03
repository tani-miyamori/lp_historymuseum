// サイト共通のナビゲーション定義。ヘッダー・フッターで共有する。
export interface NavItem {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: '展示案内', href: '/exhibitions' },
  { label: '収蔵品', href: '/collection' },
  { label: 'イベント', href: '/events' },
  { label: 'ご来館案内', href: '/visit' },
  { label: 'お問い合わせ', href: '/contact' },
]
