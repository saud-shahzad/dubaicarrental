// components/RentProcessSection.js
export default function RentProcessSection() {
  return (
    <section className="w-full px-3 py-16 sm:px-6 sm:py-24 bg-gray-50 text-gray-900 text-right">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-black mb-8">عملية تأجير السيارات في دبي</h2>

        <div className="space-y-10 text-base leading-relaxed">
          <div>
            <h3 className="text-xl font-bold mb-2">المتطلبات اللازمة لاستئجار سيارة</h3>
            <ul className="list-disc pr-5 space-y-2">
              <li>العمر: 21 سنة كحد أدنى. السيارات الفاخرة قد تتطلب عمرًا أكبر.</li>
              <li>رخصة القيادة: دولية أو مترجمة. بعض الجنسيات تحتاج رخصة إماراتية.</li>
              <li>بطاقة الائتمان: مطلوبة للوديعة والتأمين.</li>
              <li>جواز السفر والتأشيرة: مطلوبة للسياح.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">اختيار السيارة المناسبة</h3>
            <ul className="list-disc pr-5 space-y-2">
              <li>الغرض: مدينة؟ عائلة؟ رحلات؟ اختر وفقًا لاحتياجك.</li>
              <li>الميزانية: اقتصادية، متوسطة أو فاخرة.</li>
              <li>المزايا: GPS، مقعد طفل، تغطية إضافية.</li>
              <li>سياسة الوقود: ممتلئ مقابل ممتلئ أو رسوم.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">إجراءات الاستئجار</h3>
            <ul className="list-decimal pr-5 space-y-2">
              <li>الحجز المسبق عبر الإنترنت.</li>
              <li>تقديم الوثائق المطلوبة عند الاستلام.</li>
              <li>فحص السيارة وتوثيق أي ضرر.</li>
              <li>دفع الرسوم والوديعة بالبطاقة.</li>
              <li>إعادة السيارة بنفس الحالة وفي الوقت المحدد.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">نصائح مرورية</h3>
            <ul className="list-disc pr-5 space-y-2">
              <li>التزم بحدود السرعة – هناك كاميرات.</li>
              <li>لا توقف في أماكن غير مصرح بها.</li>
              <li>ارتداء الحزام إلزامي.</li>
              <li>لا تستخدم الهاتف أثناء القيادة.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">تغطية التأمين</h3>
            <p>
              التأمين الأساسي مشمول عادة، لكن يفضل إضافة CDW أو الحماية من السرقة لمزيد من الأمان.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">أرقام الطوارئ</h3>
            <ul className="list-disc pr-5 space-y-2">
              <li>شرطة دبي: 999</li>
              <li>تواصل مع شركة التأجير في حال وجود أي مشكلة.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">شركات تأجير السيارات الشهيرة</h3>

            <h4 className="font-semibold mt-4 mb-1">شركات دولية:</h4>
            <ul className="list-disc pr-5 space-y-1">
              <li>هرتز</li>
              <li>أفيس</li>
              <li>بدجت</li>
              <li>إنتربرايز</li>
              <li>سيكست</li>
            </ul>

            <h4 className="font-semibold mt-4 mb-1">شركات محلية:</h4>
            <ul className="list-disc pr-5 space-y-1">
              <li>كار رنتال DXB</li>
              <li>شيفت لتأجير السيارات</li>
              <li>فاست لتأجير السيارات</li>
              <li>ثريفي لتأجير السيارات</li>
            </ul>

            <h4 className="font-semibold mt-4 mb-1">شركات السيارات الفاخرة:</h4>
            <ul className="list-disc pr-5 space-y-1">
              <li>في آي بي لتأجير السيارات</li>
              <li>برستيج لتأجير السيارات</li>
              <li>سوبركار لتأجير السيارات</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
