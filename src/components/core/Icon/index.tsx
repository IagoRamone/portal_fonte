import React from 'react'
import * as FontAwesome from 'react-icons/fa'
import * as MaterialDesign from 'react-icons/md'

export const icons = {
  ...MaterialDesign,
  ...FontAwesome,
}

export type IconNameProps = keyof typeof icons

export type IconsProps = {
  name: IconNameProps
  className?: string
  size?: number
  color?: string
}

export default function Icon({
  name,
  size = 32,
  className = '',
  ...props
}: IconsProps) {
  const IconFromName = icons[name || 'MdOutlineImage']
  return (
    <IconFromName
      {...props}
      style={{ width: size, height: 'auto' }}
      className={className}
    />
  )
}
