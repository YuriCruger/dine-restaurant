import Image, { ImageProps } from 'next/image'

export function HeroSectionImage({ src, alt, ...props }: ImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      height={500}
      width={500}
      sizes="100vw"
      className="mx-auto"
      {...props}
    />
  )
}
