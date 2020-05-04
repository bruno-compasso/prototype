import Head from 'next/head';
import Layout from '../components/layout';

export default function Publisher() {
  return (
    <Layout>
      <Head>
        <title>Publisher</title>
      </Head>
      <div className="submit-data">
        <input type="text" placeholder="type something" />
        <button>Submit</button>
      </div>
      <style jsx>{`
        input {
          border: none;
          background: #fff;
          padding: 15px;
          outline: none;
        }

        button {
          border: none;
          padding: 15px 20px;
          background: #000;
          color: #fff;
          transition: .15s;
        }

        button:hover {
          cursor: pointer;
          background: #222;
          transition: .15s;
        }

        .submit-data {
          box-shadow: 0 0 30px rgba(0,0,0,.25);
          display: inline-block;
        }
      `}</style>
    </Layout>
  )
}