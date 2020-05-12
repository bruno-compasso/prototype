import Head from 'next/head'
import Layout from '../../../components/layout/layout'
import ReactMarkdown from 'react-markdown/with-html'
import CodeBlock from '../../../markdown/code-renderer'
import WhatIsReact_md from '../../../markdown/react/WhatIsReact_md'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function WhatIsReact() {

  return (
    <Layout>
      <Head>
        <title>What is React?</title>
      </Head>
      <div className="markdownPage">
        <ReactMarkdown
          escapeHtml={false}
          source={WhatIsReact_md}
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
            <a style={{ display: 'block', fontSize: '16px' }}>
              {/* none */}
            </a>
          </span>
          <span style={{ textAlign: 'right' }}>
            <span style={{ display: 'block' }}>→</span>
            Next lesson
            <Link href="/tutorials/react/getting-started">
              <a style={{ display: 'block', fontSize: '16px' }}>
                Getting started
              </a>
            </Link>
          </span>
        </div>
      </div>
    </Layout>
  )
}