import React from "react";
import model1 from "../utils/model.jpeg";
import model2 from "../utils/model2.jpeg";

const Feature = ({ title }) => (
  <div className="flex items-center gap-2 text-white">
    <span className="text-xl font-bold">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </span>
    <span>{title}</span>
  </div>
);

const CardSection = ({ imageOnLeft, title, text, image }) => (
  <div
    className={`flex flex-col md:flex-row ${
      imageOnLeft ? "md:flex-row-reverse" : ""
    } items-center my-12`}
  >
    <img
      src={image}
      alt={title}
      className="w-full md:w-1/2 rounded-xl shadow-md"
    />
    <div className="md:w-1/2 p-6">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-600 mb-4">{text}</p>
      <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
        Keşfet
      </button>
    </div>
  </div>
);

export default function Body() {
  return (
    <div className="font-sans">
      <section className="bg-red-500 text-white py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Test Yönetimiyle Neler Sağlıyoruz?
        </h1>
        <p className="text-lg mb-8">IoT Destekli Çözümler</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <Feature title="Yazılım Kalitesini Arttırıyoruz" />
          <Feature title="Olası Hataları Önceden Belirtiyoruz" />
          <Feature title="Oluşabilecek Riskleri Önlüyoruz" />
          <Feature title="Zaman ve Maliyetten Tasarruf Sağlıyoruz" />
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <CardSection
          imageOnLeft={true}
          title="Kalite ve Süreç Yönetimi"
          text="Deneyimli kadromuz; birçok farklı sektörden deneyimli, PMP® sertifikasına sahip, uzman proje yöneticilerinden oluşmaktadır. Projelerinizin yönetimine destek olmak, zayıf olduğunu düşündüğünüz alanları güçlendirmek, uluslararası geçerliliği olan PMP® metodolojisini şirketinizde uygulamak ve geliştirmek için yanınızdayız."
          image={model1}
        />
        <CardSection
          imageOnLeft={false}
          title="Test Yönetimi ve Analizi"
          text="Danışmanlığını yürüttüğümüz projelerde yazılım hatalarını önlemek amacıyla gerçekleştirdiğimiz testleri her proje aşamasında manuel ya da test otomasyonu ile dikkatle uygulamaktayız. Deneyimli test ekibimiz, kurumlara yüksek kalitede yazılım testleri hizmeti ile baştan sona güvenli, kaliteli ve tatmin edici bir müşteri deneyimi sunmaktadır."
          image={model2}
        />
      </section>
    </div>
  );
}
