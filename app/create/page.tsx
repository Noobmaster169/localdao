import SurveyForm from "@/components/SurveyForm";

// border-[#40A4FF] border-[3px] shadow-[0_0_30px_#40A4FF]

export default function Home() {
  return (
    <>
    <div className="background z-[-1] absolute top-0 w-full h-screen left-0 -mt-24"/>
    <div className="flex justify-center items-center w-screen h-fit absolute top-20 left-0 z-10 pb-[160px]">
      <div className="w-min-[950px] w-max-[75%] flex-grow h-full flex flex-col justify-center items-center pt-4 rounded-lg">
        <div className="box-big bg-darkBlue bg-opacity-50">
          <p className="text-4xl mt-6 font-semibold text-p6 text-center pt-6 font-geist-mono">Create Survey</p>
          <div className="w-full">
            <SurveyForm />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
