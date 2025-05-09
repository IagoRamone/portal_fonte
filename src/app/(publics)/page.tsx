import { classNames } from '@/utils/classNames'

export default function Home() {
  return (
    <div className="grid bg-white grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main
        className={classNames([
          'flex flex-col gap-[32px] row-start-2 items-center sm:items-start',
        ])}
      >
        <section className="max-w-md mx-auto px-6 py-12 bg-white rounded-2xl shadow-lg">
          <div className="text-6xl mb-4">🚧</div>
          <h1 className="text-3xl font-bold mb-2 text-gray-800">
            Página em Construção
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Estamos trabalhando para trazer algo incrível. Volte em breve!
          </p>
        </section>
      </main>
    </div>
  )
}
