import Layout from '../layout/layout'
import CodeBlock from '../../markdown/code-renderer'
import MarkdownFooter from '../MarkdownFooter/MarkdownFooter'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown/with-html'

export default function MdLesson(props) {
  return (
    <Layout>
      <Head>
        <title>{props.title}</title>
      </Head>
      <div className="markdownPage">
        <ReactMarkdown
          escapeHtml={false}
          source={props.source}
          renderers={{ code: CodeBlock }}
        />
        <MarkdownFooter
          prevLesson={props.prevLesson}
          prevLink={props.prevLink}
          nextLesson={props.nextLesson}
          nextLink={props.nextLink}
        />
      </div>
    </Layout>
  )
}