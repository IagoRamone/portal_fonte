import { CardInfo } from '@/components/CardInfo'

const data = [
  {
    id: 1,
    title: 'Related Articles',
    subtitle: 'Getting Started with TypeScript',
    description:
      "A beginner's guide to TypeScript and its benefitsA beginner's guide to TypeScript and its benefits.A beginner's guide to TypeScript and its benefits.A beginner's guide to TypeScript and its benefits.A beginner's guide to TypeScript and its benefits.A beginner's guide to TypeScript and its benefits.A beginner's guide to TypeScript and its benefits.A beginner's guide to TypeScript and its benefits.",
    image: '/img.png',
  },
  {
    id: 2,

    subtitle: 'Getting Started with TypeScript',
    description: "A beginner's guide to TypeScript and its benefits.",
    image: '/img2.png',
  },
  {
    id: 3,
    title: 'Related Articles',
    subtitle: 'Getting Started with TypeScript',
    description: "A beginner's guide to TypeScript and its benefits.",
    image: '/img2.png',
  },
  {
    id: 4,
    title: 'Related Articles',
    subtitle: 'Getting Started with TypeScript',
    description: "A beginner's guide to TypeScript and its benefits.",
    image: '/img.png',
  },
]

const Page = () => {
  return (
    <div className="flex flex-wrap max-w-full">
      {data.map((card) => (
        <div key={card.id} className="w-full lg:w-1/4 md:w-1/2 p-3">
          <CardInfo
            title={card.title}
            subtitle={card.subtitle}
            description={card.description}
            image={card.image}
          />
        </div>
      ))}
    </div>
  )
}

export default Page
