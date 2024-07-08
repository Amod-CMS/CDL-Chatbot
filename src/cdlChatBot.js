import React from 'react';
import { ThemeProvider } from 'styled-components';
import Chatbot from 'react-simple-chatbot';
import logo from './CMSlogo.png';
import botIcon from './botIcon.png';
import { useNavigate } from 'react-router-dom';

function Email() {
    return (
        <div className="Mail">
            <p>Thanks for using the CMSON, if you still have some queries, please mail it on <a href="mailto:demerger@cms.co.in" style={{ color: 'black' }}>demerger@cms.co.in</a> or choose from options below 👇.</p>
        </div>
    );
}

function ContactAnswerMail() {
    return (
        <div className="Mail">
            <p>You can send an email to <a href="mailto:demerger@cms.co.in" style={{ color: 'black' }}>demerger@cms.co.in</a>,Information related to policies procedures of the company, will continue to be available on CDL.</p>
        </div>
    );
}
const theme = {
    background: 'white',
    headerBgColor: '#923A39',
    headerFontSize: '20px',
    botBubbleColor: '#f1f0f0',
    headerFontColor: 'white',
    botFontColor: '#4b4a4a',
    userBubbleColor: '#923A39;',
    userFontColor: 'white',
};

const config = {
    floating: true,
};

function RedirectToChat() {
    const navigate = useNavigate();

    // Redirect to another JS file or component when called
    const redirectToChatFile = () => {
        navigate('D:/Chatbot/CDL/cdlchatbot/src/chat'); // Change '/ChatFile' to the path of your JavaScript file or component
    };

    return (
        <div>
            {/* Call redirectToChatFile when needed */}
            <button onClick={redirectToChatFile}>Redirect to Chat</button>
        </div>
    );
}

