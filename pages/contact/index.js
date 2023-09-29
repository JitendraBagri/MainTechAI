import { useState } from 'react'; // Import useState hook
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router'; // Import useRouter hook for navigation
import { fadeIn } from '../../variants';

const Contact = () => {
  const [notification, setNotification] = useState(null); // State for the notification message
  const router = useRouter(); // Initialize the router

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const subject = e.target.elements.subject.value;
    const message = e.target.elements.message.value;

    if (!name || !email || !subject || !message) {
      alert('Please fill in all required fields.'); // Show an alert for incomplete form
      return;
    }

    // Simulate sending the message (you can replace this with your actual API call)
    setTimeout(() => {
      setNotification('Your message has been sent. We will contact you soon. Thank you!');
      document.getElementById('contactForm').reset(); // Reset the form after submission

      // Show a confirmation popup
      const confirmation = window.confirm('Your message has been sent. We will contact you soon. Thank you!');

      if (confirmation) {
        // The user clicked "OK" in the confirmation popup
        // You can add any additional actions here if needed

        // Automatically navigate to the home page after 2 seconds
        setTimeout(() => {
          router.push('/'); // Replace '/' with the actual URL of your home page
        }, 2000); // 2000 milliseconds = 2 seconds
      }
    }, 1000); // 1000 milliseconds = 1 second
  };

  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'
          >
            Let's <span className='text-accent'>connect.</span>
          </motion.h2>
          <motion.form
            id='contactForm' // Add an id to the form for easy reset
            onSubmit={handleSubmit} // Call handleSubmit when the form is submitted
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
          >
            <div className='flex flex-col md:flex-row gap-6'>
              <input type='text' placeholder='Name' name='name' className='input' required />
              <input type='email' placeholder='Email' name='email' className='input' required />
            </div>
            <input type='text' placeholder='Subject' name='subject' className='input' required />
            <textarea placeholder='Message' name='message' className='textarea' required></textarea>
            <button
              className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
              type='submit' // Set button type to submit
            >
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                Let's talk
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
          </motion.form>

          {/* Notification */}
          {notification && (
            <div className='text-green-500 mt-4'>{notification}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
