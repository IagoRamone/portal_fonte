export type TMenuItem = {
  id: string
  label: string
  url: string
  order: number
}

type Menu = {
  id: string
  name: string
  slug: string
  menuItems: {
    nodes: TMenuItem[]
  }
}

type Menus = {
  nodes: Menu[]
}

export type TMenusQueryResult = {
  menus: Menus
}
