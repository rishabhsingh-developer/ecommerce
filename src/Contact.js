import "./App.css";
export default function Contact() {
  return (
    <div className="contact">
      <div className="map">
        <h1>Contact US</h1>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30161.165568865654!2d72.80894425496531!3d19.101263254918024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9bf95d4ba07%3A0x35047c9c36b6cea1!2sJuhu%2C%20Mumbai%2C%20Maharashtra%20400049!5e0!3m2!1sen!2sin!4v1718107991099!5m2!1sen!2sin"
          width="900"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <form action="https://formspree.io/f/xeqyyaro" method="POST">
        <input
          type="text"
          placeholder="name"
          name="username"
          required
          autoCapitalize="off"
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          required
          autoCapitalize="off"
        />
        <textarea
          type="message"
          placeholder="enter message "
          name="message"
          autoCapitalize="off"
        />
        <input type="submit" value="Send" id="submit" />
      </form>
    </div>
  );
}
