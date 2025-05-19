export const CardInfo = ({
  title,
  description,
  image,
}: {
  title?: string
  description: string
  image: string
}) => {
  return (
    <div className="flex flex-col max-w-[420px] max-h-[367px] overflow-hidden gap-x-3">
      <img
        className="w-[418px] h-[192px] rounded-t-lg max-w-[418px] max-h-[192px]"
        src={image}
        alt={title}
      />
      <section className="overflow-hidden  pl-4 pt-2 flex flex-col gap-2">
        <p className="text-lg font-medium">{title}</p>
        <p className="text-base line-clamp-1">{description}</p>
      </section>
    </div>
  )
}
