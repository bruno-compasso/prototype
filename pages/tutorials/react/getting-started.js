import Head from 'next/head'
import Layout from '../../../components/layout/layout'
import ReactMarkdown from 'react-markdown'
import CodeBlock from '../../../markdown/code-renderer'
import gettingStarted_md from '../../../markdown/react/gettingStarted_md'

export default function gettingStarted() {
  return (
    <Layout>
      <Head>
        <title>Getting started</title>
      </Head>
      <div className="markdownPage">
        <ReactMarkdown
          source={ gettingStarted_md }
          renderers={{ code: CodeBlock }}
        />
      </div>
    </Layout>
  )
}