import { CardInfo } from '@/components/CardInfo'

const data = [
  {
    id: 1,
    title: 'Getting Started with TypeScript',
    description:
      "A beginner's guide to TypeScript and its benefitsA beginner's guide to TypeScript and its benefits.A beginner's guide to TypeScript and its benefits.A beginner's guide to TypeScript and its benefits.A beginner's guide to TypeScript and its benefits.A beginner's guide to TypeScript and its benefits.A beginner's guide to TypeScript and its benefits.A beginner's guide to TypeScript and its benefits.",
    image: '/img.png',
  },
  {
    id: 2,

    title: 'Getting Started with TypeScript',
    description:
      "A beginner's guide to TypeScript and its benefitsA beginner's guide to TypeScript and its benefits.A beginner's guide to TypeScript and its benefits.A beginner's guide to TypeScript and its benefits.A beginner's guide to TypeScript and its benefits.A beginner's guide to TypeScript and its benefits.A beginner's guide to TypeScript and its benefits.A beginner's guide to TypeScript and its benefits.",
    image: '/img2.png',
  },
  {
    id: 3,

    title: 'Getting Started with TypeScript',
    description:
      "A beginner's guide to TypeScript and its benefitsA beginner's guide to TypeScript and its benefits.A beginner's guide to TypeScript and its benefits.A beginner's guide to TypeScript and its benefits.A beginner's guide to TypeScript and its benefits.A beginner's guide to TypeScript and its benefits.A beginner's guide to TypeScript and its benefits.A beginner's guide to TypeScript and its benefits.",
    image: '/img2.png',
  },
  {
    id: 4,

    title: 'Getting Started with TypeScript',
    description:
      "A beginner's guide to TypeScript and its benefitsA beginner's guide to TypeScript and its benefits.A beginner's guide to TypeScript and its benefits.A beginner's guide to TypeScript and its benefits.A beginner's guide to TypeScript and its benefits.A beginner's guide to TypeScript and its benefits.A beginner's guide to TypeScript and its benefits.A beginner's guide to TypeScript and its benefits.",
    image: '/img2.png',
  },
]

export default function Page() {
  return (
    <div className="container">
      <div className="flex flex-col gap-4 w-full py-4">
        <h1 className="text-lg font-bold">Related Articles</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-9 gap-y-11 grid-col-1 w-full">
          {data.map((card) => (
            <CardInfo
              key={card.id}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
