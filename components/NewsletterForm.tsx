// @ts-nocheck
import { useEffect, useRef, useState, forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { Transition } from "@headlessui/react";
import { Dialog } from '@headlessui/react'

function InputField({type, id, name, label, placeholder, color}) {
  const [value, setValue] = useState("")

  return (
    <div>
      <label className="hidden" htmlFor={id}>
        {label}
      </label>
      <input
          className="
          text-gray-600 w-full ring-red/0 border-gray-500 ring-opacity-0 ring-offset-8 transition duration-500 ring-2 border-2 rounded-md
          
          focus:border-gray-500/0 focus:ring-red focus:ring-offset-0 focus:ring-opacity-100 focus:ring-2
          "
          type={type}
          value={value}
          name={name}
          id={id}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
        />
    </div>
  )
}

function Checkbox({id, name, label, color}){
  const [checked, setChecked] = useState(true)

  return (
    <div>
      <div className="text-left flex items-left">
        <label 
          className={
            `block relative cursor-pointer w-6 h-6
            
            before:absolute before:h-full before:rounded-md before:border-2 before:border-${color} before:opacity-0 before:hidden before:transition before:ease-linear before:duration-500 before:transform before:scale-x-110 before:scale-y-125 before:group-focus:opacity-100 before:group-focus:block before:group-focus:scale-x-100 before:group-focus:scale-y-100`
          }
          htmlFor={id}
        >
          <input 
            className={
              `peer rounded-md block absolute opacity-0 w-full h-full`
            }
            type="checkbox"
            id={id}
            name={name} // "gdpr[29201]"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <span 
            className={
              `inset-0 border-2 border-gray-500 block absolute w-full h-full bg-white text-gray-600 ring-transparent peer-focus:border-gray-500/0 peer-focus:ring-red ring-opacity-0 ring-offset-10 peer-focus:ring-offset-0 peer-focus:ring-opacity-100 transition duration-500 ring-2 rounded-md

              after:absolute after:bg-transparent after:transition-all after:ease-linear after:duration-200 after:top-2.5 after:left-2.5 after:h-0 after:w-0 after:border-r-4 after:border-b-4 after:transform after:rotate-0 after:opacity-0

              peer-checked:after:rotate-45 peer-checked:after:top-0.5 peer-checked:after:left-1.5 peer-checked:after:h-3 peer-checked:after:w-2 peer-checked:after:border-b-2 peer-checked:after:border-r-2 peer-checked:after:opacity-100 `
            }
          >
          </span>
        </label>

        <div className="font-bold ml-2">{label}</div>
      </div>
    </div>
  )
}

function SubmitButton({id, name, value, color}){
  return (
    <input
      className="h-12 w-full justify-center text-lg bg-gray-500 text-white rounded-md"
      id={id}
      type="submit"
      value={value}
      name={name}
    />
  )
}

function MailchimpForm() {
  const { t } = useTranslation();

  return (
    <div id="mc_embed_signup" className="max-w-screen-sm flex flex-col justify-between text-sm bg-offWhite m-6">
      <form
        action="https://codecampleipzig.us20.list-manage.com/subscribe/post?u=61cee2c8c87e614439e8d0d6d&amp;id=40833812ed"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
        noValidate
        className="space-y-4"
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
        
        <div className="mx-5">
          <label className="font-bold">Marketing Permissions</label>
          <p>Please select all the ways you would like to hear from Devhaus Leipzig:</p>
          <fieldset name="interestgroup_field">
            <Checkbox className="mb-3 mt-3 mr-3"
            id="gdpr_29201"  name="gdpr[29201]" label="Newsletter Emails" color="yellow"></Checkbox>
            
            <Checkbox className="mb-3 mt-3 mr-3"
            id="gdpr_29205"  name="gdpr[29205]" label="Direct Emails" color="red"></Checkbox>
          </fieldset>
        </div>

        <SubmitButton id="mc-embedded-subscribe" name="subscribe" value="Subscribe"></SubmitButton>

        <p className="text-xs">
          We use Mailchimp as our marketing platform. By clicking above to
          subscribe, you acknowledge that your information will be transferred
          to Mailchimp for processing. <a className="text-gray-800"target="_blank" rel="noopener noreferrer" href="https://mailchimp.com/legal/">Learn more about Mailchimp's privacy practices here.</a>
        </p>
        <p className="text-xs">
          You can unsubscribe at any time by clicking the link in the footer
          of our emails.
        </p>
    </form>
  </div>
  )
}

export default function NewsletterForm() {
  const { t } = useTranslation();
  let [isOpen, setIsOpen] = useState(false)

  return (
    // TODO: Build popup to have more engagement for subscribing
    // TODO: Build modal for subscribing
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed z-10 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center h-full w-full bg-gray-700/80">
          <Dialog.Overlay className="fixed inset-0"/>

          <div className="w-3/5 bg-offWhite flex flex-col items-center justify-center m-18">
          <Dialog.Title className="text-lg">Newsletter</Dialog.Title>
          <Dialog.Description className="text-md">
            Stay in touch!
          </Dialog.Description>
            
            <MailchimpForm/>

            <button onClick={() => setIsOpen(false)}>Cancel</button>
          </div>
        </div>
      </Dialog>

      <button onClick={() => setIsOpen(true)}>Subscribe!</button>
    </>
  );
}