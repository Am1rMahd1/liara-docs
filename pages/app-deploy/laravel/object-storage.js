import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Notice from "../../../components/Notice";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>
        مستندات اتصال به ذخیره‌سازی ابری در برنامه‌های Laravel - سرویس ابری
        لیارا
      </title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="laravel" />
      <div className="page-title">
        <h1>پلتفرم Laravel</h1>
        <span className="page-description">(Laravel Platform)</span>
      </div>
    </div>

    <h3>اتصال به ذخیره‌سازی ابری</h3>

    <p>
      بدون شک اتصال برنامه به یک{" "}
      <Link href="/buckets/about">ذخیره‌سازی ابری</Link> مطمئن برای نگهداری و
      ارائه فایل‌های استاتیک وب‌سایت یا داده‌های آپلود شده توسط کاربران، باعث
      اطمینان خاطر صاحبان کسب و کار و بهبود عملکرد برنامه‌ می‌شود.
    </p>

    <h4>فهرست عناوین:</h4>
    <ul className="mt-0">
      <li>
        <a href="#install-s3-driver">نصب Amazon S3 Driver</a>
      </li>
      <li>
        <a href="#set-keys">تنظیم کلیدها</a>
      </li>
      <li>
        <a href="#filesystem-config">پیکربندی FileSystem</a>
      </li>
      <li>
        <a href="#set-env-variable">تنظیم مشخصات ذخیره‌سازی ابری</a>
      </li>
      <li>
        <a href="#how-to-use">نحوه استفاده</a>
      </li>
      <li>
        <a href="#retrieving-files">بازیابی فایل‌ها توسط Amazon S3 Driver</a>
      </li>
      <li>
        <a href="#download-files">دانلود فایل‌ توسط Amazon S3 Driver</a>
      </li>
      <li>
        <a href="#list-files">
          دریافت لیست فایل‌‌های آپلود شده توسط Amazon S3 Driver
        </a>
      </li>
      <li>
        <a href="#remove-files">حذف فایل توسط Amazon S3 Driver</a>
      </li>
      <li>
        <a href="#upload-files">آپلود فایل توسط Amazon S3 Driver</a>
      </li>
    </ul>

    <h3 id="install-s3-driver">نصب Amazon S3 Driver</h3>
    <p>
      ذخیره‌سازی ابری لیارا یک Object Storage است که ساختار آن توسط کمپانی
      آمازون طراحی شده و S3 نام دارد بنابراین در برنامه‌ی Laravel خود به یک
      Driver برای ارتباط با ذخیره‌سازی ابری نیاز خواهید داشت که با اجرای دستور
      زیر نصب خواهد شد:
    </p>
    <Highlight className="shell">
      {`composer require league/flysystem-aws-s3-v3 "^3.0"`}
    </Highlight>

    <h3 id="set-keys">تنظیم کلیدها</h3>
    <p>
      اگر باکت شما خصوصی باشد، برای دسترسی به باکت، نیاز به کلید دسترسی دارید.
      برای ساخت کلید، به صفحه ذخیره‌سازی ابری بروید و طبق عکس‌ها کلید خود را
      بسازید.
    </p>
    <p>به قسمت کلیدها رفته:</p>
    <ZoomableImage src="/static/flask/get_key1.png" />
    <p>یک کلید جدید بسازید.</p>
    <ZoomableImage src="/static/flask/get_key2.png" />
    <p>
      کلید های ساخته شده را کپی کنید. توجه داشته باشید که SECRET_KEY تنها یک بار
      نمایش داده می‌شود و پس از آن باید کلید را درجایی مطمئن ذخیره کنید.
    </p>
    <ZoomableImage src="/static/flask/get_key3.png" />

    <h3 id="filesystem-config">پیکربندی FileSystem</h3>
    <p>
      در مرحله‌ی بعد باید یک FileSystem Driver جدید را به فایل پیکربندی مربوطه
      در مسیر <span className="code">config/filesystems.php</span> اضافه کنید:
    </p>
    <Highlight className="php">
      {`'liara' => [
    'driver' => 's3',
    'endpoint' => env('ENDPOINT_URL'),
    'key' => env('ACCESS_KEY'),
    'secret' => env('SECRET_KEY'),
    'region' => env('DEFAULT_REGION'),
    'bucket' => env('BUCKET_NAME'),
],`}
    </Highlight>

    <h3 id="set-env-variable">تنظیم مشخصات ذخیره‌سازی ابری</h3>

    <h4>در لوکال</h4>
    <p>
      درنهایت باید متغیرهای تنظیم شده در فایل{" "}
      <span className="code">config/filesystems.php</span> را به‌منظور امنیت و
      کنترل راحت‌تر مقادیر، در فایل <span className="code">.env</span> مقدار دهی
      کنید:
    </p>
    <Highlight className="env">
      {`ENDPOINT_URL=https://storage.iran.liara.space
ACCESS_KEY=<Access Key>
SECRET_KEY=<Secret Key>
BUCKET_NAME=<Bucket Name>
DEFAULT_REGION=us-east-1`}
    </Highlight>

    <h4>در لیارا</h4>

    <p>
      برای تنظیم مشخصات ذخیره‌سازی ابری در برنامه‌ی Laravel خود باید وارد
      تنظیمات برنامه شده و در بخش{" "}
      <Link href="/app-features/environment-variables">متغیرها</Link> با کلیک
      کردن بر روی دکمه‌ی افزودن متغیر، مشخصات ذخیره‌سازی ابری را وارد کنید.
    </p>

    <Notice variant="warning">
      توجه داشته باشید که فایل <span className="code">.env</span> پروژه‌ی لوکال
      شما بر روی برنامه‌ی تهیه شده مستقر نخواهد شد.
    </Notice>

    <h3 id="how-to-use">نحوه استفاده</h3>

    <Notice variant="warning">
      توجه داشته باشید همه مسیر‌های فایل، باید نسبت به روت باکت مشخص شوند.
    </Notice>

    <p>
      می‌توان گفت که تغییر خاصی در نحوه‌ی استفاده‌ی شما به‌وجود نخواهد آمد. برای
      مثال شما می‌توانید با استفاده از قطعه کد زیر، محتوای{" "}
      <span className="code">Contents</span> را در فایلی با نام{" "}
      <span className="code">example.txt</span> قرار داده و آن را در فضای
      ذخیره‌سازی ابری خود ذخیره کنید:
    </p>
    <Highlight className="php">
      {`use Illuminate\\Support\\Facades\\Storage;

Storage::disk('liara')->put('example.txt', 'Contents');`}
    </Highlight>

    <h3 id="retrieving-files">بازیابی فایل‌ها توسط Amazon S3 Driver</h3>
    <p>نمونه کد برای بازیابی فایل‌ها:</p>

    <br />

    <Highlight className="php">
      {`use Illuminate\\Support\\Facades\\Storage;

$contents = Storage::get('file.jpg');`}
    </Highlight>

    <p>
      اگر فایلی دارید که محتوای آن JSON باشد ، می‌توانید با متد{" "}
      <span className="code">json</span> آن‌ها را بازیابی کنید:
    </p>
    <Highlight className="php">
      {`use Illuminate\\Support\\Facades\\Storage;

$orders = Storage::json('orders.json');`}
    </Highlight>

    <h3 id="download-files">دانلود فایل‌ توسط Amazon S3 Driver</h3>
    <p>نمونه کد برای دانلود فایل:</p>
    <Highlight className="php">
      {`use Illuminate\\Support\\Facades\\Storage;

return Storage::download('file.jpg');`}
    </Highlight>

    <h3 id="list-files">
      دریافت لیست فایل‌‌های آپلود شده توسط Amazon S3 Driver
    </h3>
    <p>نمونه کد برای دریافت لیست فایل‌های آپلود شده:</p>
    <Highlight className="php">
      {`use Illuminate\\Support\\Facades\\Storage;

$files = Storage::files($directory);

$files = Storage::allFiles($directory);`}
    </Highlight>

    <h3 id="remove-files">حذف فایل توسط Amazon S3 Driver</h3>
    <p>نمونه کد برای حذف فایل‌های آپلود شده:</p>
    <Highlight className="php">
      {`use Illuminate\\Support\\Facades\\Storage;

Storage::disk('liara')->delete('path/file.jpg');

// Or you can use:
Storage::delete('file.jpg');

Storage::delete(['file.jpg', 'file2.jpg']);`}
    </Highlight>

    <h3 id="upload-files">آپلود فایل توسط Amazon S3 Driver</h3>
    <p>نمونه کد برای آپلود فایل:</p>
    <Highlight className="php">
      {`<?php

namespace App\\Http\\Controllers;
  
use Illuminate\\Support\\Facades\\Storage;
use App\\Http\\Controllers\\Controller;
use Illuminate\\Http\Request;
  
class UserAvatarController extends Controller
  {
      /**
      * Update the avatar for the user.
      */
      public function update(Request $request): string
      {
        $path = Storage::putFile('avatars', $request->file('avatar'));
  
          return $path;
      }
}`}
    </Highlight>

    <br />

    <p>
      شما می‌توانید برای کسب اطلاعات بیشتر،{" "}
      <a
        href="https://laravel.com/docs/10.x/filesystem"
        rel="noopener noreferrer"
        target="_blank"
      >
        مثال‌ها و مستندات این پکیج
      </a>{" "}
      را مطالعه کنید.
    </p>

    <br />

    <Link href="/app-deploy/laravel/soketi" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
