import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import Notice from "../../../components/Notice";
import PlatformIcon from "../../../components/PlatformIcon";

export default () => (
  <Layout>
    <Head>
      <title>مستندات استفاده از hooks در برنامه‌های Laravel - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="laravel" />
      <div className="page-title">
        <h1>پلتفرم Laravel</h1>
        <span className="page-description">(Laravel Platform)</span>
      </div>
    </div>

    <h3>Hookها</h3>

    <p>
      Hook در توسعه یک برنامه، تکنیکی است که به شما امکان می‌دهد تا رفتار
      پیش‌فرض فریم‌ورک یا سیستم برنامه خود را تغییر دهید یا بهبود بخشید. Hook به
      برنامه‌نویسان اجازه می‌دهد تا کدهای خود را در نقاط خاصی از اجرای یک برنامه
      وارد کنند و به این ترتیب تعامل بیشتری با برنامه داشته باشند.
    </p>

    <h3>استفاده از Hook در برنامه‌های Laravel</h3>
    <p>
      برای استفاده از Hookها در برنامه خود می‌توانید سه فایل زیر را در برنامه
      خود ایجاد کنید:
    </p>
    <ul>
      <li>
        <b>liara_pre_build.sh:</b> لیارا، دستورات درون این فایل را قبل از اجرای
        دستور npm run build، اجرا می‌کند.
      </li>

      <li>
        <b>liara_post_build.sh:</b> لیارا، دستورات درون این فایل را بعد از اجرای
        دستور npm run build، اجرا می‌کند.
      </li>
      <li>
        <b>liara_pre_start.sh:</b> لیارا، دستورات درون این فایل را قبل از اجرای
        برنامه، اجرا می‌کند.
      </li>
    </ul>

    <p>
      به عنوان مثال، می‌توانید در فایل{" "}
      <span className="code">liara_pre_start.sh</span> دستورات مربوط به
      migrations را بنویسید تا نیازی نباشد که پس از استقرار برنامه، آن را به
      صورت دستی در خط فرمان برنامه خود، اجرا کنید:
    </p>

    <Highlight className="sh">
      {`echo "Running pre-start script for Laravel..."

# run migrations
php artisan migrate --force

# other needed commands
# ...

echo "Pre-start script for Laravel finished."`}
    </Highlight>

    <Notice variant="warning">
      توجه داشته باشید که در{" "}
      <a href="/app-deploy/laravel/tips#php-version">
        نسخه‌های بدون آپدیت PHP{" "}
      </a>
      ، این قابلیت پشتیبانی نمی‌شود.
    </Notice>
    <br />
    <Link href="/app-deploy/laravel/object-storage" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
