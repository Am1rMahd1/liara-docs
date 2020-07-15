import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";
import Notice from "../../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>Laravel سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>

    <div className="page-head">
      <img className="page-icon" src="/static/platformicons/laravel.svg" alt="laravel"/>
      <div className="page-title">
        <h1>برنامه‌های Laravel</h1>
        <span className="page-description">(Laravel Apps)</span>
      </div>
    </div>

    <h3>اتصال به دیتابیس‌ها</h3>
    <video
      width="730"
      src="https://files.liara.ir/liara/laravel-mysql.mp4"
      controls="controls"
      className="block w-full"
    ></video>
    <p>
      به‌ندرت پیش‌ می‌آید که در برنامه‌ای از دیتابیس استفاده نشده ‌باشد. اگر در
      برنامه Laravel ای‌‌تان از دیتابیس استفاده کرده‌اید می‌توانید به‌این‌صورت به
      آن متصل شوید.
    </p>
    <p>
      از هر دیتابیسی که لاراول پشتیبانی می‌کند می‌توانید استفاده کنید. صرفا کافیست که اطلاعات اتصال به دیتابیسی
      که ساخته‌اید را از بخش متغیرها برای برنامه‌ی‌تان تنظیم کنید. برای نمونه، در ادامه اطلاعات اتصال به یک
      دیتابیس MySQL را قرار داده‌ایم:
    </p>
    <Highlight className="config">
      {`DB_CONNECTION=mysql
DB_HOST=s11.liara.ir
DB_PORT=3306
DB_DATABASE=laravel-starter-db
DB_USERNAME=root
DB_PASSWORD=xxxxxxxxxxxx
`}
    </Highlight>
    <Notice variant="warning">
      توجه داشته باشید که اطلاعات بالا همگی صرفا برای نمونه وارد شده‌اند. شما باید متناسب با اطلاعات
      دیتابیس خودتان مقادیر را جایگذاری کنید.
    </Notice>
    <br />

    <Link href="/app-deploy/laravel/migrations">متوجه شدم، برو گام بعدی!</Link>
  </Layout>
);
