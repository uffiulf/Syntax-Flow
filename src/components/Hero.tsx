import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const Hero = () => {
  const { t } = useTranslation('common')
  return (
    <section
      className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-violet-600/90 via-purple-700/90 to-fuchsia-700/90 px-6 py-20 shadow-sm dark:from-violet-700/80 dark:via-purple-800/80 dark:to-fuchsia-800/80"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 mix-blend-overlay">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-fuchsia-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-400/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <h1
          id="hero-heading"
          className="text-left text-5xl font-extrabold tracking-tight text-white drop-shadow-sm md:text-7xl"
        >
          <span className="bg-gradient-to-r from-white via-violet-100 to-fuchsia-100 bg-clip-text text-transparent">
            {t('hero.title')}
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-violet-100 md:text-xl">
          {t('hero.pitch')}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button size="lg" asChild>
            <Link to="/team">{t('cta.viewTeam')}</Link>
          </Button>
          <Button size="lg" variant="secondary" className="bg-white/10 text-white backdrop-blur hover:bg-white/20" asChild>
            <Link to="/contact">{t('cta.contact')}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
