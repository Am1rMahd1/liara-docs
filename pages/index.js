import Layout from '../components/Layout'

export default () => (
  <Layout>
    <h1>مستندات</h1>

    <p>
      <strong>خوش آمدید به لیارا! </strong>
      در این بخش، با خدمات لیارا آشنا می‌شوید.
    </p>

    <h3>ساب‌دامنه‌ی رایگان liara.run</h3>
    <p>
      برای مشاهده‌ی پروژه‌های‌تان، نیازی نیست که حتما یک دامنه داشته باشید.
      لیارا به صورت پیش‌فرض یک دامنه‌ی
      <span className="code">{'project-name.liara.run'}</span>
      به هر کدام از پروژه‌های شما اختصاص می‌دهد که از طریق آن می‌توانید به پروژه‌ی‌تان دسترسی پیدا کنید.
    </p>

    <h3>پشتیبانی از تکنولوژی‌های مختلف</h3>
    <p>
      دیگر دوران انحصار PHP گذشته است.
      <br />
      اگر شما هم آرزو می‌کردید که ای‌کاش سرویسی با راحتی و آسایش هاستینگ‌های
      PHP،
      اما قدرتمندتر و با امکانات بیشتر، برای زبان‌ها و تکنولوژی‌های مختلف داشتید
      قطعا لیارا همان سرویس است.
    </p>

    <h3>برای اولین‌بار، ارائه‌ی سرویس MongoDB</h3>
    <p>
      همه‌ی ما تعریف این غول جدید تکنولوژی را شنیده‌ایم.
      <br />
      اگر شما هم از طرفداران دیتابیس‌های
      NoSQL
      هستید، در لیارا می‌توانید فقط با چند کلیک ساده دیتابیس‌های مورد نظر خود را در لحظه تهیه کنید.
      <br />
      دنبال MySQL هستید؟ نگران نباشید. ما از MySQL هم پشتیبانی می‌کنیم.
    </p>

    <h3>سرویس ذخیره‌ی فایل ابری (Object Storage)</h3>
    <p>
      با توجه به حجم داده‌هایی که این روزها تولید می‌شود، ذخیره‌ی فایل‌ها و نگهداری از آن‌ها کار چندان ساده‌ای نیست.
      <br />
      لیارا سرویس ذخیره‌ی فایل ابری خود را با الهام از سرویس AWS S3 شرکت آمازون ارائه می‌دهد.
      <br />
      شما می‌توانید با نصب کردن
      <span className="code">SDK</span>
      های لیارا که برای NodeJS و Laravel و...
      در دسترس هستند، فایل‌های‌تان را به راحتی در فضای ابری ما ذخیره کنید.
    </p>
  </Layout>
)