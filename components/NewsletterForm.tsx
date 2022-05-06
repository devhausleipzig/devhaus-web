// @ts-nocheck
import { useEffect, useRef, useState, forwardRef, Fragment } from "react";
import { useTranslation } from "react-i18next";
import { Transition } from "@headlessui/react";
import { Dialog } from "@headlessui/react";

function InputField({ type, id, name, label, placeholder, color }) {
  const [value, setValue] = useState("");

  return (
    <div>
      <label className="hidden" htmlFor={id}>
        {label}
      </label>
      <input
        className="
          w-full rounded-md border-2 border-gray-500 text-gray-600 ring-2 ring-blue/0 ring-opacity-0 ring-offset-8 transition duration-500
          
          focus:border-gray-500/0 focus:ring-2 focus:ring-blue focus:ring-opacity-100 focus:ring-offset-0
          "
        type={type}
        value={value}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

function Checkbox({ id, name, label, color }) {
  const [checked, setChecked] = useState(true);

  return (
    <div>
      <div className="items-left flex text-left">
        <label
          className={`relative block h-6 w-6 cursor-pointer
            
            before:absolute before:h-full before:rounded-md before:border-2 before:border-${color} before:scale-x-110 before:scale-y-125 before:group-focus:scale-x-100 before:group-focus:scale-y-100 before:hidden before:transform before:opacity-0 before:transition before:duration-500 before:ease-linear before:group-focus:block before:group-focus:opacity-100`}
          htmlFor={id}
        >
          <input
            className={`peer absolute block h-full w-full rounded-md opacity-0`}
            type="checkbox"
            id={id}
            name={name} // "gdpr[29201]"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <span
            className={`ring-offset-10 absolute inset-0 block h-full w-full rounded-md border-2 border-gray-500 bg-white text-gray-600 ring-2 ring-transparent ring-opacity-0 transition duration-500 after:absolute after:top-2.5 after:left-2.5 after:h-0

              after:w-0 after:rotate-0 after:transform after:border-r-4 after:border-b-4 after:bg-transparent after:opacity-0 after:transition-all after:duration-200 after:ease-linear peer-checked:after:top-0.5 peer-checked:after:left-1.5 peer-checked:after:h-3 peer-checked:after:w-2

              peer-checked:after:rotate-45 peer-checked:after:border-b-2 peer-checked:after:border-r-2 peer-checked:after:opacity-100 peer-focus:border-gray-500/0 peer-focus:ring-blue peer-focus:ring-opacity-100 peer-focus:ring-offset-0 `}
          ></span>
        </label>

        <div className="ml-2 font-bold">{label}</div>
      </div>
    </div>
  );
}

function SubmitButton({ id, name, value, color }) {
  return (
    <input
      className="h-12 w-full justify-center rounded-md bg-gray-500 text-lg text-white transition duration-300 ease-linear hover:bg-gray-700"
      id={id}
      type="submit"
      value={value}
      name={name}
    />
  );
}

function MailchimpForm() {
  const { t } = useTranslation();

  return (
    <div
      id="mc_embed_signup"
      className="m-6 flex max-w-screen-sm flex-col justify-between bg-offWhite text-sm"
    >
      <form
        action="https://codecampleipzig.us20.list-manage.com/subscribe/post?u=61cee2c8c87e614439e8d0d6d&amp;id=40833812ed"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
        noValidate
        className="space-y-4"
      >
        <InputField
          className="pb-2.5"
          type="email"
          id="mce-EMAIL"
          name="EMAIL"
          label={t("newsletter:signup.email.label")}
          placeholder={t("newsletter:signup.email.placeholder")}
        ></InputField>

        <InputField
          className="pb-2.5"
          type="text"
          id="mce-FNAME"
          name="FNAME"
          label={t("newsletter:signup.fname.label")}
          placeholder={t("newsletter:signup.fname.placeholder")}
        ></InputField>

        <InputField
          className="pb-2.5"
          type="text"
          id="mce-LNAME"
          name="LNAME"
          label={t("newsletter:signup.lname.label")}
          placeholder={t("newsletter:signup.lname.placeholder")}
        ></InputField>

        {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups
        <div
          style="position: absolute; height: 0px; width: 0px;"
          aria-hidden="true"
        >
          <input
            type="text"
            name="b_7428b875420c727e502ec32e3_ade848e8bd"
            tabIndex="-1"
            value=""
          />
        </div> */}

        <div className="mx-5">
          <label className="font-bold">Marketing Permissions</label>
          <p>
            Please select all the ways you would like to hear from Devhaus
            Leipzig:
          </p>
          <fieldset name="interestgroup_field">
            <Checkbox
              className="mb-3 mt-3 mr-3"
              id="gdpr_29201"
              name="gdpr[29201]"
              label="Newsletter Emails"
              color="yellow"
            ></Checkbox>

            <Checkbox
              className="mb-3 mt-3 mr-3"
              id="gdpr_29205"
              name="gdpr[29205]"
              label="Direct Emails"
              color="red"
            ></Checkbox>
          </fieldset>
        </div>

        <SubmitButton
          id="mc-embedded-subscribe"
          name="subscribe"
          value="Subscribe"
        ></SubmitButton>

        <p className="text-xs">
          We use Mailchimp as our marketing platform. By clicking above to
          subscribe, you acknowledge that your information will be transferred
          to Mailchimp for processing.{" "}
          <a
            className="text-gray-800"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mailchimp.com/legal/"
          >
            Learn more about Mailchimp's privacy practices here.
          </a>
        </p>
        <p className="text-xs">
          You can unsubscribe at any time by clicking the link in the footer of
          our emails.
        </p>
      </form>
    </div>
  );
}

export default function NewsletterForm() {
  const { t } = useTranslation();
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    // TODO: Build popup to have more engagement for subscribing
    // TODO: Build modal for subscribing
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 h-full w-full bg-gray-700/80" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Stay in touch!
                </Dialog.Title>
                <div className="mt-2">
                  <MailchimpForm />
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="text-blue-900 bg-blue-100 hover:bg-blue-200 focus-visible:ring-blue-500 inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      {/* <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed z-10 inset-0 overflow-y-auto"
      >
        <Dialog.Overlay className="fixed inset-0"/>
        <div className="flex items-center justify-center h-full w-full bg-gray-700/80">

          <div className="w-3/5 bg-offWhite flex flex-col items-center justify-center m-18">
          <Dialog.Title className="text-lg">Newsletter</Dialog.Title>
          <Dialog.Description className="text-md">
            Stay in touch!
          </Dialog.Description>
            
            <MailchimpForm/>

            <button onClick={() => setIsOpen(false)}>Cancel</button>
          </div>
        </div>
      </Dialog> */}

      <button onClick={() => setIsOpen(true)}>
        {">> Subscribe to our Newsletter! <<"}
      </button>
    </>
  );
}
