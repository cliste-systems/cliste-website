import type { ComponentProps } from "react";
import { APP_AUTHENTICATE_URL } from "@/lib/site-auth";

type LoginLinkProps = Omit<ComponentProps<"a">, "href"> & {
  href?: never;
};

/** External app login — always the full authenticate URL (never a hash placeholder). */
export function LoginLink({ children, ...props }: LoginLinkProps) {
  return (
    <a href={APP_AUTHENTICATE_URL} rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}
