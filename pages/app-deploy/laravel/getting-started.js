import Link from "next/link";
import Head from "next/head";
import Layout from "../../../components/Layout";
import Notice from "../../../components/Notice";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات شروع به کار برنامه‌های Laravel - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="laravel" />
      <div className="page-title">
        <h1>پلتفرم Laravel</h1>
        <span className="page-description">(Laravel Platform)</span>
      </div>
    </div>

    <h3>🚀 شروع به کار</h3>
    <p>
      شما می‌توانید در سریع‌ترین زمان ممکن یک برنامه Laravel یا Lumen را با
      استفاده از <Link href="/app-deploy/laravel/browser">مرورگر</Link>، بر روی
      لیارا مستقر کنید. البته درصورتی که استفاده از Terminal را ترجیح می‌دهید یا
      تصمیم داشته باشید با <Link href="/cicd/about">راه‌اندازی CI/CD</Link>،
      مسئولیت استقرار برنامه‌ی خود را به سرویس{" "}
      <Link href="/cicd/github">GitHub</Link> و یا{" "}
      <Link href="/cicd/gitlab">GitLab</Link> بسپارید، امکان استفاده از ابزار{" "}
      <Link href="/app-deploy/laravel/cli">Liara CLI</Link> وجود دارد. در ادامه
      در هر گام، با یک ویژگی هاست ابری Laravel لیارا آشنا خواهید شد و می‌توانید
      از آن‌ها در برنامه‌ی‌تان استفاده کنید.
    </p>

    <p>
      ما همراه شما هستیم. برای اینکه عملیات استقرار پروژه شما را بیش از پیش،
      ساده‌تر کنیم؛ آموزش صفر تا صد استقرار برنامه Laravel در لیارا را برای شما
      تهیه کرده‌ایم: در این دوره آموزشی، تمامی مراحل لازم برای استقرار و اجرای
      یک برنامه، قدم به قدم توضیح داده شده است. برای مشاهده آموزش کلیک کنید:{" "}
      <a href="/tv/courses/laravel">
        صفر تا صد استقرار برنامه‌های Laravel در لیارا
      </a>
    </p>

    <p>در حال حاضر، این نسخه‌ها از Laravel و Lumen در لیارا پشتیبانی می‌شود:</p>

    <ul dir="ltr">
      <li>Laravel and Lumen 5.5.^</li>
      <li>Laravel and Lumen 6.^</li>
      <li>Laravel and Lumen 7.^</li>
      <li>Laravel and Lumen 8.^</li>
      <li>Laravel and Lumen 9.^</li>
      <li>Laravel and Lumen 10.^</li>
      <li>Laravel 11</li>
    </ul>

    <p>
      همچنین، این نسخه‌ها از PHP را هم پشتیبانی می‌کنیم:{" "}
      <Link href="/app-deploy/laravel/tips#php-version">
        (تغییر نسخه‌ی PHP)
      </Link>
    </p>

    <ul dir="ltr">
      <li>PHP 7.2 (بدون آپدیت)</li>
      <li>PHP 7.3 (بدون آپدیت)</li>
      <li>
        <b>PHP 7.4 (پیش‌فرض)</b>
      </li>
      <li>PHP 8.0</li>
      <li>PHP 8.1</li>
      <li>PHP 8.2</li>
      <li>PHP 8.3</li>
    </ul>

    <Notice variant="infor">
      در نظر داشته باشید که ionCube در PHP 8.3 پشتیبانی نمی‌شود.
    </Notice>

    <Notice variant="info">
      اگر قصد دارید تنظیمات پیش‌فرض php.ini را تغییر دهید و یا با Queue ها کار
      کنید صفحه‌ی{" "}
      <Link href="/app-deploy/laravel/tips">توضیحات و نکات تکمیلی</Link> را
      مطالعه بفرمایید.
    </Notice>

    <br />

    <Link href="/app-deploy/laravel/browser" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
