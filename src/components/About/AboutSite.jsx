import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const AboutSite = () => {
  const [openMore, setOpenMore] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <div
        className={`${!openMore ? "h-56" : "h-auto"}  overflow-hidden relative`}
      >
        <div className="container xl:max-w-[1100px] flex flex-col my-8 gap-4 items-start">
          <h1 className="text-xl md:text-2xl font-bold">
            وبسایت و اپلیکیشن خلاصه کتاب
          </h1>
          <p className="text-sm text-justify text-chekida-slate font-normal leading-6">
            چکیدا وبسایت و اپلیکیشن خلاصه کتاب ها هست. برای خیلی‌از ما که زمان،
            آرامش فکری یا حتی حوصله‌ی کتاب‌خوندن رو نداریم، خوندن خلاصه کتاب ها
            بهترین راهکار برای استفاده از مفاهیم غنی کتاب‌ها و رشد و توسعه فردی
            هست. وبسایت و اپلیکیشن چکیده کتاب چکیدا مثل یک رفیق کتاب‌باز،
            کتاب‌ها رو به جای تو مطالعه می‌کنه، نکات کلیدی و مهمشون رو استخراج
            می‌کنه و اون‌ها را در یک قالب خلاصه‌شده بهت ارائه میده تا توی
            مدت‌زمان کوتاهی بتونی از مفاهیم غنی کتاب‌ها مطلع بشی و از اون‌ها
            برای رشد و موفقیت در زندگی استفاده کنی. ویکتور هوگو جمله‌ی جالبی
            داره و میگه: «خوشبخت کسی‌ست که کتاب های خوب یا دوستان اهل کتاب داشته
            باشد.» چکیدا همون دوست اهل کتاب تو هست که سعی می‌کنه تا بینشت رو
            افزایش بده و تو رو در مسیر پیشرفت قرار بده؛ پس از الان که با چکیدا
            آشنا شدی، می‌تونی خودت رو جزو آدمای خوشبخت فرض کنی.
          </p>
          <p className="text-sm text-justify text-chekida-slate font-normal leading-6">
            نکته‌ی مهم درباره‌ی خلاصه کتاب های چکیدا اینه که تمام کتاب‌ها با لحن
            محاوره‌ای روایت میشن؛ درست همون لحنی که ما برای مکالمه‌ی روزمره ازش
            استفاده می‌کنیم. این اتفاق نه‌تنها باعث میشه تا محتوا رنگ‌و‌بوی
            جدیدی برای مخاطب داشته باشه و خیلی راحت‌تر باهاش ارتباط برقرار کنه،
            بلکه انتقال مفهوم رو هم ساده‌تر می‌کنه؛ بنابراین توی چکیدا حتی یک
            کتاب هم نمی‌تونی پیدا کنی که جملات سنگین و نامفهوم داشته باشه که این
            اتفاق باعث میشه تا ازطریق خلاصه کتاب بتونی مفاهیم کتاب‌های سنگین رو
            هم بخونی و متوجه بشی.
          </p>
          <h2 className="text-xl md:text-xl font-bold">
            <a>خلاصه کتاب های روانشناسی</a>
          </h2>
          <p className="text-sm text-justify text-chekida-slate font-normal leading-6">
            یکی از پرطرفدارترین موضوعات برای کتاب‌خوانی، موضوع روانشناسی هست.
            خوشبختانه چکیدا با آگاهی از این موضوع، سعی کرده تا بهترین کتاب های
            روانشناسی رو خلاصه کنه و نکات کلیدی اون‌ها رو در مدت‌زمانِ کوتاهی
            بهت ارائه کنه. نکته‌ی مهم درباره‌ی انتخاب‌های چکیدا اینه که تا جای
            ممکن سعی شده از روانشناسی زرد فاصله گرفته بشه و کتاب‌هایی انتخاب بشه
            که اولا حرف جدیدی رو ارائه میدن و ثانیا ارزش مطالعه‌ی بالایی دارن.
          </p>
          <h2 className="text-xl md:text-xl font-bold">
            <a>خلاصه کتاب های فلسفی</a>
          </h2>
          <p className="text-sm text-justify text-chekida-slate font-normal leading-6">
            وقتی به کتاب های فلسفی فکر می‌کنیم، عمدتا ذهنمون به‌سمت کتاب‌های
            قطور، سنگین و سخت‌فهمی میره که صرفا یه‌مشت خوره‌ی کتاب توانایی
            خوندنش رو دارن. البته این دیدگاه رو نمیشه غلط دونست، چون کتاب‌های
            فلسفی زیادی هستن که علیرغم ارائه‌ی محتوای قابل‌تأمل، صرفا به‌خاطر
            نوع ارائه در جلب نظر عموم مردم ناکام می‌مونن. به‌خاطر همین موضوع،
            یه‌عده باور دارن که فلسفه‌خوانی برای عمومِ مردم مناسب نیست؛ اما این
            نظریه درست نیست؛ چون‌که بینش کتاب های فلسفی و تغییری که این کتاب‌ها
            در نگرش ایجاد می‌کنن، چیزی نیست که بشه جای دیگه پیداشون کرد.
            خوشبختانه چکیدا با ارائه‌ی چکیده بهترین کتاب های فلسفی، سعی کرده تا
            این مفاهیم سنگین، اما مهم رو در ساده‌ترین شکلِ ممکن و خودمونی‌ترین
            لحن، ارائه بده؛ بنابراین دیگه بهونه‌ای برای دوری از کتاب های فلسفی
            وجود نداره.
          </p>
          <h2 className="text-xl md:text-xl font-bold">
            <a>خلاصه کتاب های انگیزشی و موفقیت</a>
          </h2>
          <p className="text-sm text-justify text-chekida-slate font-normal leading-6">
            مقوله‌ی موفقیت موضوع جذابی برای اکثر افراد هست؛ اما رسیدن به موفقیت
            بدون داشتن انگیزه‌ی صحیح امکان‌پذیر نیست. انگیزه مثل سوختی می‌مونه
            که موتور موفقیت رو به حرکت وامی‌داره. خوندن زندگینامه‌ی بزرگان مثل{" "}
            <a>زندگینامه استیو جابز</a> یا <a>داوینچی</a>
            و… یکی از راه‌های خوب برای رسیدن به این انگیزه هست. کتاب های انگیزشی
            و موفقیت به خواننده تفکر مثبت و درست رو یاد میدن. این کتاب‌ها نشون
            میدن که رسیدن به مقصدی که اکثر آدم‌ها در دستیابی بهش ناکام می‌مونن،
            نیازمند سبک و روش منحصربه‌فرد و متفاوتی هست که افراد کمی ازش پیروی
            می‌کنه. کتاب های انگیزشی و موفقیت بهت نشون میدن که انگشت‌نمابودن
            لزوما اتفاق بدی نیست و قدم‌گذاشتن در مسیرهای جدید که ثابت‌قدم‌ترین
            انسان‌ها رو هم به ترس می‌ندازه، تصمیم مهمی هست که باید از پسش
            بربیای. خوشبختانه چکیدا با چکیده کردن بهترین کتاب های انگیزشی و
            موفقیت بهت کمک می‌کنه تا ساده‌تر و سریع‌تر این طرز فکر رو بسازی و در
            مسیر موفقیت قدم بذاری.
          </p>
          <h2 className="text-xl md:text-xl font-bold">
            <a>خلاصه کتاب های تاریخی</a>
          </h2>
          <p className="text-sm text-justify text-chekida-slate font-normal leading-6">
            «ملتی که تاریخ نمی‌خونه، محکوم به تکرار تاریخ هست.» احتمالا این جمله
            حداقل یک‌بار به گوشِ‌ت خورده باشه. تاریخ پر از داستان‌های جذاب و
            عبرت‌آموزی هست که دونستنِ اون‌ها کمک به‌سزایی به ملت‌ها می‌کنه؛ اما
            متاسفانه افراد کمی به کتاب های تاریخ رغبت نشون میدن. مثلا چند درصد
            از جمعیت ایران می‌دونن که در طول حمله‌ی سپاه اعراب به ایران چه به سر
            ایرانی‌ها اومد یا مثلا چند درصد از افراد می‌دونن که جنگ جهانی اول
            روی شکل‌گیری خاورمیانه‌ی جدید و شکل‌گیری کشورهای امروزیِ این منطقه
            تاثیر گذاشت؟ چنددرصدمون از پادشاه دیوانه‌ی انگلیسی خبر دارن؟
            چنددرصدمون از نبوغ نظامی نادرشاه افشار اطلاعات دقیق دارن؟ چنددرصدمون
            درباره‌ی لشکرکشی آلمان نازی و نسل‌کشی یهودی‌ها اطلاع دقیق دارن؟ جواب
            همه‌ی اینا و هزاران سوالات دیگه، فقط و فقط در تاریخ نهفته شده که
            چکیدا با خلاصه کردن بهترین کتاب های تاریخی بهت کمک می‌کنه تا توی
            سریع‌ترین و مختصرترین حالتِ ممکن، به جواب همه‌ی این سوالات برسی و
            به‌نوبه‌ی خودت از تکرار اشتباهات تاریخی اجتناب کنی.
          </p>
          <h2 className="text-xl md:text-xl font-bold">
            <a>خلاصه کتاب های کسب و کار</a>
          </h2>
          <p className="text-sm text-justify text-chekida-slate font-normal leading-6">
            راه‌اندازی کسب و کار درکنار شجاعت، نیاز به دانش داره. به‌عنوان یک
            مدیر، باید درباره‌ی تیم‌‌سازی، مدیریت و رهبری، فرهنگ سازمانی،
            حسابرسی‌های مالی، مدیریت منابع، منابع انسانی و هزار و یک چیزِ دیگه،
            اطلاعات درستی داشته باشی. خوشبختانه چکیدا با خلاصه کردن بهترین کتاب
            های کسب و کار به تو کمک می‌کنه تا درباره‌ی همه‌ی این موارد و کلی
            موردِ دیگه، اطلاعات دقیقی رو از بهترین فعالان حوزه‌ی کسب و کار
            به‌دست بیاری و کسب و کار موفقِ خودت رو بسازی.
          </p>
          <h2 className="text-xl md:text-xl font-bold">
            <a>خلاصه کتاب های توسعه فردی</a>
          </h2>
          <p className="text-sm text-justify text-chekida-slate font-normal leading-6">
            رشد و توسعه‌ی مهارت‌های فردی یکی‌از مهم‌ترین عوامل موفقیتِ افراد
            هست. توی دنیای کنونی، برنده اون کسی هست که امروز نسبت‌به دیروز
            پیشرفت کرده باشه. اینکه بدونی چطور تمرکز بهتری داشته باشی، چطوری
            بهره‌وری بهتری داشته باشی، چطوری جلوی عادت‌های مخرب ایستادگی کنی،
            چطوری رفتارهای بهتری رو در خودت بسازی، چطوری اهمال‌کاری رو کنار
            بذاری و هزار و یک چطورِ دیگه رو بشناسی، بهت کمک می‌کنه تا روزبه‌روز
            پیشرفت کنی و هرروز بهترین عملکرد رو از خودت نشون بدی. خوشبختانه
            چکیدا با خلاصه کردن بهترین کتاب های توسعه فردی بهت کمک می‌کنه تا
            جوابِ این چطورها رو سریع‌تر پیدا کنی و راحت‌تر در مسیر پیشرفت قرار
            بگیری.
          </p>
          <h2 className="text-xl md:text-xl font-bold">
            خلاصه کتاب های مدیریت و رهبری
          </h2>
          <p className="text-sm text-justify text-chekida-slate font-normal leading-6">
            رئیس اون کسی هست که دستور میده، مدیر کسی هست که دستور میده و روند رو
            زیر نظر می‌گیره؛ اما رهبر کسی هست که دستور میده و خودش به‌عنوان
            اولین‌نفر، آستین‌ها رو برای انجام‌دادنِ کارها بالا می‌زنه. توی دنیا
            مدیران و رهبران الهام بخش بسیاری وجود داره که هرکدوم آموزه‌های خاص
            خودشون رو دارن. اگه کسب‌و‌کاری داری یا در شرف راه‌اندازی کسب‌و‌کار
            خودت هستی، خوندن کتاب های مدیریت و رهبری جزو واجباته. خوشبختانه
            چکیدا با خلاصه کردن بهترین کتاب های مدیریت و رهبری بهت کمک می‌کنه تا
            این آموزه‌ها رو راحت‌تر درک کنی.
          </p>
        </div>

        <span
          className="absolute block bottom-0 w-full h-16"
          style={
            !openMore
              ? {
                  background:
                    "linear-gradient(0deg,#f9fafb,hsla(210, 20%, 98% ,1),hsla(210, 20%, 98%,.75),hsla(210, 20%, 98%,.2))",
                }
              : { background: "none" }
          }
        ></span>
      </div>
      <div
        className={`flex cursor-pointer ${openMore && "mt-6"}`}
        onClick={() => setOpenMore(!openMore)}
        id="moreBlock"
      >
        <p className="text-sm font-semibold ml-2 ">
          {!openMore ? "بیشتر" : "بستن"}
        </p>
        <span>
          <FiChevronDown size={20} className={openMore && "rotate-180"} />
        </span>
      </div>
    </div>
  );
};

export default AboutSite;
