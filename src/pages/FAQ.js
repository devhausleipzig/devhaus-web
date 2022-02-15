import React, { useEffect, useRef } from "react";
import PageHeader from "components/PageHeader";
import { useTranslation } from 'react-i18next';
import Colcade from "colcade";

import "./FAQ.scss";

function GetQuestions() { 
    const { t } = useTranslation()

    return ([
        {
            "question": "What is a Code Camp?",
            "answer": [
                "A code camp is, traditionally, an intense training program where participants learn computer programming skills over a short period of time with the aim of preparing students for a technical job. For example, Devhaus Leipzig is a 6-month, full-time course training participants in full stack web development skills."
            ]
        },
        {
            "question": "What is Devhaus Leipzig?",
            "answer": [
                "Devhaus Leipzig is designed to help people gain technical skills that will allow them to successfully take on junior level development jobs, become tech literate for hybrid business and management roles, and become self-driven learners of programming. We do this through our curriculum design, relationships with companies, and our community approach to the classroom experience."
            ]
        },
        {
            "question": "How is Devhaus Leipzig different from other ways to learn coding?",
            "answer": [
                `Devhaus Leipzig provides a different learning experience from other coding education platforms because we are a short-term, company-driven and community-engaged, modern, in-person learning experience.`,
                `Universities, vocational training, and work-study programs provide a larger community and a degree of access to expert knowledge, as well as a certified degree that often bears social recognition. The downside is that these programs tend to lag behind on teaching to the latest standards, both pedagogically and in terms of the curriculum. Their students learn skills, often at great personal cost, that, at best, only partially satisfy the requirements many employers have.`,
                `Additionally, these programs tend to take years to complete and can be inaccessible for those who are looking to jump into a productive tech career more quickly or those who are older and already have life-style requirements, experience in other fields, and higher standards for their work environments.`
            ]
        },
        {
            "question": "How does Devhaus Leipzig compare to other coding bootcamps?",
            "answer": [
                `Our team is obsessive about quality and have put the bulk of our resources into consistently improving the learning experience with each course. Rather than have as many bootcamps as possible, we are working to build the best classroom possible.`,
                `We provide consistent and regular individual attention inside and outside of the classroom and take a collaborative approach to your learning path. One on one’s every two weeks, weekly retrospectives, and regular instructor feedback reports are a few of the ways we work with students to ensure learning success.`,
                `We build bridges between current students and alumni from day 1 with introductory activities, panels from alumni and professionals, workshops from hiring companies and more.`
            ]
        },
        {
            "question": "Do you offer part time courses?",
            "answer": [
                "We do not currently offer part-time courses, however, our friends at Coding Bootcamps Europe do and their team is great. Check them out here: https://www.coding-bootcamps.eu/"
            ]
        },
        {
            "question": "How does Devhaus Leipzig compare to other coding bootcamps?",
            "answer": [
                "Our team is obsessive about quality and have put the bulk of our resources into consistently improving the learning experience with each course. Rather than have as many bootcamps as possible, we are working to build the best classroom possible.",
                "We provide consistent and regular individual attention inside and outside of the classroom and take a collaborative approach to your learning path. One on one’s every two weeks, weekly retrospectives, and regular instructor feedback reports are a few of the ways we work with students to ensure learning success.",
                "We build bridges between current students and alumni from day 1 with introductory activities, panels from alumni and professionals, workshops from hiring companies and more."
            ]
        },
        {
            "question": "How do I apply?",
            "answer": [
                "Click the “Apply Now” button on the Devhaus Academy page [https://devhausleipzig.typeform.com/to/oKd3gzOr] and finish the form. Once you have done so, you are officially in the application process."
            ]
        },
        {
            "question": "When does the next camp start?",
            "answer": [
                "The Summer/Fall camp will begin April 21, 2022."
            ]
        },
        {
            "question": "When do applications open and what is the process?",
            "answer": [
                "Devhaus Leipzig accepts applications on a continuous basis. We then set cutoff dates after which applications are rolled over and considered for the proceeding camp.",
                "The deadline for being considered for the Winter/Spring camp of 2022 is January 7th."
            ]
        },
        {
            "question": "What kind of experience or knowledge do I need to participate in Devhaus Leipzig?",
            "answer": [
                "We accept people from all walks of life and all levels of experience! There are no hard technical or mathematical requirements for acceptance into a Devhaus Leipzig program.",
                "However, it will be generally expected that you have a firm grasp of high school mathematics. If you are accepted into a program and are feeling a little rusty mathematically, no worries; you will be given resources in the weeks leading up to the start of that program to review your fundamental math skills. We also expect that students are familiar with computers, are comfortable typing, and can easily navigate modern digital interfaces."
            ]
        },
        {
            "question": "What do we look for?",
            "answer": [
                "Our ideal candidate is someone who enjoys solving problems, is open to other lifestyles and personality types, has some appetite for novelty and new ideas, cares about something beyond their immediate environment, and has some awareness of who they are as a person and why they do what they do.",
                "These values are what we believe makes a great learning environment for both students and instructors. Because we see classrooms as teams that support one another throughout the camp, selecting for these values is a core element of our process."
            ]
        },
        {
            "question": "Do I have to be in Germany physically to attend?",
            "answer": [
                "Living in Germany is not a requirement for attending the course. Our classroom  and team are fully accessible remotely."
            ]
        },
        {
            "question": "How can I pay for the course?",
            "answer": [
                "For Job Center eligible participants, we will accept a Bildungsgutschein for our courses that will cover the cost of tuition as well as your living expenses.",
                "SAB (React EU) offers up to 80% tuition reimbursement for employed individuals making approximately 3.300 euros/month. More information here: https://www.sab.sachsen.de/f%C3%B6rderprogramme/sie-planen-ihre-mitarbeiter-oder-sich-selbst-weiterzubilden/individuell-berufsbezogene-weiterbildung.jsp#tab_program_examples",
                "Payment Plans can be created for individuals who are unable to cover the cost of the course on our standard payment schedule. These are offered on a case by case basis. ",
                "To learn more about what options might be suitable for you, schedule a talk with one of our team members: https://calendly.com/devhaus-leipzig/devhaus-1-on-1"
            ]
        },
        {
            "question": "How likely is it that I will get a job through Devhaus Leipzig?",
            "answer": [
                "Technical positions are in high demand globally; this is especially the case in Leipzig.",
                "Over 90% of our job seeking graduates have found employment in technical positions through the network we’ve built within Devhaus Leipzig or through their own job search."
            ]
        },
        {
            "question": "What kind of jobs can I get by participating in Devhaus Leipzig? ",
            "answer": [
                "Our Academy is focused on preparing graduates for a Junior Front-end Developer role. However, graduates are able to combine existing skills or interests with programming knowledge to empower them to take other positions, such as Team Lead, Scrum Master, Back-end Developer, Technical Sales or Quality Assurance."
            ]
        },
        {
            "question": "What kind of jobs can I get by participating in Devhaus Leipzig?",
            "answer": [
                "Our Academy is focused on preparing graduates for a Junior Front-end Developer role. However, graduates are able to combine existing skills or interests with programming knowledge to empower them to take other positions, such as Team Lead, Scrum Master, Back-end Developer, Technical Sales or Quality Assurance."
            ]
        },
        {
            "question": "Will I get to interact with companies during Devhaus Leipzig?",
            "answer": [
                "Yes, and plenty. We aim to provide students with opportunities to develop relationships with folks in the tech community throughout the camp.",
                "Our curriculum thrives on interactions with team members from other companies. We regularly invite guest lecturers for specialized topics and host panel discussions featuring professionals from various backgrounds. Additionally, we invite company representatives for Career Development days and Hackathons as mentors for activities."
            ]
        },
        {
            "question": "Can I offer projects/internships/jobs to Devhaus Leipzig graduates?",
            "answer": [
                "Of course! Reach out to info@devhausleipzig.de and we will help you find the right match."
            ]
        },
        {
            "question": "What do you teach at Devhaus Leipzig?",
            "answer": [
                "We teach the skills and tools required to design, build and deploy web applications and web sites in a professional setting. Programming tools you will learn include. Git, HTML, CSS, Typescript/Javascript, Vue.js, React.js, PostgreSQL, Jest and Docker.",
                "Design tools taught include Design Thinking, user research and testing, and Figma. Team skills include roles and rituals within the Agile and Scrum frameworks, such as Daily Stand-ups and Retrospectives."
            ]
        },
        {
            "question": "What will I learn as a student of Devhaus Leipzig?",
            "answer": [
                "Graduates from our Academy will:",
                "Be able to confidently build and design simple web sites and web applications.",
                "Have familiarity with tools and workflows used by professionals",
                "Develop technical vocabulary to have constructive discussions with team members",
                "Know how to network in the tech community",
                "Learn what activities they like and dislike as a programmer"
            ]
        },
        {
            "question": "What is the teaching style of Devhaus Leipzig?",
            "answer": [
                "Our learning methodology is based in the learning sciences, specifically Rosenshine principles of effective teaching using worked examples of authentic tasks and gradual fading towards independent practice. We train our students to be aware of the problems they are solving. This approach empowers graduates to adapt their tool set to the problem, an essential mindset in an ever changing tech landscape.",
                "Students are also supported to learn how to learn. Teaching students to be self-directed encourages the autonomy expected in professional environments, where active problem solving is the norm.",
                "Finally, and one of the main reasons we teach over 23 weeks, is that we help students build programming as a habit. Our curriculum is extremely hands on with half of our time together spent on projects."
            ]
        },
        {
            "question": "How can I become an instructor or guest lecturer at Devhaus Leipzig?",
            "answer": [
                "Reach out to franz@devhausleipzig.de to share the skills you’d like to share and how you’d like to be involved."
            ]
        },
        {
            "question": "Can I still be a part of Devhaus Leipzig after graduation?",
            "answer": [
                "Graduates immediately become alumni of Devhaus, which means that they will be invited to special events and gatherings with other alumni, Devhaus team members, and partner companies. Additionally, alumni will be invited to interact with future classes as mentors, teachers, or speakers."
            ]
        },
        {
            "question": "How can I spend time with Devhaus Leipzig students or teachers to get a feel for what it’s like?",
            "answer": [
                "Join our mailing list or check in on our Events (link) page to see when we have activities, such as Info Days, Open House, or panel discussions. We almost always have instructors or alumni join these events as participants or in the audience."
            ]
        },
        {
            "question": "How can my organization work with Devhaus Leipzig?",
            "answer": [
                "We regularly invite guests to teach, mentor, or share experiences in our Academy. Activities, such as hackathons, career days, and social events are often designed with partners. Reach out to info@devhausleipzig.de with any ideas or requests for collaboration."
            ]
        },
        {
            "question": "Can I offer projects/internships/jobs to Devhaus Leipzig graduates?",
            "answer": [
                "Of course! Reach out to taylor@devhausleipzig.de to discuss matching you with individual students.",
                "If you have a software project you would like to have developed, then our Studio might be a fit to help you bring it to life. Contact studio@devhausleipzig.de"
            ]
        },
        {
            "question": "I want to write a story about Devhaus Leipzig, how can I make this happen?",
            "answer": [
                "Reach out to taylor@devhausleipzig.de to get access to our press kit or to discuss your project."
            ]
        }
    ])
}

function Question({ question, answer }) {
    return (
        <div className="question grid-item">
            <h3 style={{display: "block"}}><strong>{question}</strong></h3>
            {answer.map(piece => <p style={{display: "block"}}>{piece}</p>)}
        </div>
    );
}

export default function Questions() {
    useEffect( () => {
        let colc = new Colcade( '.grid', {
            columns: '.grid-col',
            items: '.grid-item'
        });
    })

    return (
        <div className="questions navbar-padding content">
        <PageHeader title="FAQ" color="red"></PageHeader>
            <div className="grid question-grid">
                <div class="grid-col grid-col--1"></div>
                <div class="grid-col grid-col--2"></div>
                {GetQuestions().map((question) => Question(question))}
            </div>
        </div>
    );
}
