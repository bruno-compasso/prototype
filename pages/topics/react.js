import Head from 'next/head';
import Layout from '../../components/layout/layout';
import Card from '../../components/card/card'

export default function Publisher() {

  return (
    <Layout home>
      <Head>
        <title>React</title>
      </Head>
      <div className="cardContainer">
        <Card link="../lessons/react/01" name="What is React?" />
        <Card link="/topics/javascriptesplus" name="What's JSX" />
        <Card link="/topics/angular" name="???" />
        <Card link="/topics/graphql" name="Hooks?" />
      </div>
      <style jsx>{`
      .cardContainer {
          display: inline-grid;
          grid-template-columns: repeat(4, 1fr);
          width: 100%;
          grid-column-gap: 5px;
          min-height: 250px;
        }  
      `}</style>
    </Layout>
  )
}