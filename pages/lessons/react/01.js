import Head from 'next/head'
import Layout from '../../../components/layout/layout'
import ReactMarkdown from 'react-markdown'
import CodeBlock from '../../../markdown/code-renderer'
import sampleCode from '../../../markdown/react/code'

export default function _01() {
  return (
    <Layout>
      <Head>
        <title>What is React?</title>
      </Head>
      <div>
        <ReactMarkdown
          source={sampleCode}
          renderers={{ code: CodeBlock }}
        />
      </div>
    </Layout>
  )
}