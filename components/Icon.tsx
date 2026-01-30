"use client";

import { Icon as IconifyIcon } from "@iconify/react";

type IconProps = {
  icon: string;
  width?: number | string;
  className?: string;
};

export function Icon({ icon, width = 24, className }: IconProps) {
  return <IconifyIcon icon={icon} width={width} className={className} />;
}
