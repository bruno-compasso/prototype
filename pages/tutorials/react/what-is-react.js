import Head from 'next/head'
import Layout from '../../../components/layout/layout'
import ReactMarkdown from 'react-markdown'
import CodeBlock from '../../../markdown/code-renderer'
import sampleCode from '../../../markdown/react/code'

export default function WhatIsReact() {
  return (
    <Layout>
      <Head>
        <title>What is React?</title>
      </Head>
      <div className="markdownPage">
        <ReactMarkdown
          source={sampleCode}
          renderers={{ code: CodeBlock }}
        />
      </div>
    </Layout>
  )
}