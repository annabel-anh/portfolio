import {Dialog, DialogPanel} from '@headlessui/react'
import {IoCloseOutline} from 'react-icons/io5';
import NavLinks from './NavLinks'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import SocialIconLink from './SocialIconLink.jsx';

export default function MobileMenu({open, setOpen}) {
    return (
        <Dialog open={open} onClose={setOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50"/>
            <DialogPanel
                className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-navy-blue text-beige px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-light-blue/10">
                <div className="flex items-center justify-between">
                    <a href="#" className="-m-1.5 p-1.5 font-mono" onClick={() => setOpen(false)}>
                        <span className="sr-only">Quynh Anh Ninh</span>
                        qanh.ninh
                    </a>
                    <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="-m-2.5 rounded-md p-2.5"
                    >
                        <span className="sr-only">Close menu</span>
                        <IoCloseOutline aria-hidden="true" className="h-6 w-6"/>
                    </button>
                </div>
                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-light-blue/10">
                        <NavLinks className="space-y-2 py-6" mobile setOpen={setOpen}/>
                        <div className="py-6 flex gap-2">
                            <SocialIconLink href={"https://www.linkedin.com/in/quynhanhninh151/"} icon={<FaLinkedinIn />} className={"mr-5"} />
                            <SocialIconLink href={"https://github.com/annabel-anh"} icon={<FaGithub />} />
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    )
}