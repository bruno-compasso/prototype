import Head from 'next/head'
import Layout from '../../../components/layout/layout'
import ReactMarkdown from 'react-markdown'
import codeRenderer from './code-renderer'
import sampleCode from './code'

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