import React from 'react'
import toast, { Toaster } from 'react-hot-toast'

export const ContactForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form: any = event.target
    const formData: any = new FormData(form)

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        form.reset()
        toast.success('Message envoyé.')
      })
      .catch((error) => toast.error(error))
  }

  return (
    <form
      name="contact"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      data-astro-reload>
      <input
        type="hidden"
        name="form-name"
        value="contact"
      />
      <p className="hidden">
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>
      <div className="flex w-full flex-col gap-4 lg:ml-6">
        <div className="flex w-full flex-col gap-4 lg:flex-row lg:gap-5">
          <div className="flex w-1/2 flex-grow flex-col lg:w-auto">
            <span className="w-full text-sm font-bold uppercase text-text">
              Prénom
            </span>
            <input
              className="prose mt-2 w-full max-w-none rounded-lg p-3 focus:outline-none focus:outline-accent"
              type="text"
              placeholder=""
              name="firstname"
              required
            />
          </div>
          <div className="flex w-1/2 flex-grow  flex-col lg:w-auto">
            <span className="w-full text-sm font-bold uppercase text-text">
              Nom
            </span>
            <input
              className="prose mt-2 w-full max-w-none rounded-lg p-3 focus:outline-none focus:outline-accent"
              type="text"
              placeholder=""
              name="surname"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="flex w-full flex-col">
            <span className="text-sm font-bold uppercase text-text">Email</span>
            <input
              className="prose mt-2 w-full max-w-none rounded-lg p-3 focus:outline-none focus:outline-accent"
              type="email"
              name="email"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex w-full flex-col">
            <span className="text-sm font-bold uppercase text-text">
              Message
            </span>
            <textarea
              className="prose mt-2 w-full max-w-none rounded-lg p-3 focus:outline-none focus:outline-accent"
              rows={10}
              name="message"
              required></textarea>
          </div>
        </div>
        <div className="w-1/4 self-end">
          <button
            className="focus:shadow-outline w-full rounded-lg bg-accent p-3 text-sm font-bold uppercase tracking-wide text-gray-100 focus:outline-none"
            id="submit"
            type="submit">
            Envoyer
          </button>
        </div>
        <Toaster />
      </div>
    </form>
  )
}
