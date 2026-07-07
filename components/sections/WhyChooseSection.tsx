import { AnimatedReveal } from "../ui/AnimatedReveal";

export function WhyChooseSection() {
  return (
    <section className="py-32 bg-neutral-950 border-y border-white/5 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <AnimatedReveal>
              <h2 className="text-4xl md:text-5xl font-display text-white mb-8">
                Mengapa Memilih <span className="text-accent italic">Hizkia?</span>
              </h2>
            </AnimatedReveal>
            <div className="space-y-8">
              {[
                { title: "Komunikasi Hangat & Elegan", desc: "Saya memastikan setiap kata yang diucapkan membangun koneksi yang tepat dengan audiens Anda." },
                { title: "Adaptabilitas Tone", desc: "Mampu membaca ruangan dan menyesuaikan tingkat energi dari sangat formal hingga kasual yang interaktif." },
                { title: "Manajemen Waktu Profesional", desc: "Menjaga ritme dan *rundown* acara tetap rapi tanpa terasa terburu-buru atau membosankan." }
              ].map((item, i) => (
                <AnimatedReveal key={i} delay={i * 0.1} className="flex gap-4">
                  <div className="w-2 h-2 mt-3 rounded-full bg-accent shrink-0" />
                  <div>
                    <h4 className="text-xl font-medium text-white mb-2">{item.title}</h4>
                    <p className="text-white/60">{item.desc}</p>
                  </div>
                </AnimatedReveal>
              ))}
            </div>
          </div>
          <AnimatedReveal delay={0.3}>
            <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden">
              <img src="/images/portfolio/portfolio-4.jpg" alt="Hizkia on Stage" className="w-full h-full object-cover" />
              <div className="absolute inset-0 border-4 border-accent/20 rounded-2xl m-6" />
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}