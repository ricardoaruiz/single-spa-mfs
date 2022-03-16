import { TemplatePage } from '../Template'
import { sum } from '@soma/utility'

export const CovidPage = () => {

  const handleSumClick = () => {
    const total = sum(3, 3)
    console.log(`The total is ${total}`)
  }

  return (
    <TemplatePage title="Covid Page">
      <p>This is the Covid Page</p>
      <button type="button" onClick={handleSumClick} >Sum 3 + 3</button>
    </TemplatePage>
  )
}