function CDLbot() {
    const handleBotIconClick = () => {
        // Redirect to the chat file or component
        return <RedirectToChat />;
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <Chatbot
                    height="500px"
                    width="600px"
                    botAvatar={logo}
                    headerTitle="CMSON"
                    {...config}
                    // opened={restartChat}
                    floatingIcon={<img src={botIcon} alt="Personalized Icon" className="personalized-icon" onClick={handleBotIconClick} />}
                    steps={[
                        {
                            "id": "welcomeMessage",
                            "message": "Welcome to the CMSON 😀. May I know your name? 🤔",
                            "trigger": "nameEntry"
                        },
                        {
                            "id": "nameEntry",
                            "user": true,
                            "trigger": "welcomeUser",
                            "placeholder": "Please enter your name",
                            "hideSubmitButton": false
                        },
                        {
                            "id": "welcomeUser",
                            "message": "Hello {previousValue} 👋👋!, What questions do you have about demergers 👀 ?",
                            "trigger": "faqList"
                        },
                        {
                            "id": "otherQuery",
                            "message": "Do you have any other query?",
                            "trigger": "queryYesNo"
                        },
                        {
                            "id": "queryYesNo",
                            "options": [
                                {
                                    "value": "Yes",
                                    "label": "Yes",
                                    "trigger": "faqList"
                                },
                                {
                                    "value": "No",
                                    "label": "No",
                                    "trigger": "noQueryMessage"
                                }
                            ]
                        },
                        {
                            "id": "noQueryMessage",
                            component: <Email />,
                            asMessage: true,
                            
                            // "trigger": "faqList"
                        },
                        {
                            "id": "faqList",
                            "options": [
                                {
                                    "value": "Employment 💼",
                                    "label": "Employment 💼",
                                    "trigger": "employmentList"
                                },
                                {
                                    "value": "Compensation and Benefits 🤑",
                                    "label": "Compensation and Benefits 🤑",
                                    "trigger": "c&bList"
                                },
                                {
                                    "value": "Attendance and Leaves 🛫",
                                    "label": "Attendance and Leaves 🛫",
                                    "trigger": "attenAndLeaveAns"
                                },
                                {
                                    "value": "Medi-Claim 🤒",
                                    "label": "Medi-Claim 🤒",
                                    "trigger": "mediClaimList"
                                },
                                {
                                    "value": "Business 👔",
                                    "label": "Business 👔",
                                    "trigger": "pubPvtAns"
                                },
                                {
                                    "value": "Stationery & Letter Heads ✏️",
                                    "label": "Stationery & Letter Heads ✏️",
                                    "trigger": "letterHeadAns"
                                },
                                {
                                    "value": "Company Certifications 📜",
                                    "label": "Company Certifications 📜",
                                    "trigger": "certiAns"
                                },
                                {
                                    "value": "Demerger Information 🔄",
                                    "label": "Demerger Information 🔄",
                                    "trigger": "demergeList"
                                },
                                {
                                    "value": "Client and Vendor Communication 📢",
                                    "label": "Client and Vendor Communication 📢",
                                    "trigger": "custAns"
                                }
                            ]
                        },
                        {
                            "id": "employmentList",
                            "options": [
                                {
                                    "value": "Do I have to give resignation letter?",
                                    "label": "Do I have to give resignation letter?",
                                    "trigger": "resignationAns"
                                },
                                {
                                    "value": "Will I get a new appointment letter? ",
                                    "label": "Will I get a new appointment letter? ",
                                    "trigger": "appointmentAns"
                                },
                                {
                                    "value": "Will there be change in my official e-mail ID?",
                                    "label": "Will there be change in my official e-mail ID?",
                                    "trigger": "emailAns"
                                },
                                {
                                    "value": "Will my visiting cards changed?",
                                    "label": "Will my visiting cards changed?",
                                    "trigger": "empVisitingAns"
                                },
                                {
                                    "value": "Will my employee code and ID card change?",
                                    "label": "Will my employee code and ID card change?",
                                    "trigger": "empNumChangeAns"
                                },
                                {
                                    "value": "Will there be any change in my job profile / office? ",
                                    "label": "Will there be any change in my job profile / office? ",
                                    "trigger": "profileChangeAns"
                                },
                                {
                                    "value": "What will happen to my employment post demerger?",
                                    "label": "What will happen to my employment post demerger?",
                                    "trigger": "postDemergerAns"
                                },
                                {
                                    "value": "Who will be the promoters of the demerged company?",
                                    "label": "Who will be the promoters of the demerged company?",
                                    "trigger": "ownerAns"
                                },
                                {
                                    "value": "Why was the demerger done and how does it benefit employees?",
                                    "label": "Why was the demerger done and how does it benefit employees?",
                                    "trigger": "benefitAns"
                                },
                                {
                                    "value": "Will my experience in the current company be considered as a continuous employment?",
                                    "label": "Will my experience in the current company be considered as a continuous employment?",
                                    "trigger": "ctsEmpAns"
                                }
                            ]
                        },
                        {
                            "id": "postDemergerAns",
                            "message": "Employees will be transferred to the newly formed entity (CMS Computers India Pvt.Ltd) with all existing employment T&Cs protected.",
                            "trigger": "otherQuery"
                        },
                        {
                            "id": "ownerAns",
                            "message": "The ownership of the company remains unchanged.",
                            "trigger": "otherQuery"
                        },
                        {
                            "id": "empNumChangeAns",
                            "message": "The employee code and ID cards remain unchanged.",
                            "trigger": "otherQuery"
                        },
                        {
                            "id": "profileChangeAns",
                            "message": "No, your job profile, work responsibilities and the office address remain unchanged.",
                            "trigger": "otherQuery"
                        },
                        {
                            "id": "resignationAns",
                            "message": "No, resignations will not be required.",
                            "trigger": "otherQuery"
                        },
                        {
                            "id": "appointmentAns",
                            "message": "An addendum to the appointment will be provided to employees which will have references to the demerger.",
                            "trigger": "otherQuery"
                        },
                        {
                            "id": "ctsEmpAns",
                            "message": "Yes, your tenure across current company and the demerged company will be considered for your continuous employment with CMS group.",
                            "trigger": "otherQuery"
                        },
                        {
                            "id": "emailAns",
                            "message": "No, there will be no change in the e-mail ids being used currently.",
                            "trigger": "otherQuery"
                        },
                        {
                            "id": "empVisitingAns",
                            "message": "Current visiting cards whereever applicable, can continue to be used till exhausted. All fresh visiting cards will be issued in the name of the demerged company.",
                            "trigger": "otherQuery"
                        },
                        {
                            "id": "benefitAns",
                            "message": "Given our diversified portfolio, it has become imperative to reorient in a manner allows us to impart greater focus, alignment.",
                            "trigger": "otherQuery"
                        },
                        {
                            "id": "c&bList",
                            "options": [
                                {
                                    "value": "Do I have to open separate bank account for salary?",
                                    "label": "Do I have to open separate bank account for salary?",
                                    "trigger": "salaryAccAns"
                                },
                                {
                                    "value": "How will demerger impact my current compensation?",
                                    "label": "How will demerger impact my current compensation?",
                                    "trigger": "cbImpactAns"
                                },
                                {
                                    "value": "What will happen to my Employee Provident Fund (EPF)?",
                                    "label": "What will happen to my Employee Provident Fund (EPF)?",
                                    "trigger": "epfANS"
                                },
                                {
                                    "value": "What will happen to my ESIC benefits?",
                                    "label": "What will happen to my ESIC benefits?",
                                    "trigger": "esicAns"
                                },
                                {
                                    "value": "How will it impact my gratuity?",
                                    "label": "How will it impact my gratuity?",
                                    "trigger": "gratuityAns"
                                },
                                {
                                    "value": "What about my statutory bonus?",
                                    "label": "What about my statutory bonus?",
                                    "trigger": "statutoryAns"
                                }
                            ]
                        },
                        {
                            "id": "salaryAccAns",
                            "message": "No, the current bank account will continue to be used for salary and benefits.",
                            "trigger": "otherQuery"
                        },
                        {
                            "id": "cbImpactAns",
                            "message": "Salary structure will remain unchanged from April 24 onwards pay slips will beissued under CMS Computers India Pvt.Ltd and Form 16 for FY 23-2 will be issued under CMS Computers Ltd.and for FY 24-25 will be issues under CMS Computers India Pvt Ltd. All supporting claim forms(FBR, Conveyance and LTA) can be downloaded from CDL.",
                            "trigger": "otherQuery"
                        },
                        {
                            "id": "epfANS",
                            "message": "The company will open a new EPFO account in your name. The new EPF No will be reflected on the Payslip. This new EPF number will need to be linked to the UAN (Universal Account Number). Once the employer links the new EPF Number to the current UAN, the employee must transfer the previous PF balance to the new PF account. This means that your accumulated PF balance would be reflected under your UAN. A detailed transfer process will be made available on CDL.",
                            "trigger": "otherQuery"
                        },
                        {
                            "id": "esicAns",
                            "message": "The ESIC coverage will continue as it is.The existing ESIC number remained unchanged. Employees will need to re-enroll their dependents in the respective ESIC state hospitals to comply with the procedures. A new card will be issued / or can be downloaded from the ESIC Website once the enrollment process is completed. A detailed ESIC transfer process is available on CDL.",
                            "trigger": "otherQuery"
                        },
                        {
                            "id": "gratuityAns",
                            "message": "Your gratuity entitlements remain unaffected.",
                            "trigger": "otherQuery"
                        },
                        {
                            "id": "statutoryAns",
                            "message": "Your statutory bonus entitlement wil remain as per the Payment of Bonus Act.",
                            "trigger": "otherQuery"
                        },
                        {
                            "id": "attenAndLeaveAns",
                            "message": "Your accumulated leave will be carried forward and remain available for you to utilize. The existing Leave Policy remains unchanged.",
                            "trigger": "otherQuery"
                        },
                        {
                            "id": "mediClaimList",
                            "options": [
                                {
                                    "value": "What will happen to Mediclaim?",
                                    "label": "What will happen to Mediclaim?",
                                    "trigger": "mediClaimAns"
                                },
                                {
                                    "value": "What will happen to my existing claim?",
                                    "label": "What will happen to my existing claim?",
                                    "trigger": "existingClaimAns"
                                }
                            ]
                        },
                        {
                            "id": "mediClaimAns",
                            "message": "There will be a continuation of the existing Group Mediclaim Insurance (GMC) coverage policy. All Mediclaim covered employees will continue to receive the same benefits and coverage as before.",
                            "trigger": "otherQuery"
                        },
                        {
                            "id": "existingClaimAns",
                            "message": "Mediclaim coverage will continue without interruption. Your existing / pending claims will be transferred to the new policy and will be processed and reimbursed according to the terms and conditions of the policy.",
                            "trigger": "otherQuery"
                        },
                        {
                            "id": "pubPvtAns",
                            "message": "This will have zero impact on our business. CMS Computers has scripted a business model over the last few years. Our strateg business units and practices are and collectively delivering consistent performance. are now a focused software and Services executing on our vision of simplifying leveraging cutting edge Digital technologies.",
                            "trigger": "otherQuery"
                        },
                        {
                            "id": "letterHeadAns",
                            "message": "Yes, there will be new Letter heads and stationery.",
                            "trigger": "otherQuery"
                        },
                        {
                            "id": "certiAns",
                            "message": "There will be a name change in the various certifications we hold. This has been taken care of. Kindly use the certificates with the new company name.",
                            "trigger": "otherQuery"
                        },
                        {
                            "id": "custAns",
                            "message": "Our organization has undergone demerger process under which the Business of CMS Computers Limited has been and transferred into CMS Computers Private Limited pursuant to the Demerger as approved by the Hon’ble NCLT, Bench. This demerger will help us capitalize on the opportunities provided by the leading to a superior experience for our customer and enhanced value for all stakeholders.",
                            "trigger": "otherQuery"
                        },
                        {
                            "id": "demergeList",
                            "options": [
                                {
                                    "value": "Will the Company's external identification details change?",
                                    "label": "Will the Company's external identification details change?",
                                    "trigger": "extIDans"
                                },
                                {
                                    "value": "Whom should I contact for more information on the demerger?",
                                    "label": "Whom should I contact for more information on the demerger?",
                                    "trigger": "contactAns"
                                }
                            ]
                        },
                        {
                            "id": "extIDans",
                            "message": "The Logo of the company will not change nor will our web site. However, we have new PAN numbers, GST numbers etc. which are required for smooth operations of demerged company. Kindly use them as henceforth.",
                            "trigger": "otherQuery"
                        },
                        {
                            "id": "contactAns",
                            component: <ContactAnswerMail />,
                            asMessage: true,
                            "trigger": "otherQuery"
                        }
                    ]}
                    placeholder="Choose from the options above ☝️"
                />
            </ThemeProvider>
        </>
    );
}

export default (CDLbot);