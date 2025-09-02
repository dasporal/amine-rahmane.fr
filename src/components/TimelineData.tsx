import { Timeline } from '@/components/ui/timeline'

import reciple from '@/assets/projects/reciple/hero.png'
import workos from '@/assets/projects/authkit/workos.svg'
import efrei from '@/assets/projects/efrei/hero.png'
import santevet from '@/assets/projects/santevet/hero.png'
import remarqr from '@/assets/projects/remarqr/hero.png'
import shortedition from '@/assets/projects/short-edition/logo.svg'
import teksial from '@/assets/projects/teksial/logo.png'
import amsecurite from '@/assets/projects/am-securite/hero.png'
import bacchus from '@/assets/projects/bacchus/hero.png'
import petitponey from '@/assets/projects/petit-poney/hero.png'
import thronocrigger from '@/assets/projects/thronocrigger/hero.png'
import samuel from '@/assets/projects/samuel-hebting/hero.png'
import cedrus from '@/assets/projects/cedrus/hero.png'

export default function TimelineData() {
  const data = [
    {
      title: '2025',
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-6">
            <strong>Lead Front-End</strong> chez{' '}
            <a
              href="https://cedrus.solutions"
              target="_blank"
              rel="noreferrer"
              className="text-orange-700 hover:underline hover:underline-offset-2">
              Cedrus Solutions
            </a>
            . Développement d'une application SaaS avancée avec{' '}
            <strong>Next.js</strong> et refonte complète du site vitrine.
          </p>

          <div className="mb-6">
            <ul className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm space-y-2 mb-4">
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 mt-1">•</span>
                <span>
                  <strong>Visualisation de données WebGL</strong> : Graphiques
                  haute performance avec DeckGL et VisX, gestion fluide de +20k
                  points de données avec zoom/pan optimisés, tooltips
                  interactifs et système de sélection avancé
                </span>
              </li>
            </ul>
          </div>

          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-6">
            Refonte complète des applications <strong>ShowMe Events</strong>{' '}
            avec déploiements automatisés sur Cloudflare Pages et Vercel,
            amélioration significative des performances et de l'expérience
            utilisateur.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img
              src={cedrus.src}
              alt="Cedrus Solutions - Application SaaS avec visualisations WebGL"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md hover:shadow-lg transition-shadow"
            />
          </div>
        </div>
      ),
    },
    {
      title: '2024',
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Chef de projet en freelance chez ORPI. Mise en place de processus de
            gestion de projet incluant Jira, Confluence et Gitlab, tout en
            formant les équipes.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Création de Reciple, un jeu similaire à Wordle centré sur la
            nourriture, avec Svelte.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Développement de Remarqr, une solution SaaS conçue pour simplifier
            la gestion des annotations et améliorer la collaboration entre
            développeurs et parties prenantes métier.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={reciple.src}
              alt="Reciple - Jeu Wordle centré sur la nourriture"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src={remarqr.src}
              alt="Remarqr - Outil d'authentification avec Svelte Authkit"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
          </div>
        </div>
      ),
    },
    {
      title: '2023',
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Développeur Web Fullstack freelance chez Santevet. Contributions au
            développement de l'ERP et création de nouveaux microservices en
            Python et Go sur AWS.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Modernisation d'un projet PHP legacy pour AdopteUnePiece et création
            de plusieurs sites pour divers clients.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Création{' '}
            <a
              href="https://github.com/dasporal/svelte-authkit"
              className="text-orange-700 hover:underline hover:underline-offset-2">
              d'une librairie open-source
            </a>{' '}
            pour intégrer l'authentification via AuthKit de WorkOS dans des
            projets Svelte.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={santevet.src}
              alt="Santevet - ERP et microservices sur AWS"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src={thronocrigger.src}
              alt="Thronocrigger - Développement de site"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src={samuel.src}
              alt="Samuel Hebting - Site professionnel"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src={workos.src}
              alt="Svelte Authkit - Outil d'authentification"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
          </div>
        </div>
      ),
    },
    {
      title: '2022',
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Développeur Web Fullstack chez TEKSIAL. Amélioration des workflows
            en développant des applications Symfony et React.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Chef de projet pour le développement d'un Career-Center pour l'EFREI
            chez Scalian, permettant aux étudiants d'accéder à des ressources
            pour préparer leur futur professionnel.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={efrei.src}
              alt="EFREI - Développement d'un Career-Center"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src={petitponey.src}
              alt="Le Petit Poney Bar - Site web"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src={amsecurite.src}
              alt="Teksial - Amélioration des workflows avec Symfony et React"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src={teksial.src}
              alt="Teksial - Amélioration des workflows avec Symfony et React"
              width={500}
              height={500}
              className="rounded-lg object-contain px-8 h-20 md:h-44 lg:h-60 w-full shadow"
            />
          </div>
        </div>
      ),
    },
    {
      title: '2020',
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Développeur Web Fullstack chez Short-Edition. Développement de
            produits communautaires et gestion de l'architecture système avec
            AWS et Terraform.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Développement de projets pour Synexie, y compris le site du festival
            Bacchus et l'intranet de Saint-Tropez.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={shortedition.src}
              alt="Short-Edition - Produits communautaires"
              width={500}
              height={500}
              className="rounded-lg object-contain px-8 h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src={bacchus.src}
              alt="Festival Bacchus - Site web"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  )
}
