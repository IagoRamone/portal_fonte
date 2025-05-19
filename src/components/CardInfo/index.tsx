export const CardInfo = ({
  title,
  subtitle,
  description,
  image,
}: {
  title?: string
  subtitle: string
  description: string
  image: string
}) => {
  return (
    <div className="flex flex-col max-w-[420px] max-h-[367px] overflow-hidden gap-x-3">
      {title ? (
        <h1 className="text-4xl py-8 h-">{title}</h1>
      ) : (
        <div className="py-[52px]"></div>
      )}
      <img
        className="w-[418px] h-[192px] rounded-t-lg max-w-[418px] max-h-[192px]"
        src={image}
        alt={title}
      />
      <section className="overflow-hidden  pl-4 pt-2 flex flex-col gap-2">
        <p className="text-lg ">{subtitle}</p>
        <p className="text-base line-clamp-1">{description}</p>
      </section>
    </div>
  )
}
