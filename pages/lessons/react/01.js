import Head from 'next/head'
import Layout from '../../../components/layout/layout'
import ReactMarkdown from 'react-markdown'
import codeRenderer from '../../../lessons/react/code-renderer'
import sampleCode from '../../../lessons/react/code'

export default function _01() {
  return (
    <Layout>
      <Head>
        <title>What is React?</title>
      </Head>
      <div>
        <ReactMarkdown
          source={sampleCode}
          renderers={{ code: codeRenderer }}
        />
      </div>
    </Layout>
  )
}