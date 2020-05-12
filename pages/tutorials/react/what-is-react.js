import Head from 'next/head'
import Layout from '../../../components/layout/layout'
import ReactMarkdown from 'react-markdown'
import CodeBlock from '../../../markdown/code-renderer'
import WhatIsReact_md from '../../../markdown/react/WhatIsReact_md'

export default function WhatIsReact() {
  return (
    <Layout>
      <Head>
        <title>What is React?</title>
      </Head>
      <div className="markdownPage">
        <ReactMarkdown
          source={ WhatIsReact_md }
          renderers={{ code: CodeBlock }}
        />
      </div>
    </Layout>
  )
}