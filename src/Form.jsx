

import { Input } from './components'
import { FormProvider, useForm } from 'react-hook-form'
import {
  name_validation,
  desc_validation,
  email_validation,
  num_validation,
  password_validation,
} from './utils/inputValidations'
import { useState } from 'react'
import { GrMail } from 'react-icons/gr'
import { BsFillCheckSquareFill } from 'react-icons/bs'

export const Form = () => {
  return (
    <div className="container mt-5 text-center">
      <div className="grid gap-5 md:grid-cols-2">
        <Input
          label="name"
          type="text"
          id="name"
          placeholder="type your name..."
        />
        <Input
          label="password"
          type="password"
          id="password"
          placeholder="type your password..."
        />
      </div>
    </div>
  )
}
