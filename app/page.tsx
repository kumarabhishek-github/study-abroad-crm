"use client"
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from './ui/button';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            Our Mission is to Educate the World.
            <a href="/" className="p-2 text-blue-500">
              Study Abroad
            </a>
          </p>
        </div>
        <div className="flex items-center justify-center gap-3 p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Button>
            <a href={'/login'}> Im' a Student</a>
          </Button>
          <Button>
            <a href={'/login'}> Im' an Agent</a>
          </Button>
        </div>
      </div>
    </main>
  );
}
