import { GlobeAltIcon,AcademicCapIcon } from '@heroicons/react/24/outline';
// import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      // className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
      className={`  flex flex-col items-center  justify-center leading-none text-white`}
    >
      <AcademicCapIcon className="w-42 h-32 rotate-[15deg]" />
      <p className="text-[18px]">Apply Abroad</p>
    </div>
  );
}
