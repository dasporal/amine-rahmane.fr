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

export default function TimelineDataEn() {
  const data = [
    {
      title: '2024',
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Freelance project manager at ORPI. Set up project management
            processes including Jira, Confluence, and Gitlab, while training
            teams.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Created Reciple, a Wordle-like game focused on food, using Svelte.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Developed Remarqr, a SaaS solution designed to simplify annotation
            management and improve collaboration between developers and business
            stakeholders.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={reciple.src}
              alt="Reciple - Wordle-like food game"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src={remarqr.src}
              alt="Remarqr - Authentication tool with Svelte Authkit"
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
            Fullstack Web Developer freelance at Santevet. Contributed to ERP
            development and created new microservices in Python and Go on AWS.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Modernized a legacy PHP project for AdopteUnePiece and created
            several websites for various clients.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={santevet.src}
              alt="Santevet - ERP and microservices on AWS"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src={thronocrigger.src}
              alt="Thronocrigger - Website development"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src={samuel.src}
              alt="Samuel Hebting - Professional website"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src={workos.src}
              alt="Svelte Authkit - Authentication tool"
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
            Fullstack Web Developer at TEKSIAL. Improved workflows by developing
            applications using Symfony and React.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Project manager for the development of a Career Center for EFREI at
            Scalian, helping students access resources to prepare for their
            professional future.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={efrei.src}
              alt="EFREI - Career Center development"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src={petitponey.src}
              alt="Le Petit Poney Bar - Website"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src={amsecurite.src}
              alt="Teksial - Workflow improvements with Symfony and React"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src={teksial.src}
              alt="Teksial - Workflow improvements with Symfony and React"
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
            Fullstack Web Developer at Short-Edition. Developed community
            products and managed system architecture with AWS and Terraform.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Developed projects for Synexie, including the Bacchus Festival
            website and the intranet of Saint-Tropez.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={shortedition.src}
              alt="Short-Edition - Community products"
              width={500}
              height={500}
              className="rounded-lg object-contain px-8 h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src={bacchus.src}
              alt="Bacchus Festival - Website"
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
