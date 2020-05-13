import gettingStarted_md from '../../../markdown/react/gettingStarted_md.js'
import MdLesson from '../../../components/MdLesson/MdLesson'

export default function gettingStarted() {

  return (
    <MdLesson
      title="Getting started"
      source={gettingStarted_md}
      prevLesson="What is React?"
      prevLink="/tutorials/react/what-is-react"
      nextLesson="???"
      nextLink=""
    />
  )
}