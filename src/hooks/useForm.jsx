import React from 'react'
import { useState } from 'react'

const useForm = (initialObj = {}) => {
  const [form, setForm] = useState(initialObj)
  const [errors, setErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const changed = ({ target }) => {
    const { name, value } = target
    setForm({ ...form, [name]: value })
  }

  return { form, changed }
}

export default useForm
