// @ts-nocheck
import { useEffect, useRef, useState, forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { Transition } from "@headlessui/react";

function useOutsideAlerter(ref, cb) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        cb();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, cb]);
}

function InputField(type, id, name, label, placeholder, color) {
  return (
    <div className={
      `group bg-white h-8 rounded-md border-2 border-gray-500

      before:absolute before:h-full before:rounded-md before:border-2 before:border-${color} before:opacity-0 before:hidden before:transition before:ease-linear before:duration-500 before:transform before:scale-x-110 before:scale-y-125 before:group-focus:opacity-100 before:group-focus:block before:group-focus:scale-x-100 before:group-focus:scale-y-100`
    }>
      <label className="hidden" htmlFor={id}>
        {label}
      </label>
      <input
          className="block h-full text-gray-600 p-6"
          type={type}
          value=""
          name={name}
          id={id}
          placeholder={placeholder}
        />
    </div>
  )
}

function Checkbox(id, name, label, color){
  return (
    <div className="text-left">
      <label 
        className={
          `group block cursor-pointer w-6 h-6
          
          before:absolute before:h-full before:rounded-md before:border-2 before:border-${color} before:opacity-0 before:hidden before:transition before:ease-linear before:duration-500 before:transform before:scale-x-110 before:scale-y-125 before:group-focus:opacity-100 before:group-focus:block before:group-focus:scale-x-100 before:group-focus:scale-y-100`
        }
        htmlFor={id} // "gdpr_29201"
      >
        <input 
          className={
            `peer rounded-md block absolute opacity-0 w-full h-full`
          }
          type="checkbox"
          id={id}
          name={name} // "gdpr[29201]"
          value="Y"
        />
        <span 
          className={
            `rounded-md border-2 block absolute w-full h-full bg-white border-gray-500

            before:absolute before:left-3 before:top-3 before:h-0 before:w-0 before:rounded-md before:border-gray-500 before:transform before:scale-0 before:opacity-100

            peer-checked:before:z-50 peer-checked:before:pointer-events-none peer-checked:before:transition-all peer-checked:before:ease-out peer-checked:before:duration-300 peer-checked:before:w-6 peer-checked:before:h-6 peer-checked:before:-top-1 peer-checked:before:-left-1 peer-checked:before:transform peer-checked:before:scale-300 peer-checked:before:opacity-0 

            after:absolute after:bg-transparent after:transition-all after:ease-out after:duration-300 after:top-3 after:left-3 after:h-0 after:w-0 after:border-2 after:border-gray-800 after:border-r-4 after:border-b-4 after:transform after:rotate-0

            peer-checked:after:rotate-45 peer-checked:after:top-1 peer-checked:after:left-2 peer-checked:after:h-3 peer-checked:after:w-2 peer-checked:after:border-b-3 peer-checked:after:border-r-3`
          }
        >
        </span>
      </label>

      <div className="font-bold">{label}</div>
    </div>
  )
}

function SubmitButton(id, name, value, color){
  return (
    <div className="w-full">
      <input
        className=""
        id={id}
        type="submit"
        value={value}
        name={name}
      />
    </div>
  )
}

const MailchimpForm = forwardRef(({ shouldFocus, onFocus, onSubmit }, ref) => {
  const { t } = useTranslation();
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current && shouldFocus) {
      onFocus();
      inputRef.current.focus();
    }
  }, [inputRef, shouldFocus, onFocus]);

  return (
    <div id="mc_embed_signup" className="max-w-screen-sm flex flex-col flex-wrap justify-between text-left text-sm">
      <form
        ref={ref}
        action="https://codecampleipzig.us20.list-manage.com/subscribe/post?u=61cee2c8c87e614439e8d0d6d&amp;id=40833812ed"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
        noValidate
        onSubmit={onSubmit}
      >

        <InputField className="pb-2.5"
        type="email" id="mce-EMAIL" name="EMAIL" label={t("newsletter:signup.email.label")} placeholder={t("newsletter:signup.email.placeholder")}></InputField>
        
        <InputField className="pb-2.5"
        type="text" id="mce-FNAME" name="FNAME" label={t("newsletter:signup.fname.label")} placeholder={t("newsletter:signup.fname.placeholder")}></InputField>
        
        <InputField className="pb-2.5"
        type="text" id="mce-LNAME" name="LNAME" label={t("newsletter:signup.lname.label")} placeholder={t("newsletter:signup.lname.placeholder")}></InputField>

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

        <label className="font-bold">Marketing Permissions</label>
        <p>Please select all the ways you would like to hear from Devhaus Leipzig:</p>
        <fieldset name="interestgroup_field">
          <Checkbox id="gdpr_29201"  name="gdpr[29201]" label="Newsletter Emails" color="yellow"></Checkbox>
          <Checkbox id="gdpr_29205"  name="gdpr[29205]" label="Direct Emails" color="red"></Checkbox>
        </fieldset>

        <SubmitButton id="mc-embedded-subscribe" name="subscribe" value="Subscribe"></SubmitButton>
    </form>
  </div>
  )
});

export default function NewsletterForm() {
  const { t } = useTranslation();
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const formRef = useRef(null);
  useOutsideAlerter(formRef, () => {
    setIsSubscribing(false);
  });

  const [shouldFocus, setShouldFocus] = useState(false);

  return (
    // TODO: Build popup to have more engagement for subscribing
    // TODO: Build modal for subscribing
    <>
      <Transition
        show={isSubscribing}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-1"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-1"
        leaveTo="opacity-0"
      >
        <div key="form">
          <MailchimpForm
            ref={formRef}
            shouldFocus={shouldFocus}
            onFocus={() => setShouldFocus(false)}
            onSubmit={() => {
              setIsVisible(false);
              setTimeout(() => {
                setIsSubscribing(false);
                setIsVisible(true);
              }, 0);
            }}
          />
        </div>
      </Transition>
      <Transition
        show={!isSubscribing}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-1"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-1"
        leaveTo="opacity-0"
      >
        <button
          key="button"
          className="newsletter-subscribe text-lg hover:text-gray-900"
          onClick={() => {
            setShouldFocus(true);
            setIsSubscribing(true);
          }}
        >
          {t("newsletter:callToAction")}
        </button>
      </Transition>
    </>
  );
}