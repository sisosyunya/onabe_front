import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { useSpring, animated } from '@react-spring/web';
import { useNavigate } from 'react-router-dom';

type DiscloseMenuProps = {
    question: string;
    answer: string | null;
    questionId?: string;
};

export function DiscloseMenu({ question, answer, questionId }: DiscloseMenuProps): JSX.Element {
    const navigate = useNavigate();
    return (
        <div className="mx-auto rounded-2xl bg-white shadow">
            <Disclosure>
            {({ open }: { open: boolean }) => {
                    const animationStyle = useSpring({
                        from: { opacity: 0, height: 0 },
                        to: { opacity: open ? 1 : 0, height: open ? 'auto' : 0 },
                    });
                    return (
                        <>
                            <Disclosure.Button onClick={()=>{(!answer && questionId) && navigate(`/makeAnswer/${questionId}`)}} className="flex w-full justify-between rounded-lg px-4 py-3 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                <span>{question}</span>
                                <ChevronUpIcon
                                    className={`${open ? 'transform rotate-180' : ''} transition-transform duration-200 h-5 w-5 text-purple-500`}
                                />
                            </Disclosure.Button>
                            <animated.div style={animationStyle}>
                                <Disclosure.Panel className="px-4 pb-3 pt-2 text-sm text-gray-600 break-words whitespace-pre-wrap">
                                    {answer ?? "回答がありません。"}
                                </Disclosure.Panel>
                            </animated.div>
                        </>
                    );
                }}
            </Disclosure>
        </div>
    );
}
