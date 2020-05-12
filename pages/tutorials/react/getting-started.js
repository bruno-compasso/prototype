import Head from 'next/head'
import Layout from '../../../components/layout/layout'
import ReactMarkdown from 'react-markdown/with-html'
import CodeBlock from '../../../markdown/code-renderer'
import gettingStarted_md from '../../../markdown/react/gettingStarted_md.js'
import Link from 'next/link'

export default function gettingStarted() {

  return (
    <Layout>
      <Head>
        <title>Getting started</title>
      </Head>
      <div className="markdownPage">
        <ReactMarkdown
          escapeHtml={false}
          source={ gettingStarted_md }
          renderers={{ code: CodeBlock }}
        />
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '50px'
        }}>
          <span>
            <span style={{ display: 'block' }}>←</span>
            Previous lesson
            <Link href="/tutorials/react/what-is-react">
              <a style={{ display: 'block', fontSize: '16px' }}>
                What is React?
              </a>
            </Link>
          </span>
          <span style={{ textAlign: 'right' }}>
            <span style={{ display: 'block' }}>→</span>
            Next lesson
            <Link href="">
              <a style={{ display: 'block', fontSize: '16px' }}>
                ???
              </a>
            </Link>
          </span>
        </div>
      </div>
    </Layout>
  )
}