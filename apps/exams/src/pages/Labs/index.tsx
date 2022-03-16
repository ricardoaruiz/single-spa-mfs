import { TemplatePage } from '../Template'
import { sum } from '@soma/utility'
export const LabsPage = () => {

  const handleSumClick = () => {
    const total = sum(2, 2)
    console.log(`The total is ${total}`)
  }

  return (
    <TemplatePage title="Labs Page">
      <p>This is the Labs Page</p>
      <button type="button" onClick={handleSumClick} >Sum 2 + 2</button>
    </TemplatePage>
  )
}