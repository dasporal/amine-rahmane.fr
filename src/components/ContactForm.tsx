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
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>
      <div className="flex flex-col w-full lg:ml-6 gap-4">
        <div className="flex flex-col w-full gap-4 lg:flex-row lg:gap-5">
          <div className="flex flex-col w-1/2 flex-grow lg:w-auto">
            <span className="w-full uppercase text-sm text-text font-bold">
              Prénom
            </span>
            <input
              className="w-full mt-2 p-3 rounded-lg prose max-w-none focus:outline-none focus:outline-accent"
              type="text"
              placeholder=""
              name="firstname"
              required
            />
          </div>
          <div className="flex flex-col w-1/2  flex-grow lg:w-auto">
            <span className="w-full uppercase text-sm text-text font-bold">
              Nom
            </span>
            <input
              className="w-full mt-2 p-3 rounded-lg prose max-w-none focus:outline-none focus:outline-accent"
              type="text"
              placeholder=""
              name="surname"
              required
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex flex-col w-full">
            <span className="uppercase text-sm text-text font-bold">Email</span>
            <input
              className="w-full mt-2 p-3 rounded-lg prose max-w-none focus:outline-none focus:outline-accent"
              type="email"
              name="email"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col w-full">
            <span className="uppercase text-sm text-text font-bold">
              Message
            </span>
            <textarea
              className="w-full mt-2 p-3 rounded-lg prose max-w-none focus:outline-none focus:outline-accent"
              rows={10}
              name="message"
              required
            ></textarea>
          </div>
        </div>
        <div className="w-1/4 self-end">
          <button
            className="uppercase text-sm font-bold tracking-wide bg-accent text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
            id="submit"
            type="submit"
          >
            Envoyer
          </button>
        </div>
        <Toaster />
      </div>
    </form>
  )
}
