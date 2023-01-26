import Head from 'next/head';
import Link from 'next/link';
import BackToHome from '../../components/buttons/back-to-home';
import Layout from '../../components/layout/layout';

export default function FirstPost() {
  return (
    <Layout>
        <Head>
            <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        
        <BackToHome />
    </Layout>
  );
}