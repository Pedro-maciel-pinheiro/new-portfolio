export function CodeText() {
  return (
    <div>
      <pre
        className="whitespace-pre  flex flex-col  bg-gray-900 max-w-7xl mx-auto relative p-2 mt-4 rounded-lg text-white/20 leading-8 text-xs h-96
       overflow-x-scroll md:text-xl"
      >
        <span className="flex">
          <span className="text-pink-500">const </span>{" "}
          <span className="text-yellow-400">PersonalInformation()</span>
           <span className="text-white"> = </span>
          <span className="text-white">{"{"}</span>
        </span>
        <span className="flex">
          <span className="text-white">Name = </span>{" "}
          <span className="text-yellow-200">&apos;João Pedro Maciel Pinheiro&apos;</span>
          <br />
        </span>
        <span className="flex">
          <span className="text-white">Phone =</span>
          <span className="text-yellow-200"> &apos;+55 61 9851-6239&apos; </span>
        </span>
        <span className="flex">
          <span className="text-white">Email =</span>{" "}
          <span className="text-yellow-200">&apos;joaopedrolk98@gmail.com&apos;||</span>
          <span className="text-yellow-200">&apos;shionlk98@gmail.com&apos;</span>
        </span>
        <span className="text-white">{"}"}</span>
        <span className="flex">
          <span className="text-pink-500">const </span>{" "}
          <span className="text-yellow-400">WorkExperience</span>
          <span className="text-white"> = </span>
          <span className="text-white">() {'=>'} </span>
          <span className="text-white">{"{"}</span>
        </span>
        <span className="flex">
          <span className="text-pink-500">return</span>
          <span className="text-blue-300">{"["}</span>
          <span className="flex flex-col text-white">
            <span>{" {2022-now - Front-end developer freelancer}"}</span>
            <span>{"{2017-2022 - Hardware Technician} "}</span>

            <span className="flex">
              <span className="text-blue-300">{"]"}</span>
              <span className="text-white">{"}"}</span>
            </span>
          </span>
        </span>
        <span className="flex">
          <span className="text-pink-500">const </span>{" "}
          <span className="text-yellow-400">SkillsData </span>
          <span className="text-white">{'='} </span>
          <span className="text-white">() {'=>'}</span>
          <span className="text-white"> {"{"}</span>
         
        </span>
        <span className="flex">
          <span className="text-pink-500">return</span>
          <span className="text-blue-300">{"["}</span>
          <span className="flex flex-wrap text-white">
            <p>
            &apos;React&apos;, &apos;Next.js&apos;, &apos;JavaScript&apos;, &apos;TypeScript&apos;, &apos;Tailwind-CSS&apos;,{" "}
            </p>
            <p>
              {" "}
              &apos;Github&apos;, &apos;Shadcn/ui&apos;, &apos;Next-Auth&apos;, &apos;ReactNative&apos;, &apos;ReactQuery&apos;,
             
            </p>
            <p>&apos;Angular&apos;, &apos;Figma&apos;,  &apos;Headless ui&apos;,</p>
            <span className="text-blue-300">{"]"}</span>
            <span className="text-white">{"}"}</span>
          </span>
        </span>
        <span className="text-pink-500 flex gap-2">
          export 
          <p className="text-red-400">{"{ PersonalInformation, WorkExperience, SkillsData }"}</p>
        </span>
      </pre>
    </div>
  );
}
