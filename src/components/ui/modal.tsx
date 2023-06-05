import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { type PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  title: string;
  isOpen: boolean;
  handleClose: () => void;
}>;

// TODO: add cool transition
export default function Modal({ title, isOpen, handleClose, children }: Props) {
  return (
    <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center">
        <Dialog.Panel className="w-11/12 sm:w-6/12 bg-white rounded-xl p-4 shadow-md">
          <div className="flex justify-between">
            <Dialog.Title className="text-2xl text-primary font-bold">
              {title}
            </Dialog.Title>
            <button onClick={handleClose} className="focus:outline-none">
              <XMarkIcon className="h-8 w-8" />
            </button>
          </div>
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
