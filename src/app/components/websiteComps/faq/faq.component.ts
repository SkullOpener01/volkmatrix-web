import { Component } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {FooterComponent} from "../footer/footer.component";
import {NgClass} from "@angular/common";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    NgClass,
    CommonModule,
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

  faqs = [
    {
      id :'faq1',
      question: 'What is VolkMatrix?',
      answer: 'VolkMatrix is a comprehensive communication platform designed to help businesses connect with their customers through multiple channels, including SMS, voice, WhatsApp, and email. Our platform simplifies the process of reaching out to your audience, whether you\'re sending bulk messages, automating voice calls, or managing customer interactions on WhatsApp.'
    },
    {id :'faq2',
      question: 'How can VolkMatrix help my business?',
      answer: 'VolkMatrix enhances your communication strategies by providing tools that allow you to send personalized messages, automate workflows, and track the performance of your campaigns. By leveraging multiple communication channels, you can reach your customers more effectively, increase engagement, and drive better results.'
    },
    {
      id :'faq3',
      question: 'What industries can benefit from VolkMatrix?',
      answer: 'VolkMatrix is versatile and can be used across various industries, including retail, healthcare, finance, education, and more. Whether you\'re a small business or a large enterprise, our platform can be tailored to meet your specific communication needs, ensuring you can effectively engage with your customers.'
    },
    {
      id :'faq4',
      question: 'How does the SMS messaging service work?',
      answer: 'Our SMS messaging service allows you to send text messages to your customers quickly and efficiently. You can send individual messages, schedule bulk campaigns, and personalize your texts based on customer data. Our platform also provides real-time analytics, so you can monitor the success of your SMS campaigns.'
    },
    {
      id :'faq5',
      question: 'What features does the voice communication service offer?',
      answer: 'The voice communication service includes automated voice calls, Interactive Voice Response (IVR) systems, and text-to-speech conversion. You can use these features for reminders, notifications, customer support, and more. The service allows you to schedule calls, track performance, and ensure your voice messages are delivered clearly and effectively.'
    },
    {
      id :'faq6',
      question: 'How secure is the WhatsApp Business integration?',
      answer: 'Security is a top priority at VolkMatrix. Our WhatsApp Business integration uses end-to-end encryption to ensure that all communications are secure and private. This means that only you and your customers can read the messages, providing peace of mind when conducting business through WhatsApp.'
    },
    {
      id :'faq7',
      question: 'Can I track the performance of my email campaigns?',
      answer: 'Yes! VolkMatrix provides detailed analytics for your email campaigns. You can track metrics such as open rates, click-through rates, and conversions. Our platform also offers advanced segmentation and targeting options, allowing you to optimize your campaigns and achieve better results.'
    },
    {
      id :'faq8',
      question: 'How do I get started with VolkMatrix?',
      answer: 'Getting started with VolkMatrix is simple. Sign up on our website to create an account, and you\'ll have immediate access to our platform. From there, you can explore the various services, set up your communication channels, and start engaging with your customers. If you need assistance, our support team is here to help you every step of the way.'
    },
    {
      id :'faq9',
      question: 'Do you offer support and training?',
      answer: 'Absolutely! We provide comprehensive support and training to ensure you get the most out of VolkMatrix. Our customer support team is available to answer any questions you may have, and we offer tutorials, webinars, and documentation to help you master our platform.'
    },
    {
      id :'faq10',
      question: 'Can VolkMatrix be integrated with other tools and platforms?',
      answer: 'Yes, VolkMatrix is designed to integrate seamlessly with other tools and platforms you may already be using. Whether you need to connect with your CRM, marketing automation tools, or any other system, our platform offers flexible integration options to ensure a smooth workflow.'
    }
  ];

  showAll: boolean = false; // Track if all FAQs should be shown

  // Method to toggle the visibility of all FAQs
  toggleShowAll() {
    this.showAll = !this.showAll;
  }

}
