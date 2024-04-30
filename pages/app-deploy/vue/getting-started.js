import Head from "next/head";
import Link from "next/link";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات شروع به کار برنامه‌های Vue - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="vue" />
      <div className="page-title">
        <h1>پلتفرم VueJS</h1>
        <span className="page-description">(VueJS Platform)</span>
      </div>
    </div>

    <h3>🚀 شروع به کار</h3>

    <p>
      شما می‌توانید در سریع‌ترین زمان ممکن یک برنامه Vue را با استفاده از ابزار{" "}
      <Link href="/app-deploy/vue/browser">مرورگر</Link>، بر روی سرویس ابری
      لیارا مستقر کنید. البته درصورتی که استفاده از Terminal را ترجیح می‌دهید یا
      تصمیم داشته باشید با <Link href="/cicd/about">راه‌اندازی CI/CD</Link>،
      مسئولیت استقرار برنامه‌ی خود را به سرویس{" "}
      <Link href="/cicd/github">GitHub</Link> و یا{" "}
      <Link href="/cicd/gitlab">GitLab</Link> بسپارید، امکان استفاده از ابزار{" "}
      <Link href="/app-deploy/vue/cli">Liara CLI</Link> وجود دارد. در ادامه در
      هر گام، با یک ویژگی هاست ابری Vue لیارا آشنا خواهید شد و می‌توانید از
      آن‌ها در برنامه‌ی‌تان استفاده کنید.
    </p>

    <div className="platforms">
      <Link href="/instructions/nuxtjs">
        <PlatformIcon platform="nuxt" />
        <span>NuxtJS</span>
      </Link>
    </div>

    <br />

    <Link href="/app-deploy/vue/browser" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
