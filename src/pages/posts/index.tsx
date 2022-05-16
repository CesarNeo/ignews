import { GetStaticProps } from 'next'
import Head from 'next/head'
import Prismic from '@prismicio/client'

import { getPrismicClient } from '../../services/prismic'

import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>12 mawss tesaadd</time>
            <strong>dasdasd asd das asdasdsdas dasd asdsda</strong>
            <p>asdas dasdasdawfeafassh ggajihsgd aisyg ysdgao8siydg a vsdhaj</p>
          </a>

          <a href="">
            <time>12 mawss tesaadd</time>
            <strong>dasdasd asd das asdasdsdas dasd asdsda</strong>
            <p>asdas dasdasdawfeafassh ggajihsgd aisyg ysdgao8siydg a vsdhaj</p>
          </a>

          <a href="">
            <time>12 mawss tesaadd</time>
            <strong>dasdasd asd das asdasdsdas dasd asdsda</strong>
            <p>asdas dasdasdawfeafassh ggajihsgd aisyg ysdgao8siydg a vsdhaj</p>
          </a>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query(
    [Prismic.Predicates.at('document.type', 'publication')],
    {
      fetch: ['publication.title', 'publication.content'],
      pageSize: 100
    }
  )

  console.log(response)

  return {
    props: {}
  }
}
