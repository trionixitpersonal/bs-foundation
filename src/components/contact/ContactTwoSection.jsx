// Contact information data
const contactInfo = [
  {
    id: 1,
    icon: 'icon-call',
    title: 'Contact Phone',
    content: '+61 402 384 501',
    link: 'tel:+61402384501',
    isLink: true,
  },
  {
    id: 2,
    icon: 'icon-pin',
    title: 'Contact Mail',
    content: 'office@bappeshakila.org',
    link: 'mailto:office@bappeshakila.org',
    isLink: true,
  },
  {
    id: 3,
    icon: 'icon-clock',
    title: 'Office Time',
    content: 'Office 10am - 17pm',
    isLink: false,
  },
  {
    id: 4,
    icon: 'icon-mail',
    title: 'Office Location',
    content: 'Level 3, 41-45 Rickard Road, Sydney, NSW, Australia, 2200',
    isLink: false,
  },
];

function ContactTwoSection() {
  return (
    <section className="contact-two">
      <div className="container">
        <div className="row">
          {contactInfo.map((info) => (
            <div
              key={info.id}
              className="col-xl-3 col-lg-6 col-md-6"
            >
              <div className="contact-two__single">
                <div className="contact-two__icon">
                  <span className={info.icon}></span>
                </div>
                <div className="contact-two__content">
                  <h4>{info.title}</h4>
                  <p>
                    {info.isLink ? (
                      <a href={info.link}>{info.content}</a>
                    ) : (
                      info.content
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactTwoSection;
