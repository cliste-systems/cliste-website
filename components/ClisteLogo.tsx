import Image from "next/image";

type ClisteLogoProps = {
  className?: string;
};

export function ClisteLogo({ className }: ClisteLogoProps) {
  return (
    <span
      className={`inline-flex items-center text-neutral-950 ${className ?? ""}`}
      aria-label="Hello Cara"
    >
      <Image
        src="/cliste-logo-v3.png"
        alt="Hello Cara"
        width={64}
        height={64}
        priority
        unoptimized
        className="h-8 w-8 object-contain sm:h-9 sm:w-9 lg:h-10 lg:w-10"
      />
    </span>
  );
}
