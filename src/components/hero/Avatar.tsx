import Image from "next/image";

export default function Avatar() {
  return (
    <div className="relative flex mt-6 border-border-subtle border-y">
      <div className="relative">
        {/* Inner circle mask */}
        <div className="w-40 h-40 border-r border-border-subtle flex items-center justify-center">
          <Image
            src="/me.png"
            alt="Abhishek Sonje"
            fill
            className="object-cover object-top rounded-full border border-border-subtle p-1"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col w-full justify-end">
        <h1 className="text-3xl font-medium text-foreground border-y border-border-subtle pl-4 py-2  ">
          Abhishek Sonje
        </h1>
        <p className="text-sm font-mono py-2 text-foreground-secondary pl-4">
          Frontend-focused Full-Stack Developer
        </p>
      </div>
    </div>
  );
}
