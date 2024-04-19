import React, { useState } from "react"

export default function Form() {

  const [formData, setFormData] = useState(
    {
      firstName: "", 
      lastName: "", 
      mobile: "", 
      number: "", 
      email: "", 
      comment: "",
      checkbox: true,
      options: ""
    }
  )

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    }) 
  }

  function handleSubmit(event) {
    event.preventDefault()
  }

    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="./src/assets/logo.svg?color=teal&shade=600"
              alt="Your Company"
            /> 
            <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Aanvraagformulier
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex flex-row gap-3 justify-between">
                <div className="w-2/4">
                  <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                    Voornaam
                  </label>
                  <div className="mt-2">
                    <input
                      name="firstName"
                      type="text"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                      value={formData.firstName}
                    />
                  </div>
                </div>

                <div className="w-2/4">
                  <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                    Achternaam
                  </label>
                  <div className="mt-2">
                    <input
                      name="lastName"
                      type="text"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                      value={formData.lastName}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-3 justify-between">
                <div className="w-2/4">
                  <label htmlFor="mobile" className="block text-sm font-medium leading-6 text-gray-900">
                    Telefoonnummer
                  </label>
                  <div className="mt-2">
                    <input
                      name="mobile"
                      type="text"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                      value={formData.mobile}
                    />
                  </div>
                </div>

                <div className="w-2/4">
                  <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
                    Studentennummer
                  </label>
                  <div className="mt-2">
                    <input
                      name="number"
                      type="text"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                      value={formData.number}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  E-mailadres
                </label>
                <div className="mt-2">
                  <input
                    name="email"
                    type="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                    value={formData.email}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="options" className="block text-sm font-medium leading-6 text-gray-900">
                  Kies materiaal
                </label>
                <div className="mt-2">
                  <select
                    id="options"
                    name="options"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                    value={formData.options}
                  >
                    <option value="">-- selecteer materiaal --</option>
                    <option value="beebot">Beebot</option>
                    <option value="byor">BYOR</option>
                    <option value="greenscreen">Greenscreen</option>
                    <option value="ipad">iPad</option>
                    <option value="lego">Lego Essentials</option>
                    <option value="osmo">OSMO</option>
                    <option value="podcastset">Podcastset</option>
                  </select>
                </div>
              </div>
  
              <div>
                <label htmlFor="comment" className="block text-sm font-medium leading-6 text-gray-900">
                  Vraag of opmerking
                </label>
                <div className="mt-2">
                  <textarea
                    name="comment"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                    value={formData.comment}
                  />
                </div>
              </div>
              
              <div>
                <div className="mt-2 flex items-center gap-2 text-sm font-medium leading-6 text-gray-900">
                  <input
                    id="checkbox"
                    name="checkbox"
                    type="checkbox"
                    className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                    value={formData.checkbox}
                  /> Ik ga akkoord met de voorwaarden
                </div>
              </div>
  
              <div>
                <button
                  className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                >
                  Verstuur
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Contact opnemen?{' '}
              <a href="#" className="font-semibold leading-6 text-teal-600 hover:text-teal-500">
                uitleen.nijmegen@ixperium.nl
              </a>
            </p>
          </div>
        </div>
      </>
    )
  }
  