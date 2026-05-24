import { useState } from "react";
import { motion } from "framer-motion";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const SectionLabel = ({ text }: { text: string }) => (
  <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C4A090] mb-3">{text}</p>
);

const Divider = () => (
  <div className="max-w-6xl mx-auto px-6 lg:px-10">
    <div className="border-t border-[#EDD9D2]" />
  </div>
);

export default function App() {
  const [form, setForm] = useState({ name: "", brand: "", product: "مكياج", pack: "فيديو واحد - 500 ريال", msg: "" });

  const wa = (m = "مرحبا فوز، حابة أتعاون معاك في محتوى UGC") =>
    window.open(`https://wa.me/966546066217?text=${encodeURIComponent(m)}`, "_blank");

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    wa(`طلب تعاون:\nالاسم: ${form.name}\nالبراند: ${form.brand}\nالمنتج: ${form.product}\nالباقة: ${form.pack}\n\n${form.msg}`);
  };

  return (
    <div dir="rtl" style={{ fontFamily: "'Cairo', sans-serif", backgroundColor: "#FAF0EC", color: "#1C1410" }}>

      {/* ══ Nav ══ */}
      <nav style={{ background: "rgba(237,216,208,0.88)", backdropFilter: "blur(16px)", borderBottom: "1px solid #DFC4BA", boxShadow: "0 1px 20px rgba(160,100,80,0.08)" }}
        className="fixed top-0 inset-x-0 z-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 h-[56px] flex items-center justify-between">
          <span className="font-bold text-[15px] tracking-wide" style={{ color: "#2A1810" }}>فوز عبدالله</span>
          <div className="hidden md:flex gap-7 text-[12.5px]" style={{ color: "#A08070" }}>
            {[["#about","عني"],["#services","خدماتي"],["#work","أعمالي"],["#pricing","الأسعار"],["#contact","تواصل"]].map(([h,l])=>(
              <a key={h} href={h} className="hover:text-[#2A1810] transition-colors duration-200">{l}</a>
            ))}
          </div>
          <button onClick={() => wa()}
            className="text-[12px] font-semibold px-5 py-[9px] rounded-full transition-all duration-200"
            style={{ background: "#2A1810", color: "#fff" }}
            onMouseEnter={e=>(e.currentTarget.style.background="#4A2E20")}
            onMouseLeave={e=>(e.currentTarget.style.background="#2A1810")}>
            احجزي تعاون
          </button>
        </div>
      </nav>

      {/* ══ Hero ══ */}
      <section className="pt-28 pb-24 lg:pt-32 lg:pb-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-24">

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex-shrink-0 w-52 sm:w-64 lg:w-[300px]"
            >
              <div className="aspect-[3/4] rounded-[28px] overflow-hidden"
                style={{ boxShadow: "0 20px 60px rgba(150,90,70,0.18)" }}>
                <img src="/images/fouz-hero.jpg" alt="فوز عبدالله" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 text-center lg:text-right"
            >
              <SectionLabel text="UGC Creator · Beauty & Lifestyle" />
              <h1 className="text-[42px] sm:text-[54px] lg:text-[64px] font-bold leading-[1.15] mb-4" style={{ letterSpacing: "-0.5px" }}>
                فوز عبدالله
              </h1>
              <p className="text-[13px] mb-8" style={{ color: "#A08070" }}>
                مكة المكرمة 🇸🇦 &nbsp;·&nbsp; 89K+ متابعة
              </p>
              <p className="text-[15.5px] leading-[1.95] max-w-lg mx-auto lg:mx-0 mb-10" style={{ color: "#5A3E34" }}>
                أصنع محتوى واقعي وجذاب يساعد البراندات على بناء الثقة وزيادة المبيعات — بأسلوب يحكي قصة حقيقية وليس مجرد إعلان.
              </p>

              {/* CTAs */}
              <div className="flex gap-3 justify-center lg:justify-start flex-wrap mb-8">
                <button onClick={() => wa()}
                  className="text-[13px] font-semibold px-8 py-3.5 rounded-full transition-all duration-200"
                  style={{ background: "#2A1810", color: "#fff" }}
                  onMouseEnter={e=>(e.currentTarget.style.background="#4A2E20")}
                  onMouseLeave={e=>(e.currentTarget.style.background="#2A1810")}>
                  احجزي تعاون
                </button>
                <a href="#work"
                  className="text-[13px] font-medium px-8 py-3.5 rounded-full transition-all duration-200"
                  style={{ border: "1px solid #D8BCB2", color: "#5A3E34", background: "rgba(255,255,255,0.5)" }}
                  onMouseEnter={e=>(e.currentTarget.style.background="rgba(255,255,255,0.9)")}
                  onMouseLeave={e=>(e.currentTarget.style.background="rgba(255,255,255,0.5)")}>
                  مشاهدة الأعمال
                </a>
              </div>

              {/* Social Buttons */}
              <div className="flex gap-2.5 justify-center lg:justify-start flex-wrap">
                <a href="https://www.instagram.com/fouz.abdullah" target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2 rounded-full text-[12.5px] font-medium transition-all duration-300"
                  style={{ border: "1px solid #D8BCB2", background: "rgba(255,255,255,0.55)", color: "#6B4A40", backdropFilter: "blur(8px)" }}
                  onMouseEnter={e=>{ const el=e.currentTarget; el.style.background="linear-gradient(135deg,#f9ce34,#ee2a7b,#6228d7)"; el.style.color="#fff"; el.style.border="1px solid transparent"; }}
                  onMouseLeave={e=>{ const el=e.currentTarget; el.style.background="rgba(255,255,255,0.55)"; el.style.color="#6B4A40"; el.style.border="1px solid #D8BCB2"; }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                  Instagram
                </a>
                <a href="https://www.tiktok.com/@fouz.abdullah" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-[12.5px] font-medium transition-all duration-300"
                  style={{ border: "1px solid #D8BCB2", background: "rgba(255,255,255,0.55)", color: "#6B4A40", backdropFilter: "blur(8px)" }}
                  onMouseEnter={e=>{ const el=e.currentTarget; el.style.background="#000"; el.style.color="#fff"; el.style.border="1px solid transparent"; }}
                  onMouseLeave={e=>{ const el=e.currentTarget; el.style.background="rgba(255,255,255,0.55)"; el.style.color="#6B4A40"; el.style.border="1px solid #D8BCB2"; }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.78a4.85 4.85 0 0 1-1.01-.09z"/>
                  </svg>
                  TikTok
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ══ About ══ */}
      <section id="about" className="py-20 lg:py-24">
        <FadeIn>
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-28 items-start">
              <div className="lg:w-72 flex-shrink-0">
                <SectionLabel text="من أنا" />
                <h2 className="text-[28px] lg:text-[34px] font-bold leading-snug">عني</h2>
              </div>
              <div className="flex-1">
                <p className="text-[15.5px] leading-[2.1] mb-8" style={{ color: "#5A3E34" }}>
                  أنا فوز، صانعة محتوى UGC متخصصة في البيوتي والأزياء واللايف ستايل. أكتب السكربت بنفسي وأركز على التجربة الصادقة والقصة الواقعية — محتواي يخلي البنت تحس إنها تسمع نصيحة من صديقتها.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["💄 مكياج","👗 تنسيقات ملابس","✨ سكن كير","🌿 صحة نفسية","💪 قوة شخصية"].map(s=>(
                    <span key={s} className="text-[12.5px] px-4 py-2 rounded-full font-medium"
                      style={{ background: "rgba(255,255,255,0.8)", border: "1px solid #E4CABB", color: "#6B4A40" }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <Divider />

      {/* ══ Services ══ */}
      <section id="services" className="py-20 lg:py-24">
        <FadeIn>
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <SectionLabel text="ما الذي أقدمه" />
              <h2 className="text-[28px] lg:text-[34px] font-bold">الخدمات</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
              {[
                { t: "تجربة منتجات", i: "✨" },
                { t: "فيديوهات UGC",  i: "📱" },
                { t: "Makeup Hacks",  i: "💄" },
                { t: "Outfit Hacks",  i: "👗" },
                { t: "تنسيقات أزياء", i: "🧣" },
                { t: "سكن كير",       i: "🧴" },
                { t: "مكياج مناسبات", i: "💫" },
                { t: "Lifestyle",     i: "☕" },
              ].map((s, idx) => (
                <motion.div
                  key={s.t}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.055, duration: 0.5, ease: [0.22,1,0.36,1] }}
                  viewport={{ once: true }}
                  className="rounded-2xl p-5 text-center transition-all duration-250 cursor-default"
                  style={{ background: "rgba(255,255,255,0.7)", border: "1px solid #EAD8D0" }}
                  onMouseEnter={e=>{ const el=e.currentTarget; el.style.background="rgba(255,255,255,0.95)"; el.style.boxShadow="0 8px 28px rgba(150,90,70,0.10)"; }}
                  onMouseLeave={e=>{ const el=e.currentTarget; el.style.background="rgba(255,255,255,0.7)"; el.style.boxShadow="none"; }}>
                  <div className="text-[26px] mb-2.5">{s.i}</div>
                  <div className="text-[12.5px] font-semibold" style={{ color: "#3E2418" }}>{s.t}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      <Divider />

      {/* ══ Portfolio ══ */}
      <section id="work" className="py-20 lg:py-24">
        <FadeIn>
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <SectionLabel text="من حساباتي" />
              <h2 className="text-[28px] lg:text-[34px] font-bold mb-2">أعمالي</h2>
              <p className="text-[13px]" style={{ color: "#A08070" }}>اضغطي على أي فيديو لمشاهدته</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-3.5 mb-10">
              {[
                { url:"https://www.instagram.com/reel/DJhJ2F5IMHP/", thumb:"https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=350" },
                { url:"https://www.instagram.com/reel/DJJhV-doh41/", thumb:"https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=350" },
                { url:"https://www.instagram.com/reel/DI_xjWSoCmN/", thumb:"https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=350" },
                { url:"https://www.instagram.com/reel/DIzoIYUI7yL/", thumb:"https://images.pexels.com/photos/3373716/pexels-photo-3373716.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=350" },
                { url:"https://www.instagram.com/reel/DIk4kW0IEXJ/", thumb:"https://images.pexels.com/photos/2253833/pexels-photo-2253833.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=350" },
                { url:"https://www.instagram.com/reel/DIS7y6HoaYx/", thumb:"https://images.pexels.com/photos/3373725/pexels-photo-3373725.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=350" },
                { url:"https://www.instagram.com/reel/DHwH1YEIh_D/", thumb:"https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=350" },
                { url:"https://www.instagram.com/reel/DHeEVL8ouI8/", thumb:"https://images.pexels.com/photos/3373738/pexels-photo-3373738.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=350" },
                { url:"https://www.instagram.com/reel/DHNmL_MoYHB/", thumb:"https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=350" },
                { url:"https://www.instagram.com/fouz.abdullah/",     thumb:"https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=350" },
              ].map((item, i) => (
                <motion.a
                  key={i} href={item.url} target="_blank" rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.04, duration: 0.5, ease:[0.22,1,0.36,1] }}
                  viewport={{ once: true }}
                  className="group relative block overflow-hidden"
                  style={{ aspectRatio:"9/14", borderRadius:"18px", background:"#EDD4CA" }}
                >
                  <img src={item.thumb} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background:"rgba(30,10,5,0.2)" }}>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center"
                      style={{ background:"rgba(255,255,255,0.92)", boxShadow:"0 4px 14px rgba(0,0,0,0.15)" }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="#2A1810"><polygon points="5 3 19 12 5 21"/></svg>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
            <div className="flex justify-center gap-5">
              <a href="https://www.instagram.com/fouz.abdullah" target="_blank"
                className="text-[12.5px] font-medium transition-colors duration-200"
                style={{ color: "#A08070" }}
                onMouseEnter={e=>(e.currentTarget.style.color="#2A1810")}
                onMouseLeave={e=>(e.currentTarget.style.color="#A08070")}>
                📸 كل الأعمال على إنستقرام
              </a>
              <a href="https://www.tiktok.com/@fouz.abdullah" target="_blank"
                className="text-[12.5px] font-medium transition-colors duration-200"
                style={{ color: "#A08070" }}
                onMouseEnter={e=>(e.currentTarget.style.color="#2A1810")}
                onMouseLeave={e=>(e.currentTarget.style.color="#A08070")}>
                🎵 تيك توك
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

      <Divider />

      {/* ══ Why Me ══ */}
      <section className="py-20 lg:py-24">
        <FadeIn>
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-14">
              <SectionLabel text="مميزاتي" />
              <h2 className="text-[28px] lg:text-[34px] font-bold">ليش تختاريني؟</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto">
              {[
                { t:"أصالة تبيع",    d:"محتوى واقعي يبني ثقة حقيقية مع الجمهور",      i:"🎯" },
                { t:"جمهور مستهدف", d:"89K+ بنت في السعودية والخليج مهتمات بالبيوتي", i:"👩" },
                { t:"جاهز للنشر",   d:"فيديو ممنتج بسكربت مقنع وجودة عالية",          i:"✅" },
              ].map(item=>(
                <div key={item.t} className="text-center p-7 rounded-2xl transition-all duration-250"
                  style={{ background:"rgba(255,255,255,0.55)", border:"1px solid #EAD8D0" }}
                  onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.background="rgba(255,255,255,0.9)"; el.style.boxShadow="0 10px 32px rgba(150,90,70,0.10)"; }}
                  onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.background="rgba(255,255,255,0.55)"; el.style.boxShadow="none"; }}>
                  <div className="text-[30px] mb-3">{item.i}</div>
                  <h3 className="font-bold text-[15px] mb-2" style={{ color:"#2A1810" }}>{item.t}</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color:"#8A6458" }}>{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      <Divider />

      {/* ══ Pricing ══ */}
      <section id="pricing" className="py-20 lg:py-24">
        <FadeIn>
          <div className="max-w-4xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <SectionLabel text="باقات التعاون" />
              <h2 className="text-[28px] lg:text-[34px] font-bold">الأسعار</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {/* Single */}
              <div className="rounded-2xl p-7 lg:p-9 transition-all duration-300"
                style={{ background:"rgba(255,255,255,0.75)", border:"1px solid #E4CABB" }}
                onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.boxShadow="0 14px 40px rgba(150,90,70,0.12)"; el.style.background="rgba(255,255,255,0.95)"; }}
                onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.boxShadow="none"; el.style.background="rgba(255,255,255,0.75)"; }}>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-bold text-[17px]" style={{ color:"#2A1810" }}>فيديو واحد</h3>
                    <p className="text-[12px] mt-0.5" style={{ color:"#A08070" }}>مثالي للتجربة الأولى</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[32px] font-bold" style={{ color:"#2A1810" }}>500</span>
                    <span className="text-[13px] mr-1" style={{ color:"#A08070" }}>ريال</span>
                  </div>
                </div>
                <div className="space-y-2.5 mb-7 text-[13.5px]" style={{ color:"#6B4A40" }}>
                  {["فيديو UGC كامل بمونتاج","كتابة السكربت","تعديل مجاني واحد","تسليم خلال أسبوع"].map(f=>(
                    <div key={f} className="flex items-center gap-2">
                      <span style={{ color:"#B98A7B" }}>✓</span> {f}
                    </div>
                  ))}
                </div>
                <button onClick={()=>wa("حابة باقة الفيديو الواحد - 500 ريال")}
                  className="w-full py-3 rounded-full text-[13px] font-semibold transition-all duration-200"
                  style={{ border:"1px solid #D8BCB2", color:"#3E2418", background:"transparent" }}
                  onMouseEnter={e=>{ const el=e.currentTarget; el.style.background="#F5E5DE"; }}
                  onMouseLeave={e=>{ const el=e.currentTarget; el.style.background="transparent"; }}>
                  اختيار الباقة
                </button>
              </div>

              {/* Monthly */}
              <div className="rounded-2xl p-7 lg:p-9 relative transition-all duration-300 md:-translate-y-2"
                style={{ background:"#2A1810", color:"#fff", boxShadow:"0 20px 50px rgba(30,10,5,0.25)" }}
                onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.boxShadow="0 24px 60px rgba(30,10,5,0.35)"; }}
                onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.boxShadow="0 20px 50px rgba(30,10,5,0.25)"; }}>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-bold"
                  style={{ background:"#B98A7B", color:"#fff" }}>الأكثر طلباً</div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-bold text-[17px]">باقة شهرية</h3>
                    <p className="text-[12px] mt-0.5" style={{ color:"rgba(255,255,255,0.45)" }}>4 فيديوهات شهرياً</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[32px] font-bold">1800</span>
                    <span className="text-[13px] mr-1" style={{ color:"rgba(255,255,255,0.4)" }}>ريال</span>
                    <p className="text-[11px] mt-0.5" style={{ color:"#C9957F" }}>توفير 200 ريال</p>
                  </div>
                </div>
                <div className="space-y-2.5 mb-7 text-[13.5px]" style={{ color:"rgba(255,255,255,0.65)" }}>
                  {["4 فيديوهات UGC","خطة محتوى شهرية","أولوية في التصوير","دعم مستمر"].map(f=>(
                    <div key={f} className="flex items-center gap-2">
                      <span style={{ color:"#C9957F" }}>✓</span> {f}
                    </div>
                  ))}
                </div>
                <button onClick={()=>wa("حابة الباقة الشهرية - 1800 ريال")}
                  className="w-full py-3 rounded-full text-[13px] font-semibold transition-all duration-200"
                  style={{ background:"#fff", color:"#2A1810" }}
                  onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.background="#F0E0D8"; }}
                  onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.background="#fff"; }}>
                  اختيار الباقة
                </button>
              </div>
            </div>
            <p className="text-center text-[11.5px] mt-5" style={{ color:"#B09080" }}>
              لا يشمل تسليم الخام · تعديل مجاني واحد · الدفع مقدم 50%
            </p>
          </div>
        </FadeIn>
      </section>

      <Divider />

      {/* ══ Workflow + FAQ ══ */}
      <section className="py-20 lg:py-24">
        <FadeIn>
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row gap-14 lg:gap-20">

              {/* Steps */}
              <div className="lg:w-1/2">
                <SectionLabel text="كيف نبدأ" />
                <h2 className="text-[26px] lg:text-[30px] font-bold mb-9">طريقة العمل</h2>
                <div className="space-y-6">
                  {[
                    { t:"كتابة السكربت",  d:"أدرس المنتج وأكتب بأسلوبي" },
                    { t:"تصوير احترافي", d:"إضاءة وجو مناسب (جمعة وسبت)" },
                    { t:"مونتاج جذاب",   d:"قصات ومؤثرات ترند" },
                    { t:"التسليم",       d:"واتساب أو إيميل جاهز للنشر" },
                    { t:"النشر",         d:"إمكانية النشر مع منشن للبراند" },
                  ].map((s, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <span className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0 mt-0.5"
                        style={{ background:"#EDD4CA", color:"#6B4A40" }}>{i + 1}</span>
                      <div>
                        <h3 className="font-semibold text-[14.5px] mb-0.5" style={{ color:"#2A1810" }}>{s.t}</h3>
                        <p className="text-[13px]" style={{ color:"#9A7060" }}>{s.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="lg:w-1/2">
                <SectionLabel text="إجابات سريعة" />
                <h2 className="text-[26px] lg:text-[30px] font-bold mb-9">أسئلة شائعة</h2>
                <div className="space-y-2.5">
                  {[
                    { q:"هل تستلمين المنتج؟",          a:"نعم، أستلمه وأصوره عندي بأسلوبي الطبيعي." },
                    { q:"كم مدة الفيديو؟",             a:"30-60 ثانية حسب المنصة." },
                    { q:"هل تنشرين على حسابك؟",        a:"متاح النشر مع منشن للبراند حسب الاتفاق." },
                    { q:"وش الفرق بين UGC والإعلان؟",  a:"UGC يبان كتجربة صديقة، الناس تثق فيه أكثر." },
                    { q:"كيف الدفع؟",                  a:"50% مقدم، 50% قبل التسليم. تحويل بنكي أو STC Pay." },
                  ].map(f=>(
                    <details key={f.q} className="group rounded-xl overflow-hidden"
                      style={{ border:"1px solid #EAD8D0", background:"rgba(255,255,255,0.65)" }}>
                      <summary className="flex justify-between items-center p-4 text-[14px] font-medium cursor-pointer list-none"
                        style={{ color:"#2A1810" }}>
                        {f.q}
                        <span className="text-[9px] transition-transform duration-200 group-open:rotate-180 flex-shrink-0 ml-2"
                          style={{ color:"#B09080" }}>▼</span>
                      </summary>
                      <p className="px-4 pb-4 text-[13px] leading-relaxed" style={{ color:"#8A6458" }}>{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <Divider />

      {/* ══ Contact ══ */}
      <section id="contact" className="py-20 lg:py-24">
        <FadeIn>
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <SectionLabel text="تعاون معي" />
              <h2 className="text-[28px] lg:text-[34px] font-bold mb-2">تواصل معي</h2>
              <p className="text-[13px]" style={{ color:"#A08070" }}>أرسلي تفاصيل البراند وأرد خلال ساعات</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Info */}
              <div className="lg:w-2/5 space-y-3">
                {[
                  { href:"https://wa.me/966546066217",              icon:"💬", label:"واتساب",   value:"00966546066217" },
                  { href:"mailto:fouzzz2024@gmail.com",             icon:"📧", label:"إيميل",    value:"fouzzz2024@gmail.com" },
                  { href:"https://www.instagram.com/fouz.abdullah", icon:"📸", label:"إنستقرام", value:"@fouz.abdullah" },
                  { href:"https://www.tiktok.com/@fouz.abdullah",   icon:"🎵", label:"تيك توك",  value:"@fouz.abdullah" },
                ].map(c=>(
                  <a key={c.label} href={c.href} target="_blank"
                    className="flex items-center gap-3.5 p-4 rounded-xl transition-all duration-200"
                    style={{ background:"rgba(255,255,255,0.65)", border:"1px solid #EAD8D0" }}
                    onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.background="rgba(255,255,255,0.95)"; el.style.borderColor="#C9A898"; }}
                    onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.background="rgba(255,255,255,0.65)"; el.style.borderColor="#EAD8D0"; }}>
                    <span className="text-lg">{c.icon}</span>
                    <div>
                      <p className="text-[11px]" style={{ color:"#A08070" }}>{c.label}</p>
                      <p className="text-[13px] font-medium" dir="ltr" style={{ color:"#2A1810" }}>{c.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Form */}
              <div className="lg:w-3/5">
                <form onSubmit={send} className="rounded-2xl p-6 lg:p-8 space-y-4"
                  style={{ background:"rgba(255,255,255,0.75)", border:"1px solid #EAD8D0" }}>
                  <h3 className="font-bold text-[16px] mb-1" style={{ color:"#2A1810" }}>نموذج طلب تعاون</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <input required placeholder="اسمك أو اسم البراند" value={form.name}
                      onChange={e=>setForm({...form,name:e.target.value})}
                      className="w-full h-11 rounded-xl px-4 text-[13px] outline-none transition-all duration-200"
                      style={{ border:"1px solid #E4CABB", background:"rgba(247,235,230,0.6)", color:"#2A1810" }}
                      onFocus={e=>{ const el=e.currentTarget; el.style.borderColor="#C4A090"; el.style.background="rgba(247,235,230,0.9)"; }}
                      onBlur={e=>{ const el=e.currentTarget; el.style.borderColor="#E4CABB"; el.style.background="rgba(247,235,230,0.6)"; }} />
                    <input required placeholder="حساب البراند @" value={form.brand}
                      onChange={e=>setForm({...form,brand:e.target.value})}
                      className="w-full h-11 rounded-xl px-4 text-[13px] outline-none transition-all duration-200"
                      style={{ border:"1px solid #E4CABB", background:"rgba(247,235,230,0.6)", color:"#2A1810" }}
                      onFocus={e=>{ const el=e.currentTarget; el.style.borderColor="#C4A090"; el.style.background="rgba(247,235,230,0.9)"; }}
                      onBlur={e=>{ const el=e.currentTarget; el.style.borderColor="#E4CABB"; el.style.background="rgba(247,235,230,0.6)"; }} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <select value={form.product} onChange={e=>setForm({...form,product:e.target.value})}
                      className="h-11 rounded-xl px-4 text-[13px] outline-none transition-all duration-200"
                      style={{ border:"1px solid #E4CABB", background:"rgba(247,235,230,0.6)", color:"#2A1810" }}>
                      <option>مكياج</option><option>سكن كير</option><option>أزياء</option><option>لايف ستايل</option><option>أخرى</option>
                    </select>
                    <select value={form.pack} onChange={e=>setForm({...form,pack:e.target.value})}
                      className="h-11 rounded-xl px-4 text-[13px] outline-none transition-all duration-200"
                      style={{ border:"1px solid #E4CABB", background:"rgba(247,235,230,0.6)", color:"#2A1810" }}>
                      <option>فيديو واحد - 500 ريال</option><option>باقة شهرية - 1800 ريال</option><option>غير متأكدة</option>
                    </select>
                  </div>
                  <textarea rows={4} placeholder="تفاصيل إضافية عن المنتج..." value={form.msg}
                    onChange={e=>setForm({...form,msg:e.target.value})}
                    className="w-full rounded-xl p-4 text-[13px] outline-none transition-all duration-200 resize-none"
                    style={{ border:"1px solid #E4CABB", background:"rgba(247,235,230,0.6)", color:"#2A1810" }}
                    onFocus={e=>{ const el=e.currentTarget; el.style.borderColor="#C4A090"; el.style.background="rgba(247,235,230,0.9)"; }}
                    onBlur={e=>{ const el=e.currentTarget; el.style.borderColor="#E4CABB"; el.style.background="rgba(247,235,230,0.6)"; }} />
                  <button type="submit"
                    className="w-full h-11 rounded-full text-[13px] font-semibold transition-all duration-200"
                    style={{ background:"#2A1810", color:"#fff" }}
                    onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.background="#4A2E20"; }}
                    onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.background="#2A1810"; }}>
                    إرسال عبر واتساب
                  </button>
                  <p className="text-[11px] text-center" style={{ color:"#C0A090" }}>بالضغط ترسلين البيانات مباشرة على واتساب</p>
                </form>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer style={{ borderTop:"1px solid #EDD9D2" }} className="py-8">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <p className="font-bold text-[14px]" style={{ color:"#2A1810" }}>فوز عبدالله</p>
            <p className="text-[11.5px]" style={{ color:"#B09080" }}>UGC Creator · مكة المكرمة</p>
          </div>
          <p className="text-[11.5px]" style={{ color:"#B09080" }}>© 2025</p>
        </div>
      </footer>

      {/* Mobile CTA */}
      <div className="fixed bottom-3 inset-x-3 z-40 sm:hidden">
        <button onClick={() => wa()}
          className="w-full h-11 rounded-full text-[13px] font-semibold"
          style={{ background:"#2A1810", color:"#fff", boxShadow:"0 8px 24px rgba(30,10,5,0.3)" }}>
          💬 احجزي تعاون
        </button>
      </div>
    </div>
  );
}
