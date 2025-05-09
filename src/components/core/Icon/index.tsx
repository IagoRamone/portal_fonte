import React from 'react';
import * as MaterialDesign from 'react-icons/md';
import * as FontAwesome from 'react-icons/fa';

export const icons = {
  ...MaterialDesign,
  ...FontAwesome,
};

export type IconNameProps = keyof typeof icons;

export type IconsProps = {
  name: IconNameProps;
  className?: string;
  size?: number;
  color?: string;
};

export default function Icon({
  name,
  size = 32,
  className = '',
  ...props
}: IconsProps) {
  const IconFromName = icons[name ? name : 'MdOutlineImage'];
  return <IconFromName {...props} style={{ width: size, height: 'auto' }} className={className}/>;
}
