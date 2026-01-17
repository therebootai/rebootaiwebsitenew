"use client";

import Image from "next/image";
import { useState, useRef, useEffect, JSX } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function TechnologyRight() {
  const [activeTab, setActiveTab] = useState("web");
  const [isLoading, setIsLoading] = useState(false); // New loading state
  
  const tabContainerRef = useRef<HTMLDivElement>(null);
  const gridContainerRef = useRef<HTMLDivElement>(null); // Ref for the grid
  const isManualScrolling = useRef(false);
  const resumeTimeout = useRef<NodeJS.Timeout | null>(null);

  const tabs = [
    { id: "web", label: "Web Design" },
    { id: "app", label: "Apps" },
    { id: "ai", label: "AI" },
    { id: "webapp", label: "Web Apps" },
    { id: "design", label: "UI & UX" },
    { id: "application", label: "Application" },
  ];

  const tabImages: Record<string, string[]> = {
    web: [
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566435/vue_js_uxwoip.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566432/tailwind_nbhr9l.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566429/react_dvbbuk.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566426/nuxt_js_xltjrj.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566423/next_js_k6hudh.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566420/js_ob8rcr.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566417/gatsby_ncqbhg.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566414/angular_js_zfq2ho.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566411/alpine_js_siaxe5.avif",
    ],
    app: [
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566353/xamarin_ib82zp.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566350/unity_slnzlo.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566347/swift_u3hbaf.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566344/react_native_yeeqij.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566341/native_script_jajky7.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566338/kotlin_qwdtof.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566335/ionic_lvhywk.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566331/flutter_dg3rrv.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566325/android_studio_qelcv1.avif",
    ],
    ai: [
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566329/perplexity_e0hpdc.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566323/meta_ai_zuhhr5.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566320/jasper_ai_uawlq8.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566316/grok_daun09.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566313/gemini_glphhz.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566310/deepseek_tk7fk6.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566307/copilot_l2fdvy.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566303/claude_ai_cz4t2o.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566302/chatgpt_zxftg5.avif",
    ],
    webapp: [
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566408/spring_boot_yhmsx6.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566405/nest_js_yzkk5c.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566402/koa_js_xmcrr7.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566399/go_gin_lnqqmu.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566396/fastify_n5xdio.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566393/fast_api_t7qwse.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566390/express_js_yk31uz.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566387/django_nwqq0l.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566384/asp_dot_net_cjfpco.avif",
    ],
    design: [
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566381/uizar_tnwahp.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566378/sketch_fxrz0v.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566375/protopie_ew62dr.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566372/miro_cfcre7.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566368/invision_naakzo.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566365/blasamiq_o7yhra.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566362/figma_gtgfog.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566359/axure_x_mtwcpm.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566357/adobe_xd_orwimv.avif",
    ],
    application: [
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566353/xamarin_ib82zp.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566350/unity_slnzlo.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566347/swift_u3hbaf.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566344/react_native_yeeqij.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566341/native_script_jajky7.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566338/kotlin_qwdtof.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566335/ionic_lvhywk.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566331/flutter_dg3rrv.avif",
      "https://res.cloudinary.com/db7fyrtvc/image/upload/v1768566325/android_studio_qelcv1.avif",
    ],
  };

  const handleTabChange = (id: string) => {
    if (id === activeTab) return;
    setIsLoading(true);
    setActiveTab(id);
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  };


 

  const handleManualStart = () => {
    isManualScrolling.current = true;
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
  };

  const handleManualEnd = () => {
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    resumeTimeout.current = setTimeout(() => {
      isManualScrolling.current = false;
    }, 3000);
  };

  return (
    <div className="w-full flex flex-col md:mt-0 mt-4">
      <style jsx global>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .glossy-shimmer {
          background: linear-gradient(90deg, #ffffff 0%, #f0f0f0 50%, #ffffff 100%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite linear;
        }
      `}</style>

      {/* Tabs */}
      <div className="mb-6">
        <div
          ref={tabContainerRef}
          className="flex gap-2 overflow-x-auto no-scrollbar scroll-smooth"
          onMouseEnter={handleManualStart}
          onMouseLeave={handleManualEnd}
          onTouchStart={handleManualStart}
          onTouchEnd={handleManualEnd}
          onScroll={handleManualStart}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`flex px-6 py-2 rounded-md border-[0.4px] cursor-pointer text-sm font-medium transition whitespace-nowrap text-center ${
                activeTab === tab.id
                  ? "bg-[linear-gradient(90deg,#0061ff,#4fa0ff)] text-white border-blue-600"
                  : "border-gray-400 text-gray-700 hover:bg-blue-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div 
        ref={gridContainerRef}
        className="grid grid-cols-3  border-[0.4px] border-gray-300 relative "
      >
        {isLoading 
          ? (
            Array.from({ length: 9 }).map((_, i) => (
              <div
                key={`skeleton-${i}`}
                className="flex justify-center items-center bg-white border-2 border-[#F5F5F5] border-t-0 border-l-0 border-r-2 border-b-2 p-4 h-[6rem]"
              >
                <div className="w-24 h-12 rounded glossy-shimmer"></div>
              </div>
            ))
          ) 
          : (
            tabImages[activeTab].map((src, i) => (
              <div
                key={i}
                className="flex justify-center items-center bg-white hover:shadow-md transition border-2 border-[#F5F5F5] border-t-0 border-l-0 border-r-2 border-b-2 p-4 h-[6rem]"
              >
                <Image
                  src={src}
                  alt={`${activeTab} image ${i + 1}`}
                  width={512}
                  height={267}
                  className="object-contain"
                />
              </div>
            ))
          )
        }
      </div>
    </div>
  );
}