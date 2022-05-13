import { GoMail } from "react-icons/go";

import { FiPhoneCall } from "react-icons/fi";
import "./navhead.css";
import {
  TiSocialGooglePlus,
  TiSocialPinterest,
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialDribbble,
} from "react-icons/ti";
function NavHead() {
  return (
    <div>
      <div class="nav-1">
        <div class="inner-nav-1">
          <GoMail size={20} className="icon-mail" />
          <span class="mail-id">sample@sample.com</span>
          <FiPhoneCall />
          <span class="phone-no">00 1234 5678</span>
        </div>
        <div class="inner-nav-2">
          <TiSocialGooglePlus class="icon-gplus" size={20} />
          <TiSocialPinterest class="icon-pinterest" size={20} />
          <TiSocialTwitter class="icon-twitter" size={20} />
          <TiSocialFacebook class="icon-facebook" size={20} />
          <TiSocialDribbble class="icon-socialdribbble" size={31} />
        </div>
      </div>
    </div>
  );
}

export default NavHead;
