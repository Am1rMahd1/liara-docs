import Layout from "../../../components/Layout";
import Head from "next/head";
import Link from "next/link";
import Notice from "../../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>مستندات شروع به کار برنامه‌های NodeJS - سرویس ابری لیارا</title>
    </Head>

    <div className="page-head">
      <img
        className="page-icon"
        src="/static/platformicons/nodejs.svg"
        alt="nodejs"
      />
      <div className="page-title">
        <h1>برنامه‌های NodeJS</h1>
        <span className="page-description">(NodeJS Apps)</span>
      </div>
    </div>

    <h3>🚀 شروع به کار</h3>
    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>
    <video
      src="https://files.liara.ir/liara/node.mp4"
      controls="controls"
      className="block w-full"
      width="100%"
    ></video>

    <p>
      در این بخش به شما کمک می‌کنیم که بتوانید در سریع‌ترین زمان ممکن، یک برنامه
      NodeJS را روی بستر ابری لیارا مستقر کنید. در هر گام، شما با یک ویژگی در
      لیارا آشنا می‌شوید و می‌توانید از آن‌ها در برنامه‌ی‌تان استفاده کنید.
    </p>

    <p>
      در حال حاضر، این نسخه‌ها از NodeJS در سرویس ابری لیارا پشتیبانی می‌شود:
    </p>
    
    <ul>
      <li>8</li>
      <li>10</li>
      <li>12</li>
      <li><b>14 (پیش‌فرض)</b></li>
      <li>16</li>
    </ul>

    <div className="platforms">
      <Link href="/instructions/nestjs">
        <a>
          <img src="/static/platformicons/nest.svg" alt="nestjs" />
          <span>NestJS</span>
        </a>
      </Link>
      <Link href="/instructions/nextjs">
        <a>
          <img src="/static/platformicons/next.svg" alt="nextjs" />
          <span>NextJS</span>
        </a>
      </Link>
      <Link href="/instructions/nuxtjs">
        <a>
          <img src="/static/platformicons/nuxt.svg" alt="nuxtjs" />
          <span>NuxtJS</span>
        </a>
      </Link>
      <Link href="/instructions/strapi">
        <a>
          <img src="/static/platformicons/strapi.svg" alt="strapi" />
          <span>Strapi</span>
        </a>
      </Link>
    </div>

    <Notice variant="info">
      اگر قصد دارید نسخه‌ی پیش‌فرض NodeJS را تغییر دهید
      و یا در رابطه با نحوه‌ی استقرار فریم‌ورک AdonisJS
      بدانید، صفحه‌ی
      {' '}
      <Link href="/app-deploy/nodejs/tips">توضیحات و نکات تکمیلی</Link>
      {' '}
      را مطالعه بفرمایید.
    </Notice>

    <br />

    <Link href="/app-deploy/nodejs/deploy">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
