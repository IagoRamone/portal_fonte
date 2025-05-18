'use client'
import { Link } from '@heroui/link'
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from '@heroui/navbar'
import clsx from 'clsx'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

import { TMenuItem } from '@/models/configDefault'
type NavbarProps = {
  data: TMenuItem[]
}
export const Navbar = ({ data }: NavbarProps) => {
  const pathname = usePathname()

  return (
    <NextUINavbar
      maxWidth="full"
      className="py-2 lg:px-8 shadow-sm"
      position="sticky"
    >
      <NavbarContent justify="start">
        <NavbarBrand className="flex gap-8 ">
          <NextLink prefetch={false} className="flex gap-1 " href="/">
            {/* <Logo /> */}
            <h1>Portal_Fonte</h1>
          </NextLink>

          <ul className="hidden lg:flex gap-4 ">
            {data.map((item) => (
              <NavbarItem key={item.id}>
                <NextLink
                  prefetch={false}
                  className={clsx([
                    'font-medium text-md text-slate-600 hover:text-unisuam-orange',
                    { 'text-unisuam-orange': item.url === pathname },
                  ])}
                  color="foreground"
                  href={item.url}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </ul>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex " justify="end">
        <NavbarItem className="hidden sm:flex gap-4">
          {/* <Menu data={data} /> */}
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden  pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Area logada */}
      <NavbarMenu>
        <div className="mx-4 flex flex-col mt-6  gap-2">
          {data.map((item) => (
            <NavbarMenuItem key={item.id}>
              <Link href={item.url} size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <div className="my-5">{/* <Menu data={data} /> */}</div>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  )
}
