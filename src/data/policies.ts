export interface PolicyContent {
  id: string;
  title: string;
  lastUpdated: string;
  sections: {
    title: string;
    content: string[];
  }[];
}

export const policies: PolicyContent[] = [
  {
    id: 'privacy-policy',
    title: 'Privacy Policy',
    lastUpdated: 'May 1, 2026',
    sections: [
      {
        title: 'Information Collected',
        content: [
          'Hotel Goyal Palace ("we," "us," or "our") collects personal information when you use our website or services. This includes personal identification information (name, email address, phone number), payment information, Government-issued identification (such as Aadhar card, Passport, or Driver\'s License) as required by Indian law, and booking details.',
          'We also automatically collect information about your device, including IP address, browser type, and operating system when you visit our website.',
        ],
      },
      {
        title: 'Guest Data Handling',
        content: [
          'We use the collected information to process reservations, provide requested services, personalize your hotel experience, and communicate with you regarding your stay.',
          'Guest data is handled with strict confidentiality and is accessed only by authorized personnel for legitimate business purposes.',
        ],
      },
      {
        title: 'Booking Information & Contact Form Submissions',
        content: [
          'Information provided during the booking process or through our contact forms is used solely to fulfill your requests, answer inquiries, and ensure a smooth stay. We do not sell your contact information to third-party marketers.',
        ],
      },
      {
        title: 'Cookies & Analytics Usage',
        content: [
          'Our website uses cookies to enhance user experience, remember preferences, and track website usage patterns. We use third-party analytics tools (such as Google Analytics) to understand how visitors interact with our website to improve our services.',
        ],
      },
      {
        title: 'Data Protection & Third-Party Services',
        content: [
          'We implement robust security protocols to protect your personal data against unauthorized access, alteration, or disclosure. We may share necessary information with trusted third-party service providers (like payment processors and booking channel managers) who assist us in operating our hotel.',
          'These third parties are contractually obligated to keep your information confidential and secure.',
        ],
      },
      {
        title: 'User Rights & Data Retention',
        content: [
          'You have the right to request access, correction, or deletion of your personal data, subject to legal and operational requirements. We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy and to comply with legal obligations (such as tax and accounting laws).',
        ],
      },
      {
        title: 'Children\'s Privacy',
        content: [
          'Our website and services are not directed at individuals under the age of 18. We do not knowingly collect personal information from children without verified parental consent.',
        ],
      },
      {
        title: 'Contact Information',
        content: [
          'If you have any questions or concerns about our Privacy Policy or data practices, please contact us at:',
          'Hotel Goyal Palace',
          'Near Agra Cantt Railway Station, Sultan Pura, Idgah Colony, Agra, Uttar Pradesh 282001',
          'Phone: +91 78955 44395',
        ],
      },
    ],
  },
  {
    id: 'terms-and-conditions',
    title: 'Terms & Conditions',
    lastUpdated: 'May 1, 2026',
    sections: [
      {
        title: 'Website Usage Rules & User Responsibilities',
        content: [
          'By accessing and using the Hotel Goyal Palace website, you agree to comply with these terms. You are responsible for maintaining the confidentiality of any account information and for all activities under your account.',
          'You agree not to use our website for any unlawful purpose, to make false or fraudulent reservations, or to disrupt the website\'s operation.',
        ],
      },
      {
        title: 'Booking Conditions & Hotel Responsibilities',
        content: [
          'All bookings made through our website are subject to availability and confirmation. We reserve the right to refuse or cancel bookings in cases of suspected fraud or pricing errors.',
          'Hotel Goyal Palace commits to providing the booked room type and services as advertised, though variations may occur due to maintenance, unforeseen circumstances, or force majeure events.',
        ],
      },
      {
        title: 'Intellectual Property',
        content: [
          'All content on this website, including text, graphics, logos, images, and software, is the property of Hotel Goyal Palace or its content suppliers and is protected by Indian and international copyright laws.',
        ],
      },
      {
        title: 'Limitation of Liability',
        content: [
          'Hotel Goyal Palace shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our website or services. In all cases, our maximum liability is limited to the amount paid for your reservation.',
        ],
      },
      {
        title: 'Service Modifications & Governing Law',
        content: [
          'We reserve the right to modify, suspend, or discontinue any aspect of our website or services without prior notice.',
          'These terms are governed by the laws of India. Any disputes arising from these terms or your stay shall be subject to the exclusive jurisdiction of the courts in Agra, Uttar Pradesh.',
        ],
      },
    ],
  },
  {
    id: 'cancellation-and-refund-policy',
    title: 'Cancellation & Refund Policy',
    lastUpdated: 'May 1, 2026',
    sections: [
      {
        title: 'Reservation Cancellation Rules',
        content: [
          'Guests may cancel their reservations free of charge up to 48 hours before the scheduled check-in time (2:00 PM IST) for standard rate bookings. Cancellations made within 48 hours of check-in will incur a charge equivalent to the first night\'s stay plus appropriate taxes.',
        ],
      },
      {
        title: 'Refund Eligibility & Processing Timelines',
        content: [
          'Eligible refunds for cancellations made within the free cancellation window will be processed back to the original method of payment. Please allow 7 to 10 business days for the refund to reflect in your account, depending on your bank or credit card provider.',
        ],
      },
      {
        title: 'Non-Refundable Bookings & Peak Season Rules',
        content: [
          'Some promotional rates, early bird offers, and group bookings are strictly non-refundable and cannot be amended or cancelled once confirmed.',
          'During peak tourist seasons (such as October to March), special festivals, and public holidays, a stricter cancellation policy of 7 days prior to arrival may apply. This will be clearly stated during the booking process.',
        ],
      },
      {
        title: 'Emergency Cancellations',
        content: [
          'In cases of documented medical emergencies or severe, unavoidable travel disruptions, management may, at its sole discretion, review the cancellation fee or offer a credit voucher for a future stay.',
        ],
      },
    ],
  },
  {
    id: 'booking-policy',
    title: 'Booking Policy',
    lastUpdated: 'May 1, 2026',
    sections: [
      {
        title: 'Reservation & Payment Requirements',
        content: [
          'A valid credit card or advance UPI/Bank Transfer payment is required to guarantee your reservation. We authorize the card for the first night\'s stay prior to arrival to confirm the booking.',
          'For pay-at-hotel bookings, arrival is expected by 6:00 PM local time. If arriving later, please inform the hotel in advance to prevent the release of your room.',
        ],
      },
      {
        title: 'Guest Verification & Check-in Requirements',
        content: [
          'As per Government of India regulations, all guests (including accompanying guests) MUST present a valid original photo ID upon check-in. Accepted IDs for Indian citizens include Aadhar Card, Driver\'s License, or Voter ID. Foreign nationals must present a valid Passport and Visa.',
          'Local IDs may be subject to additional verification or entry refusal at management\'s discretion.',
        ],
      },
      {
        title: 'Occupancy Rules & Group Bookings',
        content: [
          'Standard room rates are based on double occupancy. Additional adult guests are subject to an extra bed charge. Maximum room occupancy limits must be strictly adhered to for safety reasons.',
          'Reservations for more than 5 rooms are considered group bookings and may be subject to different deposit and cancellation terms.',
        ],
      },
      {
        title: 'Room Allocation & Special Requests',
        content: [
          'While we try to honor all special requests (e.g., specific floors, adjoining rooms), they are subject to availability upon arrival, and cannot be guaranteed. Room allocation is at the sole discretion of the hotel.',
        ],
      },
    ],
  },
  {
    id: 'check-in-and-check-out-policy',
    title: 'Check-In & Check-Out Policy',
    lastUpdated: 'May 1, 2026',
    sections: [
      {
        title: 'Standard Timing',
        content: [
          'Standard Check-in Time: 2:00 PM (14:00 hrs)',
          'Standard Check-out Time: 11:00 AM (11:00 hrs)',
        ],
      },
      {
        title: 'Early Check-in Conditions',
        content: [
          'Early check-in is strictly subject to room availability upon arrival. To guarantee early access to your room before 9:00 AM, the room must be booked from the previous night.',
        ],
      },
      {
        title: 'Late Check-out Conditions',
        content: [
          'Late check-outs are subject to availability on the day of departure. Check-outs extended until 6:00 PM may incur a half-day charge, and an extension beyond 6:00 PM will incur a full night\'s charge.',
        ],
      },
      {
        title: 'Guest Registration & Identity Verification',
        content: [
          'Completing the guest registration card and providing the required original government IDs is mandatory for all staying guests before room keys are handed over.',
        ],
      },
    ],
  },
  {
    id: 'payment-policy',
    title: 'Payment Policy',
    lastUpdated: 'May 1, 2026',
    sections: [
      {
        title: 'Accepted Payment Methods',
        content: [
          'We accept Cash (INR), major Credit and Debit Cards (Visa, MasterCard, RuPay), UPI (GPay, PhonePe, Paytm), and Bank Transfers. We do not accept personal cheques.',
        ],
      },
      {
        title: 'Advance Payment & Deposits',
        content: [
          'A deposit may be required during peak periods, festivals, or for group bookings. A mandatory security deposit in cash or via credit card authorization may be requested upon check-in to cover incidental charges.',
        ],
      },
      {
        title: 'Outstanding Balances & Taxes',
        content: [
          'All outstanding balances must be settled in full upon check-out prior to departure.',
          'Applicable Goods and Services Tax (GST) will be added to the room tariff and services as per the current Government of India tax slabs.',
        ],
      },
    ],
  },
  {
    id: 'guest-conduct-policy',
    title: 'Guest Conduct Policy',
    lastUpdated: 'May 1, 2026',
    sections: [
      {
        title: 'Respectful Behavior & Noise Restrictions',
        content: [
          'We expect all guests to behave in a respectful manner towards staff and other guests. Quiet hours are observed between 10:00 PM and 7:00 AM. Loud music, parties in rooms, and excessive noise in corridors are strictly prohibited.',
        ],
      },
      {
        title: 'Property Damage & Illegal Activity',
        content: [
          'Guests are responsible for any damage caused to hotel property, furnishings, or equipment during their stay. The cost of repair or replacement will be charged to the guest\'s account.',
          'Any illegal activities, including the use of illicit substances, gambling, or unregistered guests overnight, will result in immediate eviction without a refund and law enforcement intervention.',
        ],
      },
      {
        title: 'Visitor Policy',
        content: [
          'Outside visitors are allowed in public areas or the lobby. For security reasons, visitors are not permitted in guest rooms after 8:00 PM unless formally registered at the reception.',
        ],
      },
    ],
  },
  {
    id: 'child-and-family-policy',
    title: 'Child & Family Policy',
    lastUpdated: 'May 1, 2026',
    sections: [
      {
        title: 'Child Accommodation & Age Requirements',
        content: [
          'Up to two children under 6 years of age can stay free of charge when sharing the existing bedding with parents.',
          'Children aged 6 to 12 years may incur a nominal supplementary charge. Children above 12 years are considered adults for occupancy purposes.',
        ],
      },
      {
        title: 'Extra Bedding',
        content: [
          'Extra beds or mattresses are available upon request for an additional fee and must be confirmed prior to arrival due to limited inventory.',
        ],
      },
      {
        title: 'Child Safety',
        content: [
          'Parents or guardians must accompany and supervise children at all times within the hotel premises. The hotel takes no responsibility for unsupervised children.',
        ],
      },
    ],
  },
  {
    id: 'smoking-and-alcohol-policy',
    title: 'Smoking & Alcohol Policy',
    lastUpdated: 'May 1, 2026',
    sections: [
      {
        title: 'Smoking Restrictions & Designated Areas',
        content: [
          'Hotel Goyal Palace is a non-smoking property. Smoking in rooms, corridors, and enclosed public areas is strictly prohibited as per law.',
          'Dedicated smoking zones are available exterior to the main building. Guests found smoking in their rooms will be subject to a deep cleaning fee of INR 3,000.',
        ],
      },
      {
        title: 'Alcohol Consumption Rules',
        content: [
          'Alcohol consumption is permitted only within the privacy of your guest room. Consumption of alcohol in common areas, lobbies, or corridors is not allowed. Guests are expected to drink responsibly.',
        ],
      },
    ],
  },
  {
    id: 'safety-and-security-policy',
    title: 'Safety & Security Policy',
    lastUpdated: 'May 1, 2026',
    sections: [
      {
        title: 'CCTV Monitoring & Security Measures',
        content: [
          'For the safety and security of all guests and staff, internal public areas, corridors, and external premises are monitored by 24/7 CCTV cameras.',
          'Access to the hotel at night is restricted and managed by our on-site security personnel.',
        ],
      },
      {
        title: 'Fire Safety & Emergencies',
        content: [
          'The hotel is equipped with fire alarms, extinguishers, and clearly marked emergency exits. Guests are requested to familiarize themselves with the evacuation procedures posted behind their room doors.',
        ],
      },
    ],
  },
  {
    id: 'website-disclaimer',
    title: 'Website Disclaimer',
    lastUpdated: 'May 1, 2026',
    sections: [
      {
        title: 'Information Accuracy',
        content: [
          'While we endeavor to keep the information on our website accurate and up to date, Hotel Goyal Palace makes no warranties or representations of any kind regarding the completeness, accuracy, or suitability of the information, products, services, or related graphics contained on the website.',
        ],
      },
      {
        title: 'Pricing & Technical Errors',
        content: [
          'Prices and availability are subject to change without notice. In the event of an obvious technical error demonstrating a visibly incorrect price, the hotel reserves the right to cancel any affected reservations and refund the amount paid.',
        ],
      },
      {
        title: 'Third-Party Links',
        content: [
          'Our website may contain links to external third-party websites (such as tourist attractions). These are provided for convenience, and we have no control over the content and availability of those sites.',
        ],
      },
    ],
  },
  {
    id: 'accessibility-statement',
    title: 'Accessibility Statement',
    lastUpdated: 'May 1, 2026',
    sections: [
      {
        title: 'Accessibility Commitment',
        content: [
          'Hotel Goyal Palace is committed to providing a welcoming and accessible environment for all our guests, including those with disabilities.',
          'We continuously work to improve the digital accessibility of our website to adhere to WCAG (Web Content Accessibility Guidelines) standards.',
        ],
      },
      {
        title: 'On-Property Accessibility & Assistance',
        content: [
          'We strive to make our physical property as accessible as possible. For specific requirements regarding wheelchair access, elevator availability, or accessible room features, please contact our team prior to booking.',
          'If you experience any difficulty accessing our website or need assistance, please call us at +91 78955 44395.',
        ],
      },
    ],
  },
  {
    id: 'cookie-policy',
    title: 'Cookie Policy',
    lastUpdated: 'May 1, 2026',
    sections: [
      {
        title: 'What Are Cookies?',
        content: [
          'Cookies are small text files placed on your device when you visit our website. They help the website remember your actions and preferences over a period of time.',
        ],
      },
      {
        title: 'Cookie Types & Usage Purposes',
        content: [
          'We use Functional Cookies to remember your language or booking dates, and Analytics Cookies to track website traffic patterns and user behavior, helping us optimize the website layout and content.',
        ],
      },
      {
        title: 'Cookie Management & Consent',
        content: [
          'By continuing to browse our website, you consent to our use of cookies. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website seamlessly.',
        ],
      },
    ],
  },
  {
    id: 'data-protection-policy',
    title: 'Data Protection Policy',
    lastUpdated: 'May 1, 2026',
    sections: [
      {
        title: 'Data Collection & Processing',
        content: [
          'We process data under lawful bases including the execution of a hospitality contract, compliance with legal obligations, and our legitimate business interests.',
        ],
      },
      {
        title: 'Access Controls & Security Practices',
        content: [
          'Data is stored on secure, encrypted servers. Access to sensitive personal and payment data is strictly restricted to authorized staff on a need-to-know basis.',
        ],
      },
      {
        title: 'Data Deletion Rights',
        content: [
          'Guests can submit a request to the management for data deletion. We will anonymize or delete your records within 30 days, except where data must be retained for legal, taxation, or auditing purposes under Indian Law.',
        ],
      },
    ],
  },
  {
    id: 'force-majeure-policy',
    title: 'Force Majeure Policy',
    lastUpdated: 'May 1, 2026',
    sections: [
      {
        title: 'Unforeseen Circumstances',
        content: [
          'Hotel Goyal Palace shall not be held liable for failure to provide services or execute a reservation when such failure is due to circumstances beyond our reasonable control.',
          'These include acts of God, natural disasters, severe weather conditions, government restrictions, pandemics, epidemics, civil unrest, war, terrorism, strikes, or major utility/network outages.',
        ],
      },
      {
        title: 'Obligations During Disruption',
        content: [
          'In the event of a Force Majeure, the hotel will contact affected guests as soon as practically possible. We will offer alternative dates as a priority or a credit voucher. Cash refunds in such events are strictly at the discretion of the management.',
        ],
      },
    ],
  },
  {
    id: 'lost-and-found-policy',
    title: 'Lost & Found Policy',
    lastUpdated: 'May 1, 2026',
    sections: [
      {
        title: 'Reporting & Storage',
        content: [
          'Any items left behind by guests will be logged by our housekeeping team and handed over to security/management.',
          'Non-valuable items are stored for a maximum of 30 days. High-value items (electronics, jewelry, cash) are stored in a safe for up to 90 days.',
        ],
      },
      {
        title: 'Claim Process & Shipping',
        content: [
          'Guests discovering a lost item must contact the hotel immediately. We require proof of ownership and a detailed description of the item.',
          'If shipping is required, it must be arranged and paid for by the guest. The hotel takes no liability for items lost or damaged during transit.',
        ],
      },
    ],
  },
  {
    id: 'pet-policy',
    title: 'Pet Policy',
    lastUpdated: 'May 1, 2026',
    sections: [
      {
        title: 'Pet Restrictions',
        content: [
          'To ensure the comfort and safety of all our guests, Hotel Goyal Palace strictly does not allow pets on the premises.',
        ],
      },
      {
        title: 'Service Animals',
        content: [
          'Certified service animals assisting guests with disabilities are permitted. Please inform us in advance so we can ensure proper arrangements are in place.',
        ],
      },
    ],
  },
  {
    id: 'visitor-policy',
    title: 'Visitor Policy',
    lastUpdated: 'May 1, 2026',
    sections: [
      {
        title: 'Registration & Hours',
        content: [
          'Visitors to staying guests are welcome in the hotel lobby and restaurant areas.',
          'Visitors are allowed in guest rooms between 10:00 AM and 8:00 PM only, strictly after depositing a valid government photo ID at the reception.',
        ],
      },
      {
        title: 'Overnight Rules',
        content: [
          'Unregistered visitors are not permitted to stay overnight in guest rooms under any circumstances. If a visitor wishes to stay overnight, they must be registered formally as a guest and applicable extra occupancy charges will apply.',
        ],
      },
    ],
  },
  {
    id: 'complaint-resolution-policy',
    title: 'Complaint Resolution Policy',
    lastUpdated: 'May 1, 2026',
    sections: [
      {
        title: 'Our Commitment',
        content: [
          'We at Hotel Goyal Palace take guest satisfaction very seriously. If you encounter any issue during your stay, we encourage you to escalate it to the Front Desk Manager immediately so we can resolve it while you are on the property.',
        ],
      },
      {
        title: 'Investigation & Resolution Process',
        content: [
          'For post-departure complaints, please email our management. We aim to acknowledge all complaints within 48 hours and complete a full investigation within 7 business days, providing a detailed response and appropriate resolution.',
        ],
      },
    ],
  },
  {
    id: 'responsible-tourism-policy',
    title: 'Responsible Tourism Policy',
    lastUpdated: 'May 1, 2026',
    sections: [
      {
        title: 'Environmental Commitment & Sustainable Practices',
        content: [
          'We actively participate in energy conservation, water-saving measures, and waste reduction. We utilize LED lighting, energy-efficient appliances, and encourage guests to reuse towels and linens to reduce water consumption.',
        ],
      },
      {
        title: 'Community Support',
        content: [
          'Hotel Goyal Palace is committed to supporting the local Agra community by sourcing local produce where possible and providing fair employment opportunities to local residents.',
        ],
      },
    ],
  },
];
