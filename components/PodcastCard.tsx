export default function Page() {
  return (
    <>
      <div className="w-87.5 flex flex-wrap flex-col-reverse h-56 rounded-xl space-x-3">
        
        <div className="p-6 rounded-2xl flex justify-center bg-white flex-col">
          <iframe
            className="rounded-lg"
            height="h-36"
            width="w-[200px]"
            src="https://www.youtube.com/embed/dRXq81Om2a4?si=mkYX2vZvR6ZjPf8-"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          />
          <p className="font-mono text-sm text-gray-400">
            How a 21-Year-Old Got an ₹80 LPA Offer (Before Degree!)
          </p>
        </div>
        <div className="p-6 rounded-2xl flex bg-white justify-center flex-col">
          <iframe
            className="rounded-lg"
            height="h-36"
            width="w-[200px]"
            src="https://www.youtube.com/embed/dRXq81Om2a4?si=mkYX2vZvR6ZjPf8-"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          />
          <p className="font-mono text-sm text-gray-400">
            How a 21-Year-Old Got an ₹80 LPA Offer (Before Degree!)
          </p>
        </div>
      </div>
    </>
  );
}
