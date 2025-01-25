import Link from "next/link"
import { RockingChairIcon as ChairIcon, HomeIcon } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <ChairIcon className="mx-auto h-24 w-24 text-purple-600" />
          <h1 className="mt-6 text-4xl font-extrabold text-gray-900 sm:text-5xl">404 - Page Not Found</h1>
          <p className="mt-2 text-lg text-gray-600">
            Oops! It seems this piece of furniture is missing from our showroom.
          </p>
        </div>
        <div className="mt-8 space-y-4">
          <p className="text-sm text-gray-500">
            Do not worry, we have plenty of other beautiful pieces for you to discover.
          </p>
          <Link
            href="/#"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            <HomeIcon className="mr-2 -ml-1 h-5 w-5" aria-hidden="true" />
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}

