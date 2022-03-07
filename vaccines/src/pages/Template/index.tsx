import React from 'react'

import { TemplatePageProps } from './types'

import './styles.css'
export const TemplatePage: React.FC<TemplatePageProps> = ({ children, title }) => {
  return (
    <main className='template-page'>
      <h2>{title}</h2>
      {children}
    </main>
  )
}
