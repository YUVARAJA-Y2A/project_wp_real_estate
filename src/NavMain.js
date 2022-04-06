// import "bootstrap/dist/css/bootstrap.min.css";
import "./navmain.css";
function NavMain() {
  return (
    <div>
      <div class="nav-2">
        <div class="title-body">
          <div class="title-part1">wp</div>
          <div class="title-part2">/</div>
          <div class="title-part3">Real Estate</div>
        </div>
        <div class="nav-bar">
          <a class="home-nav" href="#">
            HOME
          </a>
          <a class="about-nav" href="#">
            ABOUT
          </a>
          <a class="agents-nav" href="#">
            AGENTS
          </a>
          <a class="properties-nav" href="#">
            PROPERTIES
          </a>
          <a class="blog-nav" href="#">
            BLOG
          </a>
          <a class="contact-nav" href="#">
            CONTACT
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavMain;
