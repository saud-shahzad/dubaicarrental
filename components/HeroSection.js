// components/HeroSection.js
export default function HeroSection() {
  return (
    <section className="w-full px-3 sm:px-6 relative bg-black text-white">
      <div className="relative py-16 sm:py-24 mx-auto max-w-7xl text-center rounded-box overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://cdn.sanity.io/images/gsalsa2t/production/ad2949807a385f86231fe318b780cba2179c3f76-1600x900.jpg')",
          }}
        ></div>

        {/* Text Content */}
        <div className="relative z-10 w-10/12 mx-auto">
          <h1 className="text-4xl font-black sm:text-6xl leading-snug">
            تأجير السيارات في دبي: الدليل النهائي
          </h1>
          <div className="mx-auto mt-6 text-md sm:text-lg leading-relaxed max-w-prose">
            <p>
              دبي، جوهرة متلألئة في الإمارات العربية المتحدة، مدينة مرادفة للفخامة والابتكار والعظمة.
              مع ناطحات السحاب المذهلة ومراكز التسوق الفاخرة والحياة الليلية النابضة بالحياة، أصبحت دبي وجهة رئيسية للسياح والمسافرين بغرض الأعمال على حد سواء.
              واحدة من أفضل الطرق لاستكشاف هذه المدينة الديناميكية هي استئجار سيارة.
              سيقدم لك هذا الدليل الشامل كل المعلومات التي تحتاجها حول تأجير السيارات في دبي، بما في ذلك فوائده، عملية الاستئجار، وبعض النصائح الأساسية لضمان تجربة سلسة.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
