import Iframe from 'react-iframe';
function Mapa() {
    return (
      <div>
        <Iframe
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31014.990746996617!2d-89.26583498410662!3d13.665434200837222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f632e28d1ad5fbf%3A0x9cc522875d57bfd8!2sAntiguo%20Cuscatl%C3%A1n!5e0!3m2!1ses!2ssv!4v1696577447117!5m2!1ses!2ssv"
          width="500"
          height="500"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
  }
  
  export default Mapa;