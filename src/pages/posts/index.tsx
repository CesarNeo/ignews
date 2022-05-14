import Head from 'next/head'
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
