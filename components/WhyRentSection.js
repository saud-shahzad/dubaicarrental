// components/WhyRentSection.js
export default function WhyRentSection() {
  const cards = [
    {
      title: 'الراحة والمرونة',
      content: `دبي مدينة واسعة، وعلى الرغم من توفر وسائل النقل العام، إلا أنها قد لا تكون الخيار الأكثر راحة، خاصة للسياح. يمنحك استئجار سيارة المرونة لاستكشاف المدينة وفقًا لسرعتك الخاصة، دون التقيد بجداول الحافلات أو المترو. يمكنك بسهولة زيارة المعالم الشهيرة مثل برج خليفة، نخلة جميرا، ودبي مول، كما يمكنك الانطلاق إلى الوجهات القريبة مثل أبو ظبي والكثبان الرملية.`,
    },
    {
      title: 'توفير التكاليف',
      content: `على عكس ما يعتقده البعض، يمكن أن يكون استئجار سيارة في دبي موفرًا للتكاليف، خاصة للعائلات أو المجموعات. تكلفة العديد من رحلات التاكسي يمكن أن تتزايد بسرعة، مما يجعل استئجار السيارة خيارًا اقتصاديًا أكثر. بالإضافة إلى ذلك، تقدم العديد من شركات تأجير السيارات أسعارًا تنافسية وحزمًا متنوعة، مما يتيح لك اختيار ما يناسب ميزانيتك.`,
    },
    {
      title: 'الراحة',
      content: `نحن ندرك أن ليس الجميع خبراء في التكنولوجيا، ولهذا السبب تم تصميم منصاتنا لتكون سهلة الاستخدام. تجعل لوحات التحكم البديهية والتنقل البسيط من السهل على كل من المستخدمين التقنيين وغير التقنيين الاستفادة من قوة الذكاء الاصطناعي.`,
    },
  ];

  return (
    <section className="relative w-full px-3 py-16 sm:px-6 sm:py-24 text-center bg-white text-gray-900">
      <div className="relative mx-auto max-w-7xl">
        <h2 className="text-2xl font-black sm:text-4xl mb-12">لماذا تستأجر سيارة في دبي؟</h2>
        <div className="grid gap-8 justify-items-center md:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="card card-bordered w-full max-w-2xl flex-1 shadow-md border border-gray-200 rounded-lg p-6 text-right"
            >
              <h3 className="font-black text-xl sm:text-2xl mb-2">{card.title}</h3>
              <p className="text-sm sm:text-base leading-relaxed">{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
