import Image from "next/image"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import blurDataURL from "../utils/blurDataURL"

const About = () => {
    const firstIt = (
        <span className="italic">
            FIRST
            {"\u00A0"}
        </span>
    )

    return (
        <>
            <Navbar />
            <main>
                <section className="lg:py-12 lg:flex lg:justify-center border-b-[1px]">
                    <div className="lg:mx-8 lg:flex lg:max-w-5xl">
                        <div className="text-gray-600 py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2 text-xl flex flex-col space-y-4">
                            <h2 className="text-4xl text-slate-800 font-bold">Hakkımızda</h2>
                            <h3 className="text-3xl text-slate-800 font-bold">Vizyon</h3>
                            <p className="mt-4">
                                Cymurghs&apos;ün vizyonu, Türkiye&apos;nin her şehrinden üyeler kazanarak düzenli
                                aralıklarla projeler düzenleyen ve STEM eğitim modelinin kullanılmadığı bölgelerdeki
                                çocukların kolayca erişebilecekleri bir takım haline gelmektir.
                            </p>

                            <h3 className="text-3xl text-slate-800 font-bold">Misyon</h3>
                            <p className="mt-4">
                                Cymurghs&apos;ün misyonu, üyelerini bulundurduğu illerde çok çeşitli komünitelere
                                erişerek STEM ve {firstIt} değerlerini yaymak, üyelerine kendine özel yeteneklerini
                                kullanabilecekleri, ve bu süreçte robot yapım sürecine aşina olarak mühendislik
                                değerleri kazanabilecekleri bir platform oluşturmaktır.
                            </p>
                        </div>
                        <div className="lg:w-1/2 flex flex-col justify-evenly lg:p-8">
                            <Image
                                width={470}
                                height={470}
                                placeholder="blur"
                                blurDataURL={blurDataURL(470, 470)}
                                src="/about/vision.jpg"
                                alt="Vision"
                                className="border-[2em] rounded-2xl border-white shadow-2xl hover:shadow-black hover:scale-105 transition-all duration-500"
                            />
                        </div>
                    </div>
                </section>

                <section className="lg:py-12 lg:flex lg:justify-center border-[1px]">
                    <div className="lg:mx-8 lg:flex lg:max-w-5xl">
                        <div className="lg:w-1/2 flex flex-col justify-evenly lg:p-8">
                            <Image
                                width={448}
                                height={448}
                                placeholder="blur"
                                blurDataURL={blurDataURL(448, 448)}
                                src="/about/actions.jpg"
                                alt="Actions"
                                className="border-[2em] rounded-2xl border-white shadow-2xl hover:shadow-black hover:scale-105 transition-all duration-500"
                            />
                        </div>
                        <div className="text-gray-600 py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2 text-xl flex flex-col space-y-4">
                            <h2 className="text-3xl text-slate-800 font-bold">Peki ya biz kimiz?</h2>
                            <p className="mt-4">
                                Türkiye&apos;nin 15 farklı şehrinden gelen öğrenciler olarak yıl boyunca internet
                                tabanlı sistemler üzerinden ülkemizdeki STEM erişilebilirliğindeki eşitsizliği gidermek
                                adına çalışmalar yürüten Türkiye&apos;nin ilk öğrenci tabanlı FRC takımıyız.
                            </p>

                            <h2 className="text-3xl text-slate-800 font-bold">Ne Yapıyoruz?</h2>
                            <p className="mt-4">
                                Geldiğimiz farklı coğrafyalardaki üyelerimiz sayesinde birçok farklı şehirde robotik
                                eğitimleri, STEM - {firstIt} - teknoloji ve hayallere giden yolu somutlaştırmak üzerine
                                konferanslar, çeşitli FLL takımlarına mentorluklar, toplumumuzda eksik gördüğümüz sosyal
                                faaliyetleri arttırmak adına projeler organize ediyoruz. Ve tabii ki, robot yapıyoruz!
                                Sırt çantalarımızda miller, yanımızdan ayırmadığımız onluk anahtarlar ve alyan
                                setlerimiz sadece sezon boyunca değil, tüm yıl boyunca bizimle!
                            </p>
                            <p className="mt-4">Dikkat: Yediğin portakalı kumpasla ölçmeyi unutma!</p>
                        </div>
                    </div>
                </section>

                <section className="lg:py-12 lg:flex lg:justify-center border-[1px]">
                    <div className="lg:mx-8 lg:flex lg:max-w-5xl">
                        <div className="text-gray-600 py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2 text-xl flex flex-col space-y-4">
                            <h2 className="text-4xl text-slate-800 font-bold">3 Sezonda 9 Ödül</h2>
                            <h3 className="text-2xl text-slate-800 font-bold">Chairman&apos;s Ödülü</h3>
                            <p>
                                Chairman&apos;s ödülü, {firstIt}&apos;ün en prestijli ödülüdür. STEM değerlerini geniş
                                komünitelere yayan ve ayrım yapmadan herkesin mühendislik ile tanışmasını sağlayan
                                takımlara verilir. Ödül sahipleri projeleri ve davranışları ile diğer takımlara örnek
                                oluşturur. Chairman&apos;s ödülünü alan takımlar, ülkelerini {firstIt} Dünya
                                Şampiyonası&apos;nda temsil etme hakkı kazanırlar.
                            </p>

                            <h3 className="text-2xl text-slate-800 font-bold">Mühendislikte Mükemmellik Ödülü</h3>
                            <p>
                                Mühendislik sürecini profesyonel bir yaklaşımla oluşturan takımlara verilir. Robotun
                                tasarım sürecindeki planlamalar, kullanılan yöntemler, mühendislik becerileri ölçülür.
                                Uluslararasında değerlendirilen 2021 sezonu robotumuz Baby Simurg ile, Türkiye&apos;den
                                bu ödüle layık görülen tek takım olduk.
                            </p>

                            <h3 className="text-2xl text-slate-800 font-bold">Kontrol Sisteminde İnovasyon Ödülü</h3>
                            <p>
                                Elektronik, mekanik ya da yazılımsal açıdan özgün ve yenilikçi bir kontrol sistemi veya
                                parçalar tasarlayan takımlara verilir. Ayrıca ödülün verilmesinde, hazırlanan yazılımın
                                oyunun rekabetine uygun olması, benzeri bulunmaması ve pratik olması da önemli
                                faktörlerdir. Cymurghs, PID kontrol tekniklerini oyunun kurallarına uygun olarak
                                robotuna başarıyla uygulayarak katıldığı ilk yarışma olan Turkish Off-Season
                                2018&apos;de bu ödülü almaya hak kazanmıştır.
                            </p>

                            <h3 className="text-2xl text-slate-800 font-bold">Rookie All Star Ödülü</h3>
                            <p>
                                Yarışmaya katılan rookieler arasındaki en çok etki alanına ulaşan ve yarışmanın her
                                alanında örnek bir performans sergileyen takımlara verilir. Cymurghs ve Cymurghs&apos;ün
                                başlatıp sonrasında asiste ettiği FRC takımı Tuku 8246 ile joint team olarak
                                katıldıkları Ankara Off-Season&apos;da yaptıkları projeler ve geleceğe yönelik
                                planlarındaki detaylar ile bu ödülü almaya hak kazanmıştır.
                            </p>

                            <h3 className="text-2xl text-slate-800 font-bold">Dean&apos;s List Ödülü</h3>
                            <p className="mt-4">
                                Yarışmaya katılan tüm öğrenciler arasındaki {firstIt} değerlerini benimseyerek uygulayan
                                ve takım için yaptığı fedakarlıkları ile öne çıkan öğrencilere verilir. İstanbul
                                Regional 2019 yılında bu ödülü almaya hak kazanan öğrencimiz, Amerika&apos;da
                                gerçekleşen Houston Dünya Şampiyonası&apos;nda {firstIt}&apos;ün kurucusu Dean Kamen ile
                                tanışmak üzere çağrılmıştır. 2021 INFINITE RECHARGE at Home sezonunda ise takım
                                kaptanımız bu ödülü takıma bir kez daha kazandırarak başarıyı taçlandırdı ve
                                Amerika&apos;ya gitme hakkı kazandı.
                            </p>

                            <h3 className="text-2xl text-gray-800 font-bold">Jüri Özel Ödülü</h3>
                            <p>
                                Yarışmada belirlenen ödül kriterlerinin dışında kendi alanlarında uzmanlaştıkları
                                özellikleri ve dikkat çekici başarıları sayesinde jürilerin ilgisini çeken takıma
                                verilir. Cymurghs, İstanbul Regional 2019, Ankara Off-Season 2019 ve İstanbul Regional
                                2020 yarışmalarında gösterdiği farklı coğrafyalardan öğrencileri bir araya getirip bunun
                                koordinesini yönetebilmesi ve takım içi samimi tavırları ile jürilerin ilgisini çekerek
                                bu ödülü almaya hak kazanmıştır.
                            </p>
                        </div>
                        <div className="lg:w-1/2 flex flex-col justify-evenly lg:p-8 mb-24">
                            <Image
                                width={448}
                                height={750}
                                placeholder="blur"
                                blurDataURL={blurDataURL(448, 750)}
                                src="/about/awards1.png"
                                alt="Award 1"
                                className="border-[2em] rounded-2xl border-white shadow-2xl hover:shadow-black hover:scale-105 transition-all duration-500"
                            />
                            <Image
                                width={448}
                                height={576}
                                placeholder="blur"
                                blurDataURL={blurDataURL(448, 576)}
                                src="/about/awards2.png"
                                alt="Award 2"
                                className="border-[2em] rounded-2xl border-white shadow-2xl hover:shadow-black hover:scale-105 transition-all duration-500"
                            />
                        </div>
                    </div>
                </section>

                <section className="lg:py-12 lg:flex lg:justify-center border-[1px] p-4">
                    <div className="lg:mx-8">
                        <div className="text-gray-600 py-12 max-w-xl lg:max-w-5xl lg:w-full text-xl flex flex-col space-y-6">
                            <h2 className="text-3xl text-slate-800 font-bold">Takım Değerlerimiz</h2>
                            <h3 className="text-xl text-slate-800 font-bold">
                                Cymurghs olarak ulaştığımız insanlara ve takım üyelerimize neler öğretmeyi hedefliyoruz?
                            </h3>

                            <ul className="flex flex-col space-y-4 text-gray-800">
                                <li>
                                    <h5 className="text-xl font-bold">✔ Engineering Skills</h5>
                                    <p>
                                        Mühendislik; var olanı keşfetmek değil, yeni bir şey üretmektir. Bu anlamda,
                                        matematik ve fizik değerlerini robot yapım süreci ile birleştirerek,
                                        üyelerimizin eğitim süreçlerini birebir haftalık görev kartları ile takip
                                        ediyoruz.
                                    </p>
                                </li>

                                <li>
                                    <h5 className="text-xl font-bold">✔ Research</h5>
                                    <p>
                                        Spesifik bir konu üzerine araştırma yapabilme, günümüz iş dünyasında en çok
                                        aranan yeteneklerden biridir. Takımımızda, araştırma yapma süreci yönetimini ve
                                        rapor yazma becerilerini mentorlarımızın research yapmaya yönlendiren özenle
                                        hazırlanmış research taskları ile öğretiyoruz.
                                    </p>
                                </li>

                                <li>
                                    <h5 className="text-xl font-bold">✔ Peer to Peer Experience Transmission</h5>
                                    <p>
                                        En iyi öğretmen, arkadaşlarımızdır. Kendini sürekli yenileyen ve dinamik bir
                                        yapıya sahip olan takımımızda, geçmiş üyelerimiz ve üniversite öğrencilerinden
                                        oluşan aktif mentorlarımız ile yaş aralığını küçük tutarak samimi ve kalıcı bir
                                        eğitim ortamı yaratıyoruz.
                                    </p>
                                </li>

                                <li>
                                    <h5 className="text-xl font-bold">✔ Learning While Working</h5>
                                    <p>
                                        Lise çağındaki öğrenciler olarak genel olarak üniversiteye geçmeden iş deneyimi
                                        kazanma fırsatı yakalayamıyoruz. Cymurghs olarak üyelerimize erken yaşta birçok
                                        meslek dalını tanıtma ve o alanda çalışma fırsatı oluşturarak doğru meslek
                                        seçimi yapmalarını asiste etmiş oluyoruz.
                                    </p>
                                </li>

                                <li>
                                    <h5 className="text-xl font-bold">✔ Career Mentoring</h5>
                                    <p>
                                        “İleride ne olacağım?”, “Hangi konuda yetenekliyim?” gibi soruların cevabını
                                        vermekte zorlanan birçok öğrenci bulunuyor. Pazarlama, yönetim, yazılım ve
                                        mühendislik gibi birçok alanda deneyimli mentorlarımız ile, hayallere giden
                                        yolun nasıl çizilip somutlaştırılacağı ve bu yolda nasıl ilerleneceği konusunda
                                        üyelerimizi cesaretlendiriyoruz.
                                    </p>
                                </li>

                                <li>
                                    <h5 className="text-xl font-bold">✔ Cultural Exchange </h5>
                                    <p>
                                        Sabahları boyoz fotoğrafıyla uyanıp, öğle yemeğinde Adana kebabı görmek nasıl
                                        olur? Birçok farklı coğrafyadan kişileri bir araya getiren takımımız, bu
                                        kültürleri de tek platformda toplamamızı sağlıyor. Aynı ortamda ülkemizin çok
                                        farklı geleneklerini görerek, üyelerimizin genel kültürlerini altırmalarına
                                        uygun bir paylaşım alanı yaratmış oluyoruz.
                                    </p>
                                </li>

                                <li>
                                    <h5 className="text-xl font-bold">✔ Teamwork & Fun!</h5>
                                    <p>
                                        FIRST&apos;ün de dediği gibi, eğlenmeyi unutmayın! Birbirimizi yılda sadece
                                        yarışmalarda görebilen takım üyelerimiz, sadece online araçları kullanarak
                                        koordine olma ve birlikte çalışma konusunda oldukça deneyim sahibidir.
                                        Çalışırken birlikte gülüp stres olunca dans etmek burada anormal bir özellik
                                        değil!
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default About
