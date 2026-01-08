import { useEffect, useRef } from 'react';

function ContactPageSection() {
  const formRef = useRef(null);

  useEffect(() => {
    // Initialize jQuery validation for contact form - matches template script.js behavior
    const initializeValidation = () => {
      if (window.$ && formRef.current && window.$.fn.validate) {
        const $form = window.$(formRef.current);
        
        if ($form.length) {
          // Check if validation already exists and destroy it
          if ($form.data('validator')) {
            $form.validate().destroy();
          }
          
          // Initialize validation exactly as in template script.js (lines 710-745)
          $form.validate({
            rules: {
              name: {
                required: true,
              },
              email: {
                required: true,
                email: true,
              },
              message: {
                required: true,
              },
            },
            submitHandler: function (form) {
              // Handle form submission - matches template script.js behavior
              if (window.$) {
                window.$.post(
                  window.$(form).attr('action'),
                  window.$(form).serialize(),
                  function (response) {
                    window.$(form).parent().find('.result').append(response);
                    window.$(form).find('input[type="text"]').val('');
                    window.$(form).find('input[type="email"]').val('');
                    window.$(form).find('textarea').val('');
                  }
                );
              }
              return false;
            },
          });
        }
      }
    };

    // Wait for jQuery and validation plugin to be ready
    if (window.$ && window.$.fn.validate) {
      // Small delay to ensure DOM is ready
      setTimeout(initializeValidation, 100);
    } else {
      const checkJQuery = setInterval(() => {
        if (window.$ && window.$.fn.validate) {
          clearInterval(checkJQuery);
          setTimeout(initializeValidation, 100);
        }
      }, 100);

      return () => clearInterval(checkJQuery);
    }
  }, []);

  return (
    <section className="contact-page">
      <div className="container">
        <div className="contact-page__inner">
          <h3 className="contact-page__title">Send Message</h3>
          <form
            ref={formRef}
            className="contact-form-validated contact-page__form"
            action="/assets/inc/sendemail.php"
            method="post"
            noValidate
          >
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="contact-page__input-box">
                  <h4 className="contact-page__input-title">Your Name</h4>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    required
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="contact-page__input-box">
                  <h4 className="contact-page__input-title">Your Mail</h4>
                  <input
                    type="email"
                    name="email"
                    placeholder="infoflex@info.com"
                    required
                  />
                </div>
              </div>
              <div className="col-xl-12">
                <div className="contact-page__input-box text-message-box">
                  <h4 className="contact-page__input-title">Message</h4>
                  <textarea
                    name="message"
                    placeholder="Write your message"
                  ></textarea>
                </div>
                <div className="contact-page__btn-box">
                  <button type="submit" className="contact-page__btn">
                    <span>Submit Now</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div className="result"></div>
        </div>
      </div>
    </section>
  );
}

export default ContactPageSection;
