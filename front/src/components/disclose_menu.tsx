import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

type DiscloseMenuProps = {
    question: string;
    answer: string;
};

export function DiscloseMenu({ question, answer }: DiscloseMenuProps): JSX.Element {
    return (
        // <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        <div className="mx-auto rounded-2xl bg-white">
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                            <span>{question}</span>
                            <ChevronUpIcon
                                className={`${open ? 'rotate-180 transform' : ''
                                    } h-5 w-5 text-purple-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                            {answer}
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    )
}