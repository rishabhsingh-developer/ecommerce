import "./services.css";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineSecurity } from "react-icons/md";
import { MdOutlineAttachMoney } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
export default function Services() {
  return (
    <div className="services">
      <div className="box1">
        <CiDeliveryTruck id="delivery-icon" />
        <p>Super Fast and Free delivery</p>
      </div>
      <div className="box2">
        <div className="box2-1">
          <MdOutlineSecurity id="delivery-icon" />
          <p>Non-contact Shipping</p>
        </div>
        <div className="box2-2">
          <MdOutlineAttachMoney id="delivery-icon" />
          <p>Money-back Guaranteed </p>
        </div>
      </div>
      <div className="box3">
        <RiSecurePaymentLine id="delivery-icon" />
        <p>Super Secure Payment System</p>
      </div>
    </div>
  );
}
