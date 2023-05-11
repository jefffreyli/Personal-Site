import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import PostComment from "./PostComment";

export default function Comments({ open, setOpen }) {
  // Mock data
  const comments = [
    {
      author: 'John Doe',
      date: 'May 10, 2023',
      text: 'This is a very insightful blog post, thanks for sharing!'
    },
    {
      author: 'Jane Doe',
      date: 'May 9, 2023',
      text: 'I learned a lot from this post, thank you!'
    },
    // more comments...
  ];

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setOpen}>
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0" />

          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="pointer-events-auto w-screen max-w-md">
                <div className="px-4 sm:px-6 flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                  <div className="">
                    <div className="flex items-start justify-between">
                      <h1 className="text-lg font-medium text-gray-900">
                        Comments
                      </h1>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          className="rounded-md bg-white text-gray-400 hover:text-gray-500"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="h-8"/>
                  <PostComment/>

                  
                  <div className="mt-4">
                    {comments.map((comment, index) => (
                      <div key={index} className="py-4 border-b border-gray-200">
                        <h2 className="text-sm font-semibold text-gray-700">{comment.author}</h2>
                        <p className="text-xs text-gray-500">{comment.date}</p>
                        <p className="mt-2 text-sm text-gray-800">{comment.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
