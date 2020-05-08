import Head from 'next/head';
import Layout from '../../components/layout/layout';
import Card from '../../components/card/card'

export default function Publisher() {

  return (
    <Layout>
      <Head>
        <title>React</title>
      </Head>
      <div className="cardContainer">
        <Card link="/tutorials/react/_01" as="/tutorials/react/what-is-react" name="What is React?" />
        <Card link="/topics/javascriptesplus" name="What's JSX" />
        <Card link="/topics/angular" name="???" />
        <Card link="/topics/graphql" name="Hooks?" />

        <Card link="../lessons/react/_01" name="What is React?" />
        <Card link="/topics/javascriptesplus" name="What's JSX" />
        <Card link="/topics/angular" name="???" />
        <Card link="/topics/graphql" name="Hooks?" />

        <Card link="../lessons/react/_01" name="What is React?" />
        <Card link="/topics/javascriptesplus" name="What's JSX" />
        <Card link="/topics/angular" name="???" />
        <Card link="/topics/graphql" name="Hooks?" />
      </div>
    </Layout>
  )
}