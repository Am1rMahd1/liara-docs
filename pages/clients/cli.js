import Layout from '../../components/Layout'

export default () => (
  <Layout>
    <h1>رابط خط فرمان (CLI)</h1>

    <p>
      رابط خط فرمان و یا همان CLI لیارا، این امکان را به شما می‌دهد که فقط با چند دستور ساده، اپلیکیشن خود را در بستر ابری ما مستقر کنید.
      اگر با محیط خط فرمان و ترمینال آشنایی ندارید، نگران نباشید. دستوراتی که برای کار با لیارا نیاز خواهید داشت، بسیار مختصر و کوتاه هستند و نیاز به دانش عمیقی ندارند.
    </p>
    
    <h3>نصب و راه‌اندازی</h3>
    <p>
      برای نصب، NodeJS و npm باید در کامپیوتر شما نصب شده‌باشند. پیشنهاد ما نسخه‌ی ۸ به بعد NodeJS است.
      <br/>
      برای دانلود و نصب NodeJS می‌توانید از لینک مقابل استفاده کنید:
      {' '}
      <a href="https://nodejs.org/en/">وب‌سایت رسمی NodeJS</a>
    </p>
    <p>
      بعد از نصب NodeJS، با استفاده از دستور زیر، CLI بر روی کامپیوتر شما نصب می‌گردد:
    </p>
    <pre>
      <code>
        npm install -g @liara/cli
      </code>
    </pre>
    <h3>ورود به حساب کاربری</h3>
    <p>
      برای این‌که بتوانید از CLI استفاده کنید، لازم است که در ابتدا، با استفاده از اطلاعات حساب کاربری‌تان در لیارا، وارد شوید:
    </p>
    <pre>
      <code>
        liara login
      </code>
    </pre>
    <p>
      بعد از وارد کردن دستور بالا، باید ایمیل و رمز عبور کاربری که با آن در لیارا ثبت نام کرده‌اید را وارد کنید.
      <br/>
      اگر اطلاعات صحیح باشند، با موفقیت وارد خواهید شد و CLI قابل استفاده خواهد بود.
      <br/>
      اگر هنوز ثبت نام نکرده‌اید، می‌توانید از لینک رو به رو اقدام کنید:
      {' '}
      <a href="https://console.liara.ir/register">ثبت نام در لیارا</a>
    </p>
    <h3>فایل liara.json</h3>
    <p>
      برای این‌که CLI بتواند پروژه‌ی شما را با موفقیت در بستر لیارا مستقر کند، نیاز دارد که اطلاعاتی از پروژه‌ی‌تان داشته‌باشد.
      شما می‌توانید با ایجاد یک فایل با نام <span className="code">liara.json</span> این اطلاعات را در اختیار CLI قرار بدهید.
    </p>
    <h3>نمونه‌ای از فایل liara.json:</h3>
    <pre>
      <code>
{`{
  "platform": "node",
  "port": 3000
}`}
      </code>
    </pre>
    <p>
      در این نمونه، فرض شده‌است که پروژه با NodeJS نوشته شده‌است.
      به همین دلیل، برای اجرای این پروژه نیاز به پلتفرم
      <span className="code">node</span>
      وجود دارد.
      در حال حاظر، پلتفرم‌های زیر قابل استفاده هستند:
    </p>
    <div className="ltr">
      <ul>
        <li>node</li>
        <li>laravel</li>
        <li>static</li>
        <li>docker</li>
      </ul>
    </div>
    <p>
      برای هر پلتفرم، تنظیمات جداگانه‌ای وجود دارد که در بخش مربوط به هر کدام، می‌توانید مشاهده کنید.
    </p>
  </Layout>
)