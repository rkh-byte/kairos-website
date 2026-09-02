/** @paper-design/shaders-react@0.0.80 */
import { GemSmoke } from '@paper-design/shaders-react';

export default function ClosingSection() {
  return (
    <div className="[font-synthesis:none] wrap-anywhere h-fit min-w-0 flex items-center w-full py-[72.5px] justify-center flex-wrap bg-white antialiased text-[12px]/4">
      <GemSmoke speed={1} size={0.8} outerDistortion={0.8} innerDistortion={1} outerGlow={0} innerGlow={1} offset={0} scale={1} angle={109} shape="diamond" image="https://app.paper.design/file-assets/01M1EYFG0SVG3KDGNKHB63WQ6C/01M0GEHC77BD8YVMZYNDNT7K5S.webp" frame={644298.249999813} colors={['#CFEAFF', '#ACD2FD', '#9BC6FA']} colorInner="#00000000" colorBack="#00000000" className="w-76 h-81 basis-76 shrink-0" />
      <div className="min-w-0 flex flex-col items-start py-12 px-[clamp(24px,10cqw,144px)] gap-8 flex-1 w-[min(100%,1008px)] max-w-252 shrink-0">
        <div className="flex flex-col self-stretch w-full max-w-full min-w-0">
          <div className="text-[clamp(30px,2.778cqw,40px)] leading-[clamp(36px,3.194cqw,46px)] [font-variation-settings:'wght'_442] self-stretch max-w-full min-w-0 w-full font-['RethinkSans','Rethink_Sans',system-ui,sans-serif] font-[442] text-[#020217]">
            We build the technology
          </div>
          <div className="text-[clamp(30px,2.778cqw,40px)] leading-[clamp(36px,3.194cqw,46px)] [font-variation-settings:'wght'_442] self-stretch max-w-full min-w-0 w-full font-['RethinkSans','Rethink_Sans',system-ui,sans-serif] font-[442] text-[#020217]">
            so you can own the market.
          </div>
        </div>
        <div className="flex pr-3 gap-3 self-stretch w-full flex-wrap max-w-full min-w-0">
          <div className="flex items-center justify-center gap-2 px-6 py-3 rounded-[12px] bg-[#020217]">
            <div className="min-w-0 flex flex-col items-center justify-center">
              <div className="min-w-0 content-center w-fit font-['RethinkSans-Medium','Rethink_Sans',system-ui,sans-serif] font-[500] text-white text-nav/5">
                Book a Meeting
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center overflow-clip gap-2 py-3 px-6 rounded-[12px] [outline:1px_solid_#020216]">
            <div className="grow basis-18 min-w-0 flex flex-col items-center justify-center">
              <div className="content-center font-['RethinkSans-Medium','Rethink_Sans',system-ui,sans-serif] font-[500] text-[#020217] text-nav/5">
                Call us to discuss your project
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 self-stretch w-full max-w-full min-w-0">
          <div className="flex flex-col items-start gap-4 self-stretch max-w-full min-w-0">
            <div className="content-center self-stretch font-['HKNova-Regular','HK_Nova',system-ui,sans-serif] text-[#898999] text-[18px]/7">
              Find everything you need to know about pricing, credits, AI models, and more. 
            </div>
            <div className="inline-block text-[18px] leading-[160%] w-max font-['RethinkSans-SemiBold','Rethink_Sans',system-ui,sans-serif] font-[600] text-[#020217]">
              See all FAQs
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

