import Card from "@/app/components/home/service/card";

export default function service() {
  return (
    <div className="bg-[#F1F5FB] lg:p-20 p-10">
      <div className="max-w-lg mx-auto text-center space-y-2">
        <p className="text-theme-primary text-xs font-bold">SERVICE</p>
        <h2 className="font-bold text-4xl max-w-lg">What we do</h2>
      </div>
      <div className="mt-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:max-w-5xl max-w-full mx-auto  gap-5 justify-center">
          <Card
            image="./images/service/ic-customdev.svg"
            title="Custom Development"
            description="Kami dapat membantu Anda untuk membuat dan meningkatkan media online maupun offline yang dibutuhkan bisnis Anda"
          />
          <Card
            image="./images/service/ic-webdev.svg"
            title="Website Development"
            description="Kami membantu Anda untuk membuat Company Profile secara online yang dapat mudah diakses dengan desain visual yang menarik"
          />
          <Card
            image="./images/service/ic-marketing.svg"
            title="Digital Marketing"
            description="Kami menyediakan layanan lain yang mendukung pengembangan website Anda seperti Social Branding, Design Grafis dll."
          />
        </div>
      </div>
    </div>
  );
}
