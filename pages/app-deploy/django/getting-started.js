import Head from "next/head";
import Link from "next/link";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات شروع به کار برنامه‌های Django - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="django" />
      <div className="page-title">
        <h1>پلتفرم Django</h1>
        <span className="page-description">(Django Platform)</span>
      </div>
    </div>

    <h3>🚀 شروع به کار</h3>

    <p>
      شما می‌توانید در سریع‌ترین زمان ممکن یک برنامه Django را با استفاده از{" "}
      <Link href="/app-deploy/django/browser">مرورگر</Link>، بر روی لیارا مستقر
      کنید. البته درصورتی که استفاده از Terminal را ترجیح می‌دهید یا تصمیم داشته
      باشید با <Link href="/cicd/about">راه‌اندازی CI/CD</Link>، مسئولیت استقرار
      برنامه‌ی خود را به سرویس <Link href="/cicd/github">GitHub</Link> و یا{" "}
      <Link href="/cicd/gitlab">GitLab</Link> بسپرید، امکان استفاده از ابزار{" "}
      <Link href="/app-deploy/django/cli">Liara CLI</Link> وجود دارد. در ادامه
      در هر گام، با یک ویژگی هاست ابری Django لیارا آشنا خواهید شد و می‌توانید
      از آن‌ها در برنامه‌ی‌تان استفاده کنید.
    </p>

    <p>
      ما همراه شما هستیم. برای اینکه عملیات استقرار پروژه شما را بیش از پیش،
      ساده‌تر کنیم؛ آموزش صفر تا صد استقرار برنامه Django در لیارا را برای شما
      تهیه کرده‌ایم: در این دوره آموزشی، تمامی مراحل لازم برای استقرار و اجرای
      یک برنامه، قدم به قدم توضیح داده شده است. برای مشاهده آموزش کلیک کنید:{" "}
      <a href="/tv/courses/django">
        صفر تا صد استقرار برنامه‌های Django در لیارا
      </a>
    </p>

    <p>
      در حال حاضر، این نسخه‌ها از Python در هاست ابری Django لیارا پشتیبانی
      می‌شود:
    </p>

    <ul>
      <li>3.7</li>
      <li>3.8</li>
      <li>3.9</li>
      <li>
        <b>3.10 (پیش‌فرض)</b>
      </li>
      <li>3.11</li>
      <li>3.12</li>
    </ul>

    <Notice variant="info">
      اگر قصد دارید نسخه‌ی پیش‌فرض Python را تغییر دهید می‌توانید مستندات{" "}
      <Link href="/app-deploy/django/tips#python-version">
        انتخاب نسخه‌ی Python
      </Link>{" "}
      را در توضیحات و نکات تکمیلی این پلتفرم مطالعه بفرمایید.
    </Notice>

    <br />

    <Link href="/app-deploy/django/browser" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
