import MdLesson from '../../../components/MdLesson/MdLesson'
import WhatIsReact_md from '../../../markdown/react/WhatIsReact_md'

export default function WhatIsReact() {
  return (
    <MdLesson
      title="What is React?"
      source={ WhatIsReact_md }
      prevLesson=""
      prevLink=""
      nextLesson="Getting started"
      nextLink="/tutorials/react/getting-started"
    />
  )
}